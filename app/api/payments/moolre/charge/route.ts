import { NextResponse } from 'next/server'
import { findUserById, recordTransaction, getMinDeposit } from '@/lib/wallet'
import { chargeMoolreMobileMoney, networkToChannel, initialiseMoolreTransaction } from '@/lib/moolre'
import { normalizeGhPhone } from '@/lib/user-session'
import { originFromRequest, placeholderEmail } from '@/lib/http'

export const dynamic = 'force-dynamic'
const NETWORKS = new Set(['mtn', 'vod', 'atl'])

export async function POST(request: Request) {
  let body: { userId?: string; amount?: number; phone?: string; provider?: string; network?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  const network = (body.provider ?? body.network ?? '').trim().toLowerCase()
  const payer = normalizeGhPhone(body.phone ?? '')
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })
  if (!NETWORKS.has(network)) return NextResponse.json({ error: 'invalid network' }, { status: 400 })
  if (!payer) return NextResponse.json({ error: 'enter a valid mobile-money number' }, { status: 400 })

  const user = await findUserById(userId)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  const min = getMinDeposit()
  if (amount < min) return NextResponse.json({ error: `minimum deposit is GHS ${min.toFixed(2)}` }, { status: 400 })

  const reference = `TR-DEP-${userId.slice(0, 8)}-${Date.now()}`
  try {
    await recordTransaction({ userId, reference, amount, type: 'deposit', status: 'pending', provider: 'moolre', metadata: { channel: 'momo', network, payer } })
  } catch (e) { console.error('[moolre/charge] ledger write failed:', e) }

  // Try the direct charge (in-app prompt). If Moolre can't send a prompt
  // (TP14 = one-time merchant verification, or any non-success), fall back to
  // the hosted checkout so the payment still completes — same reference, so
  // the webhook/callback credits the wallet either way.
  let charge: { status: number; code: string; message: string } | null = null
  try {
    charge = await chargeMoolreMobileMoney({ amount, reference, payer, channel: networkToChannel(network) })
  } catch (e) {
    console.error('[moolre/charge] direct charge error:', e)
  }

  if (charge && charge.status === 1 && charge.code !== 'TP14') {
    return NextResponse.json({ reference, status: 'pending', displayText: charge.message || 'Approve the prompt on your phone.' }, { status: 201 })
  }

  try {
    const callbackUrl = `${originFromRequest(request)}/api/payments/moolre/callback?returnPath=${encodeURIComponent('/me')}`
    const init = await initialiseMoolreTransaction({ amount, reference, email: placeholderEmail(userId), callbackUrl })
    return NextResponse.json({ reference, fallbackUrl: init.authorizationUrl, message: charge?.message ?? null }, { status: 201 })
  } catch (e) {
    console.error('[moolre/charge] fallback init failed:', e)
    return NextResponse.json({ error: charge?.message || (e instanceof Error ? e.message : 'charge failed') }, { status: 502 })
  }
}

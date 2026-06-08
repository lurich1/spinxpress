import { NextResponse } from 'next/server'
import { findUserById, recordTransaction, getMinDeposit } from '@/lib/wallet'
import { chargeMobileMoney, type MobileMoneyProvider } from '@/lib/paystack'
import { placeholderEmail } from '@/lib/http'

export const dynamic = 'force-dynamic'
const PROVIDERS = new Set<MobileMoneyProvider>(['mtn', 'vod', 'atl'])

export async function POST(request: Request) {
  let body: { userId?: string; amount?: number; phone?: string; provider?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  const phone = (body.phone ?? '').trim()
  const provider = (body.provider ?? '') as MobileMoneyProvider
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })
  if (!PROVIDERS.has(provider)) return NextResponse.json({ error: 'invalid provider' }, { status: 400 })
  if (!phone) return NextResponse.json({ error: 'phone required' }, { status: 400 })

  const user = await findUserById(userId)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  const min = getMinDeposit()
  if (amount < min) return NextResponse.json({ error: `minimum deposit is GHS ${min.toFixed(2)}` }, { status: 400 })

  const reference = `TR-MOMO-${userId.slice(0, 8)}-${Date.now()}`
  try {
    await recordTransaction({ userId, reference, amount, type: 'deposit', status: 'pending', provider: 'paystack', metadata: { channel: 'momo', provider, phone } })
  } catch (e) { console.error('[momo/start] ledger write failed:', e) }

  try {
    const charge = await chargeMobileMoney({ email: placeholderEmail(userId), amount, reference, phone, provider, metadata: { userId } })
    return NextResponse.json({ reference: charge.reference, status: charge.status, displayText: charge.display_text ?? charge.message ?? null }, { status: 201 })
  } catch (e) {
    console.error('[momo/start] charge failed:', e)
    return NextResponse.json({ error: e instanceof Error ? e.message : 'charge failed' }, { status: 502 })
  }
}

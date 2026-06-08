import { NextResponse } from 'next/server'
import { findUserById, recordTransaction, getMinDeposit } from '@/lib/wallet'
import { initialiseMoolreTransaction } from '@/lib/moolre'
import { originFromRequest, sanitizeReturnPath, placeholderEmail } from '@/lib/http'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { userId?: string; amount?: number; returnPath?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  const returnPath = sanitizeReturnPath(body.returnPath)
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })

  const user = await findUserById(userId)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  const min = getMinDeposit()
  if (amount < min) return NextResponse.json({ error: `minimum deposit is GHS ${min.toFixed(2)}` }, { status: 400 })

  const reference = `TR-DEP-${userId.slice(0, 8)}-${Date.now()}`
  const callbackUrl = `${originFromRequest(request)}/api/payments/moolre/callback?returnPath=${encodeURIComponent(returnPath)}`

  try {
    await recordTransaction({ userId, reference, amount, type: 'deposit', status: 'pending', provider: 'moolre' })
  } catch (e) { console.error('[moolre/start] ledger write failed:', e) }

  try {
    const init = await initialiseMoolreTransaction({ amount, reference, email: placeholderEmail(userId), callbackUrl })
    return NextResponse.json({ url: init.authorizationUrl, reference: init.reference }, { status: 201 })
  } catch (e) {
    console.error('[moolre/start] init failed:', e)
    return NextResponse.json({ error: e instanceof Error ? e.message : 'moolre init failed' }, { status: 502 })
  }
}

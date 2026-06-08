import { NextResponse } from 'next/server'
import { findUserById, recordTransaction, getMinDeposit } from '@/lib/wallet'
import { getPaystackPublicKey, initialiseTransaction, toMinorUnits } from '@/lib/paystack'
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
  const callbackUrl = `${originFromRequest(request)}/api/payments/paystack/callback?returnPath=${encodeURIComponent(returnPath)}`

  try {
    await recordTransaction({ userId, reference, amount, type: 'deposit', status: 'pending', provider: 'paystack' })
  } catch (e) { console.error('[paystack/start] ledger write failed:', e) }

  try {
    const init = await initialiseTransaction({
      email: placeholderEmail(userId), amount, reference, callbackUrl, metadata: { userId, userName: user.name },
    })
    return NextResponse.json({
      url: init.authorization_url, reference: init.reference,
      publicKey: getPaystackPublicKey(), amountMinor: toMinorUnits(amount), currency: 'GHS', email: placeholderEmail(userId),
    }, { status: 201 })
  } catch (e) {
    console.error('[paystack/start] init failed:', e)
    return NextResponse.json({ error: e instanceof Error ? e.message : 'paystack init failed' }, { status: 502 })
  }
}

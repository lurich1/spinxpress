import { NextResponse } from 'next/server'
import { findUserById, recordWithdrawal, recordTransaction, getVerificationAmount, VERIFICATION_TARGET } from '@/lib/wallet'
import { normalizeGhPhone } from '@/lib/user-session'

export const dynamic = 'force-dynamic'

const NETWORKS = new Set(['mtn', 'vod', 'atl'])
const PROCESSING = 'Your withdrawal request has been received and is being processed. We will notify you shortly.'

export async function POST(request: Request) {
  let body: { userId?: string; amount?: number; network?: string; phone?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  const network = (body.network ?? '').trim().toLowerCase()
  const phone = normalizeGhPhone(body.phone ?? '')

  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })
  if (!NETWORKS.has(network)) return NextResponse.json({ error: 'pick a payout network (MTN, Telecel, AirtelTigo)' }, { status: 400 })
  if (!phone) return NextResponse.json({ error: 'enter a valid mobile-money number' }, { status: 400 })

  const user = await findUserById(userId)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })

  // Gate 1 — verification: need VERIFICATION_TARGET qualifying deposits.
  const step = user.verificationStep
  if (step < VERIFICATION_TARGET) {
    const remaining = VERIFICATION_TARGET - step
    const vAmt = getVerificationAmount()
    return NextResponse.json({
      error: `Account verification in progress (${step}/${VERIFICATION_TARGET}). Make ${remaining} more deposit${remaining === 1 ? '' : 's'} of at least ${user.currency} ${vAmt} to unlock withdrawals.`,
      verificationRequired: true, verificationStep: step, verificationTotal: VERIFICATION_TARGET, verificationAmount: vAmt,
    }, { status: 403 })
  }

  // Gate 2 — admin approval. Hold the request as pending until approved.
  if (!user.withdrawalApproved) {
    try {
      await recordTransaction({ userId, reference: `TR-WDR-${userId.slice(0, 8)}-${Date.now()}`, amount, type: 'withdrawal', status: 'pending', provider: 'manual', metadata: { network, phone } })
    } catch (e) { console.error('[withdraw] pending ledger write failed:', e) }
    return NextResponse.json({ message: PROCESSING, pending: true }, { status: 202 })
  }

  // Approved — pay out.
  const result = await recordWithdrawal(userId, +amount.toFixed(2))
  if ('error' in result) {
    if (result.error === 'not-found') return NextResponse.json({ error: 'user not found' }, { status: 404 })
    if (result.error === 'no-deposit') return NextResponse.json({ error: 'make a deposit before withdrawing' }, { status: 400 })
    return NextResponse.json({ error: 'insufficient funds' }, { status: 400 })
  }
  try {
    await recordTransaction({ userId, reference: `TR-WDR-${userId.slice(0, 8)}-${Date.now()}`, amount, type: 'withdrawal', status: 'success', provider: 'manual', metadata: { network, phone } })
  } catch (e) { console.error('[withdraw] ledger write failed:', e) }

  return NextResponse.json({ message: 'Withdrawal sent.', user: { id: result.user.id, balance: result.user.balance, totalWithdrawn: result.user.totalWithdrawn } }, { status: 201 })
}

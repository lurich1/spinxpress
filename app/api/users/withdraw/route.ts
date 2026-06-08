import { NextResponse } from 'next/server'
import { findUserById, recordWithdrawal, recordTransaction } from '@/lib/wallet'
import { normalizeGhPhone } from '@/lib/user-session'

export const dynamic = 'force-dynamic'

const NETWORKS = new Set(['mtn', 'vod', 'atl'])

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

  const result = await recordWithdrawal(userId, +amount.toFixed(2))
  if ('error' in result) {
    if (result.error === 'not-found') return NextResponse.json({ error: 'user not found' }, { status: 404 })
    if (result.error === 'no-deposit') return NextResponse.json({ error: 'make a deposit before withdrawing' }, { status: 400 })
    return NextResponse.json({ error: 'insufficient funds' }, { status: 400 })
  }

  try {
    await recordTransaction({
      userId, reference: `TR-WDR-${userId.slice(0, 8)}-${Date.now()}`,
      amount, type: 'withdrawal', status: 'pending', provider: 'manual',
      metadata: { network, phone },
    })
  } catch (e) { console.error('[withdraw] ledger write failed:', e) }

  return NextResponse.json({
    message: 'Withdrawal request received and is being processed.',
    user: { id: result.user.id, balance: result.user.balance, totalWithdrawn: result.user.totalWithdrawn },
  }, { status: 201 })
}

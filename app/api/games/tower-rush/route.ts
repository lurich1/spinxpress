import { NextResponse } from 'next/server'
import { debitBalance, creditBalance, recordTransaction } from '@/lib/wallet'

export const dynamic = 'force-dynamic'

// Demo-grade wallet hook for the client-physics game: stake debits the bet,
// settle credits the cashout. (Outcomes are decided client-side here — fine for
// a play-money demo; a real deployment would settle server-authoritatively.)
export async function POST(request: Request) {
  let body: { action?: string; userId?: string; amount?: number; coeff?: number }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const action = body.action
  const userId = (body.userId ?? '').trim()
  const amount = +Number(body.amount).toFixed(2)
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })

  if (action === 'stake') {
    const res = await debitBalance(userId, amount)
    if ('error' in res) {
      const status = res.error === 'not-found' ? 404 : 400
      return NextResponse.json({ error: res.error === 'insufficient-funds' ? 'insufficient balance' : 'user not found' }, { status })
    }
    recordTransaction({ userId, reference: `TR-BET-${userId.slice(0, 8)}-${Date.now()}`, amount, type: 'bet', status: 'success', provider: 'game' }).catch(() => {})
    return NextResponse.json({ balance: res.user.balance })
  }

  if (action === 'settle') {
    const user = await creditBalance(userId, amount)
    if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
    recordTransaction({ userId, reference: `TR-WIN-${userId.slice(0, 8)}-${Date.now()}`, amount, type: 'win', status: 'success', provider: 'game', metadata: { coeff: body.coeff } }).catch(() => {})
    return NextResponse.json({ balance: user.balance })
  }

  return NextResponse.json({ error: 'unknown action' }, { status: 400 })
}

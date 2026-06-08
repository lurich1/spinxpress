import { NextResponse } from 'next/server'
import { adminAdjust } from '@/lib/wallet'
import { isAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  let body: { userId?: string; amount?: number }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }
  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount === 0) return NextResponse.json({ error: 'amount required' }, { status: 400 })
  const user = await adminAdjust(userId, amount)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  return NextResponse.json({ user: { id: user.id, balance: user.balance } })
}

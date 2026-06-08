import { NextResponse } from 'next/server'
import { setWithdrawalApproval } from '@/lib/wallet'
import { isAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  let body: { userId?: string; approved?: boolean }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }
  const userId = (body.userId ?? '').trim()
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  const user = await setWithdrawalApproval(userId, Boolean(body.approved))
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  return NextResponse.json({ user: { id: user.id, withdrawalApproved: user.withdrawalApproved } })
}

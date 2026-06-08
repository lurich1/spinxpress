import { NextResponse } from 'next/server'
import { payWithdrawal, rejectWithdrawal } from '@/lib/wallet'
import { isAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  let body: { reference?: string; action?: 'pay' | 'reject' }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }
  const reference = (body.reference ?? '').trim()
  if (!reference) return NextResponse.json({ error: 'reference required' }, { status: 400 })

  if (body.action === 'reject') {
    await rejectWithdrawal(reference)
    return NextResponse.json({ ok: true, status: 'rejected' })
  }
  const res = await payWithdrawal(reference)
  if ('error' in res) {
    const msg = res.error === 'insufficient-funds' ? 'user has insufficient balance' : res.error
    return NextResponse.json({ error: msg }, { status: 400 })
  }
  return NextResponse.json({ ok: true, status: 'paid', balance: res.user.balance })
}

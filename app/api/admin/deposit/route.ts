import { NextResponse } from 'next/server'
import { approveDeposit, rejectDeposit } from '@/lib/wallet'
import { isAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  let body: { reference?: string; action?: 'approve' | 'reject' }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }
  const reference = (body.reference ?? '').trim()
  if (!reference) return NextResponse.json({ error: 'reference required' }, { status: 400 })

  if (body.action === 'reject') {
    await rejectDeposit(reference)
    return NextResponse.json({ ok: true, status: 'rejected' })
  }
  const res = await approveDeposit(reference)
  if ('error' in res) return NextResponse.json({ error: res.error }, { status: 400 })
  return NextResponse.json({ ok: true, status: 'credited', balance: res.user.balance })
}

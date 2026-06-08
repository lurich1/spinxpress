import { NextResponse } from 'next/server'
import { findTransactionByReference, claimPendingDeposit, recordDeposit } from '@/lib/wallet'
import { moolreTransactionStatus } from '@/lib/moolre'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const reference = new URL(request.url).searchParams.get('reference') ?? ''
  if (!reference) return NextResponse.json({ ok: false, status: 'missing-reference' })

  const pending = await findTransactionByReference(reference)
  if (!pending) return NextResponse.json({ ok: false, status: 'unknown-reference' })
  if (pending.status === 'success') return NextResponse.json({ ok: true, status: 'success' })

  let st
  try { st = await moolreTransactionStatus(reference) }
  catch (e) { console.error('[moolre/status] failed:', e); return NextResponse.json({ ok: false, status: 'pending' }) }

  if (st.ok) {
    try {
      const claimed = await claimPendingDeposit(reference)
      if (!claimed) return NextResponse.json({ ok: true, status: 'success' })
      if (pending.userId) await recordDeposit(pending.userId, pending.amount)
    } catch (e) { console.error('[moolre/status] credit failed:', e); return NextResponse.json({ ok: false, status: 'credit-failed' }) }
    return NextResponse.json({ ok: true, status: 'success' })
  }
  return NextResponse.json({ ok: false, status: st.pending ? 'pending' : 'failed', message: st.message })
}

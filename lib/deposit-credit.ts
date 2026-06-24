// Verify-then-credit pipelines for deposits. Idempotent on `reference`:
// claimPendingDeposit atomically wins the race, then recordDeposit funds the
// wallet. Safe to re-run (callback + webhook) — only one caller credits.

import { claimPendingDeposit, findTransactionByReference, recordDeposit } from '@/lib/wallet'
import { verifyTransaction, fromMinorUnits } from '@/lib/paystack'

export type CreditStatus =
  | 'success' | 'already-credited' | 'missing-reference' | 'unknown-reference'
  | 'verify-failed' | 'amount-mismatch' | 'no-user' | 'credit-failed' | string

export interface CreditResult { status: CreditStatus; ok: boolean; reference: string }

export async function verifyAndCreditPaystack(reference: string): Promise<CreditResult> {
  if (!reference) return { status: 'missing-reference', ok: false, reference }
  const pending = await findTransactionByReference(reference)
  if (!pending) return { status: 'unknown-reference', ok: false, reference }
  if (pending.status === 'success') return { status: 'already-credited', ok: true, reference }

  let verified
  try { verified = await verifyTransaction(reference) }
  catch (e) { console.error('[paystack-credit] verify failed:', e); return { status: 'verify-failed', ok: false, reference } }

  if (verified.status !== 'success') return { status: verified.status, ok: false, reference }

  const major = fromMinorUnits(verified.amount)
  if (Math.abs(major - pending.amount) > 0.01) return { status: 'amount-mismatch', ok: false, reference }
  if (!pending.userId) return { status: 'no-user', ok: false, reference }

  try {
    const claimed = await claimPendingDeposit(reference)
    if (!claimed) return { status: 'already-credited', ok: true, reference }
    await recordDeposit(pending.userId, pending.amount)
  } catch (e) { console.error('[paystack-credit] credit failed:', e); return { status: 'credit-failed', ok: false, reference } }

  return { status: 'success', ok: true, reference }
}

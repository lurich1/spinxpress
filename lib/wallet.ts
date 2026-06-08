// Wallet data layer — users + transaction ledger, backed by Supabase
// (service-role). Simplified port of the reference platform's users-store +
// payments-store: GHS only, no sub-admins / commissions / multi-country.

import { supabaseServer } from '@/lib/supabase'

export interface AppUser {
  id: string
  name: string
  phone: string
  country: string
  currency: string
  kycId: string | null
  balance: number
  totalDeposited: number
  totalWithdrawn: number
  verificationStep: number
  withdrawalApproved: boolean
  firstDepositAt: string | null
  createdAt: string
}

export type TxType = 'deposit' | 'withdrawal' | 'bet' | 'win'
export type TxStatus = 'pending' | 'success' | 'failed'

export interface Transaction {
  id: string
  userId: string
  reference: string
  amount: number
  type: TxType
  status: TxStatus
  provider: string
  currency: string
  metadata: Record<string, unknown>
  createdAt: string
}

interface UserRow {
  id: string; name: string; phone: string; password_hash: string; country: string; currency: string; kyc_id: string | null
  balance: number; total_deposited: number; total_withdrawn: number
  verification_step: number; withdrawal_approved: boolean
  first_deposit_at: string | null; created_at: string
}

function rowToUser(r: UserRow): AppUser {
  return {
    id: r.id, name: r.name, phone: r.phone, country: r.country || 'GH', currency: r.currency || 'GHS', kycId: r.kyc_id ?? null,
    balance: Number(r.balance), totalDeposited: Number(r.total_deposited),
    totalWithdrawn: Number(r.total_withdrawn),
    verificationStep: Number(r.verification_step ?? 0), withdrawalApproved: Boolean(r.withdrawal_approved),
    firstDepositAt: r.first_deposit_at, createdAt: r.created_at,
  }
}

const COLS = 'id,name,phone,password_hash,country,currency,kyc_id,balance,total_deposited,total_withdrawn,verification_step,withdrawal_approved,first_deposit_at,created_at'

// Withdrawals unlock after this many qualifying deposits, then admin approval.
export const VERIFICATION_TARGET = Math.max(1, Number(process.env.VERIFICATION_TARGET) || 2)
export function getVerificationAmount(): number {
  const n = Number(process.env.VERIFICATION_AMOUNT)
  return Number.isFinite(n) && n > 0 ? n : 200
}

// ── users ────────────────────────────────────────────────────────────────────
export async function findUserByPhone(phone: string): Promise<(AppUser & { passwordHash: string }) | null> {
  const { data, error } = await supabaseServer().from('users').select(COLS).eq('phone', phone).maybeSingle()
  if (error) throw new Error(`users.findByPhone: ${error.message}`)
  return data ? { ...rowToUser(data as UserRow), passwordHash: (data as UserRow).password_hash } : null
}

export async function findUserById(id: string): Promise<AppUser | null> {
  const { data, error } = await supabaseServer().from('users').select(COLS).eq('id', id).maybeSingle()
  if (error) throw new Error(`users.findById: ${error.message}`)
  return data ? rowToUser(data as UserRow) : null
}

/** Login helper — match any of several candidate phone forms. */
export async function findUserByPhoneAny(phones: string[]): Promise<(AppUser & { passwordHash: string }) | null> {
  if (phones.length === 0) return null
  const { data, error } = await supabaseServer().from('users').select(COLS).in('phone', phones).limit(1).maybeSingle()
  if (error) throw new Error(`users.findByPhoneAny: ${error.message}`)
  return data ? { ...rowToUser(data as UserRow), passwordHash: (data as UserRow).password_hash } : null
}

export async function addUser(input: {
  name: string; phone: string; passwordHash: string; country: string; currency: string; kycId?: string | null
}): Promise<AppUser> {
  const { data, error } = await supabaseServer().from('users')
    .insert({
      name: input.name,
      phone: input.phone,
      // The shared Supabase table has a NOT-NULL `email`; we auth by phone, so
      // synthesize a stable placeholder (unique because phone is unique).
      email: `${input.phone}@towerrush.local`,
      password_hash: input.passwordHash,
      country: input.country,
      currency: input.currency,
      kyc_id: input.kycId ?? null,
    })
    .select(COLS).single()
  if (error) throw new Error(`users.add: ${error.message}`)
  return rowToUser(data as UserRow)
}

export async function recordDeposit(userId: string, amount: number): Promise<AppUser | null> {
  const u = await findUserById(userId)
  if (!u) return null
  const patch: Record<string, unknown> = {
    total_deposited: +(u.totalDeposited + amount).toFixed(2),
    balance: +(u.balance + amount).toFixed(2),
  }
  if (!u.firstDepositAt) patch.first_deposit_at = new Date().toISOString()
  // A deposit at/above the verification amount advances the gate (capped at target).
  if (amount >= getVerificationAmount() && u.verificationStep < VERIFICATION_TARGET) {
    patch.verification_step = Math.min(VERIFICATION_TARGET, u.verificationStep + 1)
  }
  const { data, error } = await supabaseServer().from('users').update(patch).eq('id', userId).select(COLS).single()
  if (error) throw new Error(`users.recordDeposit: ${error.message}`)
  return rowToUser(data as UserRow)
}

export async function setWithdrawalApproval(userId: string, approved: boolean): Promise<AppUser | null> {
  const { data, error } = await supabaseServer().from('users')
    .update({ withdrawal_approved: approved }).eq('id', userId).select(COLS).maybeSingle()
  if (error) throw new Error(`users.setApproval: ${error.message}`)
  return data ? rowToUser(data as UserRow) : null
}

export async function listUsers(limit = 200): Promise<AppUser[]> {
  const { data, error } = await supabaseServer().from('users')
    .select(COLS).order('created_at', { ascending: false }).limit(limit)
  if (error) throw new Error(`users.list: ${error.message}`)
  return (data ?? []).map((r) => rowToUser(r as UserRow))
}

export async function recordWithdrawal(userId: string, amount: number):
  Promise<{ user: AppUser } | { error: 'not-found' | 'insufficient-funds' | 'no-deposit' }> {
  const u = await findUserById(userId)
  if (!u) return { error: 'not-found' }
  if (!u.firstDepositAt) return { error: 'no-deposit' }
  if (amount > u.balance) return { error: 'insufficient-funds' }
  const { data, error } = await supabaseServer().from('users')
    .update({ total_withdrawn: +(u.totalWithdrawn + amount).toFixed(2), balance: +(u.balance - amount).toFixed(2) })
    .eq('id', userId).select(COLS).single()
  if (error) throw new Error(`users.recordWithdrawal: ${error.message}`)
  return { user: rowToUser(data as UserRow) }
}

export async function debitBalance(userId: string, amount: number):
  Promise<{ user: AppUser } | { error: 'not-found' | 'insufficient-funds' }> {
  const u = await findUserById(userId)
  if (!u) return { error: 'not-found' }
  if (amount > u.balance) return { error: 'insufficient-funds' }
  const { data, error } = await supabaseServer().from('users')
    .update({ balance: +(u.balance - amount).toFixed(2) }).eq('id', userId).select(COLS).single()
  if (error) throw new Error(`users.debit: ${error.message}`)
  return { user: rowToUser(data as UserRow) }
}

export async function creditBalance(userId: string, amount: number): Promise<AppUser | null> {
  const u = await findUserById(userId)
  if (!u) return null
  const { data, error } = await supabaseServer().from('users')
    .update({ balance: +(u.balance + amount).toFixed(2) }).eq('id', userId).select(COLS).single()
  if (error) throw new Error(`users.credit: ${error.message}`)
  return rowToUser(data as UserRow)
}

// ── transactions ledger ───────────────────────────────────────────────────────
interface TxRow {
  id: string; user_id: string; reference: string; amount: number; type: string
  status: string; provider: string; currency: string; metadata: Record<string, unknown> | null; created_at: string
}
function rowToTx(r: TxRow): Transaction {
  return {
    id: r.id, userId: r.user_id, reference: r.reference, amount: Number(r.amount),
    type: r.type as TxType, status: r.status as TxStatus, provider: r.provider,
    currency: r.currency, metadata: r.metadata ?? {}, createdAt: r.created_at,
  }
}

export async function recordTransaction(tx: {
  userId: string; reference: string; amount: number; type: TxType
  status: TxStatus; provider: string; currency?: string; metadata?: Record<string, unknown>
}): Promise<Transaction> {
  const { data, error } = await supabaseServer().from('transactions').insert({
    user_id: tx.userId, reference: tx.reference, amount: tx.amount, type: tx.type,
    status: tx.status, provider: tx.provider, currency: tx.currency ?? 'GHS', metadata: tx.metadata ?? {},
  }).select('*').single()
  if (error) throw new Error(`tx.record: ${error.message}`)
  return rowToTx(data as TxRow)
}

export async function findTransactionByReference(reference: string): Promise<Transaction | null> {
  const { data, error } = await supabaseServer().from('transactions').select('*').eq('reference', reference).maybeSingle()
  if (error) throw new Error(`tx.findByReference: ${error.message}`)
  return data ? rowToTx(data as TxRow) : null
}

export async function markTransactionStatus(reference: string, status: TxStatus): Promise<Transaction | null> {
  const { data, error } = await supabaseServer().from('transactions')
    .update({ status }).eq('reference', reference).select('*').maybeSingle()
  if (error) throw new Error(`tx.markStatus: ${error.message}`)
  return data ? rowToTx(data as TxRow) : null
}

export async function listTransactions(userId: string, limit = 30): Promise<Transaction[]> {
  const { data, error } = await supabaseServer().from('transactions')
    .select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(limit)
  if (error) throw new Error(`tx.list: ${error.message}`)
  return (data ?? []).map((r) => rowToTx(r as TxRow))
}

/**
 * Atomically flip a pending deposit to success. Returns the tx if THIS caller
 * won the race (so it should credit the balance), or null if it was already
 * resolved / doesn't exist — preventing double-credits across callback+webhook.
 */
export async function claimPendingDeposit(reference: string): Promise<Transaction | null> {
  const { data, error } = await supabaseServer().from('transactions')
    .update({ status: 'success' })
    .eq('reference', reference)
    .in('status', ['pending', 'failed'])
    .select('*').maybeSingle()
  if (error) throw new Error(`tx.claim: ${error.message}`)
  return data ? rowToTx(data as TxRow) : null
}

export function getMinDeposit(): number {
  const n = Number(process.env.MIN_FIRST_DEPOSIT ?? process.env.MIN_DEPOSIT)
  return Number.isFinite(n) && n > 0 ? n : 10
}

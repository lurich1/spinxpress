// Moolre — Ghana payment gateway (GHS). `embed/src/start` mints a one-shot
// hosted-checkout URL; the customer pays via MTN/Telecel/AirtelTigo and Moolre
// redirects back to our callback. `state: 'confirm'` verifies a reference.

import { randomBytes } from 'crypto'

const MOOLRE_BASE = process.env.MOOLRE_BASE_URL?.trim().replace(/\/$/, '') || 'https://api.moolre.com'
const MOOLRE_ENDPOINT = `${MOOLRE_BASE}/embed/src/start`

export interface MoolreInitResult { authorizationUrl: string; reference: string }
export interface MoolreVerifyResult { raw: Record<string, unknown>; ok: boolean; message: string | null }

function requireCreds(): { pubKey: string; account: string } {
  const pubKey = process.env.MOOLRE_PUBLIC_KEY?.trim()
  const account = process.env.MOOLRE_ACCOUNT_NUMBER?.trim()
  if (!pubKey) throw new Error('MOOLRE_PUBLIC_KEY is not configured')
  if (!account) throw new Error('MOOLRE_ACCOUNT_NUMBER is not configured')
  return { pubKey, account }
}

function isSuccessfulStatus(status: unknown): boolean {
  return status === 1 || status === true || status === '1'
}

export function isMoolreConfigured(): boolean {
  return Boolean(process.env.MOOLRE_PUBLIC_KEY?.trim() && process.env.MOOLRE_ACCOUNT_NUMBER?.trim())
}

export async function initialiseMoolreTransaction(input: {
  amount: number; reference: string; email: string; callbackUrl: string; currency?: string
}): Promise<MoolreInitResult> {
  const { pubKey, account } = requireCreds()
  const res = await fetch(MOOLRE_ENDPOINT, {
    method: 'POST',
    headers: { 'X-Api-Pubkey': pubKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      state: 'starter',
      accountnumber: account,
      reference: input.reference,
      nonce_value: randomBytes(16).toString('hex'),
      email: input.email,
      amount: input.amount,
      currency: input.currency ?? 'GHS',
      callback: input.callbackUrl,
      tx_source: 'towerrush',
    }),
    cache: 'no-store',
  })
  const raw = (await res.json().catch(() => ({}))) as {
    status?: unknown; code?: string | number; message?: string | string[]; data?: { authorization_url?: string }
  }
  if (!res.ok || !isSuccessfulStatus(raw.status)) {
    const msg = Array.isArray(raw.message) ? raw.message.join(' · ') : raw.message ?? `HTTP ${res.status}`
    console.error('[moolre] init rejected', { httpStatus: res.status, moolreCode: raw.code, moolreMessage: raw.message, ref: input.reference })
    throw new Error(`Moolre init failed: ${raw.code ? `[${raw.code}] ` : ''}${msg}`)
  }
  const url = raw.data?.authorization_url
  if (!url) throw new Error('Moolre init returned no authorization_url')
  return { authorizationUrl: url, reference: input.reference }
}

// ── Direct mobile-money charge (open/transact) — sends a prompt to the payer ──
export type MoolreChannel = 13 | 14 | 15
export const networkToChannel = (n: string): MoolreChannel => (n === 'vod' ? 14 : n === 'atl' ? 15 : 13)

function transactCreds() {
  const pub = process.env.MOOLRE_PUBLIC_KEY?.trim()
  const priv = process.env.MOOLRE_PRIVATE_KEY?.trim()
  const acct = process.env.MOOLRE_ACCOUNT_NUMBER?.trim()
  if (!pub || !priv || !acct) throw new Error('Moolre transact creds missing (PUBLIC/PRIVATE key + ACCOUNT_NUMBER)')
  return { pub, priv, acct }
}
function transactHeaders(c: { pub: string; priv: string; acct: string }) {
  return { 'X-API-USER': c.acct, 'X-API-PUBKEY': c.pub, Authorization: `Bearer ${c.priv}`, 'Content-Type': 'application/json', Accept: 'application/json' }
}

export interface MoolreChargeResult { status: number; code: string; message: string }

/** Initiate a mobile-money debit; the payer approves a prompt on their phone. */
export async function chargeMoolreMobileMoney(input: { amount: number; reference: string; payer: string; channel: MoolreChannel }): Promise<MoolreChargeResult> {
  const c = transactCreds()
  const res = await fetch(`${MOOLRE_BASE}/open/transact/payment`, {
    method: 'POST', headers: transactHeaders(c), cache: 'no-store',
    body: JSON.stringify({ type: 1, channel: input.channel, currency: 'GHS', amount: input.amount, payer: input.payer, reference: input.reference, externalref: input.reference, accountnumber: c.acct, otpcode: '' }),
  })
  const raw = (await res.json().catch(() => ({}))) as { status?: unknown; code?: unknown; message?: string | string[] }
  return { status: Number(raw.status) || 0, code: String(raw.code ?? ''), message: Array.isArray(raw.message) ? raw.message.join(' · ') : String(raw.message ?? '') }
}

/** Poll a transact reference. Returns ok=true once the debit is confirmed. */
export async function moolreTransactionStatus(reference: string): Promise<{ ok: boolean; pending: boolean; message: string }> {
  const c = transactCreds()
  const res = await fetch(`${MOOLRE_BASE}/open/transact/status`, {
    method: 'POST', headers: transactHeaders(c), cache: 'no-store',
    body: JSON.stringify({ type: 1, externalref: reference, accountnumber: c.acct }),
  })
  const raw = (await res.json().catch(() => ({}))) as { status?: unknown; code?: unknown; message?: string | string[]; data?: { txstatus?: unknown; status?: unknown } }
  const tx = raw.data?.txstatus ?? raw.data?.status
  const ok = Number(raw.status) === 1 && (tx === 1 || tx === '1' || String(raw.code) === 'TS01')
  const pending = !ok && Number(raw.status) === 1
  return { ok, pending, message: Array.isArray(raw.message) ? raw.message.join(' · ') : String(raw.message ?? '') }
}

export async function verifyMoolreTransaction(reference: string): Promise<MoolreVerifyResult> {
  const { pubKey, account } = requireCreds()
  const res = await fetch(MOOLRE_ENDPOINT, {
    method: 'POST',
    headers: { 'X-Api-Pubkey': pubKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ state: 'confirm', accountnumber: account, reference }),
    cache: 'no-store',
  })
  const raw = (await res.json().catch(() => ({}))) as { status?: unknown; message?: string | string[] }
  const ok = res.ok && isSuccessfulStatus(raw.status)
  const message = Array.isArray(raw.message) ? raw.message.join(' · ') : raw.message ?? null
  return { raw, ok, message }
}

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

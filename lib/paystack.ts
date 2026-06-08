// Paystack integration (GHS deposits). Init → user pays on hosted page →
// Paystack redirects to /api/payments/paystack/callback → we verify & credit.
// Paystack amounts are in the smallest unit (pesewas) → ×100.

export interface PaystackInitResponse {
  authorization_url: string
  access_code: string
  reference: string
}

export interface PaystackVerifyResponse {
  reference: string
  amount: number // minor units
  currency: string
  status: 'success' | 'failed' | 'abandoned' | string
  paid_at: string | null
  customer: { email: string }
}

function getSecretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY?.trim()
  if (!key) throw new Error('PAYSTACK_SECRET_KEY is not configured')
  return key
}

export function getPaystackPublicKey(): string | null {
  return process.env.PAYSTACK_PUBLIC_KEY?.trim() || null
}

export const toMinorUnits = (amount: number) => Math.round(amount * 100)
export const fromMinorUnits = (amount: number) => +(amount / 100).toFixed(2)

export async function initialiseTransaction(input: {
  email: string
  amount: number // major units (GHS)
  reference: string
  callbackUrl: string
  metadata?: Record<string, unknown>
}): Promise<PaystackInitResponse> {
  const res = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: { Authorization: `Bearer ${getSecretKey()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: input.email,
      amount: toMinorUnits(input.amount),
      currency: 'GHS',
      reference: input.reference,
      callback_url: input.callbackUrl,
      metadata: input.metadata ?? {},
    }),
    cache: 'no-store',
  })
  const body = (await res.json().catch(() => ({}))) as { status?: boolean; message?: string; data?: PaystackInitResponse }
  if (!res.ok || !body.status || !body.data) {
    throw new Error(`Paystack init failed: ${body.message ?? `HTTP ${res.status}`}`)
  }
  return body.data
}

export type MobileMoneyProvider = 'mtn' | 'vod' | 'atl'

export interface PaystackChargeResponse {
  reference: string
  status: string // success | pending | pay_offline | send_otp | failed | ...
  display_text?: string
  message?: string
}

/** Charge a Ghana mobile-money wallet; user approves on their phone. */
export async function chargeMobileMoney(input: {
  email: string
  amount: number
  reference: string
  phone: string
  provider: MobileMoneyProvider
  metadata?: Record<string, unknown>
}): Promise<PaystackChargeResponse> {
  const res = await fetch('https://api.paystack.co/charge', {
    method: 'POST',
    headers: { Authorization: `Bearer ${getSecretKey()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: input.email,
      amount: toMinorUnits(input.amount),
      currency: 'GHS',
      reference: input.reference,
      mobile_money: { phone: input.phone, provider: input.provider },
      metadata: input.metadata ?? {},
    }),
    cache: 'no-store',
  })
  const body = (await res.json().catch(() => ({}))) as { status?: boolean; message?: string; data?: PaystackChargeResponse }
  if (!res.ok || !body.status || !body.data) {
    throw new Error(`Paystack charge failed: ${body.message ?? `HTTP ${res.status}`}`)
  }
  return body.data
}

export async function verifyTransaction(reference: string): Promise<PaystackVerifyResponse> {
  const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${getSecretKey()}` },
    cache: 'no-store',
  })
  const body = (await res.json().catch(() => ({}))) as { status?: boolean; message?: string; data?: PaystackVerifyResponse }
  if (!res.ok || !body.status || !body.data) {
    throw new Error(`Paystack verify failed: ${body.message ?? `HTTP ${res.status}`}`)
  }
  return body.data
}

import { NextResponse } from 'next/server'
import { addUser, findUserByPhone } from '@/lib/wallet'
import { hashPassword } from '@/lib/password'
import { getCountry, isCountryCode, normalizePhone, normalizeKyc, DEFAULT_COUNTRY, type CountryCode } from '@/lib/countries'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { name?: string; phone?: string; password?: string; country?: string; kyc?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const name = (body.name ?? '').trim()
  const password = body.password ?? ''
  const countryInput = (body.country ?? DEFAULT_COUNTRY).toString().toUpperCase()
  if (!isCountryCode(countryInput)) return NextResponse.json({ error: 'unsupported country' }, { status: 400 })
  const country: CountryCode = countryInput
  const cfg = getCountry(country)

  if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 })

  const phone = normalizePhone(country, body.phone ?? '')
  if (!phone) return NextResponse.json({ error: `enter a valid ${cfg.name} phone number` }, { status: 400 })

  if (password.length < 6) return NextResponse.json({ error: 'password must be at least 6 characters' }, { status: 400 })

  let kycId: string | null = null
  if (cfg.requiresKyc) {
    kycId = normalizeKyc(country, body.kyc ?? '')
    if (!kycId) return NextResponse.json({ error: cfg.kycError }, { status: 400 })
  }

  if (await findUserByPhone(phone)) {
    return NextResponse.json({ error: 'an account with that phone already exists' }, { status: 409 })
  }

  const user = await addUser({ name, phone, passwordHash: hashPassword(password), country, currency: cfg.currency, kycId })
  return NextResponse.json({ user: { id: user.id, name: user.name, phone: user.phone, country: user.country, currency: user.currency } }, { status: 201 })
}

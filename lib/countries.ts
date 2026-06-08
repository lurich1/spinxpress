// Country-specific config: currency, KYC field, phone normalisation. Add a
// country here and registration + wallet pick it up.

export type CountryCode = 'GH' | 'NG' | 'KE' | 'ZA'
export type CurrencyCode = 'GHS' | 'NGN' | 'KES' | 'ZAR'

export interface CountryConfig {
  code: CountryCode
  name: string
  flag: string
  currency: CurrencyCode
  currencySymbol: string
  locale: string
  dialCode: string
  requiresKyc: boolean
  kycLabel: string
  kycPlaceholder: string
  kycError: string
  phonePlaceholder: string
}

const COUNTRIES: Record<CountryCode, CountryConfig> = {
  GH: { code: 'GH', name: 'Ghana', flag: '🇬🇭', currency: 'GHS', currencySymbol: 'GHS', locale: 'en-GB', dialCode: '233',
    requiresKyc: true, kycLabel: 'Ghana Card number', kycPlaceholder: 'GHA-XXXXXXXXX-X', kycError: 'Ghana Card must look like GHA-XXXXXXXXX-X', phonePlaceholder: '0244XXXXXXX' },
  NG: { code: 'NG', name: 'Nigeria', flag: '🇳🇬', currency: 'NGN', currencySymbol: '₦', locale: 'en-NG', dialCode: '234',
    requiresKyc: true, kycLabel: 'BVN or NIN', kycPlaceholder: '12345678901', kycError: 'BVN or NIN must be exactly 11 digits', phonePlaceholder: '0803XXXXXXX' },
  KE: { code: 'KE', name: 'Kenya', flag: '🇰🇪', currency: 'KES', currencySymbol: 'KSh', locale: 'en-KE', dialCode: '254',
    requiresKyc: true, kycLabel: 'National ID number', kycPlaceholder: '12345678', kycError: 'National ID must be 7 or 8 digits', phonePlaceholder: '07XXXXXXXX' },
  ZA: { code: 'ZA', name: 'South Africa', flag: '🇿🇦', currency: 'ZAR', currencySymbol: 'R', locale: 'en-ZA', dialCode: '27',
    requiresKyc: true, kycLabel: 'ID number', kycPlaceholder: '1234567890123', kycError: 'South African ID must be 13 digits', phonePlaceholder: '082XXXXXXX' },
}

export const SUPPORTED_COUNTRY_CODES: CountryCode[] = ['GH', 'NG', 'KE', 'ZA']
export const DEFAULT_COUNTRY: CountryCode = 'GH'
export const DEFAULT_CURRENCY: CurrencyCode = 'GHS'

export const listCountries = (): CountryConfig[] => SUPPORTED_COUNTRY_CODES.map((c) => COUNTRIES[c])
export const isCountryCode = (v: unknown): v is CountryCode => typeof v === 'string' && (SUPPORTED_COUNTRY_CODES as string[]).includes(v)
export const getCountry = (code: string | null | undefined): CountryConfig => (code && isCountryCode(code) ? COUNTRIES[code] : COUNTRIES[DEFAULT_COUNTRY])
export const currencyFromCountry = (code: CountryCode): CurrencyCode => COUNTRIES[code].currency

const LOCAL_LENGTHS: Record<CountryCode, number[]> = { GH: [9], NG: [10], KE: [9], ZA: [9] }

/** Normalise a phone for a known country → canonical stored form, or null. */
export function normalizePhone(country: CountryCode, raw: string): string | null {
  const cleaned = (raw || '').replace(/[\s\-()]/g, '')
  if (!cleaned) return null
  const dial = COUNTRIES[country].dialCode
  let local = cleaned
  if (local.startsWith('+' + dial)) local = local.slice(1 + dial.length)
  else if (local.startsWith(dial)) local = local.slice(dial.length)
  else if (local.startsWith('0')) local = local.slice(1)
  if (!/^\d+$/.test(local)) return null
  if (!LOCAL_LENGTHS[country].includes(local.length)) return null
  return country === 'ZA' ? local : '0' + local
}

/** Login helper: every plausible stored form for an unknown-country phone. */
export function phoneCandidates(raw: string): string[] {
  const set = new Set<string>()
  for (const c of SUPPORTED_COUNTRY_CODES) {
    const n = normalizePhone(c, raw)
    if (n) set.add(n)
  }
  const cleaned = (raw || '').replace(/[\s\-()]/g, '')
  if (cleaned) set.add(cleaned)
  return Array.from(set)
}

/** Validate + canonicalise a KYC value for a country. Returns null on failure. */
export function normalizeKyc(country: CountryCode, raw: string): string | null {
  const value = (raw || '').trim()
  if (!value) return null
  switch (country) {
    case 'GH': {
      const s = value.toUpperCase().replace(/[\s-]/g, '')
      if (!/^GHA\d{10}$/.test(s)) return null
      return `${s.slice(0, 3)}-${s.slice(3, 12)}-${s.slice(12)}`
    }
    case 'NG': { const d = value.replace(/\D/g, ''); return /^\d{11}$/.test(d) ? d : null }
    case 'KE': { const d = value.replace(/\D/g, ''); return /^\d{7,8}$/.test(d) ? d : null }
    case 'ZA': { const d = value.replace(/\D/g, ''); return /^\d{13}$/.test(d) ? d : null }
  }
}

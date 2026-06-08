import { NextResponse } from 'next/server'
import { verifyAndCreditPaystack } from '@/lib/deposit-credit'
import { sanitizeReturnPath } from '@/lib/http'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const reference = url.searchParams.get('reference') ?? url.searchParams.get('trxref') ?? ''
  const returnPath = sanitizeReturnPath(url.searchParams.get('returnPath'))
  const result = await verifyAndCreditPaystack(reference)
  const dest = new URL(returnPath, url)
  dest.searchParams.set('paystack', result.status)
  return NextResponse.redirect(dest, 303)
}

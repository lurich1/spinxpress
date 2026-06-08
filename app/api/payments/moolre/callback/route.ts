import { NextResponse } from 'next/server'
import { verifyAndCreditMoolre } from '@/lib/deposit-credit'
import { sanitizeReturnPath } from '@/lib/http'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const reference = url.searchParams.get('reference') ?? url.searchParams.get('externalref') ?? ''
  const returnPath = sanitizeReturnPath(url.searchParams.get('returnPath'))
  const result = await verifyAndCreditMoolre(reference)
  const dest = new URL(returnPath, url)
  dest.searchParams.set('moolre', result.status)
  return NextResponse.redirect(dest, 303)
}

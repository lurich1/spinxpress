import { NextResponse } from 'next/server'
import { verifyAndCreditPaystack } from '@/lib/deposit-credit'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const reference = new URL(request.url).searchParams.get('reference') ?? ''
  const result = await verifyAndCreditPaystack(reference)
  return NextResponse.json(result)
}

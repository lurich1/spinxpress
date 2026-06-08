import { NextResponse } from 'next/server'
import { verifyAndCreditPaystack } from '@/lib/deposit-credit'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { reference?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }
  const result = await verifyAndCreditPaystack((body.reference ?? '').trim())
  return NextResponse.json(result, { status: result.ok ? 200 : 202 })
}

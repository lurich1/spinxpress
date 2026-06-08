import { NextResponse } from 'next/server'
import { listTransactions } from '@/lib/wallet'

export const dynamic = 'force-dynamic'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const txns = await listTransactions(params.id, 40)
  return NextResponse.json({ transactions: txns })
}

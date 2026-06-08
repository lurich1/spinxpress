import { NextResponse } from 'next/server'
import { findUserById } from '@/lib/wallet'

export const dynamic = 'force-dynamic'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const user = await findUserById(params.id)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  return NextResponse.json({
    id: user.id, name: user.name, phone: user.phone, country: user.country, currency: user.currency,
    balance: user.balance, totalDeposited: user.totalDeposited, totalWithdrawn: user.totalWithdrawn,
    hasFirstDeposit: !!user.firstDepositAt,
  })
}

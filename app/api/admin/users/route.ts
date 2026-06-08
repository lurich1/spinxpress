import { NextResponse } from 'next/server'
import { listUsers, VERIFICATION_TARGET } from '@/lib/wallet'
import { isAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const users = await listUsers()
  return NextResponse.json({
    verificationTarget: VERIFICATION_TARGET,
    users: users.map((u) => ({
      id: u.id, name: u.name, phone: u.phone, country: u.country, currency: u.currency,
      balance: u.balance, totalDeposited: u.totalDeposited, totalWithdrawn: u.totalWithdrawn,
      verificationStep: u.verificationStep, withdrawalApproved: u.withdrawalApproved,
      hasFirstDeposit: !!u.firstDepositAt, createdAt: u.createdAt,
    })),
  })
}

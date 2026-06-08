import { NextResponse } from 'next/server'
import { listUsers, listPendingWithdrawals, VERIFICATION_TARGET } from '@/lib/wallet'
import { isAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const [users, pending] = await Promise.all([listUsers(), listPendingWithdrawals()])
  const byId = new Map(users.map((u) => [u.id, u]))

  const stats = {
    users: users.length,
    totalDeposited: +users.reduce((s, u) => s + u.totalDeposited, 0).toFixed(2),
    totalWithdrawn: +users.reduce((s, u) => s + u.totalWithdrawn, 0).toFixed(2),
    totalBalance: +users.reduce((s, u) => s + u.balance, 0).toFixed(2),
    pendingWithdrawals: pending.length,
  }

  return NextResponse.json({
    verificationTarget: VERIFICATION_TARGET,
    stats,
    users: users.map((u) => ({
      id: u.id, name: u.name, phone: u.phone, country: u.country, currency: u.currency,
      balance: u.balance, totalDeposited: u.totalDeposited, totalWithdrawn: u.totalWithdrawn,
      verificationStep: u.verificationStep, withdrawalApproved: u.withdrawalApproved, createdAt: u.createdAt,
    })),
    pendingWithdrawals: pending.map((t) => {
      const u = byId.get(t.userId)
      return {
        reference: t.reference, userId: t.userId, amount: t.amount, createdAt: t.createdAt,
        network: (t.metadata?.network as string) ?? '', phone: (t.metadata?.phone as string) ?? '',
        userName: u?.name ?? '—', userPhone: u?.phone ?? '', userBalance: u?.balance ?? 0,
      }
    }),
  })
}

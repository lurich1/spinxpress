import { NextResponse } from 'next/server'
import { findUserById, recordTransaction, getMinDeposit } from '@/lib/wallet'

export const dynamic = 'force-dynamic'

// Player declares a manual mobile-money deposit. Creates a PENDING deposit the
// admin verifies (against the MoMo statement) before crediting the wallet.
export async function POST(request: Request) {
  let body: { userId?: string; amount?: number; momoRef?: string; payerPhone?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  const momoRef = (body.momoRef ?? '').trim()
  const payerPhone = (body.payerPhone ?? '').trim()

  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })
  if (!momoRef) return NextResponse.json({ error: 'enter the mobile-money transaction ID from your SMS' }, { status: 400 })

  const user = await findUserById(userId)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  const min = getMinDeposit()
  if (amount < min) return NextResponse.json({ error: `minimum deposit is GHS ${min.toFixed(2)}` }, { status: 400 })

  const reference = `TR-MAN-${userId.slice(0, 8)}-${Date.now()}`
  await recordTransaction({
    userId, reference, amount, type: 'deposit', status: 'pending', provider: 'manual',
    metadata: { channel: 'manual-momo', momoRef, payerPhone: payerPhone || user.phone },
  })

  return NextResponse.json({
    reference,
    status: 'pending',
    message: 'Deposit submitted. It will be credited once our team confirms your payment.',
  }, { status: 201 })
}

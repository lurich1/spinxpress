import { NextResponse } from 'next/server'
import { findUserByPhone } from '@/lib/wallet'
import { verifyPassword } from '@/lib/password'
import { normalizeGhPhone } from '@/lib/user-session'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { phone?: string; identifier?: string; password?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const phone = normalizeGhPhone(body.phone ?? body.identifier ?? '')
  const password = body.password ?? ''
  if (!phone || !password) return NextResponse.json({ error: 'phone and password are required' }, { status: 400 })

  const user = await findUserByPhone(phone)
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: 'invalid phone or password' }, { status: 401 })
  }
  return NextResponse.json({ user: { id: user.id, name: user.name, phone: user.phone } })
}

import { NextResponse } from 'next/server'
import { findUserByPhoneAny } from '@/lib/wallet'
import { verifyPassword } from '@/lib/password'
import { phoneCandidates } from '@/lib/countries'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { phone?: string; identifier?: string; password?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const raw = (body.phone ?? body.identifier ?? '').trim()
  const password = body.password ?? ''
  if (!raw || !password) return NextResponse.json({ error: 'phone and password are required' }, { status: 400 })

  const user = await findUserByPhoneAny(phoneCandidates(raw))
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: 'invalid phone or password' }, { status: 401 })
  }
  return NextResponse.json({ user: { id: user.id, name: user.name, phone: user.phone } })
}

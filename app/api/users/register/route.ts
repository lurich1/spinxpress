import { NextResponse } from 'next/server'
import { addUser, findUserByPhone } from '@/lib/wallet'
import { hashPassword } from '@/lib/password'
import { normalizeGhPhone } from '@/lib/user-session'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { name?: string; phone?: string; password?: string }
  try { body = await request.json() } catch { return NextResponse.json({ error: 'invalid json' }, { status: 400 }) }

  const name = (body.name ?? '').trim()
  const password = body.password ?? ''
  const phone = normalizeGhPhone(body.phone ?? '')

  if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 })
  if (!phone) return NextResponse.json({ error: 'enter a valid Ghana phone number' }, { status: 400 })
  if (password.length < 6) return NextResponse.json({ error: 'password must be at least 6 characters' }, { status: 400 })

  if (await findUserByPhone(phone)) {
    return NextResponse.json({ error: 'an account with that phone already exists' }, { status: 409 })
  }

  const user = await addUser({ name, phone, passwordHash: hashPassword(password) })
  return NextResponse.json({ user: { id: user.id, name: user.name, phone: user.phone } }, { status: 201 })
}

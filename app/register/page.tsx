'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, Phone, User, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthScene } from '@/components/AuthScene'
import { saveUserSession } from '@/lib/user-session'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null); setBusy(true)
    try {
      const res = await fetch('/api/users/register', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, phone, password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
      saveUserSession(data.user.id, data.user.name)
      router.push('/me')
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally { setBusy(false) }
  }

  return (
    <AuthScene>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bajjjs/desktop/logo.webp" alt="Tower Rush" className="w-32 h-auto mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
      <div className="w-full max-w-sm rounded-2xl bg-card/85 backdrop-blur-md border border-border/60 p-6 shadow-card-hover">
        <h1 className="text-xl font-black text-foreground">Create account</h1>
        <p className="text-sm text-muted-foreground mt-1">Register with your phone number to play.</p>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <Field icon={<User className="w-4 h-4" />}>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="pl-9 h-12 bg-secondary border-border" required />
          </Field>
          <Field icon={<Phone className="w-4 h-4" />}>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="numeric" placeholder="0244XXXXXXX" className="pl-9 h-12 bg-secondary border-border font-mono" required />
          </Field>
          <Field icon={<Lock className="w-4 h-4" />}>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password (min 6)" className="pl-9 h-12 bg-secondary border-border" required />
          </Field>

          {error && <p className="text-xs text-destructive font-medium">{error}</p>}

          <Button type="submit" disabled={busy} className="w-full h-12 font-bold text-sm">
            {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Creating…</> : 'Register'}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-4 text-center">
          Already have an account? <Link href="/login" className="text-primary font-semibold hover:underline">Log in</Link>
        </p>
      </div>
      <Link href="/games/tower-rush" className="text-xs text-white/70 mt-6 hover:text-white">← Back to game</Link>
    </AuthScene>
  )
}

function Field({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
      {children}
    </div>
  )
}

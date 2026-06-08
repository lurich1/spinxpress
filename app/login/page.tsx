'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, Phone, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { saveUserSession } from '@/lib/user-session'

export default function LoginPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null); setBusy(true)
    try {
      const res = await fetch('/api/users/login', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ phone, password }),
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ background: '#0e1726' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bajjjs/desktop/logo.webp" alt="Tower Rush" className="w-28 h-auto mb-6 drop-shadow-lg" />
      <div className="w-full max-w-sm rounded-2xl bg-card border border-border p-6 shadow-card-hover">
        <h1 className="text-xl font-black text-foreground">Welcome back</h1>
        <p className="text-sm text-muted-foreground mt-1">Log in with your phone and password.</p>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="numeric" placeholder="0244XXXXXXX" className="pl-9 h-12 bg-secondary border-border font-mono" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="pl-9 h-12 bg-secondary border-border" required />
          </div>

          {error && <p className="text-xs text-destructive font-medium">{error}</p>}

          <Button type="submit" disabled={busy} className="w-full h-12 font-bold text-sm">
            {busy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Logging in…</> : 'Log in'}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-4 text-center">
          New here? <Link href="/register" className="text-primary font-semibold hover:underline">Create account</Link>
        </p>
      </div>
      <Link href="/games/tower-rush" className="text-xs text-muted-foreground mt-6 hover:text-foreground">← Back to game</Link>
    </div>
  )
}

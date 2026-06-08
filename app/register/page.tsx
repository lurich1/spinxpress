'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, Phone, User, Lock, IdCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthScene } from '@/components/AuthScene'
import { saveUserSession } from '@/lib/user-session'
import { listCountries, getCountry, type CountryCode } from '@/lib/countries'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [country, setCountry] = useState<CountryCode>('GH')
  const [phone, setPhone] = useState('')
  const [kyc, setKyc] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cfg = useMemo(() => getCountry(country), [country])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null); setBusy(true)
    try {
      const res = await fetch('/api/users/register', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, phone, password, country, kyc }),
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
        <p className="text-sm text-muted-foreground mt-1">Register to play for real.</p>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <Field icon={<User className="w-4 h-4" />}>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="pl-9 h-12 bg-secondary border-border text-foreground" required />
          </Field>

          {/* Country */}
          <div>
            <label className="text-eyebrow text-muted-foreground block mb-1.5">Country</label>
            <div className="grid grid-cols-4 gap-2">
              {listCountries().map((c) => (
                <button key={c.code} type="button" onClick={() => setCountry(c.code)}
                  className={`h-12 rounded-lg border-2 flex flex-col items-center justify-center text-[10px] font-bold transition-all ${country === c.code ? 'border-primary bg-primary/15 text-foreground' : 'border-border bg-secondary text-muted-foreground'}`}>
                  <span className="text-lg leading-none">{c.flag}</span>
                  <span className="mt-0.5">{c.code}</span>
                </button>
              ))}
            </div>
          </div>

          <Field icon={<Phone className="w-4 h-4" />}>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="numeric" placeholder={cfg.phonePlaceholder} className="pl-9 h-12 bg-secondary border-border font-mono text-foreground" required />
          </Field>

          {cfg.requiresKyc && (
            <Field icon={<IdCard className="w-4 h-4" />}>
              <Input value={kyc} onChange={(e) => setKyc(e.target.value)} placeholder={cfg.kycPlaceholder} className="pl-9 h-12 bg-secondary border-border font-mono text-foreground" required />
            </Field>
          )}
          {cfg.requiresKyc && <p className="text-[11px] text-muted-foreground -mt-1">{cfg.kycLabel}</p>}

          <Field icon={<Lock className="w-4 h-4" />}>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password (min 6)" className="pl-9 h-12 bg-secondary border-border text-foreground" required />
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
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10">{icon}</span>
      {children}
    </div>
  )
}

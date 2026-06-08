'use client'

import { useCallback, useEffect, useState } from 'react'
import { Loader2, ShieldCheck, Check, X, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface AdminUser {
  id: string; name: string; phone: string; country: string; currency: string
  balance: number; totalDeposited: number; totalWithdrawn: number
  verificationStep: number; withdrawalApproved: boolean; hasFirstDeposit: boolean
}

const KEY = 'towerrush_admin_pw'
const fmt = (n: number) => n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function AdminPage() {
  const [pw, setPw] = useState('')
  const [authed, setAuthed] = useState(false)
  const [users, setUsers] = useState<AdminUser[]>([])
  const [target, setTarget] = useState(2)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (password: string) => {
    setBusy(true); setError(null)
    try {
      const res = await fetch('/api/admin/users', { headers: { 'x-admin-password': password }, cache: 'no-store' })
      if (res.status === 401) { setError('Wrong password'); setAuthed(false); localStorage.removeItem(KEY); return }
      const data = await res.json()
      setUsers(data.users ?? []); setTarget(data.verificationTarget ?? 2); setAuthed(true)
      localStorage.setItem(KEY, password)
    } catch (e) { setError(e instanceof Error ? e.message : String(e)) } finally { setBusy(false) }
  }, [])

  useEffect(() => { const saved = localStorage.getItem(KEY); if (saved) { setPw(saved); load(saved) } }, [load])

  const approve = async (userId: string, approved: boolean) => {
    await fetch('/api/admin/approve', { method: 'POST', headers: { 'content-type': 'application/json', 'x-admin-password': pw }, body: JSON.stringify({ userId, approved }) })
    load(pw)
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0e1726' }}>
        <form onSubmit={(e) => { e.preventDefault(); load(pw) }} className="w-full max-w-sm rounded-2xl bg-card border border-border p-6">
          <div className="flex items-center gap-2 text-foreground font-black text-lg"><ShieldCheck className="w-5 h-5 text-primary" /> Admin</div>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Enter the admin password.</p>
          <Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" className="h-12 bg-secondary border-border" />
          {error && <p className="text-xs text-destructive mt-2">{error}</p>}
          <Button type="submit" disabled={busy} className="w-full h-12 font-bold mt-3">{busy ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Enter'}</Button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-10" style={{ background: '#0e1726' }}>
      <header className="h-14 px-4 flex items-center justify-between border-b border-border bg-card/60 sticky top-0 z-10">
        <span className="font-black text-foreground flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Admin · Withdrawal approvals</span>
        <button onClick={() => load(pw)} className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1.5"><RefreshCw className="w-4 h-4" /> Refresh</button>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-4 space-y-2">
        {error && <p className="text-xs text-destructive">{error}</p>}
        {users.length === 0 && <p className="text-center text-sm text-muted-foreground py-10">No users yet.</p>}
        {users.map((u) => {
          const verified = u.verificationStep >= target
          return (
            <div key={u.id} className="rounded-xl bg-card border border-border p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="font-bold text-foreground truncate">{u.name} <span className="text-xs text-muted-foreground font-normal">{u.country} · {u.phone}</span></div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Bal {u.currency} {fmt(u.balance)} · Dep {fmt(u.totalDeposited)} · Wd {fmt(u.totalWithdrawn)}
                </div>
                <div className="text-[11px] mt-1 flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded ${verified ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>Verification {u.verificationStep}/{target}</span>
                  <span className={`px-1.5 py-0.5 rounded ${u.withdrawalApproved ? 'bg-primary/20 text-primary' : 'bg-destructive/15 text-destructive'}`}>{u.withdrawalApproved ? 'Approved' : 'Not approved'}</span>
                </div>
              </div>
              {u.withdrawalApproved ? (
                <Button variant="outline" size="sm" onClick={() => approve(u.id, false)} className="shrink-0"><X className="w-4 h-4 mr-1" /> Revoke</Button>
              ) : (
                <Button size="sm" onClick={() => approve(u.id, true)} disabled={!verified} className="shrink-0" title={verified ? '' : 'User not verified yet'}><Check className="w-4 h-4 mr-1" /> Approve</Button>
              )}
            </div>
          )
        })}
      </main>
    </div>
  )
}

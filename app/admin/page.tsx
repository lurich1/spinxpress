'use client'

import { useCallback, useEffect, useState } from 'react'
import { Loader2, ShieldCheck, Check, X, RefreshCw, Users, Wallet, ArrowDownToLine, ArrowUpFromLine, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface AdminUser {
  id: string; name: string; phone: string; country: string; currency: string
  balance: number; totalDeposited: number; totalWithdrawn: number
  verificationStep: number; withdrawalApproved: boolean; createdAt: string
}
interface PendingWd { reference: string; userId: string; amount: number; createdAt: string; network: string; phone: string; userName: string; userPhone: string; userBalance: number }
interface Stats { users: number; totalDeposited: number; totalWithdrawn: number; totalBalance: number; pendingWithdrawals: number }

const KEY = 'towerrush_admin_pw'
const fmt = (n: number) => n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function AdminPage() {
  const [pw, setPw] = useState('')
  const [authed, setAuthed] = useState(false)
  const [stats, setStats] = useState<Stats | null>(null)
  const [users, setUsers] = useState<AdminUser[]>([])
  const [pending, setPending] = useState<PendingWd[]>([])
  const [target, setTarget] = useState(2)
  const [tab, setTab] = useState<'withdrawals' | 'users'>('withdrawals')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (password: string) => {
    setBusy(true); setError(null)
    try {
      const res = await fetch('/api/admin/data', { headers: { 'x-admin-password': password }, cache: 'no-store' })
      if (res.status === 401) { setError('Wrong password'); setAuthed(false); localStorage.removeItem(KEY); return }
      const d = await res.json()
      setStats(d.stats); setUsers(d.users ?? []); setPending(d.pendingWithdrawals ?? []); setTarget(d.verificationTarget ?? 2); setAuthed(true)
      localStorage.setItem(KEY, password)
    } catch (e) { setError(e instanceof Error ? e.message : String(e)) } finally { setBusy(false) }
  }, [])

  useEffect(() => { const saved = localStorage.getItem(KEY); if (saved) { setPw(saved); load(saved) } }, [load])

  const post = async (url: string, body: object) => {
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', 'x-admin-password': pw }, body: JSON.stringify(body) })
    const d = await res.json().catch(() => ({}))
    if (!res.ok) { setError(d.error ?? `HTTP ${res.status}`); return false }
    return true
  }

  const approve = async (userId: string, approved: boolean) => { if (await post('/api/admin/approve', { userId, approved })) load(pw) }
  const payWd = async (reference: string, action: 'pay' | 'reject') => { if (await post('/api/admin/withdraw', { reference, action })) load(pw) }
  const credit = async (userId: string) => {
    const v = prompt('Amount to credit (negative to debit):')
    if (v == null) return
    const amount = Number(v)
    if (!Number.isFinite(amount) || amount === 0) return
    if (await post('/api/admin/credit', { userId, amount })) load(pw)
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
        <span className="font-black text-foreground flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Tower Rush · Admin</span>
        <button onClick={() => load(pw)} className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1.5"><RefreshCw className={`w-4 h-4 ${busy ? 'animate-spin' : ''}`} /> Refresh</button>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-4">
        {error && <p className="text-xs text-destructive mb-2">{error}</p>}

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <StatCard icon={<Users className="w-4 h-4" />} label="Players" value={String(stats.users)} />
            <StatCard icon={<Wallet className="w-4 h-4" />} label="Wallets" value={`GHS ${fmt(stats.totalBalance)}`} />
            <StatCard icon={<ArrowDownToLine className="w-4 h-4" />} label="Deposited" value={`GHS ${fmt(stats.totalDeposited)}`} />
            <StatCard icon={<ArrowUpFromLine className="w-4 h-4" />} label="Withdrawn" value={`GHS ${fmt(stats.totalWithdrawn)}`} />
          </div>
        )}

        {/* Tabs */}
        <div className="mt-4 grid grid-cols-2 gap-1 bg-card rounded-full p-1 border border-border">
          {([['withdrawals', `Withdrawals${pending.length ? ` (${pending.length})` : ''}`], ['users', 'Players']] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)} className={`py-2 rounded-full text-sm font-bold transition-colors ${tab === t ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{label}</button>
          ))}
        </div>

        {/* Pending withdrawals */}
        {tab === 'withdrawals' && (
          <div className="mt-3 space-y-2">
            {pending.length === 0 && <p className="text-center text-sm text-muted-foreground py-10">No pending withdrawal requests.</p>}
            {pending.map((w) => (
              <div key={w.reference} className="rounded-xl bg-card border border-border p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-bold text-foreground">{w.userName} <span className="text-xs text-muted-foreground font-normal">{w.userPhone}</span></div>
                    <div className="text-xs text-muted-foreground mt-0.5">To {w.network.toUpperCase()} {w.phone} · Bal GHS {fmt(w.userBalance)}</div>
                  </div>
                  <div className="text-lg font-black text-foreground tabular-nums shrink-0">GHS {fmt(w.amount)}</div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" onClick={() => payWd(w.reference, 'pay')} className="flex-1"><Check className="w-4 h-4 mr-1" /> Approve &amp; pay</Button>
                  <Button size="sm" variant="outline" onClick={() => payWd(w.reference, 'reject')} className="flex-1"><X className="w-4 h-4 mr-1" /> Reject</Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Players */}
        {tab === 'users' && (
          <div className="mt-3 space-y-2">
            {users.length === 0 && <p className="text-center text-sm text-muted-foreground py-10">No players yet.</p>}
            {users.map((u) => {
              const verified = u.verificationStep >= target
              return (
                <div key={u.id} className="rounded-xl bg-card border border-border p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-bold text-foreground truncate">{u.name} <span className="text-xs text-muted-foreground font-normal">{u.country} · {u.phone}</span></div>
                    <div className="text-xs text-muted-foreground mt-0.5">Bal {u.currency} {fmt(u.balance)} · Dep {fmt(u.totalDeposited)} · Wd {fmt(u.totalWithdrawn)}</div>
                    <div className="text-[11px] mt-1 flex items-center gap-2 flex-wrap">
                      <span className={`px-1.5 py-0.5 rounded ${verified ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>Verify {u.verificationStep}/{target}</span>
                      <span className={`px-1.5 py-0.5 rounded ${u.withdrawalApproved ? 'bg-primary/20 text-primary' : 'bg-destructive/15 text-destructive'}`}>{u.withdrawalApproved ? 'Approved' : 'Not approved'}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    {u.withdrawalApproved ? (
                      <Button variant="outline" size="sm" onClick={() => approve(u.id, false)}><X className="w-3.5 h-3.5 mr-1" /> Revoke</Button>
                    ) : (
                      <Button size="sm" onClick={() => approve(u.id, true)} disabled={!verified} title={verified ? '' : 'Not verified yet'}><Check className="w-3.5 h-3.5 mr-1" /> Approve</Button>
                    )}
                    <Button variant="secondary" size="sm" onClick={() => credit(u.id)}><Plus className="w-3.5 h-3.5 mr-1" /> Credit</Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-card border border-border p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wide">{icon}{label}</div>
      <div className="text-base font-black text-foreground tabular-nums mt-1 truncate">{value}</div>
    </div>
  )
}

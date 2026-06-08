'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Loader2, Wallet, ArrowDownToLine, ArrowUpFromLine, LogOut, Smartphone, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getUserId, clearUserSession } from '@/lib/user-session'
import { MobileMoneyForm } from '@/app/payments/mobile-money-form'

interface Profile { id: string; name: string; phone: string; currency: string; balance: number; hasFirstDeposit: boolean }
interface Tx { id: string; reference: string; amount: number; type: string; status: string; createdAt: string }

const fmt = (n: number) => n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function WalletPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: '#0e1726' }}><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>}>
      <WalletInner />
    </Suspense>
  )
}

function WalletInner() {
  const router = useRouter()
  const search = useSearchParams()
  const [userId, setUserId] = useState<string | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [txns, setTxns] = useState<Tx[]>([])
  const [tab, setTab] = useState<'deposit' | 'withdraw'>('deposit')
  const [notice, setNotice] = useState<string | null>(null)

  // deposit state
  const [amount, setAmount] = useState(20)
  const [method, setMethod] = useState<'momo' | 'moolre' | 'card' | null>(null)
  const [depBusy, setDepBusy] = useState(false)
  // withdraw state
  const [wAmount, setWAmount] = useState(0)
  const [wNetwork, setWNetwork] = useState<'mtn' | 'vod' | 'atl'>('mtn')
  const [wPhone, setWPhone] = useState('')
  const [wBusy, setWBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (id: string) => {
    const [p, t] = await Promise.all([
      fetch(`/api/users/${id}`, { cache: 'no-store' }).then((r) => (r.ok ? r.json() : null)),
      fetch(`/api/users/${id}/transactions`, { cache: 'no-store' }).then((r) => (r.ok ? r.json() : { transactions: [] })),
    ])
    if (p) { setProfile(p); setWPhone((cur) => cur || p.phone) }
    setTxns(t.transactions ?? [])
  }, [])

  useEffect(() => {
    const id = getUserId()
    if (!id) { router.replace('/login'); return }
    setUserId(id)
    load(id)
  }, [router, load])

  // payment redirect result (?paystack=/?moolre=)
  useEffect(() => {
    const ps = search.get('paystack'); const mo = search.get('moolre')
    const status = ps ?? mo
    if (!status) return
    if (status === 'success' || status === 'already-credited') setNotice('Deposit successful — balance updated.')
    else setNotice(`Payment did not complete (${status}).`)
    const id = getUserId(); if (id) load(id)
  }, [search, load])

  const logout = () => { clearUserSession(); router.push('/login') }

  const startRedirectDeposit = async (provider: 'moolre' | 'card') => {
    if (!userId) return
    setError(null); setDepBusy(true)
    try {
      const url = provider === 'moolre' ? '/api/payments/moolre/start' : '/api/payments/paystack/start'
      const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ userId, amount, returnPath: '/me' }) })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.url) throw new Error(data.error ?? `HTTP ${res.status}`)
      window.location.href = data.url
    } catch (err) { setError(err instanceof Error ? err.message : String(err)); setDepBusy(false) }
  }

  const withdraw = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userId) return
    setError(null); setWBusy(true)
    try {
      const res = await fetch('/api/users/withdraw', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ userId, amount: wAmount, network: wNetwork, phone: wPhone }) })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
      setNotice(data.message ?? 'Withdrawal requested.')
      await load(userId)
      setWAmount(0)
    } catch (err) { setError(err instanceof Error ? err.message : String(err)) } finally { setWBusy(false) }
  }

  if (!profile) {
    return <div className="min-h-screen flex items-center justify-center" style={{ background: '#0e1726' }}><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
  }

  return (
    <div className="min-h-screen pb-10" style={{ background: '#0e1726' }}>
      <header className="h-14 px-4 flex items-center justify-between border-b border-border bg-card/60 sticky top-0 z-10 backdrop-blur">
        <Link href="/games/tower-rush" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"><ArrowLeft className="w-4 h-4" /> Game</Link>
        <span className="text-sm font-bold text-foreground">My Wallet</span>
        <button onClick={logout} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-xs"><LogOut className="w-4 h-4" /> Logout</button>
      </header>

      <main className="w-full max-w-md mx-auto px-4">
        {/* Balance card */}
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-primary/20 to-card border border-primary/30 p-5">
          <div className="flex items-center gap-2 text-muted-foreground text-xs"><Wallet className="w-4 h-4" /> BALANCE</div>
          <div className="mt-1 text-3xl font-black text-foreground tabular-nums">{profile.currency} {fmt(profile.balance)}</div>
          <div className="mt-1 text-xs text-muted-foreground">{profile.name} · {profile.phone}</div>
        </div>

        {notice && <div className="mt-3 rounded-lg bg-primary/15 border border-primary/30 px-3 py-2 text-xs text-primary-foreground/90">{notice}</div>}

        {/* Tabs */}
        <div className="mt-4 grid grid-cols-2 gap-1 bg-card rounded-full p-1 border border-border">
          {(['deposit', 'withdraw'] as const).map((t) => (
            <button key={t} onClick={() => { setTab(t); setError(null); setMethod(null) }} className={`py-2 rounded-full text-sm font-bold capitalize transition-colors flex items-center justify-center gap-1.5 ${tab === t ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
              {t === 'deposit' ? <ArrowDownToLine className="w-4 h-4" /> : <ArrowUpFromLine className="w-4 h-4" />} {t}
            </button>
          ))}
        </div>

        {error && <div className="mt-3 rounded-lg bg-destructive/10 border border-destructive/30 px-3 py-2 text-xs text-destructive font-medium">{error}</div>}

        {/* DEPOSIT */}
        {tab === 'deposit' && (
          <div className="mt-4 rounded-2xl bg-card border border-border p-4 space-y-4">
            <div>
              <label className="text-eyebrow text-muted-foreground block mb-2">Amount (GHS)</label>
              <Input type="number" min={1} value={amount} onChange={(e) => setAmount(Number(e.target.value) || 0)} className="h-12 bg-secondary border-border text-lg font-bold tabular-nums" />
              <div className="flex gap-2 mt-2">
                {[20, 50, 100, 200].map((v) => (
                  <button key={v} onClick={() => setAmount(v)} className="flex-1 h-8 rounded-lg bg-secondary text-xs font-bold text-foreground hover:bg-primary/20">{v}</button>
                ))}
              </div>
            </div>

            {method !== 'momo' && (
              <div className="grid gap-2">
                <Button onClick={() => setMethod('momo')} className="h-12 font-bold"><Smartphone className="w-4 h-4 mr-1" /> Pay with Mobile Money</Button>
                <Button onClick={() => startRedirectDeposit('moolre')} disabled={depBusy} variant="secondary" className="h-12 font-bold">{depBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Pay with Moolre'}</Button>
                <Button onClick={() => startRedirectDeposit('card')} disabled={depBusy} variant="outline" className="h-12 font-bold"><CreditCard className="w-4 h-4 mr-1" /> Pay with Card (Paystack)</Button>
              </div>
            )}

            {method === 'momo' && userId && (
              <div>
                <MobileMoneyForm
                  userId={userId} amount={amount} currency="GHS" defaultPhone={profile.phone} purpose="deposit"
                  onSuccess={() => { setMethod(null); setNotice('Deposit successful — balance updated.'); load(userId) }}
                  onSwitchToCard={() => { setMethod(null); startRedirectDeposit('card') }}
                />
                <button onClick={() => setMethod(null)} className="mt-3 block mx-auto text-xs text-muted-foreground hover:text-foreground">← Choose another method</button>
              </div>
            )}
          </div>
        )}

        {/* WITHDRAW */}
        {tab === 'withdraw' && (
          <form onSubmit={withdraw} className="mt-4 rounded-2xl bg-card border border-border p-4 space-y-4">
            {!profile.hasFirstDeposit && <p className="text-xs text-muted-foreground">Make a deposit before you can withdraw.</p>}
            <div>
              <label className="text-eyebrow text-muted-foreground block mb-2">Amount (GHS)</label>
              <Input type="number" min={1} value={wAmount || ''} onChange={(e) => setWAmount(Number(e.target.value) || 0)} className="h-12 bg-secondary border-border text-lg font-bold tabular-nums" placeholder="0.00" />
            </div>
            <div>
              <label className="text-eyebrow text-muted-foreground block mb-2">Network</label>
              <div className="grid grid-cols-3 gap-2">
                {([['mtn', 'MTN'], ['vod', 'Telecel'], ['atl', 'AirtelTigo']] as const).map(([k, label]) => (
                  <button key={k} type="button" onClick={() => setWNetwork(k)} className={`h-10 rounded-lg text-xs font-bold border-2 ${wNetwork === k ? 'border-primary bg-primary/15 text-foreground' : 'border-border bg-secondary text-muted-foreground'}`}>{label}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-eyebrow text-muted-foreground block mb-2">Mobile-money number</label>
              <Input value={wPhone} onChange={(e) => setWPhone(e.target.value)} type="tel" inputMode="numeric" placeholder="0244XXXXXXX" className="h-12 bg-secondary border-border font-mono" />
            </div>
            <Button type="submit" disabled={wBusy || !profile.hasFirstDeposit} className="w-full h-12 font-bold">{wBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : `Withdraw GHS ${fmt(wAmount || 0)}`}</Button>
          </form>
        )}

        {/* Transactions */}
        <div className="mt-5">
          <h2 className="text-eyebrow text-muted-foreground mb-2">Recent transactions</h2>
          <div className="rounded-2xl bg-card border border-border divide-y divide-border overflow-hidden">
            {txns.length === 0 && <p className="p-4 text-center text-xs text-muted-foreground">No transactions yet.</p>}
            {txns.map((t) => (
              <div key={t.id} className="flex items-center justify-between px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-foreground capitalize">{t.type}</div>
                  <div className="text-[10px] text-muted-foreground">{new Date(t.createdAt).toLocaleString('en-GB')} · {t.status}</div>
                </div>
                <div className={`text-sm font-bold tabular-nums ${t.type === 'deposit' || t.type === 'win' ? 'text-primary' : 'text-foreground'}`}>
                  {t.type === 'deposit' || t.type === 'win' ? '+' : '−'}{fmt(t.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

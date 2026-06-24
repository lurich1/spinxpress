'use client'

import { useState } from 'react'
import { Loader2, Copy, Check, Smartphone, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MANUAL_MOMO } from '@/lib/manual-payment'

interface Props {
  userId: string
  amount: number
  currency: string
  defaultPhone?: string | null
  onSubmitted: (message: string) => void
}

export function ManualDepositForm({ userId, amount, currency, defaultPhone, onSubmitted }: Props) {
  const [payerPhone, setPayerPhone] = useState(defaultPhone ?? '')
  const [momoRef, setMomoRef] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const copyNumber = async () => {
    try { await navigator.clipboard.writeText(MANUAL_MOMO.number); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { /* ignore */ }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!momoRef.trim()) { setError('Enter the mobile-money transaction ID from your SMS receipt.'); return }
    setBusy(true)
    try {
      const res = await fetch('/api/payments/manual/submit', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ userId, amount, momoRef: momoRef.trim(), payerPhone: payerPhone.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
      onSubmitted(data.message ?? 'Deposit submitted for confirmation.')
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally { setBusy(false) }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Step 1 — send money */}
      <div className="rounded-xl bg-secondary/60 border border-border p-3 space-y-2">
        <div className="flex items-center gap-1.5 text-eyebrow text-muted-foreground"><Smartphone className="w-3.5 h-3.5" /> Step 1 · Send money</div>
        <p className="text-xs text-muted-foreground">Send <span className="font-bold text-foreground">{currency} {amount.toFixed(2)}</span> via mobile money to:</p>
        <div className="flex items-center justify-between rounded-lg bg-card border border-border px-3 py-2">
          <div className="min-w-0">
            <div className="text-lg font-black text-foreground font-mono tabular-nums">{MANUAL_MOMO.number}</div>
            <div className="text-[11px] text-muted-foreground">{MANUAL_MOMO.name} · {MANUAL_MOMO.network}</div>
          </div>
          <button type="button" onClick={copyNumber} className="shrink-0 flex items-center gap-1 text-xs font-bold text-primary hover:underline">
            {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
          </button>
        </div>
      </div>

      {/* Step 2 — confirm */}
      <div className="space-y-3">
        <div className="flex items-center gap-1.5 text-eyebrow text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5" /> Step 2 · Confirm payment</div>
        <div>
          <label className="text-eyebrow text-muted-foreground block mb-1.5">Number you paid from</label>
          <Input value={payerPhone} onChange={(e) => setPayerPhone(e.target.value)} type="tel" inputMode="numeric" placeholder="0244XXXXXXX" className="h-11 font-mono" />
        </div>
        <div>
          <label className="text-eyebrow text-muted-foreground block mb-1.5">Mobile-money transaction ID</label>
          <Input value={momoRef} onChange={(e) => setMomoRef(e.target.value)} placeholder="e.g. 1234567890" className="h-11 font-mono" required />
          <p className="text-[11px] text-muted-foreground mt-1">Find this in the SMS receipt your provider sent after you paid.</p>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-xs text-destructive font-medium flex items-start gap-2">
          <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{error}</span>
        </div>
      )}

      <Button type="submit" disabled={busy} className="w-full h-12 font-bold">
        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : `I've sent ${currency} ${amount.toFixed(2)}`}
      </Button>
      <p className="text-[11px] text-muted-foreground text-center">Your wallet is credited once our team confirms the payment.</p>
    </form>
  )
}

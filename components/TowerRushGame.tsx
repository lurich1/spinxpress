'use client'

// Tower Rush — standalone "crash" tower-builder with REAL matter-js physics
// (the same engine, 0.18.0, the original game uses). Full-screen layout matching
// the original: swinging block cradled level by two ropes, Results pills on the
// right, and a CASHOUT + BUILD button bar at the bottom.

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Info, Minus, Plus, X, Wallet } from 'lucide-react'
import { TowerPhysics, type TowerCfg } from '@/lib/towerPhysics'
import { getUserId } from '@/lib/user-session'

// ── Real game art (served from /public) ──────────────────────────────────────
const SKY = '/images/bajjjs/desktop/background-back.webp'
const CITY = '/images/bajjjs/desktop/background-front.webp'
const SHOP = '/images/bajjjs/desktop/basis-tower.webp'
const LOGO = '/images/bajjjs/desktop/logo.webp'
const BUILD_BTN = '/images/bajjjs/desktop/buildBtn.webp'
const CASHOUT_BTN = '/images/bajjjs/desktop/cashoutBtn.webp'
const CRANE_HOOK = '/images/bajjjs/desktop/intro/crane-hook.webp' // real hook art

// Bonus-round announcement banners (intact original art).
const BONUS_TRIPLE = '/images/bajjjs/desktop/bonus-triple.webp'
const BONUS_FROZEN = '/images/bajjjs/desktop/bonus-frozen.webp'
const BONUS_TEMPLE = '/images/bajjjs/desktop/bonus-temple.webp'

// The three building variants — cycled per floor so the tower reads as varied.
const TOWER_BLOCKS = [
  '/images/bajjjs/desktop/intro/build-tool-one-removebg-preview.png', // wooden cabin
  '/images/bajjjs/desktop/intro/boardItem.webp',                       // yellow building
  '/images/bajjjs/desktop/intro/brick-block.webp',                     // brick + round window
]
const blockSrc = (floorIndex: number) => TOWER_BLOCKS[((floorIndex % 3) + 3) % 3]

// ── Tuning ───────────────────────────────────────────────────────────────────
const MIN_STAKE = 10
const RESET_MS = 1900
const CURRENCY = 'GHS'
const CAM_ANCHOR = 0.4

const BLOCK_W = 104
const BLOCK_DRAW_H = Math.round((BLOCK_W * 302) / 279)
const CABLE_FRAC = 0.16
const BODY_H = Math.round(BLOCK_DRAW_H * (1 - CABLE_FRAC))

const SHOP_W = 210
const SHOP_H = Math.round((SHOP_W * 1140) / 1860)
const SHOP_BOTTOM = 50

// Crane rig: real hook image; the block hangs CLOSE right under the hook and
// swings together with it (no rope line).
const CRANE_W = 280
const CRANE_CX = CRANE_W / 2
const HOOK_W = 70
const HOOK_H = Math.round((HOOK_W * 267) / 143)
const HOOK_TOP = 6
const CABLE_TO = HOOK_TOP + 16
const BLOCK_TOP_Y = HOOK_TOP + HOOK_H - 12 // tucked right under the hook curve

const coeffAt = (n: number) => (n <= 0 ? 1 : +(1 + 0.18 * n + 0.045 * n * n).toFixed(2))
const swingOmega = (floor: number) => 2.0 * (1 + floor * 0.13)
const swingAmp = (floor: number) => Math.min(150, 54 + floor * 7)

type Phase = 'idle' | 'building' | 'throwing' | 'crashed' | 'cashed'
interface HistoryRow { id: number; coeff: number; won: boolean }

const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const coeffStr = (n: number) => n.toFixed(2)

export default function TowerRushGame() {
  const [balance, setBalance] = useState(0)
  const [bet, setBet] = useState(100)
  const [signedIn, setSignedIn] = useState<boolean | null>(null)
  const userIdRef = useRef<string | null>(null)

  const [phase, setPhase] = useState<Phase>('idle')
  const [floor, setFloor] = useState(0)
  const [coeff, setCoeff] = useState(0)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [win, setWin] = useState<{ amount: number; coeff: number } | null>(null)
  const [bodyIds, setBodyIds] = useState<string[]>([])
  const [history, setHistory] = useState<HistoryRow[]>([])
  const [showInfo, setShowInfo] = useState(false)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [bonusBanner, setBonusBanner] = useState<string | null>(null)
  const [frozenCoeff, setFrozenCoeff] = useState(0)

  const stageRef = useRef<HTMLElement | null>(null)
  const physicsRef = useRef<TowerPhysics | null>(null)
  const worldRef = useRef<HTMLDivElement | null>(null)
  const swingElRef = useRef<HTMLDivElement | null>(null)
  const cableRef = useRef<SVGLineElement | null>(null)
  const blockEls = useRef<Map<string, HTMLDivElement>>(new Map())

  const phaseRef = useRef<Phase>('idle')
  const floorRef = useRef(0)
  const coeffRef = useRef(0)
  const betRef = useRef(100)
  const sizeRef = useRef({ w: 0, h: 0 })
  const bodyIdsRef = useRef<string[]>([])
  const throwingRef = useRef(false)
  const tRef = useRef(0)
  const swingXRef = useRef(0)
  const swingVxRef = useRef(0)
  const roundCounter = useRef(1)
  const resetTimer = useRef<number | null>(null)
  const frozenCoeffRef = useRef(0)   // locked-in cashout from a Frozen Floor
  const bonusTimer = useRef<number | null>(null)

  const building = phase === 'building'
  const throwing = phase === 'throwing'
  const canBet = phase === 'idle' || phase === 'crashed' || phase === 'cashed'

  useEffect(() => { phaseRef.current = phase }, [phase])
  useEffect(() => { floorRef.current = floor }, [floor])
  useEffect(() => { coeffRef.current = coeff }, [coeff])
  useEffect(() => { betRef.current = bet }, [bet])
  useEffect(() => { sizeRef.current = size }, [size])
  useEffect(() => { bodyIdsRef.current = bodyIds }, [bodyIds])

  // load wallet profile (balance) from the signed-in session
  useEffect(() => {
    const id = getUserId()
    userIdRef.current = id
    if (!id) { setSignedIn(false); return }
    fetch(`/api/users/${id}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((p) => { if (p) { setBalance(Number(p.balance) || 0); setSignedIn(true) } else setSignedIn(false) })
      .catch(() => setSignedIn(false))
  }, [])

  const currentCfg = useCallback((): TowerCfg => ({
    width: sizeRef.current.w || 640,
    platformTopY: (sizeRef.current.h || 540) - SHOP_BOTTOM - Math.round(SHOP_H * 0.78),
    blockW: BLOCK_W,
    bodyH: BODY_H,
  }), [])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver((es) => {
      const r = es[0].contentRect
      setSize({ w: Math.round(r.width), h: Math.round(r.height) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (size.w < 10 || size.h < 10) return
    if (!physicsRef.current) physicsRef.current = new TowerPhysics(currentCfg())
    else if (phaseRef.current === 'idle') physicsRef.current.reset(currentCfg())
  }, [size, currentCfg])

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current)
    if (bonusTimer.current) window.clearTimeout(bonusTimer.current)
  }, [])

  const pushHistory = (row: Omit<HistoryRow, 'id'>) =>
    setHistory((h) => [{ id: roundCounter.current++, ...row }, ...h].slice(0, 12))

  const showBonus = useCallback((src: string) => {
    setBonusBanner(src)
    if (bonusTimer.current) window.clearTimeout(bonusTimer.current)
    bonusTimer.current = window.setTimeout(() => setBonusBanner(null), 1700)
  }, [])

  // ── outcomes ──────────────────────────────────────────────────────────────
  const landSuccess = useCallback(() => {
    throwingRef.current = false
    const physics = physicsRef.current
    if (!physics) return
    const f = physics.blocks.length
    floorRef.current = f
    let c = coeffAt(f)
    // bonus roll on the freshly placed floor (from floor 2 up)
    if (f >= 2) {
      const r = Math.random()
      if (r < 0.07) { c = coeffAt(f + 2); showBonus(BONUS_TRIPLE) }                 // triple build
      else if (r < 0.14) { frozenCoeffRef.current = c; setFrozenCoeff(c); showBonus(BONUS_FROZEN) } // frozen cashout
      else if (r < 0.19) { c = +(c * (1.6 + Math.random())).toFixed(2); showBonus(BONUS_TEMPLE) }   // temple wheel
    }
    coeffRef.current = c
    setFloor(f); setCoeff(c)
    phaseRef.current = 'building'; setPhase('building')
    setMessage(null)
  }, [showBonus])

  const scheduleReset = useCallback(() => {
    resetTimer.current = window.setTimeout(() => {
      phaseRef.current = 'idle'; setPhase('idle')
      floorRef.current = 0; setFloor(0)
      coeffRef.current = 0; setCoeff(0)
      setMessage(null)
      bodyIdsRef.current = []; setBodyIds([])
      frozenCoeffRef.current = 0; setFrozenCoeff(0)
      physicsRef.current?.reset(currentCfg())
    }, RESET_MS)
  }, [currentCfg])

  const landFail = useCallback(() => {
    throwingRef.current = false
    phaseRef.current = 'crashed'; setPhase('crashed')
    const frozen = frozenCoeffRef.current
    if (frozen > 0) {
      // Frozen Floor guarantees the locked cashout even though the tower fell.
      const payout = +(betRef.current * frozen).toFixed(2)
      if (userIdRef.current) {
        fetch('/api/games/tower-rush', {
          method: 'POST', headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ action: 'settle', userId: userIdRef.current, amount: payout, coeff: frozen }),
        }).then((r) => r.json()).then((d) => { if (d.balance != null) setBalance(Number(d.balance)) }).catch(() => {})
      }
      setMessage(`Frozen save! +${fmt(payout)} ${CURRENCY}`)
      pushHistory({ coeff: frozen, won: true })
      setWin({ amount: payout, coeff: frozen })
    } else {
      setMessage('Missed — tower down!')
      pushHistory({ coeff: coeffRef.current, won: false })
    }
    scheduleReset()
  }, [scheduleReset])

  const landSuccessRef = useRef(landSuccess)
  const landFailRef = useRef(landFail)
  useEffect(() => { landSuccessRef.current = landSuccess; landFailRef.current = landFail }, [landSuccess, landFail])

  // ── single physics + render loop ────────────────────────────────────────────
  useEffect(() => {
    let raf = 0
    let last = 0
    const loop = (now: number) => {
      const dtMs = last ? Math.min(32, now - last) : 16
      last = now
      const physics = physicsRef.current
      if (physics) {
        const ph = phaseRef.current
        if (ph === 'building' && !throwingRef.current) {
          const om = swingOmega(floorRef.current)
          const amp = swingAmp(floorRef.current)
          tRef.current += (dtMs / 1000) * om
          const x = Math.sin(tRef.current) * amp
          swingXRef.current = x
          swingVxRef.current = Math.cos(tRef.current) * amp * om
          if (swingElRef.current) swingElRef.current.style.transform = `translateX(${x}px)`
          if (cableRef.current) cableRef.current.setAttribute('x2', String(CRANE_CX + x))
        } else {
          if (swingElRef.current) swingElRef.current.style.transform = 'translateX(0px)'
          if (cableRef.current) cableRef.current.setAttribute('x2', String(CRANE_CX))
        }
        if (ph === 'building' || ph === 'throwing' || ph === 'crashed') physics.update(dtMs)
        if (throwingRef.current) {
          const r = physics.resolveThrow()
          if (r === 'success') landSuccessRef.current()
          else if (r === 'fail') landFailRef.current()
        } else if (ph === 'building' && physics.toppled()) {
          landFailRef.current()
        }
        const h = sizeRef.current.h || 540
        const cameraY = Math.max(0, h * CAM_ANCHOR - physics.topY())
        if (worldRef.current) worldRef.current.style.transform = `translateY(${cameraY}px)`
        for (const id of bodyIdsRef.current) {
          const el = blockEls.current.get(id)
          const b = physics.bodyById(id)
          if (el && b) el.style.transform = `translate(${b.position.x - BLOCK_W / 2}px, ${b.position.y - BODY_H / 2}px) rotate(${b.angle}rad)`
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  // ── actions ──────────────────────────────────────────────────────────────────
  const start = useCallback(async () => {
    setError(null)
    const physics = physicsRef.current
    if (!physics) return
    if (!userIdRef.current) { setError('Sign in to play'); return }
    if (bet < MIN_STAKE) { setError(`Minimum stake is ${MIN_STAKE}`); return }
    if (bet > balance) { setError('Not enough balance — deposit to play'); return }
    // debit the stake on the server before the round starts
    try {
      const res = await fetch('/api/games/tower-rush', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'stake', userId: userIdRef.current, amount: bet }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) { setError(data.error ?? 'stake failed'); return }
      setBalance(Number(data.balance))
    } catch { setError('network error'); return }
    physics.reset(currentCfg())
    // nothing on the tower yet — the first block hangs on the hook to be dropped
    bodyIdsRef.current = []; setBodyIds([])
    tRef.current = 0; swingXRef.current = 0; swingVxRef.current = 0; throwingRef.current = false
    floorRef.current = 0; setFloor(0)
    coeffRef.current = 0; setCoeff(0)
    frozenCoeffRef.current = 0; setFrozenCoeff(0)
    phaseRef.current = 'building'; setPhase('building')
    setMessage('Drop the block onto the base!')
  }, [bet, balance, currentCfg])

  const throwFloor = useCallback(() => {
    const physics = physicsRef.current
    if (!physics || throwingRef.current) return
    const worldX = (sizeRef.current.w || 640) / 2 + swingXRef.current
    const vx = swingVxRef.current / 60
    const id = physics.throwFloor(worldX, vx)
    bodyIdsRef.current = [...bodyIdsRef.current, id]; setBodyIds(bodyIdsRef.current.slice())
    throwingRef.current = true
    phaseRef.current = 'throwing'; setPhase('throwing')
    setMessage(null)
  }, [])

  const onAction = useCallback(() => {
    const ph = phaseRef.current
    if (ph === 'idle' || ph === 'crashed' || ph === 'cashed') start()
    else if (ph === 'building') throwFloor()
  }, [start, throwFloor])

  const settle = (payout: number, coeff: number) => {
    if (!userIdRef.current || payout <= 0) return
    fetch('/api/games/tower-rush', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'settle', userId: userIdRef.current, amount: payout, coeff }),
    }).then((r) => r.json()).then((d) => { if (d.balance != null) setBalance(Number(d.balance)) }).catch(() => {})
  }

  const cashOut = useCallback(() => {
    if (phaseRef.current !== 'building') return
    const payout = +(betRef.current * coeffRef.current).toFixed(2)
    settle(payout, coeffRef.current)
    phaseRef.current = 'cashed'; setPhase('cashed')
    setMessage(`Cashed out x${coeffStr(coeffRef.current)}`)
    pushHistory({ coeff: coeffRef.current, won: true })
    setWin({ amount: payout, coeff: coeffRef.current })
    scheduleReset()
  }, [scheduleReset])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') { e.preventDefault(); onAction() }
      else if (e.code === 'Enter' && phaseRef.current === 'building') { e.preventDefault(); cashOut() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onAction, cashOut])

  const adjustBet = (delta: number) => {
    if (!canBet) return
    setBet((b) => Math.max(MIN_STAKE, Math.min(balance || Infinity, Math.round((b + delta) * 100) / 100)))
  }
  const setBetSafe = (v: number) => {
    if (!canBet) return
    setBet(Math.max(MIN_STAKE, Math.min(balance || Infinity, v)))
  }

  const skyPos = 100 - Math.min(floor * 5, 100)
  const showCashout = building || throwing

  return (
    <div className="fixed inset-0 bg-black text-white font-rubik flex items-center justify-center">
      {/* Win celebration splash */}
      {win && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center px-6 bg-black/85">
          <button type="button" onClick={() => setWin(null)} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:bg-white/10">
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Tower Rush" className="w-40 h-auto drop-shadow-[0_0_40px_rgba(255,200,0,0.5)]" />
          <p className="mt-6 text-4xl font-rowdies font-extrabold tracking-tight">YOU WON</p>
          <p className="mt-2 text-3xl font-bold tabular-nums text-[#ffd24a]">{CURRENCY} {fmt(win.amount)}</p>
          <p className="mt-1 text-xl font-extrabold text-[#8effa1] tabular-nums">x{coeffStr(win.coeff)}</p>
          <button type="button" onClick={() => setWin(null)} className="mt-8 w-full max-w-xs h-12 rounded-xl bg-[#22c55e] hover:bg-[#1eae53] text-white font-black">COLLECT</button>
        </div>
      )}

      {/* ===================== FULL-SCREEN GAME STAGE ===================== */}
      <section ref={stageRef} className="relative w-full h-full max-w-[1180px] overflow-hidden">
        {/* Sky */}
        <div className="absolute inset-0 transition-[background-position] duration-500 ease-out"
          style={{ backgroundImage: `url(${SKY})`, backgroundSize: 'cover', backgroundPosition: `center ${skyPos}%` }} />
        {/* Sunrise glow */}
        <div className="absolute left-1/2 -translate-x-1/2 w-72 h-48 rounded-full bg-amber-300/60 blur-3xl pointer-events-none" style={{ bottom: SHOP_BOTTOM + 20 }} />

        {/* Physics world layer (blocks) — behind the city foreground */}
        <div ref={worldRef} className="absolute inset-0 z-[4]" style={{ willChange: 'transform' }}>
          {bodyIds.map((id, i) => (
            <div
              key={id}
              ref={(el) => { if (el) blockEls.current.set(id, el); else blockEls.current.delete(id) }}
              style={{ position: 'absolute', left: 0, top: 0, width: BLOCK_W, height: BODY_H, willChange: 'transform' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={blockSrc(i)} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: BLOCK_W, height: BLOCK_DRAW_H }} className="object-contain object-bottom select-none drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]" />
            </div>
          ))}
        </div>

        {/* City / ground */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={CITY} alt="" className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none select-none" />

        {/* Shop base */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SHOP} alt="" className="absolute left-1/2 -translate-x-1/2 z-[6] select-none pointer-events-none" style={{ width: SHOP_W, bottom: SHOP_BOTTOM }} />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="Tower Rush" className="absolute top-3 left-3 z-20 w-20 sm:w-24 h-auto drop-shadow-lg select-none" />

        {/* Balance pill → wallet */}
        {signedIn ? (
          <Link href="/me" className="absolute top-3 right-3 z-20 rounded-xl bg-black/45 border border-white/10 px-3 py-1.5 text-right flex items-center gap-2 hover:border-white/30">
            <Wallet className="w-4 h-4 text-[#ffd24a]" />
            <div>
              <div className="text-[9px] text-white/50 leading-none">BALANCE</div>
              <div className="text-base font-black tabular-nums text-[#ffd24a] leading-tight">{fmt(balance)} <span className="text-[10px] text-white/60">{CURRENCY}</span></div>
            </div>
          </Link>
        ) : (
          <Link href="/login" className="absolute top-3 right-3 z-20 rounded-xl bg-primary text-primary-foreground border border-primary px-3 py-2 text-xs font-bold hover:bg-primary/90">
            Sign in
          </Link>
        )}

        {/* Results column (right edge) */}
        {history.length > 0 && (
          <div className="absolute top-20 right-3 z-20 flex flex-col items-end gap-1.5">
            <span className="text-[11px] font-bold text-[#bfe6ff]">Results</span>
            {history.slice(0, 7).map((h, i) => (
              <div key={h.id} className={`px-2.5 h-7 min-w-[50px] rounded-md flex items-center justify-center text-xs font-bold shadow ${h.won ? 'bg-gradient-to-b from-[#45c0ff] to-[#1f8fe6] text-white' : 'bg-gradient-to-b from-[#fbe2a0] to-[#f4c869] text-[#a8741b]'}`} style={{ opacity: Math.max(0.3, 1 - i * 0.12) }}>
                x{coeffStr(h.coeff)}
              </div>
            ))}
          </div>
        )}

        {/* Crane: cable + real hook; the block hangs close under the hook and they swing together */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20" style={{ width: CRANE_W, height: BLOCK_TOP_Y + 200 }}>
          <svg className="absolute inset-0 overflow-visible pointer-events-none" width={CRANE_W} height={BLOCK_TOP_Y + 200}>
            <line ref={cableRef} x1={CRANE_CX} y1={0} x2={CRANE_CX} y2={CABLE_TO} stroke="#2b3850" strokeWidth={3} strokeLinecap="round" />
          </svg>
          <div ref={swingElRef} className="absolute inset-0 will-change-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CRANE_HOOK} alt="" className="absolute left-1/2 -translate-x-1/2 select-none drop-shadow-[0_5px_6px_rgba(0,0,0,0.4)]" style={{ top: HOOK_TOP, width: HOOK_W }} />
            {building && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={blockSrc(floor)} alt="" className="absolute left-1/2 -translate-x-1/2 select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.35)]" style={{ top: BLOCK_TOP_Y, width: BLOCK_W }} />
            )}
          </div>
        </div>

        {/* Coefficient readout */}
        {floor > 0 && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 text-center">
            <div className={`font-rowdies text-5xl sm:text-6xl font-black tabular-nums drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)] ${phase === 'crashed' ? 'text-red-400' : 'text-white'}`}>x{coeffStr(coeff)}</div>
            {message && <div className={`mt-1 text-sm font-bold ${phase === 'crashed' ? 'text-red-300' : 'text-[#8effa1]'}`}>{message}</div>}
            {frozenCoeff > 0 && phase !== 'crashed' && (
              <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#1f8fe6]/30 border border-[#7fdcff]/50 px-2.5 py-0.5 text-xs font-bold text-[#bfeaff]">❄ Frozen x{coeffStr(frozenCoeff)} locked</div>
            )}
          </div>
        )}

        {/* Bonus-round announcement banner */}
        {bonusBanner && (
          <div className="absolute left-1/2 z-40 pointer-events-none tr-pop" style={{ top: '32%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bonusBanner} alt="" className="w-72 h-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]" />
          </div>
        )}

        {/* Info button */}
        <button onClick={() => setShowInfo((s) => !s)} className="absolute bottom-28 right-3 z-30 w-8 h-8 rounded-full bg-white/85 text-[#1f3a93] flex items-center justify-center shadow" aria-label="Game info">
          <Info className="w-4 h-4" />
        </button>

        {showInfo && (
          <div className="absolute inset-0 z-40 bg-black/70 flex flex-col items-center justify-center text-center px-6">
            <button onClick={() => setShowInfo(false)} className="absolute top-3 right-3 text-white/80 hover:text-white"><X className="w-6 h-6" /></button>
            <div className="w-12 h-12 rounded-full bg-white/90 text-[#1f3a93] flex items-center justify-center mb-4"><Info className="w-6 h-6" /></div>
            <p className="text-lg font-semibold">Minimum Coefficient: <span className="text-[#ffd54a] font-black">x{coeffStr(coeffAt(1))}</span></p>
            <p className="mt-4 max-w-sm text-sm text-white/70">The block swings on the crane. Tap <b>BUILD</b> to drop it — land it on the tower (real physics!) to grow the coefficient. The swing speeds up every floor; miss the stack and it topples. <b>CASHOUT</b> anytime.</p>
          </div>
        )}

        {/* Sign-in gate */}
        {signedIn === false && (
          <div className="absolute inset-0 z-40 bg-black/70 flex flex-col items-center justify-center text-center px-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Tower Rush" className="w-32 h-auto mb-4 drop-shadow-lg" />
            <p className="text-lg font-black text-white">Sign in to play for real</p>
            <p className="text-sm text-white/60 mt-1">Register, deposit with Mobile Money, and cash out your wins.</p>
            <div className="flex gap-3 mt-5">
              <Link href="/login" className="px-6 h-11 inline-flex items-center rounded-xl bg-primary text-primary-foreground font-bold">Log in</Link>
              <Link href="/register" className="px-6 h-11 inline-flex items-center rounded-xl bg-secondary text-secondary-foreground font-bold border border-border">Register</Link>
            </div>
          </div>
        )}

        {/* ===================== BOTTOM CONTROL BAR ===================== */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-3 flex flex-col items-center">
          {error && <div className="mb-2 rounded-lg bg-red-500/20 border border-red-500/40 px-3 py-1.5 text-xs text-red-200 text-center">{error}</div>}

          {/* idle: bet stepper above the buttons */}
          {canBet && (
            <div className="mb-2 w-full max-w-[660px] flex items-stretch gap-2">
              <div className="flex items-center justify-between rounded-xl bg-[#0c1320]/85 border border-white/10 px-2 h-11 flex-1">
                <button onClick={() => adjustBet(-10)} className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center"><Minus className="w-4 h-4" /></button>
                <input value={bet} onChange={(e) => setBetSafe(Number(e.target.value.replace(/[^0-9.]/g, '')) || 0)} inputMode="decimal" className="flex-1 bg-transparent text-center text-lg font-bold tabular-nums outline-none" />
                <button onClick={() => adjustBet(10)} className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={() => setBetSafe(balance)} className="h-11 px-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4fd7] text-sm font-bold">ALL IN</button>
              <button onClick={() => setBetSafe(bet * 2)} className="h-11 px-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4fd7] text-sm font-bold">x2</button>
            </div>
          )}

          {/* CASHOUT + BUILD side by side */}
          <div className="w-full max-w-[660px] rounded-2xl bg-[#0c1320]/85 border border-white/10 p-2 flex items-stretch gap-2">
            <button
              onClick={cashOut}
              disabled={!showCashout || throwing || floor === 0}
              className="flex-1 h-[72px] rounded-xl bg-no-repeat flex flex-col items-center justify-center text-white shadow-lg active:translate-y-0.5 transition-transform disabled:opacity-40"
              style={{ backgroundImage: `url(${CASHOUT_BTN})`, backgroundSize: '100% 100%' }}
            >
              <span className="font-rowdies font-black text-xl tracking-wide drop-shadow">CASHOUT</span>
              {showCashout && floor > 0 && <span className="text-xs font-bold text-white/90 tabular-nums">{fmt(+(bet * coeff).toFixed(2))} {CURRENCY}</span>}
            </button>
            <button
              onClick={onAction}
              disabled={throwing}
              className="flex-1 h-[72px] rounded-xl font-rowdies font-black text-2xl tracking-wide text-[#5a3b00] bg-no-repeat shadow-lg active:translate-y-0.5 transition-transform disabled:opacity-70"
              style={{ backgroundImage: `url(${BUILD_BTN})`, backgroundSize: '100% 100%' }}
            >
              {throwing ? 'DROPPING…' : 'BUILD'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


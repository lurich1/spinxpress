import type { ReactNode } from 'react'

// Tower Rush game scene used as the backdrop for the auth pages.
export function AuthScene({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-10">
      {/* sky */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/bajjjs/desktop/background-back.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 72%',
        }}
      />
      {/* warm sunrise glow behind the shop */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-24 w-72 h-44 rounded-full bg-amber-300/40 blur-3xl pointer-events-none" />
      {/* shop base */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bajjjs/desktop/basis-tower.webp" alt="" className="absolute bottom-12 left-1/2 -translate-x-1/2 w-44 select-none pointer-events-none drop-shadow-2xl opacity-95" />
      {/* city / ground */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bajjjs/desktop/background-front.webp" alt="" className="absolute bottom-0 left-0 w-full select-none pointer-events-none" />
      {/* contrast overlay so the form reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1322]/50 via-[#0b1322]/20 to-[#0b1322]/80 pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center">{children}</div>
    </div>
  )
}

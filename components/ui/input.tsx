import * as React from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Explicit dark bg + white text so inputs never fall back to a white
        // browser default (which made typed text invisible).
        'h-9 w-full min-w-0 rounded-md border border-[#38445c] bg-[#1b2438] px-3 py-1 text-base text-white placeholder:text-white/40 shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:ring-2 focus-visible:ring-primary/60',
        className,
      )}
      {...props}
    />
  )
}

export { Input }

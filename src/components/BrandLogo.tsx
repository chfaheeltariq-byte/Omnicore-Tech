import type { CSSProperties } from 'react'

type BrandLogoProps = {
  className?: string
  textClassName?: string
  showText?: boolean
  mono?: boolean
  light?: boolean
  size?: 'default' | 'large'
}

export function BrandLogo({
  className = '',
  textClassName = '',
  showText = true,
  mono = false,
  light = false,
  size = 'default',
}: BrandLogoProps) {
  const style = mono
    ? ({
        '--logo-a': '#0f172a',
        '--logo-b': '#334155',
        '--logo-c': '#64748b',
      } as CSSProperties)
    : ({
        '--logo-a': '#38bdf8',
        '--logo-b': '#4f46e5',
        '--logo-c': '#7c3aed',
      } as CSSProperties)

  const markClassName = size === 'large' ? 'h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]' : 'h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12'
  const titleClassName = size === 'large' ? 'text-[2.2rem] md:text-[2.6rem]' : 'text-[1.25rem] sm:text-[1.45rem] md:text-[1.9rem]'
  const subtitleClassName = size === 'large' ? 'text-[13px] tracking-[0.42em]' : 'text-[8px] tracking-[0.24em] sm:text-[9px] sm:tracking-[0.28em] md:text-[10px] md:tracking-[0.3em]'

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <svg viewBox="0 0 72 72" aria-hidden="true" className={`${markClassName} shrink-0`} style={style}>
        <defs>
          <linearGradient id="omniTechA" x1="10" y1="8" x2="59" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--logo-a)" />
            <stop offset="1" stopColor="var(--logo-b)" />
          </linearGradient>
          <linearGradient id="omniTechB" x1="58" y1="10" x2="12" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--logo-a)" />
            <stop offset="1" stopColor="var(--logo-c)" />
          </linearGradient>
        </defs>

        <path
          d="M20 19.5C25 13.5 35 11.3 44 13.3C52.2 15.1 58.3 21.1 58.8 28.8C59.3 36.1 55.8 41.4 49.4 46.8L39.6 54.9C35.1 58.5 28.6 58.2 24.4 54.4C19.8 50.3 19.9 43.4 24.7 39.4L35.2 30.7C38.6 27.9 43.6 28.1 46.6 31.2"
          fill="none"
          stroke="url(#omniTechA)"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52 19.5C47 13.5 37 11.3 28 13.3C19.8 15.1 13.7 21.1 13.2 28.8C12.7 36.1 16.2 41.4 22.6 46.8L32.4 54.9C36.9 58.5 43.4 58.2 47.6 54.4C52.2 50.3 52.1 43.4 47.3 39.4L36.8 30.7C33.4 27.9 28.4 28.1 25.4 31.2"
          fill="none"
          stroke="url(#omniTechB)"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M24 17.5C28.2 14.2 33.3 12.5 38.6 12.6"
          fill="none"
          stroke="rgba(255,255,255,0.58)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="36" r="6.25" fill="white" fillOpacity="0.98" />
      </svg>

      {showText ? (
        <div className={`leading-none ${textClassName}`}>
          <div className={`font-display font-semibold tracking-[-0.08em] ${titleClassName} ${light ? 'text-white' : 'text-slate-950'}`}>
            OmniCore
          </div>
          <div className={`mt-1.5 font-semibold uppercase ${subtitleClassName} ${light ? 'text-slate-300' : 'text-slate-500'}`}>
            Tech
          </div>
        </div>
      ) : null}
    </div>
  )
}

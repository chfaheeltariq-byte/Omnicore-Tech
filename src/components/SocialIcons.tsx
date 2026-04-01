type IconProps = {
  className?: string
}

function iconClassName(className?: string) {
  return ['h-5 w-5', className].filter(Boolean).join(' ')
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName(className)}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.98 1.35a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName(className)}>
      <path d="M4.98 3.5A1.98 1.98 0 1 1 3 5.48 1.98 1.98 0 0 1 4.98 3.5ZM3.29 8.25h3.38V21H3.29Zm5.5 0h3.24v1.74h.05A3.56 3.56 0 0 1 15.3 8c3.44 0 4.07 2.26 4.07 5.2V21H16v-6.9c0-1.65-.03-3.77-2.3-3.77s-2.65 1.8-2.65 3.65V21H7.67Z" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName(className)}>
      <path d="M13.64 21v-7.67h2.57l.38-2.99h-2.95V8.43c0-.86.24-1.45 1.48-1.45H16.7V4.3a21.2 21.2 0 0 0-2.3-.12c-2.27 0-3.82 1.38-3.82 3.93v2.23H8v2.99h2.58V21Z" />
    </svg>
  )
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName(className)}>
      <path d="M14.85 2h2.74a4.7 4.7 0 0 0 1.22 3.08A4.8 4.8 0 0 0 22 6.47v2.78a7.46 7.46 0 0 1-4.43-1.44v6.35a6.16 6.16 0 1 1-6.16-6.16c.29 0 .57.02.85.06v2.84a3.6 3.6 0 1 0 2.59 3.46V2Z" />
    </svg>
  )
}

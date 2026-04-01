import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/site'
import { BrandLogo } from './BrandLogo'
import { InstagramIcon, TikTokIcon } from './SocialIcons'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [passedHero, setPassedHero] = useState(false)
  const isHome = location.pathname === '/'
  const isMenuPage = location.pathname === '/menu'

  useEffect(() => {
    if (!isHome) {
      setPassedHero(true)
      return
    }

    const updateNavbarState = () => {
      const heroSection = document.querySelector('section')
      const threshold = heroSection ? Math.max(heroSection.clientHeight - 120, 120) : window.innerHeight * 0.55
      setPassedHero(window.scrollY > threshold)
    }

    updateNavbarState()
    window.addEventListener('scroll', updateNavbarState, { passive: true })
    window.addEventListener('resize', updateNavbarState)

    return () => {
      window.removeEventListener('scroll', updateNavbarState)
      window.removeEventListener('resize', updateNavbarState)
    }
  }, [isHome])

  const scrollToSection = (hash: string) => {
    const element = document.getElementById(hash)
    if (!element) {
      return
    }

    const y = element.getBoundingClientRect().top + window.scrollY - 104
    window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
  }

  const handleJump = (href: string) => {
    const hash = href.split('#')[1]

    if (location.pathname === '/' && hash) {
      scrollToSection(hash)
      return
    }

    navigate(href)
  }

  const heroHeader = isHome && !passedHero
  const headerClassName = heroHeader
    ? 'fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[linear-gradient(180deg,rgba(3,8,18,0.92),rgba(3,8,18,0.72))] backdrop-blur-xl transition-all duration-300'
    : 'fixed inset-x-0 top-0 z-[70] border-b border-white/80 bg-[rgba(248,250,252,0.88)] shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300'

  const desktopLinkClassName = heroHeader
    ? 'group relative px-2 py-1 text-sm font-semibold text-white/88 transition duration-300 hover:text-cyan-200'
    : 'group relative px-2 py-1 text-sm font-semibold text-slate-600 transition duration-300 hover:text-slate-950'

  const mobileButtonClassName = heroHeader
    ? 'flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-xl md:hidden'
    : 'flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden'

  const desktopSocialClassName = heroHeader
    ? 'flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-100'
    : 'flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600'

  const ctaClassName = heroHeader
    ? 'inline-flex items-center rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.14]'
    : 'inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700'

  const navShellClassName = heroHeader
    ? 'border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
    : 'border-slate-200/80 bg-white/80 shadow-[0_10px_25px_rgba(15,23,42,0.05)]'

  if (isMenuPage) {
    return null
  }

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-5 md:gap-6 md:px-8 md:py-[18px] lg:px-12">
        <Link to="/" className="flex items-center">
          <div className="float-soft rounded-full">
            <BrandLogo className="origin-left" textClassName="text-left" light={heroHeader} />
          </div>
        </Link>

        <nav className={`hidden items-center gap-3 rounded-full border px-4 py-2 md:flex lg:gap-4 lg:px-5 lg:py-2.5 ${navShellClassName}`}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleJump(link.href)}
              className={desktopLinkClassName}
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-1 -bottom-1 h-px origin-left scale-x-0 bg-current opacity-80 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
          <Link to="/services/ai-integration" className={`${ctaClassName} float-soft`}>
            AI Integration
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.instagram.com/omnicoretech516/"
            target="_blank"
            rel="noreferrer"
            className={desktopSocialClassName}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.tiktok.com/@omnicore.tech"
            target="_blank"
            rel="noreferrer"
            className={desktopSocialClassName}
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => navigate('/menu')}
          className={mobileButtonClassName}
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

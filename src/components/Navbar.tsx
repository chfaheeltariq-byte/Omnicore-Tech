import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/site'
import { BrandLogo } from './BrandLogo'

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
    ? 'fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[linear-gradient(180deg,rgba(3,8,18,0.96),rgba(3,8,18,0.86))] backdrop-blur-xl transition-colors duration-200'
    : 'fixed inset-x-0 top-0 z-[70] border-b border-slate-200/80 bg-[rgba(251,252,254,0.96)] shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-colors duration-200'

  const desktopLinkClassName = heroHeader
    ? 'text-sm font-semibold text-white transition hover:text-cyan-200'
    : 'text-sm font-semibold text-slate-600 transition hover:text-slate-950'

  const mobileButtonClassName = heroHeader
    ? 'flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-xl md:hidden'
    : 'flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden'

  if (isMenuPage) {
    return null
  }

  return (
    <header className={headerClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-5 md:gap-6 md:px-8 md:py-5 lg:px-12">
        <Link to="/" className="flex items-center">
          <BrandLogo className="origin-left" textClassName="text-left" light={heroHeader} />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleJump(link.href)}
              className={desktopLinkClassName}
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/services/ai-integration"
            className={heroHeader ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-950'}
          >
            AI Integration
          </Link>
        </nav>

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

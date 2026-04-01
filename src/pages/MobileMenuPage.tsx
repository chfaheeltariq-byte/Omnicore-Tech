import { BriefcaseBusiness, Home, Mail, UserRound, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../components/BrandLogo'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from '../components/SocialIcons'

const links = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/#about', icon: UserRound },
  { label: 'Services', href: '/#services', icon: BriefcaseBusiness },
  { label: 'Contact', href: '/#contact', icon: Mail },
]

export function MobileMenuPage() {
  const navigate = useNavigate()

  const handleJump = (href: string) => {
    const hash = href.split('#')[1]

    if (hash) {
      navigate({ pathname: '/', hash: `#${hash}` })
      return
    }

    navigate(href)
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_34%),linear-gradient(180deg,#020617_0%,#020617_46%,#03111d_100%)] px-4 py-6 md:hidden">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-md flex-col rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(3,12,24,0.98))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <BrandLogo textClassName="text-left" light />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#22d3ee,#2563eb)] text-white shadow-lg"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-8 grid gap-3">
          {links.map((link, index) => {
            const Icon = link.icon
            const active = index === 0

            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleJump(link.href)}
                className={`flex items-center gap-4 rounded-[1.15rem] px-4 py-4 text-left transition ${
                  active
                    ? 'border border-cyan-400/40 bg-white/[0.08] text-white shadow-[inset_3px_0_0_0_rgba(34,211,238,0.9)]'
                    : 'border border-white/8 bg-white/[0.03] text-white hover:border-cyan-400/20 hover:bg-white/[0.06]'
                }`}
              >
                <Icon size={20} className={active ? 'text-cyan-300' : 'text-slate-200'} />
                <span className="text-[1.05rem] font-medium">{link.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e] text-white"
            aria-label="WhatsApp"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.instagram.com/omnicoretech516/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f97316,#ec4899)] text-white"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://www.tiktok.com/@omnicore.tech"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#111111,#25f4ee,#fe2c55)] text-white"
            aria-label="TikTok"
          >
            <TikTokIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb] text-white"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d4ed8] text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => handleJump('/#contact')}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-[1.05rem] border border-white/20 bg-white/[0.03] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#22d3ee,#2563eb)] text-white">
            <Mail size={16} />
          </span>
          Get In Touch
        </button>
      </div>
    </section>
  )
}

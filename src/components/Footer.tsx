import { ChevronRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from './SocialIcons'

const serviceLinks = [
  { label: 'POS Systems', href: '/services/pos-systems' },
  { label: 'ERP Solutions', href: '/services/erp-solutions' },
  { label: 'Website Development', href: '/services/website-development' },
  { label: 'AI Integration', href: '/services/ai-integration' },
]

const companyLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Careers', href: 'mailto:omnicoretech516@gmail.com?subject=Careers%20at%20OmniCore%20Tech' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/omnicoretech516/',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@omnicore.tech',
    icon: TikTokIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: LinkedInIcon,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: FacebookIcon,
  },
]

export function Footer() {
  return (
    <footer className="mt-16 px-4 pb-8 pt-10 sm:px-5 md:mt-28 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.14),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(7,12,24,0.96))] shadow-[0_30px_100px_rgba(2,6,23,0.45)]">
        <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:gap-10 md:px-10 md:py-10">
          <div>
            <BrandLogo textClassName="text-left" light />
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
              Building scalable software and AI solutions for modern teams.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Services</p>
            <div className="mt-4 grid gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-slate-300 transition duration-300 hover:text-white"
                >
                  <ChevronRight size={14} className="text-slate-500 transition duration-300 group-hover:text-cyan-300" />
                  <span className="bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:from-sky-300 group-hover:to-violet-300 group-hover:bg-[length:100%_1px]">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Company</p>
            <div className="mt-4 grid gap-2">
              {companyLinks.map((link) =>
                link.href.startsWith('mailto:') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition duration-300 hover:text-white"
                  >
                    <ChevronRight size={14} className="text-slate-500 transition duration-300 group-hover:text-cyan-300" />
                    <span className="bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:from-sky-300 group-hover:to-violet-300 group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition duration-300 hover:text-white"
                  >
                    <ChevronRight size={14} className="text-slate-500 transition duration-300 group-hover:text-cyan-300" />
                    <span className="bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:from-sky-300 group-hover:to-violet-300 group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a href="mailto:omnicoretech516@gmail.com" className="group inline-flex items-center gap-3 transition duration-300 hover:text-white">
                <Mail size={15} className="text-slate-500 transition duration-300 group-hover:text-cyan-300" />
                <span className="bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:from-sky-300 group-hover:to-violet-300 group-hover:bg-[length:100%_1px]">
                  omnicoretech516@gmail.com
                </span>
              </a>
              <a href="tel:03148024141" className="group inline-flex items-center gap-3 transition duration-300 hover:text-white">
                <Phone size={15} className="text-slate-500 transition duration-300 group-hover:text-cyan-300" />
                <span className="bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:from-sky-300 group-hover:to-violet-300 group-hover:bg-[length:100%_1px]">
                  03148024141
                </span>
              </a>
              <div className="inline-flex items-start gap-3">
                <MapPin size={15} className="mt-1 text-slate-500" />
                <span className="leading-6 text-slate-300">Pakistan-based, global delivery</span>
              </div>
              <a
                href="https://wa.me/923148024141"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(168,85,247,0.12))] hover:text-white"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>Copyright {new Date().getFullYear()} OmniCore Tech. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a href="#" className="transition duration-300 hover:text-white">
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="transition duration-300 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

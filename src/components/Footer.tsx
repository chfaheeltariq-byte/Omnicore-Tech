import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/site'
import { BrandLogo } from './BrandLogo'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from './SocialIcons'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/omnicoretech516/',
    icon: InstagramIcon,
    className: 'from-[#f58529] via-[#dd2a7b] to-[#515bd4]',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@omnicore.tech',
    icon: TikTokIcon,
    className: 'from-[#111111] via-[#25f4ee] to-[#fe2c55]',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: LinkedInIcon,
    className: 'from-[#0a66c2] via-[#0a66c2] to-[#3b82f6]',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: FacebookIcon,
    className: 'from-[#1877f2] via-[#2563eb] to-[#60a5fa]',
  },
]

export function Footer() {
  return (
    <footer className="mt-16 px-4 pb-8 pt-10 sm:px-5 md:mt-28 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,249,0.94))] shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
        <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.3fr_0.9fr_1fr] md:gap-12 md:px-10 md:py-10">
          <div className="relative">
            <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
            <BrandLogo textClassName="text-left" />
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600 md:leading-8">
              Modern software systems, AI integrations, and premium digital infrastructure for organizations that want
              clarity, speed, and long-term scale.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:omnicoretech516@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_16px_30px_rgba(14,165,233,0.12)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                  <Mail size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-slate-400">Email</span>
                  <span className="truncate font-medium text-slate-900">omnicoretech516@gmail.com</span>
                </span>
              </a>
              <a
                href="tel:03148024141"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_16px_30px_rgba(14,165,233,0.12)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172a,#1d4ed8)] text-white">
                  <Phone size={16} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-slate-400">Call</span>
                  <span className="font-medium text-slate-900">03148024141</span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Services</p>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-700 transition duration-300 hover:bg-white hover:text-slate-950"
                >
                  <span>{service.title}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Reach Out</p>
            <div className="mt-5 rounded-[1.6rem] border border-slate-200/80 bg-white/70 p-5">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Pakistan-based, global delivery</p>
                  <p className="mt-1 leading-6 text-slate-600">Web, software, AI, and automation projects delivered remotely worldwide.</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Social Media</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-3 py-3 text-sm text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_30px_rgba(15,23,42,0.1)]"
                      >
                        <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${social.className} text-white shadow-lg`}>
                          <Icon />
                        </span>
                        <span>
                          <span className="block font-semibold text-slate-900">{social.label}</span>
                          <span className="text-xs text-slate-500">Visit profile</span>
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200/80 px-6 py-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
          <p>Omnicore Tech builds premium digital systems, websites, and AI experiences.</p>
          <p>Copyright {new Date().getFullYear()} Omnicore Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

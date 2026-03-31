import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/site'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 px-4 py-12 sm:px-5 md:mt-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr] md:gap-12">
          <div>
            <BrandLogo textClassName="text-left" />
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600 md:leading-8">
              Modern software systems, AI integrations, and premium digital infrastructure for organizations that want
              clarity, speed, and long-term scale.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Services</p>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="block text-sm text-slate-700 transition hover:text-slate-950">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:omnicoretech516@gmail.com" className="transition hover:text-slate-950">
                  omnicoretech516@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:03148034141" className="transition hover:text-slate-950">
                  03148034141
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Pakistan | Remote delivery worldwide</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-600">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

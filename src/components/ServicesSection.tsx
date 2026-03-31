import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function ServicesSection() {
  return (
    <section id="services" className="px-4 pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Services"
          title="Explore Omnicore Tech services through a simple landing page and dedicated subpages."
          description="Each service has its own route so visitors can move from overview to detailed capability pages without losing the premium, lightweight feel of the website."
        />

        <div className="mt-14 border-t border-slate-200">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative grid gap-6 border-b border-slate-200 py-8 transition duration-300 md:grid-cols-[72px_1.05fr_1.25fr_auto] md:items-start"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br ${service.accent} text-slate-800 transition duration-300 group-hover:scale-105`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                  </div>
                  <ul className="grid gap-2 text-sm font-medium text-slate-600 md:pt-1">
                    {service.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm font-semibold text-sky-700 md:justify-end">
                    Explore
                    <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

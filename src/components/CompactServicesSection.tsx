import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Bot, Building2, Globe, GraduationCap, ShoppingBag, TestTube2, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/site'
import { SectionHeading } from './SectionHeading'

const serviceIcons = {
  'pos-systems': ShoppingBag,
  'erp-solutions': Building2,
  'school-management-system': GraduationCap,
  'website-development': Globe,
  'software-testing': TestTube2,
  'website-enhancement': Wrench,
  'ai-integration': Bot,
} as const

const groups = [
  {
    id: 'business',
    label: 'Business Solutions',
    description: 'Operational systems for commerce, administration, and education.',
    serviceSlugs: ['pos-systems', 'erp-solutions', 'school-management-system'],
    stats: ['Retail and restaurant workflows', 'Unified finance and HR visibility', 'Parent, student, and admin portals'],
  },
  {
    id: 'web',
    label: 'Web Solutions',
    description: 'Premium web delivery, testing, and optimization in one compact track.',
    serviceSlugs: ['website-development', 'software-testing', 'website-enhancement'],
    stats: ['Responsive websites', 'Release quality checks', 'Performance and UX upgrades'],
  },
  {
    id: 'ai',
    label: 'AI Solutions',
    description: 'Agents, chatbots, and automations that add practical speed to customer and internal flows.',
    serviceSlugs: ['ai-integration'],
    stats: ['Lead routing and chat support', 'Business-aware automation', 'AI insight and workflow assistance'],
  },
] as const

export function CompactServicesSection() {
  const [activeGroup, setActiveGroup] = useState<(typeof groups)[number]['id']>('business')

  const currentGroup = groups.find((group) => group.id === activeGroup) ?? groups[0]
  const groupedServices = useMemo(
    () =>
      currentGroup.serviceSlugs
        .map((slug) => services.find((service) => service.slug === slug))
        .filter((service) => Boolean(service)),
    [currentGroup],
  )

  return (
    <section id="services" className="relative overflow-hidden px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_42%)]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Services"
          title="Grouped solutions that deliver more with less scrolling."
          description="We’ve condensed the service experience into three focused tracks so visitors can understand OmniCore quickly without scrolling through repeated blocks."
        />

        <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroup(group.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                activeGroup === group.id
                  ? 'bg-slate-950 text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)]'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <motion.div
          key={currentGroup.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mt-6 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="rounded-[1.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,#fbfdff_0%,#f1f7ff_100%)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">{currentGroup.label}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-4xl">
              {currentGroup.description}
            </h3>
            <div className="mt-5 grid gap-3">
              {currentGroup.stats.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {groupedServices.map((service) => {
              if (!service) return null
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Bot

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group rounded-[1.4rem] border border-slate-200/80 bg-white/92 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-slate-300 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-[-0.04em] text-slate-950">{service.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-slate-400 transition group-hover:text-sky-600" />
                  </div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

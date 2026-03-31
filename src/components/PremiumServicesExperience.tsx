import { motion } from 'framer-motion'
import { Bot, Building2, Cpu, Globe, GraduationCap, MoveRight, ShoppingBag, Sparkles, TestTube2, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { landingServices } from '../data/site'
import { SectionHeading } from './SectionHeading'

const icons = [ShoppingBag, Building2, GraduationCap, Globe, TestTube2, Wrench, Cpu, Bot, Sparkles]

export function PremiumServicesExperience() {
  return (
    <section id="services" className="relative overflow-hidden px-4 pt-20 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-10 h-96 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_45%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-fuchsia-300/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Premium Services Experience"
          title="Real imagery, stronger sections, and less empty white space."
          description="Each service now carries a more realistic visual treatment so the homepage feels complete, grounded, and premium."
        />

        <div className="mt-10 space-y-12 md:mt-16 md:space-y-16">
          {landingServices.map((service, index) => {
            const Icon = icons[index % icons.length]
            const reverse = index % 2 === 1

            return (
              <motion.section
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-7 md:gap-10 ${reverse ? 'lg:grid-cols-[1fr_1.05fr]' : 'lg:grid-cols-[1.05fr_1fr]'}`}
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:rotate-3 md:mb-5 md:h-14 md:w-14">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-[2rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.35rem] md:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">{service.description}</p>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 md:mt-4 md:leading-7">
                    Built with a realistic business context, stronger visual identity, and a service structure designed
                    to scale beyond launch.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold text-slate-800 md:mt-7 md:gap-5">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={`/services/${service.slug}`} className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 md:mt-7">
                    View More
                    <MoveRight size={16} className="transition group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className={reverse ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.35 }}
                    className="relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(255,255,255,0.84),rgba(56,189,248,0.12))] p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] md:rounded-[2rem] md:p-4"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent}`} />
                    <div className="pointer-events-none absolute -right-10 top-8 h-32 w-32 rounded-full bg-white/35 blur-2xl" />
                    <div className="relative overflow-hidden rounded-[1.25rem] border border-white/80 bg-slate-950/10 md:rounded-[1.5rem]">
                      <img src={service.photo} alt={service.title} className="h-[220px] w-full object-cover object-center transition duration-500 hover:scale-105 sm:h-[280px] md:h-[340px]" />
                    </div>
                    <div className="relative mt-3 flex items-center justify-between text-xs sm:text-sm md:mt-4">
                      <span className="font-semibold text-slate-900">{service.title}</span>
                      <span className="text-slate-500">OmniCore Module</span>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            )
          })}
        </div>
      </div>
    </section>
  )
}

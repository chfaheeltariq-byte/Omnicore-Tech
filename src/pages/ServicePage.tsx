import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MoveRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { services as allServices } from '../data/site'
import type { Service } from '../data/site'

type ServicePageProps = {
  services: Record<string, Service>
}

export function ServicePage({ services }: ServicePageProps) {
  const { slug } = useParams()
  const service = slug ? services[slug] : undefined
  const currentIndex = slug ? allServices.findIndex((item) => item.slug === slug) : -1
  const nextService = currentIndex >= 0 ? allServices[(currentIndex + 1) % allServices.length] : null

  if (!service) {
    return (
      <section className="px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl border-t border-slate-200 pt-8 text-center">
          <h1 className="font-display text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-4xl">Service not found</h1>
          <p className="mt-4 text-base text-slate-600 md:text-lg">The page you requested does not exist.</p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Return Home
          </Link>
        </div>
      </section>
    )
  }

  const Icon = service.icon
  const examples = service.examples ?? [
    `${service.shortTitle} implementation roadmap`,
    `${service.shortTitle} dashboard concept`,
    `${service.shortTitle} workflow automation view`,
  ]

  return (
    <section className="relative overflow-hidden px-4 pt-16 sm:px-5 md:px-8 md:pt-20">
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-72 h-80 w-80 rounded-full bg-indigo-300/12 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:h-16 md:w-16">
              <Icon size={28} />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-brand-700">Service Overview</p>
            <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] font-semibold leading-[0.94] tracking-[-0.08em] text-slate-950 sm:text-[3.3rem] md:text-[4.4rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-600 md:text-[1.12rem] md:leading-9">{service.summary}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-[0.98rem]">
              We shape this service so it feels practical for teams, clear for stakeholders, and scalable when the business grows.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.35rem] border border-white/70 bg-white/85 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">Best for</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{service.audience}</p>
              </div>
              <div className="rounded-[1.35rem] border border-white/70 bg-white/85 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">Typical timeline</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{service.timeline}</p>
              </div>
              <div className="rounded-[1.35rem] border border-white/70 bg-white/85 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">Outcome</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{service.outcome}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <div className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br ${service.accent} p-3 shadow-[0_30px_90px_rgba(15,23,42,0.14)] md:p-4`}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_35%)]" />
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={service.photo}
                  alt={service.photoAlt}
                  className="h-[300px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[360px] md:h-[420px]"
                  style={{ objectPosition: service.photoPosition ?? 'center center' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.45))]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.35rem] border border-white/20 bg-slate-950/48 p-4 text-white backdrop-blur-xl md:inset-x-5 md:bottom-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">Real-world context</p>
                  <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.04em]">{service.diagramTitle}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{service.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.9rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">Included capabilities</p>
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 py-4">
                  <CheckCircle2 size={20} className="shrink-0 text-emerald-500" />
                  <span className="font-semibold leading-7 text-slate-800">{feature}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-slate-500">Typical deliverables</p>
            <div className="mt-5 grid gap-3">
              {service.deliverables.map((deliverable) => (
                <div key={deliverable} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm font-medium leading-7 text-slate-700">
                  {deliverable}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.92))] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">Simple service diagram</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-[2.5rem]">
              {service.diagramTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              A clearer way to understand the flow: each step passes useful information into the next stage so the final system feels connected instead of fragmented.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {service.diagramSteps.map((step, index) => (
                <div key={step} className="relative rounded-[1.4rem] border border-slate-200/90 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{step}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    This stage is designed so teams get clearer decisions, less duplicated work, and a smoother operational flow.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.9rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">Real examples</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-[2.45rem]">
              Practical ways this service can be used
            </h2>
            <div className="mt-8 grid gap-4">
              {service.realExamples.map((example, index) => (
                <div key={example.name} className="rounded-[1.45rem] border border-slate-200/90 bg-slate-50/70 p-5 md:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-700">Example {index + 1}</p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-slate-950">{example.name}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-[0.98rem]">{example.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[1.9rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Concept pack</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-white md:text-[2.45rem]">
              Ideas we can shape into a live product
            </h2>
            <div className="mt-8 grid gap-4">
              {examples.map((example, index) => (
                <div key={example} className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200">Concept {index + 1}</p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">{example}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    A presentation-ready direction for teams that want to see the service translated into a tangible digital solution.
                  </p>
                </div>
              ))}
            </div>

            {nextService ? (
              <Link to={`/services/${nextService.slug}`} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                Next Service: {nextService.title}
                <MoveRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

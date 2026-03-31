import { motion } from 'framer-motion'
import { ArrowRight, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroHighlights = [
  'ERP, POS, and school management platforms',
  'Premium websites with stronger visual positioning',
  'AI agents, chatbots, and automation workflows',
]

const heroPhoto =
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80'

export function HeroSection() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden">
      <img src={heroPhoto} alt="OmniCore team and digital systems" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(3,8,18,0.94)_0%,rgba(3,8,18,0.78)_36%,rgba(3,8,18,0.48)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.2),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(99,102,241,0.3),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.16),rgba(2,6,23,0.5))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fbff] to-transparent" />
      <div className="pointer-events-none absolute -left-16 top-24 h-80 w-80 rounded-full bg-cyan-300/16 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-10 h-[24rem] w-[24rem] rounded-full bg-indigo-400/18 blur-3xl" />

      <div className="relative mx-auto flex min-h-[80svh] w-full max-w-7xl items-center px-4 pb-12 pt-24 sm:px-5 md:hidden">
        <div className="grid w-full grid-cols-1 items-start gap-8 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto flex w-full max-w-xl flex-col text-center"
          >
            <p className="mx-auto mb-4 max-w-[17rem] text-[10px] font-semibold uppercase leading-4 tracking-[0.22em] text-cyan-200">
              Powering Businesses Through Smart Digital Solutions
            </p>

            <h1 className="font-display text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.07em] text-white sm:text-[3.2rem]">
              Smart digital systems for serious businesses.
            </h1>

            <p className="mx-auto mt-5 max-w-[24rem] text-base leading-7 text-slate-200 sm:text-[1.05rem] sm:leading-8">
              OmniCore Tech builds ERP, POS, websites, testing workflows, AI chatbot integration, and automation systems
              that look premium, operate reliably, and help modern teams scale with confidence.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto hidden min-h-[92vh] w-full max-w-7xl items-center px-8 pb-14 pt-32 md:flex lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.72fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[48rem]"
          >
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200">
              Powering Businesses Through Smart Digital Solutions
            </p>

            <h1 className="max-w-[9.5ch] font-display text-[4.1rem] font-semibold leading-[0.92] tracking-[-0.09em] text-white lg:text-[5.7rem] xl:text-[6.2rem]">
              Smart digital systems for serious businesses.
            </h1>

            <p className="mt-7 max-w-[42rem] text-[1.12rem] leading-8 text-slate-200 xl:text-[1.22rem] xl:leading-9">
              OmniCore Tech builds ERP, POS, websites, testing workflows, AI chatbot integration, and automation systems
              that look premium, operate reliably, and help modern teams scale with confidence.
            </p>

            <div className="mt-10 flex flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid max-w-[46rem] gap-4 md:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/14 bg-white/8 p-5 text-sm leading-7 text-slate-200 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            className="grid gap-4 lg:justify-self-end"
          >
            <div className="w-full max-w-[25rem] rounded-[1.7rem] border border-white/16 bg-white/10 p-6 text-white backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.24)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">Live Product Focus</p>
              <p className="mt-3 text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.05em]">
                AI, ERP, POS, and websites in one delivery ecosystem
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Clear strategy, stronger interfaces, and reliable implementation for businesses that need more than a basic website.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <Link
                to="/services/ai-integration"
                className="group rounded-[1.4rem] border border-white/16 bg-white/8 p-5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                AI Integration
                <div className="mt-2 flex items-center gap-2 text-cyan-300">
                  View More
                  <MoveRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                to="/services/website-development"
                className="group rounded-[1.4rem] border border-white/16 bg-white/8 p-5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                Website Development
                <div className="mt-2 flex items-center gap-2 text-cyan-300">
                  View More
                  <MoveRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

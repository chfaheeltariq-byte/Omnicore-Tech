import { motion } from 'framer-motion'
import { process } from '../data/site'

export function LandingShowcase() {
  return (
    <section className="px-4 pt-12 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),rgba(255,255,255,0.84)_38%,rgba(14,165,233,0.06)_100%)] p-7 md:p-9"
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-sky-300" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">How We Work</span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.07em] text-slate-950 md:text-5xl">
                Built like a real delivery partner, not a design-only studio.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Omnicore Tech combines strategy, system design, and clean execution so your product feels polished in
                the interface and dependable underneath it.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="border-t border-slate-300 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Focused on</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Business-ready digital infrastructure</p>
                </div>
                <div className="border-t border-slate-300 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Style</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Fast, modern, scalable, and practical</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-slate-200">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="grid gap-4 border-b border-slate-200 py-6 md:grid-cols-[64px_160px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900">
                    <Icon size={20} />
                  </div>
                  <div className="text-lg font-semibold tracking-[-0.04em] text-slate-950">{step.title}</div>
                  <p className="text-base leading-7 text-slate-600">{step.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="px-4 pt-20 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[1.7rem] bg-slate-950 px-5 py-10 text-white shadow-[0_35px_100px_rgba(15,23,42,0.18)] sm:rounded-[2rem] sm:px-6 sm:py-12 md:px-10 md:py-18"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.5),transparent_30%),radial-gradient(circle_at_right,rgba(34,211,238,0.35),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(17,24,39,0.9))]" />
          <motion.div
            className="absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-sky-400/20 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-5rem] left-[-2rem] h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl"
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Ready to move</p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.06em] sm:mt-4 sm:text-[2.35rem] md:text-5xl">
                Let&apos;s Build Your Digital Future
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200 md:mt-5 md:text-lg md:leading-8">
                Whether you need a business system, a premium website, or AI-driven automation, Omnicore Tech is ready
                to help you ship with confidence.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

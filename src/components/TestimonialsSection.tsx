import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/site'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 3500)

    return () => window.clearInterval(id)
  }, [])

  const item = testimonials[active]

  return (
    <section className="px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-sky-300" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">Testimonials</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-4xl">
              Clients remember the clarity, speed, and confidence of the final product.
            </h2>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),rgba(255,255,255,0.84)_36%,rgba(168,85,247,0.08)_100%)] p-5 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45 }}
                className="h-full"
              >
                <p className="max-w-2xl font-display text-2xl font-semibold leading-[1.15] tracking-[-0.06em] text-slate-950 sm:text-3xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 sm:mt-8">
                  <p className="text-base font-semibold text-slate-950 sm:text-lg">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex gap-2 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${index === active ? 'w-10 bg-slate-950' : 'w-2.5 bg-slate-300'}`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

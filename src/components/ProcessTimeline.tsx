import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = ['Discovery', 'Design', 'Development', 'Testing', 'Deployment', 'Support']

export function ProcessTimeline() {
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 80%',
            end: 'bottom 35%',
            scrub: true,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-sky-300" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">Process Timeline</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-4xl">
              A compact delivery timeline from discovery to support.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              We move through strategy, design, engineering, testing, launch, and continuous support with clarity at
              every stage.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-[2px] bg-slate-200" />
            <div ref={lineRef} className="absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative pt-11 md:pt-12"
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:h-12 md:w-12">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-950 md:mt-3 md:text-2xl">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

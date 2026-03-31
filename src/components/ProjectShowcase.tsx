import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { showcaseProjects } from '../data/site'

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseProjects.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + showcaseProjects.length) % showcaseProjects.length)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % showcaseProjects.length)
  }

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-80 bg-[radial-gradient(circle_at_60%_10%,rgba(56,189,248,0.14),transparent_40%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-6 md:mb-8">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-sky-300" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">Project Showcase</span>
            </div>
            <h2 className="max-w-5xl font-display text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-4xl">
              Visual product surfaces that feel like real client work.
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-2 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:rounded-[1.8rem] sm:p-3 md:rounded-[2rem] md:p-4">
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {showcaseProjects.map((project) => (
              <article key={project.title} className="w-full shrink-0">
                <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="overflow-hidden rounded-[1.1rem] bg-slate-950 sm:rounded-[1.4rem] md:rounded-[1.6rem]">
                    <img
                      src={project.photo}
                      alt={project.title}
                      style={{ objectPosition: project.photoPosition }}
                      className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[320px] md:h-[420px] lg:h-[500px]"
                    />
                  </div>

                  <div className="flex flex-col justify-between rounded-[1.1rem] bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)] p-4 sm:rounded-[1.4rem] sm:p-5 md:rounded-[1.6rem] md:p-8">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{project.type}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-950 md:mt-3 md:text-4xl">{project.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-slate-700 md:mt-5 md:text-lg md:leading-8">{project.description}</p>
                    </div>

                    <div className="mt-6 grid gap-3 md:mt-8">
                      <div className="h-px w-full bg-slate-200" />
                      <p className="text-sm leading-7 text-slate-500">
                        Built to feel like a real deployed business product, not a placeholder concept screen.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 md:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:mt-6">
          {showcaseProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-10 bg-sky-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

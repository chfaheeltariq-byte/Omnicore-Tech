import { motion } from 'framer-motion'
import { highlights } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="pointer-events-none absolute left-0 right-0 top-10 h-64 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_45%)]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Why Choose Us"
          title="A compact trust layer with real delivery signals."
          description="Omnicore Tech combines modern visuals with dependable execution, so the work feels premium and performs in real business settings."
          align="center"
        />

        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 md:mt-10">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="grid gap-3 py-6 md:grid-cols-[84px_240px_1fr] md:items-start md:gap-4 md:py-8 md:text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 text-white shadow-[0_18px_50px_rgba(56,189,248,0.22)] transition duration-300 hover:-translate-y-1 hover:rotate-3 md:mx-0 md:h-14 md:w-14">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-950 md:text-xl">{item.title}</h3>
                <p className="text-[15px] leading-7 text-slate-600 md:text-base">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

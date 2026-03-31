import { motion } from 'framer-motion'
import { Cpu, Layers3, Rocket } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const items = [
  {
    title: 'Innovation-first delivery',
    text: 'We build practical digital products with modern engineering standards and crisp product thinking.',
    icon: Rocket,
  },
  {
    title: 'Scalable foundations',
    text: 'Every solution is structured to support future features, growth, and operational clarity.',
    icon: Layers3,
  },
  {
    title: 'AI-powered value',
    text: 'From chatbots to workflow automation, we add intelligence where it creates real business impact.',
    icon: Cpu,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="About Omnicore"
          title="We create polished digital systems that stay simple on the surface and scalable underneath."
          description="Omnicore Tech helps businesses, schools, and modern teams launch better software through clean UI, reliable engineering, and thoughtful automation."
        />

        <div className="mt-14 border-t border-slate-200">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-5 border-b border-slate-200 py-10 md:grid-cols-[72px_0.95fr_1.25fr] md:items-start"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950 md:pt-3">{item.title}</h3>
                <p className="text-base leading-7 text-slate-600">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

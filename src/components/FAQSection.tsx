import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const faqs = [
  {
    question: 'What kind of companies does OmniCore Tech work with?',
    answer: 'We work with growing businesses, schools, operational teams, and service brands that need systems, websites, and automation with a more premium delivery standard.',
  },
  {
    question: 'Can you handle both website work and internal systems?',
    answer: 'Yes. OmniCore covers customer-facing web experiences as well as ERP, POS, school management, QA, and automation workflows, which keeps projects more connected.',
  },
  {
    question: 'How quickly can a project start?',
    answer: 'Most discovery calls can happen quickly, and typical projects can begin with a focused scope once goals, timelines, and priority modules are aligned.',
  },
  {
    question: 'Do you support AI chatbot and automation setup?',
    answer: 'Yes. We can design chatbot flows, AI-assisted support systems, internal workflow automations, and practical integrations that reduce manual work.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="FAQ"
          title="Quick answers without another long section."
          description="A compact accordion keeps common questions available while reducing overall scroll length."
        />

        <div className="mt-8 divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200/80 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          {faqs.map((faq, index) => {
            const open = openIndex === index

            return (
              <div key={faq.question} className="px-4 py-2 sm:px-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-base font-semibold text-slate-950">{faq.question}</span>
                  {open ? <Minus size={18} className="shrink-0 text-slate-500" /> : <Plus size={18} className="shrink-0 text-slate-500" />}
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

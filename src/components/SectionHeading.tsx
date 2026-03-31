import { motion } from 'framer-motion'

type SectionHeadingProps = {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ badge, title, description, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={centered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}
    >
      {badge ? (
        <div className={centered ? 'mb-4 inline-flex items-center gap-3 md:mb-6' : 'mb-4 flex items-center gap-3 md:mb-6'}>
          <span className="h-px w-12 bg-slate-300" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{badge}</span>
        </div>
      ) : null}
      <h2 className="font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-[2.35rem] md:text-[3.5rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:mt-6 md:text-[1.05rem] md:leading-8">{description}</p> : null}
    </motion.div>
  )
}

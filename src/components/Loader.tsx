import { motion } from 'framer-motion'
import { BrandLogo } from './BrandLogo'

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.24),_transparent_34%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(180deg,_#07111f_0%,_#0f1a2b_100%)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.65, ease: 'easeOut' } }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[120px]"
          animate={{ scale: [0.95, 1.06, 0.98], opacity: [0.35, 0.62, 0.38] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-[54%] top-[46%] h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/14 blur-[100px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.26, 0.48, 0.26] }}
          transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[112px] items-center justify-center"
        >
          <BrandLogo
            className="justify-center"
            textClassName="text-left min-w-[240px]"
            light
            size="large"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
          className="mt-9 text-[11px] font-semibold uppercase tracking-[0.42em] text-slate-300"
        >
          Launching OmniCore
        </motion.p>

        <motion.div
          className="mt-7 h-[3px] w-full max-w-[330px] overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.35, ease: [0.19, 1, 0.22, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Bot, Orbit, Workflow } from 'lucide-react'

const aiPhoto =
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'

export function AIInnovationSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_70%_35%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.16),transparent_24%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-sky-300" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">AI Innovation</span>
            </div>
            <h2 className="font-display text-[2rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.35rem] md:text-5xl">
              A futuristic AI layer for chatbots, agents, analytics, and automation.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:mt-6 md:text-lg md:leading-8">
              We design AI experiences that look advanced and feel useful, from customer-facing chat to internal
              workflow intelligence and automated decision support.
            </p>
            <div className="mt-6 space-y-3 text-sm font-semibold text-slate-800 md:mt-8 md:space-y-4">
              {[
                'Floating chatbot experiences for websites',
                'Workflow automations that reduce repetitive tasks',
                'Analytics dashboards powered by behavioral insight',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="absolute left-0 top-6 z-10 w-[78%] rounded-[1.2rem] border border-white/80 bg-white/88 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:left-4 sm:w-auto sm:rounded-[1.4rem] sm:p-5 md:left-6 md:top-10 md:rounded-[1.6rem]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">AI Chat Assistant</p>
                  <p className="text-xs text-slate-500">Live website support</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">How can I automate my support flow?</div>
                <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm text-white">We can route leads, answer FAQs, and trigger workflows instantly.</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="absolute bottom-0 right-0 w-[86%] overflow-hidden rounded-[1.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,255,255,0.76))] p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:w-[76%] sm:rounded-[1.8rem] sm:p-4 md:top-0 md:bottom-auto md:w-[72%] md:rounded-[2rem]"
            >
              <img src={aiPhoto} alt="AI dashboard preview" className="h-[200px] w-full rounded-[1rem] object-cover object-center sm:h-[280px] md:h-[360px] md:rounded-[1.3rem]" />
              <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] bg-gradient-to-br from-sky-400 to-cyan-300 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Response Rate</p>
                  <p className="mt-2 text-3xl font-semibold">93%</p>
                </div>
                <div className="rounded-[1.4rem] bg-slate-950 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Automation Saved</p>
                  <p className="mt-2 text-3xl font-semibold">18h</p>
                </div>
                <div className="rounded-[1.4rem] bg-slate-100 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Workflow size={16} />
                    <span className="text-sm font-semibold">Lead routing live</span>
                  </div>
                </div>
                <div className="rounded-[1.4rem] bg-slate-100 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Orbit size={16} />
                    <span className="text-sm font-semibold">Analytics feedback loop</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              className="absolute bottom-8 right-14 hidden h-28 w-28 rounded-full border border-sky-300/50 sm:block md:bottom-10 md:right-24 md:h-36 md:w-36"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
              className="absolute bottom-2 right-7 hidden h-16 w-16 rounded-full border border-fuchsia-300/60 sm:block md:right-12 md:h-20 md:w-20"
            />
            <div className="pointer-events-none absolute left-20 top-40 h-28 w-28 rounded-full bg-sky-300/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

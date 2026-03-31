import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Shield, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

const formName = 'contact'

const encodeFormData = (data: Record<string, string>) =>
  new URLSearchParams(data).toString()

type FormState = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your message...' })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData({
          'form-name': formName,
          ...form,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setForm(initialForm)
      setStatus({ type: 'success', message: 'Your message was sent successfully. We will receive it by email.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'We could not send your message right now. Please try again in a moment.',
      })
    }
  }

  return (
    <section id="contact" className="px-4 py-12 sm:px-5 md:px-8 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            badge="Contact"
            title="Bring your next system, website, or AI workflow to Omnicore Tech."
            description="Share your goals and we'll help shape the right solution, from initial concept to scalable delivery."
          />

          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 md:mt-12">
            {[
              { icon: Sparkles, text: 'Fast discovery around your business goals' },
              { icon: Shield, text: 'Production-ready architecture and clean implementation' },
              { icon: Send, text: 'Direct inquiry delivery to the Omnicore Tech inbox' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="flex items-center gap-3 py-4 md:gap-4 md:py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 md:h-11 md:w-11">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          name={formName}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="border-t border-slate-200 pt-4 md:pt-6"
        >
          <input type="hidden" name="form-name" value={formName} />
          <input type="hidden" name="bot-field" />
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Name</span>
              <input
                className="border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-0"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                className="border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-0"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Company</span>
              <input
                className="border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-0"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Service</span>
              <input
                className="border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-0"
                name="service"
                value={form.service}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-semibold text-slate-700">Message</span>
            <textarea
              className="min-h-32 resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-0 md:min-h-40"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Send Message
              <Send size={18} />
            </button>
            {status.type !== 'idle' ? (
              <p
                className={`text-sm font-medium ${
                  status.type === 'success'
                    ? 'text-emerald-600'
                    : status.type === 'error'
                      ? 'text-rose-500'
                      : 'text-slate-500'
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

type Message = {
  id: number
  name: string
  email: string
  company: string | null
  service: string | null
  message: string
  created_at: string
}

export function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'}/admin/messages`)
        if (!response.ok) {
          throw new Error('Failed to load messages')
        }

        const payload = (await response.json()) as { messages: Message[] }
        setMessages(payload.messages ?? [])
        setStatus('success')
      } catch {
        setStatus('error')
      }
    }

    void loadMessages()
  }, [])

  return (
    <section className="px-4 py-16 sm:px-5 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[1.6rem] border border-white/80 bg-white/85 p-5 shadow-glass sm:rounded-[2rem] sm:p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Admin</p>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.06em] text-slate-950 md:text-4xl">
                Contact Messages
              </h1>
              <p className="mt-3 text-base text-slate-600">View messages submitted from the Omnicore Tech contact form.</p>
            </div>
            <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              {status === 'success' ? `${messages.length} message(s)` : 'Loading...'}
            </div>
          </div>

          {status === 'error' ? (
            <div className="mt-8 rounded-[1.5rem] bg-rose-50 p-5 text-rose-600">
              The admin panel could not reach the backend API. Start the server and configure the database.
            </div>
          ) : null}

          {status === 'loading' ? (
            <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-5 text-slate-600">Loading messages...</div>
          ) : null}

          {status === 'success' ? (
            <div className="mt-8 grid gap-4">
              {messages.length === 0 ? (
                <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-600">No messages have been submitted yet.</div>
              ) : (
                messages.map((message) => (
                  <article key={message.id} className="rounded-[1.3rem] border border-slate-100 bg-slate-50 p-4 sm:rounded-[1.5rem] sm:p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-slate-950">{message.name}</h2>
                        <p className="text-sm text-slate-600">
                          {message.email}
                          {message.company ? ` | ${message.company}` : ''}
                          {message.service ? ` | ${message.service}` : ''}
                        </p>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {new Date(message.created_at).toLocaleString()}
                      </p>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-700">{message.message}</p>
                  </article>
                ))
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

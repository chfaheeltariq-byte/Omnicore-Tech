import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-white/85 p-8 text-center shadow-glass md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-slate-950 md:text-5xl">
          This page does not exist
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The route you opened could not be found. Head back to the Omnicore Tech homepage to continue browsing.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-soft"
        >
          Return Home
        </Link>
      </div>
    </section>
  )
}

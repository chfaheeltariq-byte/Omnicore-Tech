import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const location = useLocation()
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false

      if (location.pathname === '/' && location.hash) {
        window.history.replaceState(null, '', location.pathname)
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (location.hash) {
      let attempts = 0
      const hash = location.hash.slice(1)

      const scrollWhenReady = () => {
        const element = document.getElementById(hash)
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 104
          window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
          return
        }

        attempts += 1
        if (attempts < 12) {
          window.setTimeout(scrollWhenReady, 80)
        }
      }

      window.setTimeout(scrollWhenReady, 80)
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location])

  return null
}

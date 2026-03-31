import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { PageTransition } from './components/PageTransition'
import { ScrollToTop } from './components/ScrollToTop'
import { services } from './data/site'
import { AdminPage } from './pages/AdminPage'
import { HomePage } from './pages/HomePage'
import { MobileMenuPage } from './pages/MobileMenuPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicePage } from './pages/ServicePage'

function App() {
  const location = useLocation()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = 'auto'
    }
  }, [])

  useEffect(() => {
    if (!showLoader) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [showLoader])

  useEffect(() => {
    if (!showLoader) {
      return
    }

    const timeout = window.setTimeout(() => {
      setShowLoader(false)
    }, 2400)

    return () => window.clearTimeout(timeout)
  }, [showLoader])

  const isMenuPage = location.pathname === '/menu'

  const serviceMap = useMemo(
    () => Object.fromEntries(services.map((service) => [service.slug, service])),
    [],
  )

  return (
    <>
      <AnimatePresence mode="wait">{showLoader ? <Loader key="loader" /> : null}</AnimatePresence>
      {!showLoader ? (
        <div className="relative min-h-screen bg-mist text-slate-900">
          <ScrollToTop />
          {!isMenuPage ? <Navbar /> : null}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route
                path="/services/:slug"
                element={
                  <PageTransition>
                    <ServicePage services={serviceMap} />
                  </PageTransition>
                }
              />
              <Route
                path="/admin/messages"
                element={
                  <PageTransition>
                    <AdminPage />
                  </PageTransition>
                }
              />
              <Route
                path="/menu"
                element={
                  <PageTransition>
                    <MobileMenuPage />
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFoundPage />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
          {!isMenuPage ? <Footer /> : null}
        </div>
      ) : null}
    </>
  )
}

export default App

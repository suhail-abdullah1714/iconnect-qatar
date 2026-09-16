import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import FindProperty from './components/FindProperty'
import ListProperty from './components/ListProperty'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import PropertyDetails from './pages/PropertyDetails'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

function IntroScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 1400)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F5F0]"
      aria-label="IConnect"
    >
      <div className="flex flex-col items-center">

        {/* IConnect Badge */}
        <div className="intro-badge relative flex h-24 w-24 items-center justify-center rounded-full border border-[#CFC8BC] bg-white shadow-[0_20px_60px_rgba(23,23,23,0.08)] md:h-28 md:w-28">

          {/* Outer ring */}
          <div className="absolute inset-2 rounded-full border border-[#B08A4A]/30" />

          <div className="text-center">
            <div className="text-[25px] font-semibold tracking-[-0.08em] text-[#171717] md:text-[29px]">
              IC
            </div>

            <div className="mt-0.5 text-[7px] font-medium uppercase tracking-[0.28em] text-[#B08A4A] md:text-[8px]">
              Qatar
            </div>
          </div>
        </div>

        {/* Brand name */}
        <div className="intro-text mt-6 text-center">
          <h1 className="text-xl font-medium tracking-[-0.04em] text-[#171717] md:text-2xl">
            IConnect
          </h1>

          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.35em] text-[#B08A4A]">
            Qatar
          </p>
        </div>

      </div>
    </div>
  )
}

function Home() {
  return (
    <main className="bg-[#F7F5F0] text-[#171717]">
      <Navbar />

      <Hero />

      <FeaturedProperties />

      <FindProperty />

      <ListProperty />

      <section
        id="about"
        className="bg-[#F7F5F0] px-6 py-28 md:px-10 md:py-36 lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B08A4A]">
              IConnect Qatar
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              Your next address could be
              <span className="font-serif italic text-[#B08A4A]">
                {' '}closer than you think.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#6F6B63] md:text-lg">
              Whether you are looking for an apartment, studio or
              room, or you have a property to rent, IConnect helps
              connect the right people across Qatar.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="#find-property"
                className="inline-flex items-center justify-center rounded-full bg-[#171717] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B08A4A]"
              >
                Find My Property
              </a>

              <a
                href="#list-property"
                className="inline-flex items-center justify-center rounded-full border border-[#CFC8BC] bg-white px-7 py-4 text-sm font-medium text-[#292622] transition-all duration-300 hover:border-[#B08A4A]"
              >
                List My Property
              </a>

            </div>

          </div>
        </div>
      </section>

      <Footer />

      <FloatingWhatsApp />
    </main>
  )
}

function AppContent() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroFinish = () => {
    setShowIntro(false)

    // Make absolutely sure the homepage starts from the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }

  return (
    <>
      {showIntro && (
        <IntroScreen onFinish={handleIntroFinish} />
      )}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <AppContent />

    </BrowserRouter>
  )
}

export default App
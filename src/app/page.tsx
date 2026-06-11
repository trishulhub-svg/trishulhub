'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import TechStack from '@/components/tech-stack'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const handlePreloaderDone = () => {
      // Small delay to ensure preloader exit animation completes
      setTimeout(() => {
        setIsRevealed(true)
      }, 100)
    }

    window.addEventListener('preloaderDone', handlePreloaderDone)

    // Fallback: if preloader is already done (e.g., cached page), reveal immediately
    const fallbackTimer = setTimeout(() => {
      setIsRevealed(true)
    }, 6000)

    return () => {
      window.removeEventListener('preloaderDone', handlePreloaderDone)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#0A0A0B] transition-opacity duration-800 ${
        isRevealed ? 'main-content-reveal opacity-100' : 'main-content-initial opacity-0'
      }`}
    >
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <TechStack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

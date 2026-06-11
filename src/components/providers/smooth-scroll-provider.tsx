'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Optimized Smooth Scroll Provider
 * - Uses Lenis's built-in rAF management instead of manual loop
 * - Auto-pauses when not scrolling to save CPU
 * - Only initializes when no reduced motion preference
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      autoRaf: true, // Let Lenis manage its own rAF — much more efficient
    })

    lenisRef.current = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

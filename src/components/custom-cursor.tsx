'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Optimized Custom Cursor
 * - Uses direct DOM manipulation instead of framer-motion springs
 * - Eliminates React re-renders on every mouse move
 * - Uses CSS transform for GPU-accelerated positioning
 */
export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const isVisible = useRef(false)
  const isHovering = useRef(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches

    if (prefersReducedMotion || isMobileDevice) {
      setIsMobile(isMobileDevice)
      return
    }

    const checkMobile = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches
      setIsMobile(mobile)
      if (mobile) cancelAnimationFrame(rafRef.current)
    }
    window.addEventListener('resize', checkMobile)

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Lerp factor for smooth ring following
    const LERP = 0.15

    const animate = () => {
      // Smooth follow for ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * LERP
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * LERP

      // Direct style manipulation — no React re-renders
      dot.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`

      rafRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY

      if (!isVisible.current) {
        isVisible.current = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
    }

    const handleMouseEnter = () => {
      isHovering.current = true
      dot.style.width = '4px'
      dot.style.height = '4px'
      ring.style.width = '64px'
      ring.style.height = '64px'
      ;(dot.firstElementChild as HTMLElement).style.background = '#14FFEC'
      ;(ring.firstElementChild as HTMLElement).style.borderColor =
        'rgba(20,255,236,0.5)'
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      dot.style.width = '8px'
      dot.style.height = '8px'
      ring.style.width = '40px'
      ring.style.height = '40px'
      ;(dot.firstElementChild as HTMLElement).style.background = '#F5F2ED'
      ;(ring.firstElementChild as HTMLElement).style.borderColor =
        'rgba(245,242,237,0.3)'
    }

    const handleDocumentLeave = () => {
      isVisible.current = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const handleDocumentEnter = () => {
      isVisible.current = true
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate)

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleDocumentLeave)
    document.addEventListener('mouseenter', handleDocumentEnter)

    // Attach hover listeners using event delegation for better performance
    const handleInteractiveEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.matches('a, button, input, textarea, select, [role="button"], [data-cursor-hover]')
      ) {
        handleMouseEnter()
      }
    }
    const handleInteractiveLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.matches('a, button, input, textarea, select, [role="button"], [data-cursor-hover]')
      ) {
        handleMouseLeave()
      }
    }

    document.addEventListener('mouseover', handleInteractiveEnter, {
      passive: true,
    })
    document.addEventListener('mouseout', handleInteractiveLeave, {
      passive: true,
    })

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleDocumentLeave)
      document.removeEventListener('mouseenter', handleDocumentEnter)
      document.removeEventListener('mouseover', handleInteractiveEnter)
      document.removeEventListener('mouseout', handleInteractiveLeave)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          width: 8,
          height: 8,
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'width 0.15s, height 0.15s, opacity 0.15s',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#F5F2ED',
            mixBlendMode: 'difference',
            transition: 'background 0.15s',
          }}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          width: 40,
          height: 40,
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'width 0.2s, height 0.2s, opacity 0.15s',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid rgba(245,242,237,0.3)',
            mixBlendMode: 'difference',
            transition: 'border-color 0.15s',
          }}
        />
      </div>
    </>
  )
}

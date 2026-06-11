'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const isHoveringRef = useRef(false)
  const hasSetup = useRef(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  // Snappier spring — less perceived lag
  const springConfig = { damping: 30, stiffness: 400, mass: 0.25 }
  const ringXSpring = useSpring(ringX, springConfig)
  const ringYSpring = useSpring(ringY, springConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    ringX.set(e.clientX)
    ringY.set(e.clientY)
    setIsVisible(true)
  }, [cursorX, cursorY, ringX, ringY])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches

    setIsMobile(isMobileDevice)

    if (prefersReducedMotion || isMobileDevice) {
      return
    }

    if (hasSetup.current) return
    hasSetup.current = true

    const handleHoverEnter = () => {
      isHoveringRef.current = true
      setIsHovering(true)
    }
    const handleHoverLeave = () => {
      isHoveringRef.current = false
      setIsHovering(false)
    }
    const handleDocumentLeave = () => setIsVisible(false)
    const handleDocumentEnter = () => setIsVisible(true)

    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleDocumentLeave)
    document.addEventListener('mouseenter', handleDocumentEnter)
    window.addEventListener('resize', checkMobile)

    // Event delegation on body — much faster than per-element MutationObserver
    document.body.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement
      if (
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
        )
      ) {
        handleHoverEnter()
      }
    })
    document.body.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement
      if (
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
        )
      ) {
        handleHoverLeave()
      }
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleDocumentLeave)
      document.removeEventListener('mouseenter', handleDocumentEnter)
      window.removeEventListener('resize', checkMobile)
      hasSetup.current = false
    }
  }, [handleMouseMove])

  if (isMobile) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isHovering ? '#14FFEC' : '#F5F2ED',
            mixBlendMode: 'difference',
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-full h-full rounded-full border"
          style={{
            borderColor: isHovering
              ? 'rgba(20,255,236,0.5)'
              : 'rgba(245,242,237,0.3)',
            mixBlendMode: 'difference',
          }}
        />
      </motion.div>
    </>
  )
}

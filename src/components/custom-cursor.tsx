'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const isHoveringRef = useRef(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const ringX = useMotionValue(0)
  const ringY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const ringXSpring = useSpring(ringX, springConfig)
  const ringYSpring = useSpring(ringY, springConfig)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches
    if (prefersReducedMotion || isMobileDevice) {
      return
    }

    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
      setIsHovering(true)
    }
    const handleMouseLeave = () => {
      isHoveringRef.current = false
      setIsHovering(false)
    }
    const handleDocumentLeave = () => setIsVisible(false)
    const handleDocumentEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleDocumentLeave)
    document.addEventListener('mouseenter', handleDocumentEnter)

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Use MutationObserver to detect new interactive elements
    const observer = new MutationObserver(() => {
      const newInteractiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
      )
      newInteractiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleDocumentLeave)
      document.removeEventListener('mouseenter', handleDocumentEnter)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
    }
  }, [cursorX, cursorY, ringX, ringY])

  if (isMobile) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
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
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
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

'use client'

import { useRef, useState, ReactNode } from 'react'

/**
 * Optimized Tilt Card
 * - Uses CSS transitions instead of framer-motion springs
 * - GPU-accelerated transform with will-change
 * - Throttled mouse move handling
 */
interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltStrength?: number
}

export default function TiltCard({
  children,
  className = '',
  tiltStrength = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const rafRef = useRef<number>(0)
  const pendingTilt = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX =
      ((e.clientY - centerY) / (rect.height / 2)) * -tiltStrength
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltStrength

    // Throttle with rAF
    pendingTilt.current = { x: rotateX, y: rotateY }
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setTilt(pendingTilt.current)
        rafRef.current = 0
      })
    }
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovering(false)
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovering ? 1.02 : 1})`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.4, 0.25, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

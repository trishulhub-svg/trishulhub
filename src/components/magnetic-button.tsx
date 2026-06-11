'use client'

import { useRef, useState, ReactNode } from 'react'

/**
 * Optimized Magnetic Button
 * - Uses CSS transitions instead of framer-motion springs
 * - Reduces re-renders and animation overhead
 * - Smooth magnetic pull effect maintained
 */
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  radius?: number
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  radius = 80,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const distance = Math.sqrt(distX * distX + distY * distY)

    if (distance < radius) {
      setPosition({
        x: distX * strength,
        y: distY * strength,
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

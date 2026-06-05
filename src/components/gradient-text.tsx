'use client'

import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export default function GradientText({
  children,
  className = '',
  as: Component = 'span',
}: GradientTextProps) {
  return (
    <Component className={`gradient-text-shimmer ${className}`}>
      {children}
    </Component>
  )
}

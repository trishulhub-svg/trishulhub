'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

/* ──────────────────────────────────────────────
   TrishulHub Premium Preloader
   SVG-based 3D trishul with CSS transforms,
   GSAP-style timeline via requestAnimationFrame
   
   Layout order (per screenshot):
   1. Trishul logo (top, largest)
   2. TRISHULHUB brand text (bold, white)
   3. Percentage counter (small, light, cyan)
   4. Progress bar (thin, cyan gradient)
   ────────────────────────────────────────────── */

function TrishulSVG() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="trishul-3d"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="trishulGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00DEFF" />
          <stop offset="100%" stopColor="#1F76F3" />
        </linearGradient>
        <linearGradient id="trishulGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00DEFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1F76F3" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowStrong">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Center shaft */}
      <rect
        x="96"
        y="60"
        width="8"
        height="120"
        rx="4"
        fill="url(#trishulGrad)"
        filter="url(#glow)"
      />

      {/* Left prong */}
      <path
        d="M60 30 L88 70 L84 74 L56 34 Z"
        fill="url(#trishulGrad)"
        filter="url(#glow)"
      />
      <path
        d="M56 34 L84 74 L80 78 L52 38 Z"
        fill="url(#trishulGrad2)"
      />

      {/* Right prong */}
      <path
        d="M140 30 L112 70 L116 74 L144 34 Z"
        fill="url(#trishulGrad)"
        filter="url(#glow)"
      />
      <path
        d="M144 34 L116 74 L120 78 L148 38 Z"
        fill="url(#trishulGrad2)"
      />

      {/* Center prong (top) */}
      <path
        d="M96 10 L104 10 L104 60 L100 65 L96 60 Z"
        fill="url(#trishulGrad)"
        filter="url(#glowStrong)"
      />
      <path
        d="M100 10 L104 10 L104 60 L100 65 Z"
        fill="url(#trishulGrad2)"
      />

      {/* Horizontal bar connecting prongs */}
      <rect
        x="55"
        y="68"
        width="90"
        height="6"
        rx="3"
        fill="url(#trishulGrad)"
        filter="url(#glow)"
      />

      {/* Decorative diamond at junction */}
      <path
        d="M100 74 L106 80 L100 86 L94 80 Z"
        fill="#00DEFF"
        filter="url(#glowStrong)"
      />

      {/* Base tip */}
      <path
        d="M96 180 L104 180 L102 165 L98 165 Z"
        fill="url(#trishulGrad)"
        filter="url(#glow)"
      />
    </svg>
  )
}

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'enter' | 'rotate' | 'exit' | 'done'>('enter')
  const [brandVisible, setBrandVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number>(0)

  const animate = useCallback(() => {
    const startTime = performance.now()
    const totalDuration = 3500

    const tick = (now: number) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(elapsed / totalDuration, 1)

      // Ease-out cubic for smooth counter
      const eased = 1 - Math.pow(1 - rawProgress, 3)
      const currentValue = Math.round(eased * 100)

      setProgress(currentValue)

      if (rawProgress >= 0.3 && !brandVisible) {
        setBrandVisible(true)
      }

      if (rawProgress < 1) {
        animFrameRef.current = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        setTimeout(() => {
          setPhase('exit')
          setTimeout(() => {
            setPhase('done')
            window.dispatchEvent(new CustomEvent('preloaderDone'))
          }, 900)
        }, 200)
      }
    }

    animFrameRef.current = requestAnimationFrame(tick)
  }, [brandVisible])

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setPhase('rotate')
      animate()
    }, 1000)

    return () => {
      clearTimeout(enterTimer)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [animate])

  if (phase === 'done') return null

  return (
    <div
      ref={containerRef}
      className={`preloader-container ${phase === 'exit' ? 'preloader-exit' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        willChange: phase === 'exit' ? 'transform, opacity' : 'auto',
      }}
    >
      {/* Trishul 3D Container */}
      <div
        className="trishul-wrapper"
        style={{
          position: 'relative',
          width: 160,
          height: 160,
          willChange: 'transform, opacity',
          animation:
            phase === 'enter'
              ? 'trishulEnter 1s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              : phase === 'rotate'
                ? 'trishulRotate 2s linear infinite'
                : 'none',
        }}
      >
        {/* Cyan glow backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: -30,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,222,255,0.2) 0%, transparent 70%)',
            animation: phase === 'rotate' ? 'glowPulse 2s ease-in-out infinite' : 'none',
            willChange: 'opacity, transform',
          }}
        />
        <TrishulSVG />
      </div>

      {/* TRISHULHUB Brand Text — prominent, bold, white */}
      <div
        style={{
          marginTop: 28,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 10,
          textTransform: 'uppercase' as const,
          color: '#FFFFFF',
          opacity: brandVisible ? 1 : 0,
          transform: brandVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        TRISHULHUB
      </div>

      {/* Percentage Counter — small, light, cyan */}
      <div
        style={{
          marginTop: 16,
          textAlign: 'center',
          fontFamily: "'Kanit', system-ui, sans-serif",
          fontSize: 22,
          fontWeight: 400,
          color: '#00DEFF',
          letterSpacing: 2,
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {progress}%
      </div>

      {/* Progress Bar */}
      <div
        style={{
          marginTop: 20,
          width: 160,
          height: 2,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00DEFF, #1F76F3)',
            borderRadius: 2,
            boxShadow: '0 0 20px rgba(0,222,255,0.8)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </div>
  )
}

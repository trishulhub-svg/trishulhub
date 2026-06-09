'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating shapes */}
      <div className="absolute top-[20%] left-[15%] w-20 h-20 rounded-xl glass-panel float-animation opacity-30 rotate-12" />
      <div className="absolute bottom-[25%] right-[20%] w-16 h-16 rounded-lg glass-panel float-slow opacity-20 -rotate-12" />
      <div className="absolute top-[60%] left-[60%] w-12 h-12 rounded-md glass-panel float-reverse opacity-25 rotate-45" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* 404 Number */}
          <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter gradient-text-shimmer select-none">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F2ED] mb-4 -mt-4">
            Page Not Found
          </h2>

          <p className="text-[#8A8580] text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="gradient-border inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-[#F5F2ED] bg-[#0A0A0B] hover:bg-[#0D9488]/20 transition-all duration-300"
              data-cursor-hover
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-[#F5F2ED] border border-white/10 hover:border-[#0D9488]/50 hover:bg-white/[0.03] transition-all duration-300"
              data-cursor-hover
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

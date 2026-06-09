'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionReveal from '@/components/section-reveal'
import GradientText from '@/components/gradient-text'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, FreshMart UK',
    content: 'Trishulhub transformed our grocery business with a stunning e-commerce platform. The team delivered beyond expectations with real-time inventory and seamless checkout. Revenue increased by 40% within three months of launch.',
    rating: 5,
    accent: '#0D9488',
  },
  {
    name: 'Rajesh Sharma',
    role: 'Founder, PropTech India',
    content: 'The CRM they built for our real estate agency is phenomenal. Lead management, virtual tours, and automated follow-ups have completely streamlined our operations. Their attention to detail is unmatched.',
    rating: 5,
    accent: '#14FFEC',
  },
  {
    name: 'Emily Chen',
    role: 'CTO, TradeFlow',
    content: 'Building a high-performance trading platform is no easy feat, but Trishulhub nailed it. Real-time data processing, sub-millisecond latency, and a beautiful interface. They truly understand fintech requirements.',
    rating: 5,
    accent: '#F59E0B',
  },
  {
    name: 'Marcus Johnson',
    role: 'Marketing Director, SparkClean',
    content: 'Our on-demand cleaning platform went from concept to launch in just 8 weeks. The booking system, real-time tracking, and payment integration work flawlessly. Outstanding development team.',
    rating: 4,
    accent: '#7B2FBE',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7B2FBE]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 sm:mb-20">
          <p className="text-[#0D9488] text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <GradientText>What Clients Say</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A8580] text-base sm:text-lg leading-relaxed">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
          </p>
        </SectionReveal>

        {/* Carousel */}
        <div className="relative">
          <div className="glass-panel rounded-2xl p-8 sm:p-12 min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="w-full text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating
                          ? 'text-[#F59E0B] fill-[#F59E0B]'
                          : 'text-white/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#F5F2ED] text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="text-[#F5F2ED] font-semibold">{t.name}</p>
                  <p className="text-sm" style={{ color: t.accent }}>
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-[#8A8580] hover:text-[#14FFEC] hover:border-[#14FFEC]/30 transition-all duration-300"
              data-cursor-hover
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-[#0D9488]'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  data-cursor-hover
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-[#8A8580] hover:text-[#14FFEC] hover:border-[#14FFEC]/30 transition-all duration-300"
              data-cursor-hover
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

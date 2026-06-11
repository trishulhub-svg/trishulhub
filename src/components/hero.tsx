'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import MagneticButton from '@/components/magnetic-button'
import GradientText from '@/components/gradient-text'

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const lineChildVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Parallax Decorative Elements */}
      <motion.div
        style={{ y: parallaxY1 }}
        className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-[#0D9488]/10 blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: parallaxY2 }}
        className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-[#14FFEC]/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: parallaxY3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7B2FBE]/5 blur-[150px] pointer-events-none"
      />

      {/* Floating Glassmorphic Shapes */}
      <motion.div
        style={{ y: parallaxY1 }}
        className="absolute top-[15%] right-[20%] hidden lg:block"
      >
        <div className="float-animation w-16 h-16 rounded-xl glass-panel rotate-12 opacity-40" />
      </motion.div>
      <motion.div
        style={{ y: parallaxY2 }}
        className="absolute bottom-[25%] left-[8%] hidden lg:block"
      >
        <div className="float-slow w-24 h-24 rounded-2xl glass-panel -rotate-12 opacity-30" />
      </motion.div>
      <motion.div
        style={{ y: parallaxY3 }}
        className="absolute top-[40%] right-[8%] hidden lg:block"
      >
        <div className="float-reverse w-12 h-12 rounded-lg glass-panel rotate-45 opacity-50" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-2 text-sm text-[#8A8580]">
            <Sparkles className="w-4 h-4 text-[#0D9488]" />
            <span>Web Development & Digital Services</span>
          </div>
        </motion.div>

        {/* Main Headline with Split Text Reveal */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={lineChildVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#F5F2ED] leading-[1.1]"
            >
              Building Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={lineChildVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              <GradientText>Experiences That Matter</GradientText>
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={0.6}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#8A8580] mb-10 leading-relaxed"
        >
          We craft powerful web solutions, drive digital growth, and help
          businesses thrive in the modern digital landscape with cutting-edge
          technology and creative excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.8}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="gradient-border group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-[#F5F2ED] bg-[#0A0A0B] hover:bg-[#0D9488]/20 transition-all duration-300"
              data-cursor-hover
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </MagneticButton>
          <MagneticButton>
            <button
              onClick={() => handleScrollTo('#services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-[#F5F2ED] border border-white/10 hover:border-[#0D9488]/50 hover:bg-white/[0.03] transition-all duration-300"
              data-cursor-hover
            >
              Our Work
            </button>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={1.2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 mx-auto flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#0D9488]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

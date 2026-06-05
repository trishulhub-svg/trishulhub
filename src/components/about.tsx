'use client'

import { Rocket, Users, Clock, Heart } from 'lucide-react'
import SectionReveal from '@/components/section-reveal'
import GradientText from '@/components/gradient-text'
import AnimatedCounter from '@/components/animated-counter'

const stats = [
  {
    icon: Rocket,
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    accent: '#0D9488',
  },
  {
    icon: Users,
    value: 4,
    suffix: '',
    label: 'Expert Members',
    accent: '#14FFEC',
  },
  {
    icon: Clock,
    value: 2,
    suffix: '+',
    label: 'Years Running',
    accent: '#F59E0B',
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Client Commitment',
    accent: '#0D9488',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0D9488]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 sm:mb-20">
          <p className="text-[#0D9488] text-sm font-medium tracking-wider uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <GradientText>About Trishulhub</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A8580] text-base sm:text-lg leading-relaxed">
            We are a passionate team of digital craftsmen dedicated to
            transforming ideas into impactful digital experiences. With expertise
            spanning web development, marketing, and design, we deliver
            solutions that drive real results.
          </p>
        </SectionReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 text-center group h-full border-t-2 border-t-transparent hover:border-t-[var(--stat-accent)] transition-all duration-500">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${stat.accent}15`,
                    color: stat.accent,
                    '--stat-accent': stat.accent,
                  } as React.CSSProperties}
                >
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F2ED] mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-[#8A8580] text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

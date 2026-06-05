'use client'

import {
  Globe,
  Megaphone,
  Share2,
  Palette,
  ShoppingCart,
  Users,
  ArrowUpRight,
} from 'lucide-react'
import SectionReveal from '@/components/section-reveal'
import GradientText from '@/components/gradient-text'
import TiltCard from '@/components/tilt-card'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern frameworks, optimized for performance and scalability.',
    accent: '#0D9488',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies that amplify your brand presence and drive measurable business growth.',
    accent: '#14FFEC',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Strategic social media presence that engages audiences and builds lasting community connections.',
    accent: '#F59E0B',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Intuitive, beautiful interfaces crafted with user-centered design principles that delight and convert.',
    accent: '#7B2FBE',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'End-to-end e-commerce platforms that deliver seamless shopping experiences and maximize revenue.',
    accent: '#0D9488',
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description:
      'Custom CRM systems that streamline operations, enhance relationships, and drive business efficiency.',
    accent: '#14FFEC',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#14FFEC]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 sm:mb-20">
          <p className="text-[#0D9488] text-sm font-medium tracking-wider uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <GradientText>Our Services</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A8580] text-base sm:text-lg leading-relaxed">
            From concept to launch, we provide comprehensive digital solutions
            that transform businesses and create lasting impact.
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 h-full group relative overflow-hidden">
                  {/* Accent glow on hover */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: service.accent }}
                  />

                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.accent}15`,
                      color: service.accent,
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F5F2ED] mb-3 group-hover:text-[#14FFEC] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8A8580] text-sm sm:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Arrow link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0D9488] group-hover:text-[#14FFEC] transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

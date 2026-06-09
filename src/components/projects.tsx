'use client'

import { ExternalLink, Github } from 'lucide-react'
import SectionReveal from '@/components/section-reveal'
import GradientText from '@/components/gradient-text'
import TiltCard from '@/components/tilt-card'

const projects = [
  {
    title: 'UK Grocery Store',
    description: 'Full-stack e-commerce platform for a UK-based grocery chain with real-time inventory management, delivery tracking, and multi-vendor support.',
    category: 'E-Commerce',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    accent: '#0D9488',
    image: null,
  },
  {
    title: 'CRM Real Estate',
    description: 'Comprehensive CRM solution for real estate agencies with property listings, lead management, virtual tours, and automated follow-ups.',
    category: 'CRM',
    tech: ['React', 'Python', 'PostgreSQL', 'AWS'],
    accent: '#14FFEC',
    image: null,
  },
  {
    title: 'Trading Platform',
    description: 'High-performance trading platform with real-time market data, algorithmic trading support, and advanced charting tools.',
    category: 'FinTech',
    tech: ['TypeScript', 'Node.js', 'Redis', 'WebSocket'],
    accent: '#F59E0B',
    image: null,
  },
  {
    title: 'SMM Dashboard',
    description: 'Social media management dashboard with content scheduling, analytics, multi-platform posting, and AI-powered content suggestions.',
    category: 'SaaS',
    tech: ['Next.js', 'Python', 'OpenAI', 'Tailwind'],
    accent: '#7B2FBE',
    image: null,
  },
  {
    title: 'Cleaning Service Portal',
    description: 'On-demand cleaning service marketplace with booking system, real-time tracking, payment processing, and customer management.',
    category: 'Marketplace',
    tech: ['React', 'Node.js', 'MongoDB', 'Google Maps'],
    accent: '#0D9488',
    image: null,
  },
  {
    title: 'Brand Identity Suite',
    description: 'Digital brand identity platform with logo generation, style guide creation, asset management, and collaborative design workflows.',
    category: 'Design',
    tech: ['Next.js', 'TypeScript', 'Figma API', 'Cloudflare'],
    accent: '#14FFEC',
    image: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F59E0B]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 sm:mb-20">
          <p className="text-[#0D9488] text-sm font-medium tracking-wider uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A8580] text-base sm:text-lg leading-relaxed">
            A showcase of our best work — from e-commerce platforms to trading systems,
            each project is built with precision and purpose.
          </p>
        </SectionReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden h-full group relative">
                  {/* Accent glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top right, ${project.accent}08, transparent 70%)`,
                    }}
                  />

                  {/* Project Visual */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)`,
                    }}
                  >
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 grid-pattern opacity-30" />

                    {/* Floating shapes */}
                    <div
                      className="absolute top-6 right-6 w-16 h-16 rounded-xl glass-panel float-animation opacity-40"
                      style={{ borderColor: `${project.accent}30` }}
                    />
                    <div
                      className="absolute bottom-6 left-6 w-12 h-12 rounded-lg glass-panel float-slow opacity-30 rotate-12"
                      style={{ borderColor: `${project.accent}20` }}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                        style={{
                          backgroundColor: `${project.accent}20`,
                          color: project.accent,
                          border: `1px solid ${project.accent}30`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 relative z-10">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#F5F2ED] mb-3 group-hover:text-[#14FFEC] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#8A8580] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-[#8A8580] border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0D9488] hover:text-[#14FFEC] transition-colors duration-300"
                        data-cursor-hover
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8A8580] hover:text-[#F5F2ED] transition-colors duration-300"
                        data-cursor-hover
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </a>
                    </div>
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

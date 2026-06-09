'use client'

import { Linkedin, Github } from 'lucide-react'
import SectionReveal from '@/components/section-reveal'
import GradientText from '@/components/gradient-text'

const teamMembers = [
  {
    name: 'Kiran',
    role: 'Full-Stack Developer & Co-Founder',
    bio: 'Full-stack architect passionate about building scalable, performant web applications with modern technologies and clean code principles.',
    initials: 'K',
    accent: '#0D9488',
  },
  {
    name: 'Taroon',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader driving Trishulhub\'s strategic growth and fostering a culture of innovation, excellence, and client-centric solutions.',
    initials: 'T',
    accent: '#14FFEC',
  },
  {
    name: 'Akshat',
    role: 'Full-Stack Developer & SMM Lead',
    bio: 'Dual-threat developer and social media strategist who bridges technical execution with compelling digital marketing campaigns.',
    initials: 'A',
    accent: '#F59E0B',
  },
  {
    name: 'Pruthvi',
    role: 'Management & Operations Head',
    bio: 'Operations expert who streamlines workflows, manages project lifecycles, and ensures every delivery meets the highest standards.',
    initials: 'P',
    accent: '#7B2FBE',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0D9488]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 sm:mb-20">
          <p className="text-[#0D9488] text-sm font-medium tracking-wider uppercase mb-4">
            The People
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <GradientText>Meet Our Team</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A8580] text-base sm:text-lg leading-relaxed">
            A compact team of dedicated professionals, each bringing unique
            expertise to deliver exceptional digital solutions.
          </p>
        </SectionReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.1}>
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 text-center group h-full relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 60px ${member.accent}10, 0 0 40px ${member.accent}08`,
                  }}
                />

                {/* Avatar */}
                <div className="relative mx-auto mb-5 w-20 h-20 sm:w-24 sm:h-24">
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-[#F5F2ED] transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${member.accent}, #14FFEC)`,
                      boxShadow: `0 0 0px ${member.accent}00`,
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${member.accent}40`
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${member.accent}00`
                    }}
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-[#F5F2ED] mb-1 group-hover:text-[#14FFEC] transition-colors duration-300">
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: member.accent }}
                >
                  {member.role}
                </p>
                <p className="text-[#8A8580] text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-[#8A8580] hover:text-[#14FFEC] hover:border-[#14FFEC]/30 transition-all duration-300"
                    data-cursor-hover
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-[#8A8580] hover:text-[#14FFEC] hover:border-[#14FFEC]/30 transition-all duration-300"
                    data-cursor-hover
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

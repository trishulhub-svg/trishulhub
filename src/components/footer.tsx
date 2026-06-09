'use client'

import { ArrowUp, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react'
import SectionReveal from '@/components/section-reveal'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Web Development',
  'Digital Marketing',
  'Social Media Management',
  'UI/UX Design',
  'E-Commerce Solutions',
  'CRM Solutions',
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/trishulhub', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070708]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <SectionReveal className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#0D9488] flex items-center justify-center font-bold text-[#F5F2ED] text-lg">
                T
              </div>
              <span className="text-[#F5F2ED] font-semibold text-xl tracking-tight">
                Trishulhub
              </span>
            </div>
            <p className="text-[#8A8580] text-sm leading-relaxed max-w-xs">
              Building digital experiences that matter. We craft powerful web
              solutions and help businesses thrive.
            </p>
          </SectionReveal>

          {/* Quick Links */}
          <SectionReveal delay={0.1}>
            <h3 className="text-[#F5F2ED] font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-[#8A8580] hover:text-[#14FFEC] text-sm transition-colors duration-300"
                    data-cursor-hover
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Services */}
          <SectionReveal delay={0.2}>
            <h3 className="text-[#F5F2ED] font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#services')
                    }}
                    className="text-[#8A8580] hover:text-[#14FFEC] text-sm transition-colors duration-300"
                    data-cursor-hover
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Social & CTA */}
          <SectionReveal delay={0.3}>
            <h3 className="text-[#F5F2ED] font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-[#8A8580] hover:text-[#14FFEC] hover:border-[#14FFEC]/30 transition-all duration-300"
                  data-cursor-hover
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="inline-flex items-center gap-2 text-sm text-[#0D9488] hover:text-[#14FFEC] transition-colors duration-300"
              data-cursor-hover
            >
              Start a project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </SectionReveal>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A8580] text-sm">
            &copy; 2026 Trishulhub. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-[#0D9488]/15 border border-[#0D9488]/20 flex items-center justify-center text-[#0D9488] hover:bg-[#0D9488]/30 hover:text-[#14FFEC] transition-all duration-300"
            data-cursor-hover
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

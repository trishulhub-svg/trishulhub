'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Github, Send, CheckCircle } from 'lucide-react'
import SectionReveal from '@/components/section-reveal'
import GradientText from '@/components/gradient-text'
import MagneticButton from '@/components/magnetic-button'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 4000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@trishulhub.com',
      href: 'mailto:hello@trishulhub.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/trishulhub',
      href: 'https://github.com/trishulhub',
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0D9488]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 sm:mb-20">
          <p className="text-[#0D9488] text-sm font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <GradientText>Contact Us</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A8580] text-base sm:text-lg leading-relaxed">
            Ready to start your next project? We&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
        </SectionReveal>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Form */}
          <SectionReveal delay={0.1} className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        damping: 10,
                        stiffness: 200,
                      }}
                      className="w-16 h-16 rounded-full bg-[#0D9488]/20 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-[#14FFEC]" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#F5F2ED] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#8A8580]">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#8A8580] mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#F5F2ED] placeholder-[#8A8580]/50 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] focus:outline-none transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#8A8580] mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#F5F2ED] placeholder-[#8A8580]/50 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] focus:outline-none transition-all duration-300"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#8A8580] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#F5F2ED] placeholder-[#8A8580]/50 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <div className="flex justify-end">
                      <MagneticButton>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="gradient-border inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-medium text-[#F5F2ED] bg-[#0A0A0B] hover:bg-[#0D9488]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          data-cursor-hover
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                                className="w-4 h-4 border-2 border-[#F5F2ED]/30 border-t-[#F5F2ED] rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-6 h-full flex flex-col justify-center">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    info.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-panel glass-panel-hover rounded-xl p-5 flex items-center gap-4 group"
                  data-cursor-hover
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0D9488]/15 flex items-center justify-center text-[#0D9488] group-hover:bg-[#0D9488]/25 transition-colors duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8580] mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-[#F5F2ED] font-medium group-hover:text-[#14FFEC] transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Extra CTA */}
              <div className="glass-panel rounded-xl p-5 mt-4">
                <p className="text-[#F5F2ED] font-medium mb-2">
                  Prefer a quick call?
                </p>
                <p className="text-[#8A8580] text-sm leading-relaxed">
                  Schedule a free consultation and let&apos;s discuss your
                  project requirements over a call.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

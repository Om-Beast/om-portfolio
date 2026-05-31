import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { developer } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import SectionDivider from '../ui/SectionDivider'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsReady = serviceId && templateId && publicKey

const socialLinks = [
  { label: 'Email', href: `mailto:${developer.email}`, Icon: Mail, value: developer.email },
  { label: 'GitHub', href: developer.social.github, Icon: FaGithub },
  { label: 'LinkedIn', href: developer.social.linkedin, Icon: FaLinkedin },
  { label: 'Codeforces', href: developer.social.codeforces, Icon: SiCodeforces },
  { label: 'LeetCode', href: developer.social.leetcode, Icon: SiLeetcode },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      if (emailjsReady) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: developer.email,
          },
          publicKey,
        )
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        const subject = encodeURIComponent(`Portfolio — ${form.name}`)
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        )
        window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`
        setStatus('success')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <>
      <SectionDivider />
      <section id="contact" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something remarkable"
            subtitle="Tell me about the role, project, or idea — I typically respond within 24 hours."
          />

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <ScrollReveal className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2.5 block text-xs font-medium text-zinc-500">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="input-premium"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2.5 block text-xs font-medium text-zinc-500">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="input-premium"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-2.5 block text-xs font-medium text-zinc-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="input-premium resize-none"
                    placeholder="What are you building?"
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </MagneticButton>
                  {!emailjsReady && (
                    <p className="text-xs text-zinc-600">
                      Opens your mail client if EmailJS is not configured
                    </p>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex items-center gap-2 text-sm text-emerald-400"
                    >
                      <CheckCircle2 size={16} /> Message sent — talk soon!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex items-center gap-2 text-sm text-rose-400"
                    >
                      <AlertCircle size={16} /> Something went wrong. Email me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </ScrollReveal>

            <div className="flex flex-col gap-3 lg:col-span-2">
              {socialLinks.map((link, i) => (
                <ScrollReveal key={link.label} delay={i * 0.06}>
                  <motion.a
                    href={link.href}
                    target={link.label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ x: 8, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors hover:border-white/12 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-400 transition group-hover:text-cyan-400">
                      <link.Icon size={18} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-zinc-600">{link.label}</p>
                      <p className="truncate text-sm font-medium text-zinc-300">
                        {link.value ?? link.href.replace(/^https?:\/\/(www\.)?/, '')}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-zinc-600 opacity-0 transition group-hover:opacity-100"
                    />
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

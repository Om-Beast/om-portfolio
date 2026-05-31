import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { developer } from '../../data/portfolio'
import MagneticButton from '../ui/MagneticButton'

const links = [
  { href: developer.social.github, Icon: FaGithub, label: 'GitHub' },
  { href: developer.social.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
  { href: developer.social.codeforces, Icon: SiCodeforces, label: 'Codeforces' },
  { href: developer.social.leetcode, Icon: SiLeetcode, label: 'LeetCode' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="card-premium flex flex-col gap-10 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s ship something
              <span className="text-gradient"> exceptional.</span>
            </p>
            <a
              href={`mailto:${developer.email}`}
              className="group mt-5 inline-flex items-center gap-2 text-zinc-500 transition hover:text-white"
            >
              {developer.email}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {links.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <MagneticButton as="a" href="#contact" className="btn-primary">
              Get in touch
            </MagneticButton>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-zinc-700 sm:text-left">
          © {new Date().getFullYear()} {developer.name} · Designed & built with React & Framer Motion
        </p>
      </div>
    </footer>
  )
}

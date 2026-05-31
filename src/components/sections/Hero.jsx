import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces } from 'react-icons/si'
import { developer, typingRoles } from '../../data/portfolio'
import MouseSpotlight from '../effects/MouseSpotlight'
import MagneticButton from '../ui/MagneticButton'
import TypingEffect from '../ui/TypingEffect'
import FloatingBadges from '../ui/FloatingBadges'
import AchievementBadges from '../ui/AchievementBadges'
import HeroComposition from '../ui/HeroComposition'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:pb-32 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/8 blur-[120px]" />
      </div>

      <FloatingBadges />

      <MouseSpotlight className="mx-auto w-full max-w-7xl" size={900} intensity={0.12}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-cyan-400" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-zinc-400">
                Open to frontend internships & roles
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600"
            >
              Portfolio · {new Date().getFullYear()}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-4 text-[2.85rem] font-bold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
            >
              <span className="text-gradient-animated">{developer.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex min-h-[2.5rem] items-center text-xl sm:text-2xl lg:text-[1.65rem]"
            >
              <TypingEffect words={typingRoles} className="font-medium text-zinc-100" />
            </motion.div>

            <AchievementBadges />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-8 max-w-xl text-base leading-[1.75] text-zinc-500 sm:text-lg"
            >
              {developer.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="mt-5 flex items-center gap-2 text-sm text-zinc-600"
            >
              <MapPin size={14} className="shrink-0 text-violet-400/80" />
              {developer.education.institute} · {developer.education.period}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton as="a" href="#projects" className="btn-primary group">
                View my work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="btn-secondary">
                <Mail size={16} />
                Get in touch
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {[
                { href: developer.social.github, Icon: FaGithub, label: 'GitHub' },
                { href: developer.social.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
                { href: developer.social.codeforces, Icon: SiCodeforces, label: 'Codeforces' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="group flex h-11 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 text-zinc-500 backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  <Icon size={16} />
                  <span className="hidden text-xs font-medium sm:inline">{label}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover:opacity-70"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <HeroComposition />
          </div>
        </div>
      </MouseSpotlight>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-700">
            Scroll
          </span>
          <div className="relative h-12 w-[1px] overflow-hidden bg-white/[0.06]">
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

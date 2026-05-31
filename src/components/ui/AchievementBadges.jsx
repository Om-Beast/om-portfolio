import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { heroAchievements } from '../../data/portfolio'

const accentStyles = {
  cyan: {
    glow: 'from-cyan-500/25 via-blue-500/10 to-transparent',
    border: 'group-hover:border-cyan-500/35',
    icon: 'text-cyan-400',
    pulse: 'bg-cyan-400/20',
    gradient: 'from-cyan-400/50 via-blue-500/30 to-violet-500/40',
  },
  violet: {
    glow: 'from-violet-500/25 via-indigo-500/10 to-transparent',
    border: 'group-hover:border-violet-500/35',
    icon: 'text-violet-400',
    pulse: 'bg-violet-400/20',
    gradient: 'from-violet-400/50 via-indigo-500/30 to-fuchsia-500/40',
  },
  fuchsia: {
    glow: 'from-fuchsia-500/25 via-pink-500/10 to-transparent',
    border: 'group-hover:border-fuchsia-500/35',
    icon: 'text-fuchsia-400',
    pulse: 'bg-fuchsia-400/20',
    gradient: 'from-fuchsia-400/50 via-violet-500/30 to-cyan-500/40',
  },
}

function AchievementCard({ badge, index }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const styles = accentStyles[badge.accent]
  const floatClass = index % 2 ? 'animate-float-delayed' : 'animate-float'

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.12,
      y: (e.clientY - rect.top - rect.height / 2) * 0.12,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.28 + index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={floatClass}
      style={{ animationDelay: `${index * 0.6}s` }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          setOffset({ x: 0, y: 0 })
        }}
        animate={{ x: offset.x, y: offset.y, scale: hovered ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        <motion.a
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group glow-border relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-2xl transition-colors duration-500 sm:p-5 ${styles.border}`}
          style={{
            boxShadow: hovered
              ? '0 0 40px -10px rgba(56,189,248,0.25), 0 20px 50px -20px rgba(0,0,0,0.6)'
              : '0 8px 32px -12px rgba(0,0,0,0.5)',
          }}
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
          />

          <motion.div
            animate={{ opacity: hovered ? 0.8 : 0.35, scale: hovered ? 1.15 : 1 }}
            transition={{ duration: 0.4 }}
            className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl ${styles.pulse}`}
          />

          <div className="relative z-10 flex items-start gap-3.5">
            <motion.span
              animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 4 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-xl backdrop-blur-sm"
            >
              {badge.emoji}
            </motion.span>

            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {badge.subtitle}
              </p>
              <p className="mt-1 font-display text-sm font-semibold leading-snug text-white sm:text-[0.95rem]">
                {badge.title}
              </p>
            </div>

            <motion.span
              animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0, opacity: hovered ? 1 : 0.4 }}
              className={`shrink-0 ${styles.icon}`}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </div>

          <motion.div
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${styles.gradient}`}
            initial={{ width: '0%' }}
            animate={{ width: hovered ? '100%' : '30%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default function AchievementBadges() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {heroAchievements.map((badge, i) => (
        <AchievementCard key={badge.id} badge={badge} index={i} />
      ))}
    </div>
  )
}

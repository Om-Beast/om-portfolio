import { motion } from 'framer-motion'
import { Brain, Code2, ExternalLink, Trophy } from 'lucide-react'
import { SiCodeforces } from 'react-icons/si'
import { competitiveProgramming } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import SectionDivider from '../ui/SectionDivider'

const iconMap = {
  trophy: Trophy,
  brain: Brain,
  code: Code2,
}

const accentStyles = {
  cyan: 'from-cyan-500/15 to-blue-500/5 border-cyan-500/15 text-cyan-400',
  violet: 'from-violet-500/15 to-indigo-500/5 border-violet-500/15 text-violet-400',
  fuchsia: 'from-fuchsia-500/15 to-pink-500/5 border-fuchsia-500/15 text-fuchsia-400',
}

export default function CompetitiveProgramming() {
  const { pillars, platform, focus } = competitiveProgramming

  return (
    <>
      <SectionDivider />
      <section id="cp" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Problem Solving"
            title="Competitive programming"
            subtitle={competitiveProgramming.summary}
          />

          <div className="mb-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon]
              const accent = accentStyles[pillar.accent]
              return (
                <ScrollReveal key={pillar.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className={`glass-strong glow-border h-full rounded-3xl border bg-gradient-to-br p-6 sm:p-8 ${accent}`}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04]">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {pillar.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal>
            <div className="glass-strong glow-border flex flex-col items-start justify-between gap-6 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                  <SiCodeforces size={32} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                    {platform.name}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-bold text-white">
                    {platform.rank}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-zinc-500">@{platform.handle}</p>
                </div>
              </div>
              <MagneticButton
                as="a"
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary shrink-0"
              >
                View profile
                <ExternalLink size={16} />
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Focus areas
            </p>
            <div className="flex flex-wrap gap-2">
              {focus.map((topic, i) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3.5 py-1.5 text-xs text-zinc-500 transition hover:border-white/12 hover:text-zinc-400"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

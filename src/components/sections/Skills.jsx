import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import SectionDivider from '../ui/SectionDivider'

const accentMap = {
  cyan: {
    pill: 'hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-300',
    dot: 'bg-cyan-400',
    label: 'text-cyan-400/80',
  },
  violet: {
    pill: 'hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300',
    dot: 'bg-violet-400',
    label: 'text-violet-400/80',
  },
  fuchsia: {
    pill: 'hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-300',
    dot: 'bg-fuchsia-400',
    label: 'text-fuchsia-400/80',
  },
  blue: {
    pill: 'hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300',
    dot: 'bg-blue-400',
    label: 'text-blue-400/80',
  },
}

function SkillCapsule({ name, accent, delay }) {
  const [hovered, setHovered] = useState(false)
  const colors = accentMap[accent]

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-flex cursor-default items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 text-sm text-zinc-400 transition-all duration-300 ${colors.pill}`}
    >
      <motion.span
        animate={{ scale: hovered ? 1.4 : 1 }}
        className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
      />
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <>
      <SectionDivider />
      <section id="skills" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Expertise"
            title="Tools I work with"
            subtitle="Technologies shaped through shipped projects and deliberate practice — no arbitrary percentages."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((group, gi) => {
              const colors = accentMap[group.color]
              return (
                <ScrollReveal key={group.category} delay={gi * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="glass-strong glow-border h-full rounded-3xl p-6 sm:p-8"
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
                      <h3 className={`font-mono text-xs uppercase tracking-[0.2em] ${colors.label}`}>
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((item, ii) => (
                        <SkillCapsule
                          key={item}
                          name={item}
                          accent={group.color}
                          delay={gi * 0.05 + ii * 0.03}
                        />
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

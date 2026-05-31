import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Palette, Rocket } from 'lucide-react'
import { developer, aboutHighlights } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import SectionDivider from '../ui/SectionDivider'

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    body: `${developer.education.degree}`,
    sub: developer.education.institute,
  },
  {
    icon: Rocket,
    title: 'Focus',
    body: 'Frontend · SaaS · AI Products',
    sub: 'Full-stack delivery',
  },
  {
    icon: Palette,
    title: 'Inspiration',
    body: 'Linear · Vercel · Framer',
    sub: 'Stripe · Rauno',
  },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <>
      <SectionDivider />
      <section id="about" ref={ref} className="section-padding relative">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About"
            title="Building with intent"
            subtitle="Every pixel, transition, and interaction is a deliberate product decision — not decoration."
          />

          <div className="grid gap-8 lg:grid-cols-12">
            <motion.div style={{ y }} className="lg:col-span-7">
              <ScrollReveal>
                <div className="glass-strong glow-border rounded-3xl p-8 sm:p-10">
                  <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
                    I&apos;m{' '}
                    <span className="font-medium text-white">{developer.name}</span>, a{' '}
                    {developer.role.toLowerCase()} studying at{' '}
                    <span className="font-medium text-white">
                      {developer.education.institute}
                    </span>{' '}
                    ({developer.education.period}). I build interfaces that feel fast,
                    intentional, and production-ready.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {aboutHighlights.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 text-zinc-500"
                      >
                        <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {infoCards.map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="glass glass-hover glow-border rounded-2xl p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-cyan-400">
                        <card.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{card.title}</h3>
                        <p className="mt-1 text-sm text-zinc-400">{card.body}</p>
                        <p className="mt-0.5 text-xs text-zinc-600">{card.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

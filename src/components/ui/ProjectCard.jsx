import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'
import MagneticButton from './MagneticButton'
import ProjectPreview from './ProjectPreview'
import ScrollReveal from './ScrollReveal'

const techIcons = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
}

export default function ProjectCard({ project, index = 0 }) {
  const isHero = project.featured
  const glowClass = project.glow === 'cyan' ? 'glow-cyan' : 'glow-violet'

  const content = (
    <article
      className={`group relative overflow-hidden rounded-[2rem] glass glass-hover ${
        isHero ? 'p-6 sm:p-10 lg:p-14' : 'p-6 sm:p-8'
      } ${isHero ? glowClass : ''}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-700 group-hover:opacity-70 ${project.gradient}`}
      />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

      <div
        className={`relative z-10 ${isHero ? 'grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16' : ''}`}
      >
        <div className={isHero ? 'order-2 lg:order-1' : ''}>
          {isHero && (
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300"
            >
              ★ Flagship Project
            </motion.span>
          )}
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
            {project.subtitle}
          </p>
          <h3
            className={`font-display mt-3 font-bold tracking-tight text-white ${
              isHero ? 'text-4xl sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]' : 'text-2xl sm:text-3xl'
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-5 leading-[1.75] text-zinc-400 ${
              isHero ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
            }`}
          >
            {isHero ? project.longDescription ?? project.description : project.description}
          </p>

          {project.highlights && isHero && (
            <ul className="mt-7 space-y-3">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-zinc-500"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                  {h}
                </motion.li>
              ))}
            </ul>
          )}

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => {
              const Icon = techIcons[t]
              return (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-black/30 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-white/12 hover:text-zinc-300"
                >
                  {Icon && <Icon className="text-cyan-400/70" size={12} />}
                  {t}
                </span>
              )
            })}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {project.liveDemo && (
              <MagneticButton
                as="a"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                Live Demo
              </MagneticButton>
            )}
            <MagneticButton
              as="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaGithub size={16} />
              GitHub
            </MagneticButton>
          </div>
        </div>

        <div className={isHero ? 'order-1 lg:order-2' : 'mt-8'}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <ProjectPreview theme={project.previewTheme} featured={isHero} />
          </motion.div>
        </div>
      </div>
    </article>
  )

  return (
    <ScrollReveal delay={index * 0.12} y={56}>
      <Tilt
        tiltMaxAngleX={isHero ? 3 : 5}
        tiltMaxAngleY={isHero ? 3 : 5}
        scale={1.012}
        transitionSpeed={1600}
        glareEnable
        glareMaxOpacity={0.08}
        glareColor="#38bdf8"
        className="transform-gpu"
      >
        {content}
      </Tilt>
    </ScrollReveal>
  )
}

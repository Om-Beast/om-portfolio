import { projects } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import SectionDivider from '../ui/SectionDivider'

export default function Projects() {
  const hero = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <>
      <SectionDivider />
      <section id="projects" className="section-padding relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Products that ship"
            subtitle="QuickAI is the flagship — built with the polish and architecture expected at high-growth startups."
          />

          <div className="space-y-12 lg:space-y-16">
            {hero && <ProjectCard project={hero} index={0} />}
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

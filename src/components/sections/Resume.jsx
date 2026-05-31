import { Download, ExternalLink, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { RESUME_PDF, resume } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import SectionDivider from '../ui/SectionDivider'

export default function Resume() {
  return (
    <>
      <SectionDivider />
      <section id="resume" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Resume"
            title="Ready for your team"
            subtitle={resume.summary}
          />

          <ScrollReveal>
            <div className="card-premium overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-start lg:p-12">
                  <motion.a
                    href={RESUME_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative mx-auto shrink-0 lg:mx-0"
                    aria-label="View resume PDF"
                  >
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-xl" />
                    <div className="glass-strong relative flex h-44 w-36 flex-col items-center justify-center rounded-2xl border border-white/[0.1] sm:h-52 sm:w-40">
                      <FileText size={36} className="text-cyan-400/80" />
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                        resume.pdf
                      </p>
                      <div className="mt-3 space-y-1.5 px-6">
                        <div className="h-1 w-full rounded bg-white/10" />
                        <div className="h-1 w-3/4 rounded bg-white/8" />
                        <div className="h-1 w-full rounded bg-white/10" />
                      </div>
                    </div>
                  </motion.a>

                  <ul className="flex-1 space-y-4">
                    {resume.highlights.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 text-sm text-zinc-400 sm:text-base"
                      >
                        <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/[0.06] p-6 sm:flex-row sm:justify-end lg:flex-col lg:border-l lg:border-t-0 lg:p-10">
                  <MagneticButton
                    as="a"
                    href={RESUME_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center sm:w-auto lg:min-w-[200px]"
                  >
                    <ExternalLink size={16} />
                    {resume.viewLabel}
                  </MagneticButton>
                  <MagneticButton
                    as="a"
                    href={RESUME_PDF}
                    download="Om-Kesharwani-Resume.pdf"
                    className="btn-primary w-full justify-center sm:w-auto lg:min-w-[200px]"
                  >
                    <Download size={18} />
                    {resume.downloadLabel}
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <ScrollReveal className={`mb-16 md:mb-20 ${alignClass}`}>
      {eyebrow && (
        <p className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-400/90">
          <span className="h-px w-10 bg-gradient-to-r from-cyan-400/80 to-transparent" />
          {eyebrow}
          {align === 'center' && (
            <span className="h-px w-10 bg-gradient-to-l from-violet-400/80 to-transparent" />
          )}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}

import { motion } from 'framer-motion'

function QuickAIPreview() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/60" />
          <span className="h-3 w-3 rounded-full bg-amber-400/60" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/60" />
        </div>
        <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] text-cyan-300">
          quickai-saas.vercel.app
        </span>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-500/20">
            <span className="font-display text-sm font-bold text-white">Q</span>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-white">QuickAI</p>
            <p className="text-xs text-zinc-500">AI-powered SaaS platform</p>
          </div>
        </div>
        <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/40 px-4 py-3">
          <p className="font-mono text-[11px] text-zinc-600">Ask anything...</p>
        </div>
        <div className="mt-3 flex gap-2">
          {['Generate', 'Analyze', 'Deploy'].map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[10px] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {['Dashboard', 'Billing', 'AI Chat'].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 transition hover:border-cyan-500/20"
          >
            <div className="h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400/70 to-violet-400/70" />
            <p className="mt-2.5 text-[10px] font-medium text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LibraryPreview() {
  return (
    <div className="flex h-full flex-col gap-3 p-5 sm:p-7">
      <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/35 to-fuchsia-500/20" />
        <div>
          <div className="h-2.5 w-28 rounded-md bg-white/20" />
          <div className="mt-2 h-1.5 w-20 rounded-md bg-white/10" />
        </div>
      </div>
      {['Catalog', 'Members', 'Issues'].map((row) => (
        <div
          key={row}
          className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 transition hover:border-violet-500/20"
        >
          <span className="text-[11px] font-medium text-zinc-500">{row}</span>
          <div className="h-1.5 w-10 rounded-full bg-violet-400/40" />
        </div>
      ))}
    </div>
  )
}

export default function ProjectPreview({ theme, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`glow-border relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#060610]/95 backdrop-blur-md ${
        featured ? 'min-h-[340px] sm:min-h-[400px]' : 'min-h-[240px] sm:min-h-[280px]'
      }`}
      style={{
        boxShadow: '0 32px 64px -24px rgba(0,0,0,0.7), 0 0 80px -40px rgba(56,189,248,0.1)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-violet-500/[0.05]" />
      {theme === 'quickai' ? <QuickAIPreview /> : <LibraryPreview />}
    </motion.div>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { developer } from '../../data/portfolio'

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[#020205]"
        >
          <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
          <div className="pointer-events-none absolute inset-0 grid-pattern" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 animate-pulse-glow rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-violet-500/25 blur-2xl" />
            <div className="glass-strong glow-border relative flex h-24 w-24 items-center justify-center rounded-2xl">
              <span className="font-display text-3xl font-bold text-gradient-animated">OK</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative mt-10 text-center"
          >
            <p className="font-display text-lg font-semibold text-white">{developer.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
              {developer.role}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mt-10 w-56"
          >
            <div className="h-[2px] overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

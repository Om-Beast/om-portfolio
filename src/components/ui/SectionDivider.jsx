import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px origin-center bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30"
      />
    </div>
  )
}

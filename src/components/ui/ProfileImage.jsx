import { useState } from 'react'
import { motion } from 'framer-motion'
import { developer } from '../../data/portfolio'

export default function ProfileImage() {
  const [error, setError] = useState(false)
  const initials = developer.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-fit"
    >
      <div className="absolute -inset-6 animate-pulse-glow rounded-[2.5rem] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-violet-500/25 blur-3xl" />
      <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-violet-500/80 opacity-90" />
      <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-zinc-950 p-1.5 shadow-2xl shadow-black/60">
        <div className="relative h-56 w-56 overflow-hidden rounded-[1.7rem] sm:h-64 sm:w-64 md:h-72 md:w-72">
          {!error ? (
            <img
              src={developer.profileImage}
              alt={developer.name}
              className="h-full w-full object-cover"
              onError={() => setError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-950 via-zinc-950 to-violet-950">
              <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -inset-8 rounded-[2.4rem] border border-dashed border-white/[0.06]"
      />
    </motion.div>
  )
}

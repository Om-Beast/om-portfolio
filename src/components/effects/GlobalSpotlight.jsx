import { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

function getSpotlightEnabled() {
  if (typeof window === 'undefined') return false
  return (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !window.matchMedia('(pointer: coarse)').matches
  )
}

export default function GlobalSpotlight() {
  const [enabled] = useState(getSpotlightEnabled)
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 })

  const background = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(56,189,248,0.07), rgba(99,102,241,0.04) 30%, transparent 55%)`

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2]"
      style={{ background }}
    />
  )
}

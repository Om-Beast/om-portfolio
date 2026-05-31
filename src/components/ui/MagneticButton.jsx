import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  className = '',
  strength = 0.28,
  as: Tag = 'button',
  ...props
}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setOffset({ x, y })
  }

  const reset = () => {
    setOffset({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y, scale: hovered ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 26, mass: 0.5 }}
      className="inline-block"
    >
      <Tag className={className} {...props}>
        {children}
      </Tag>
    </motion.div>
  )
}

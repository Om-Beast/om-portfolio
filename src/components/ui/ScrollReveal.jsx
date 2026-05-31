import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  scale = 0.98,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

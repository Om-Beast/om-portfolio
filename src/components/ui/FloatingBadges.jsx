import { motion } from 'framer-motion'
import { floatingTech } from '../../data/portfolio'

const positions = [
  'left-[2%] top-[20%]',
  'right-[3%] top-[24%]',
  'left-[6%] bottom-[30%]',
  'right-[2%] bottom-[34%]',
  'left-[18%] top-[10%]',
  'right-[14%] bottom-[20%]',
  'left-[30%] bottom-[14%]',
  'right-[24%] top-[14%]',
]

export default function FloatingBadges() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      {floatingTech.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + i * 0.07, duration: 0.5 }}
          className={`absolute ${positions[i % positions.length]} glass rounded-full px-3.5 py-1.5 font-mono text-[11px] text-zinc-500 ${
            i % 2 ? 'animate-float-delayed' : 'animate-float'
          }`}
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  )
}

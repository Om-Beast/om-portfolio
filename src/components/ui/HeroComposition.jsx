import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { Code2, Layers, Sparkles } from 'lucide-react'
import ProfileImage from './ProfileImage'

const glassCards = [
  {
    icon: Code2,
    label: 'React · Next.js',
    value: 'Production UI',
    position: '-left-8 top-8',
    delay: 0.5,
    float: '',
  },
  {
    icon: Layers,
    label: 'Full Stack',
    value: 'End-to-end',
    position: '-right-6 top-1/3',
    delay: 0.65,
    float: 'animate-float-delayed',
  },
  {
    icon: Sparkles,
    label: 'QuickAI',
    value: 'AI SaaS',
    position: 'left-4 -bottom-6',
    delay: 0.8,
    float: 'animate-float',
  },
]

export default function HeroComposition() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="perspective-1000 relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.01}
        transitionSpeed={1500}
        glareEnable
        glareMaxOpacity={0.08}
        glareColor="#22d3ee"
        className="relative mx-auto w-fit transform-gpu"
      >
        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-fuchsia-500/10 blur-3xl" />

          {glassCards.map(({ icon: Icon, label, value, position, delay, float }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute z-20 hidden sm:block ${position} ${float}`}
            >
              <div className="glass glow-border rounded-2xl px-4 py-3 shadow-2xl shadow-black/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="relative z-10">
            <ProfileImage />
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

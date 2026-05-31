import { useMemo } from 'react'
import Particles from '@tsparticles/react'

export default function ParticleField() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: isMobile ? 28 : 45, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ['#38bdf8', '#818cf8', '#a78bfa'] },
        opacity: { value: { min: 0.12, max: 0.38 } },
        size: { value: { min: 0.6, max: 1.8 } },
        move: {
          enable: true,
          speed: 0.45,
          direction: 'none',
          random: true,
          outModes: { default: 'out' },
        },
        links: {
          enable: !isMobile,
          distance: 120,
          color: '#6366f1',
          opacity: 0.1,
          width: 0.6,
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: !isMobile, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.2 } },
        },
      },
      detectRetina: true,
    }),
    [isMobile],
  )

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full"
      options={options}
    />
  )
}

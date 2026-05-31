import { useCallback } from 'react'
import { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesInit({ children }) {
  const init = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return <ParticlesProvider init={init}>{children}</ParticlesProvider>
}

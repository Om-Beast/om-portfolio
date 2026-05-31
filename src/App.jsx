import { useState, useEffect } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import AuroraBackground from './components/effects/AuroraBackground'
import GlobalSpotlight from './components/effects/GlobalSpotlight'
import ParticleField from './components/effects/ParticleField'
import ParticlesInit from './components/effects/ParticlesInit'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import CompetitiveProgramming from './components/sections/CompetitiveProgramming'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import { useReducedMotion } from './hooks/useReducedMotion'

function App() {
  const [loading, setLoading] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), reducedMotion ? 400 : 1800)
    return () => clearTimeout(timer)
  }, [reducedMotion])

  return (
    <LazyMotion features={domAnimation}>
      <LoadingScreen isLoading={loading} />
      <ParticlesInit>
        <div className="noise-overlay relative min-h-screen">
          <AuroraBackground />
          <GlobalSpotlight />
          {!reducedMotion && <ParticleField />}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <CompetitiveProgramming />
              <Resume />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </div>
      </ParticlesInit>
    </LazyMotion>
  )
}

export default App

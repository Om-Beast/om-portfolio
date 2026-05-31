import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { developer, navLinks } from '../../data/portfolio'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import MagneticButton from '../ui/MagneticButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Main"
        className={`glow-border mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? 'glass-strong shadow-2xl shadow-black/50'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-3"
        >
          <span className="glass flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xs font-bold text-white transition group-hover:border-cyan-500/30">
            OK
          </span>
          <span className="hidden font-display text-sm font-semibold text-white sm:block">
            {developer.name.split(' ')[0]}
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-xl px-4 py-2 text-sm transition-colors duration-300 ${
                  activeId === link.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <MagneticButton
          as="button"
          type="button"
          onClick={() => scrollTo('contact')}
          className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex"
        >
          Hire me
        </MagneticButton>

        <button
          type="button"
          className="rounded-xl p-2.5 text-zinc-400 transition hover:bg-white/[0.05] hover:text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong glow-border mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl p-2 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(link.id)}
                className={`block w-full rounded-xl px-4 py-3.5 text-left text-sm transition ${
                  activeId === link.id
                    ? 'bg-white/[0.08] font-medium text-white'
                    : 'text-zinc-400'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="mt-2 border-t border-white/[0.06] p-2">
              <MagneticButton
                as="button"
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full justify-center"
              >
                Hire me
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

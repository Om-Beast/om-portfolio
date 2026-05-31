import { useEffect, useState } from 'react'

export function useMousePosition(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    el.addEventListener('mousemove', handleMove, { passive: true })
    return () => el.removeEventListener('mousemove', handleMove)
  }, [ref])

  return position
}

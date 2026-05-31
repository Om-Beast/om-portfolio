import { useRef } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function MouseSpotlight({ children, className = '', size = 700, intensity = 0.18 }) {
  const ref = useRef(null)
  const { x, y } = useMousePosition(ref)

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(${size}px circle at ${x}px ${y}px, rgba(34,211,238,${intensity}), rgba(129,140,248,${intensity * 0.5}) 25%, transparent 50%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

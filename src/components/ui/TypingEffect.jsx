import { TypeAnimation } from 'react-type-animation'

export default function TypingEffect({ words, className = '' }) {
  const sequence = words.flatMap((word) => [word, 1800])

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={45}
      repeat={Infinity}
      className={className}
      cursor
    />
  )
}

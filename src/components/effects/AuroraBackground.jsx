export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="animate-aurora absolute -left-[25%] top-[-20%] h-[60vh] w-[60vw] rounded-full bg-blue-600/20 blur-[130px]" />
      <div
        className="animate-aurora-slow absolute right-[-15%] top-[5%] h-[50vh] w-[45vw] rounded-full bg-cyan-500/18 blur-[110px]"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="animate-pulse-glow absolute bottom-[-15%] left-[15%] h-[55vh] w-[55vw] rounded-full bg-violet-600/14 blur-[120px]"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="animate-aurora absolute bottom-[10%] right-[20%] h-[35vh] w-[35vw] rounded-full bg-fuchsia-600/10 blur-[100px]"
        style={{ animationDelay: '-12s' }}
      />
      <div className="mesh-bg absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-40" />
    </div>
  )
}

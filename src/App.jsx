import { useEffect } from 'react'

const projects = [
  {
    idx: '01', name: 'FleetFlow', tag: 'Enterprise rental & fleet platform',
    desc: 'A vehicle rental marketplace built around one hard problem: how do you let strangers book the same physical asset without double-booking it or trusting them blindly?',
    specs: [
      'Rule-based Trust Score Engine from payment history, cancellations, and activity',
      'JWT auth with role-based access for Customer / Fleet Owner / Admin',
      'Concurrency-safe booking lifecycle — conflict detection, idempotency keys, dynamic pricing',
      'Redis caching and Razorpay payment integration',
    ],
    chips: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redis', 'Razorpay'],
    href: 'https://github.com/Om-Beast/RentX',
  },
  {
    idx: '02', name: 'FlowForge', tag: 'Workflow automation SaaS',
    desc: 'An enterprise workflow automation platform — think a self-hosted Zapier — where workflows are directed graphs that have to be validated, queued, and executed reliably at scale.',
    specs: [
      'DAG execution engine with topological sort and cycle detection',
      'BullMQ-backed job queue with a dedicated worker pool for async runs',
      'Real-time execution events pushed to the client over Socket.IO',
      'Full auth, workflow CRUD, notifications, and usage analytics',
    ],
    chips: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.IO', 'React / Vite'],
    href: 'https://github.com/Om-Beast/FlowForge',
  },
  {
    idx: '03', name: 'QuickAI', tag: 'Multi-feature AI SaaS',
    desc: 'A unified AI workspace wrapping Gemini behind a proper backend — auth, persistence, and per-user history — instead of a raw API-key wrapper.',
    specs: [
      'Gemini-powered content generation, document summarization, and image generation',
      'Clerk-based auth with per-user AI workspace history',
      'Modular backend APIs for prompt management and data persistence',
    ],
    chips: ['Next.js', 'React', 'Node.js', 'Clerk', 'PostgreSQL', 'Gemini AI'],
    href: 'https://github.com/Om-Beast/quickai-saas',
  },
]

const contributions = [
  ['agent-sweep', 'Shipped a --report flag: blast-radius & rotation reporting grouped by masked secret fingerprint. Added 20 tests, bringing the suite to 552.'],
  ['Meshery', 'Merged pull requests to the CNCF service mesh management platform.'],
  ['Vaar', 'Merged pull requests as part of ongoing cloud-native contribution work.'],
  ['Konfuse', 'Investigated issues and shipped fixes with maintainer review.'],
  ['MCPSnoop', 'Contributed fixes and improved test coverage.'],
  ['Kana-Dojo', 'Merged pull requests through standard open-source review workflows.'],
]

const toolGroups = [
  ['Languages', ['C++', 'TypeScript / JavaScript', 'Python', 'Go', 'C']],
  ['Backend', ['Node.js / Express', 'REST APIs', 'Docker', 'Kubernetes', 'JWT Auth']],
  ['Data & Infra', ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'BullMQ']],
  ['Foundations', ['System Design', 'DBMS', 'Operating Systems', 'Linux', 'Socket.IO']],
]

function ExternalLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

function SectionLabel({ children, right = '' }) {
  return <div className="sheet-label reveal"><span>{children}</span><span className="rule" /><span>{right}</span></div>
}

function Schematic() {
  return (
    <div className="schem-box reveal">
      <svg viewBox="0 0 420 260" width="100%" height="auto" aria-hidden="true">
        <rect className="node-box" x="10" y="18" width="80" height="34" rx="2" />
        <text className="node-label" x="50" y="39" textAnchor="middle">CLIENT</text>
        <rect className="node-box" x="170" y="18" width="80" height="34" rx="2" />
        <text className="node-label" x="210" y="39" textAnchor="middle">API</text>
        <rect className="node-box" x="330" y="18" width="80" height="34" rx="2" />
        <text className="node-label" x="370" y="34" textAnchor="middle">POSTGRES</text>
        <text className="node-sub" x="370" y="45" textAnchor="middle">Prisma</text>
        <rect className="node-box" x="170" y="110" width="80" height="34" rx="2" />
        <text className="node-label" x="210" y="126" textAnchor="middle">BULLMQ</text>
        <text className="node-sub" x="210" y="137" textAnchor="middle">queue</text>
        <rect className="node-box" x="170" y="200" width="80" height="34" rx="2" />
        <text className="node-label" x="210" y="221" textAnchor="middle">WORKER</text>
        <rect className="node-box" x="330" y="200" width="80" height="34" rx="2" />
        <text className="node-label" x="370" y="216" textAnchor="middle">SOCKET.IO</text>
        <text className="node-sub" x="370" y="227" textAnchor="middle">live events</text>
        <path className="flow-line draw" d="M90,35 H170" />
        <path className="flow-line draw" d="M210,52 V110" />
        <path className="flow-line draw" d="M210,144 V200" />
        <path className="flow-line draw" d="M250,217 H330" />
        <path className="flow-line dim draw" d="M250,35 H330" />
        <path className="flow-line dim draw" d="M330,35 C130,80 130,180 170,217" />
      </svg>
      <div className="schem-cap">FIG. 01 — REQUEST → QUEUE → WORKER FLOW (FLOWFORGE)</div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))

    const paths = document.querySelectorAll('.draw')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    paths.forEach((path, index) => {
      const length = path.getTotalLength()
      if (reduceMotion) return
      path.style.strokeDasharray = length
      path.style.strokeDashoffset = length
      path.style.transition = `stroke-dashoffset 1s ease ${0.15 + index * 0.18}s`
      requestAnimationFrame(() => requestAnimationFrame(() => { path.style.strokeDashoffset = 0 }))
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <div className="frame"><i /></div>

      <header>
        <nav className="wrap nav-wrap">
          <a className="brand" href="#top">OM<span>.</span>KESHARWANI</a>
          <div className="navlinks">
            <a href="#systems">Systems</a>
            <a href="#contrib">Contributions</a>
            <a href="#tools">Toolchain</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="status-pill"><span className="dot" />Open to backend roles</div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <SectionLabel right="REV. 2026">SHEET 00 / TITLE</SectionLabel>
          <div className="hero-grid">
            <div className="reveal">
              <div className="eyebrow">engineer.status = "building"</div>
              <h1>Backend engineer<br />who ships <em>systems</em>,<br />not just endpoints.</h1>
              <p className="hero-desc">Final-year Smart Manufacturing student at IIITDM Jabalpur. I build job queues, DAG execution engines, and APIs designed to survive production — not just a demo.</p>
              <div className="cta-row">
                <a className="btn btn-solid" href="#systems">View systems →</a>
                <a className="btn btn-line" href="#contact">Get in touch</a>
              </div>
              <div className="stat-row">
                <ExternalLink className="stat" href="https://codeforces.com/profile/om_kesharwani"><div className="n">AIR 1066</div><div className="l">Codeforces Specialist ↗</div></ExternalLink>
                <div className="stat"><div className="n">900+</div><div className="l">DSA problems solved</div></div>
                <div className="stat"><div className="n">552</div><div className="l">Tests in one OSS suite</div></div>
                <div className="stat"><div className="n">2027</div><div className="l">Graduating · IIITDM</div></div>
              </div>
            </div>
            <Schematic />
          </div>
        </section>

        <section id="systems" className="wrap">
          <SectionLabel right="03 ITEMS">SHEET 01 / SYSTEMS BUILT</SectionLabel>
          <h2 className="sheet-title reveal">Things I've built end to end</h2>
          <p className="sheet-sub reveal">Not tutorials. Systems with real failure modes — concurrency, retries, cycles — that I had to design around.</p>
          <div className="proj-list">
            {projects.map((project) => (
              <article className="proj reveal" key={project.name}>
                <div className="proj-head"><div className="idx">{project.idx}</div><h3>{project.name}</h3><div className="tag">{project.tag}</div></div>
                <div className="proj-body">
                  <p>{project.desc}</p>
                  <ul className="spec-list">{project.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul>
                  <div className="chip-row">{project.chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}</div>
                  <div className="proj-links"><ExternalLink href={project.href}>GitHub ↗</ExternalLink></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contrib" className="wrap">
          <SectionLabel right="CNCF & CLOUD-NATIVE">SHEET 02 / CONTRIBUTIONS</SectionLabel>
          <h2 className="sheet-title reveal">Working inside other people's codebases</h2>
          <p className="sheet-sub reveal">Merged PRs across CNCF and cloud-native projects — reading unfamiliar code, defending a fix in review, and shipping it.</p>
          <div className="contrib-feature reveal"><div><h3>Kyverno — Policy Decision Log</h3><p>Applying to LFX Mentorship on Kyverno's Policy Decision Log project. Root-caused issue #16962 — a silent failure in the background controller when operation filters are non-empty — in active discussion with maintainer <strong>iAnomaly</strong>.</p></div><div className="tag-live">● LFX Mentorship — in progress</div></div>
          <div className="contrib-grid">
            {contributions.map(([name, desc]) => <div className="contrib-cell reveal" key={name}><div className="name">{name}</div><div className="desc">{desc}</div></div>)}
          </div>
        </section>

        <section id="tools" className="wrap">
          <SectionLabel right="MATERIALS LIST">SHEET 03 / TOOLCHAIN</SectionLabel>
          <h2 className="sheet-title reveal">What I build with</h2>
          <div className="tool-grid reveal">
            {toolGroups.map(([category, tools]) => <div className="tool-cell" key={category}><div className="cat">{category}</div><ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>)}
          </div>
        </section>

        <section id="contact" className="wrap">
          <SectionLabel right="FINAL">SHEET 04 / TITLE BLOCK</SectionLabel>
          <div className="tb-grid reveal">
            <div className="tb-achieve">
              <div className="a-row"><span className="a-label">Codeforces</span><span className="a-val"><ExternalLink href="https://codeforces.com/profile/om_kesharwani">Specialist · AIR 1066, Round 1086 (Div. 2) ↗</ExternalLink></span></div>
              <div className="a-row"><span className="a-label">CodeChef</span><span className="a-val">2★ rated</span></div>
              <div className="a-row"><span className="a-label">Problems solved</span><span className="a-val">900+ across LeetCode / CF / CC</span></div>
              <div className="a-row"><span className="a-label">HackWithInfinity</span><span className="a-val">Qualified — online assessment</span></div>
              <div className="a-row"><span className="a-label">Education</span><span className="a-val">B.Tech, Smart Manufacturing — IIITDM Jabalpur, 2023–2027</span></div>
            </div>
            <div className="tb-contact">
              <div><div className="cap">Drawn by</div><div className="big">Om Kesharwani</div><a className="cta" href="mailto:kesharwanio685@gmail.com">Email me →</a><a className="cta phone" href="tel:+917398072172">+91 73980 72172</a></div>
              <div><div className="meta-row"><ExternalLink href="https://github.com/Om-Beast">GitHub ↗</ExternalLink><ExternalLink href="https://www.linkedin.com/in/om-kesharwani-b76331286/">LinkedIn ↗</ExternalLink><ExternalLink href="https://codeforces.com/profile/om_kesharwani">Codeforces ↗</ExternalLink><ExternalLink href="https://leetcode.com/u/om_kesharwani/">LeetCode ↗</ExternalLink></div><div className="meta-row location"><span>Prayagraj, UP</span></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer>SHEET 05/05 — END OF SET · BUILT BY OM KESHARWANI, 2026</footer>
    </div>
  )
}

export default App

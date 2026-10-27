import { useEffect, useRef, useState } from 'react'
import { education, experience, marquee, orbit, profile, projects, skillGroups, stats, whyHire } from './data'
import './App.css'

const sections = ['about', 'experience', 'projects', 'skills', 'contact']

/* ---------- hooks ---------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function usePointerGlow() {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--px', `${e.clientX}px`)
        root.style.setProperty('--py', `${e.clientY}px`)
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
}

function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => {
      const h = document.documentElement
      setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return p
}

/* ---------- small components ---------- */
function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i]
    const done = !deleting && text === word
    const delay = done ? 1600 : deleting ? 35 : 70
    const t = setTimeout(() => {
      if (done) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI((i + 1) % words.length)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return <span>{text}<i className="caret" /></span>
}

function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const el = ref.current
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1400)
        setV(to * (1 - Math.pow(1 - t, 3)))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}

function Tilt({ children, className = '', style }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * 9}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 11}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }
  return <div ref={ref} className={`tilt ${className}`} style={style} onPointerMove={onMove} onPointerLeave={onLeave}>{children}</div>
}

/* abstract UI mockups used as project art */
function Art({ kind }) {
  const bars = [38, 62, 46, 80, 58, 92, 70]
  return (
    <svg className="art" viewBox="0 0 320 150" aria-hidden="true">
      <rect x="1" y="1" width="318" height="148" rx="12" className="a-bg" />
      <circle cx="16" cy="14" r="3.5" className="a-dot" /><circle cx="28" cy="14" r="3.5" className="a-dot" /><circle cx="40" cy="14" r="3.5" className="a-dot" />
      {kind === 'dash' && <>
        <rect x="16" y="30" width="62" height="34" rx="6" className="a-box" /><rect x="86" y="30" width="62" height="34" rx="6" className="a-box" /><rect x="156" y="30" width="62" height="34" rx="6" className="a-box" />
        {bars.map((h, i) => <rect key={'b' + i} x={20 + i * 22} y={134 - h * 0.7} width="14" height={h * 0.7} rx="3" className="a-bar" style={{ '--i': i }} />)}
        <path d="M180 126 L205 100 L228 112 L256 78 L284 90 L304 60" className="a-line" />
      </>}
      {kind === 'people' && <>
        {[0, 1, 2].map((i) => <g key={i}><circle cx={44 + i * 90} cy="62" r="16" className="a-box" /><rect x={20 + i * 90} y="88" width="48" height="8" rx="4" className="a-bar" /><rect x={26 + i * 90} y="104" width="36" height="6" rx="3" className="a-box" /></g>)}
        <path d="M20 132 L300 132" className="a-line" />
      </>}
      {kind === 'table' && <>
        <rect x="16" y="30" width="288" height="14" rx="4" className="a-bar" />
        {[0, 1, 2, 3, 4].map((i) => <g key={i}><rect x="16" y={52 + i * 18} width="288" height="12" rx="4" className="a-box" /><rect x="22" y={55 + i * 18} width={50 + ((i * 37) % 70)} height="6" rx="3" className="a-bar" /><rect x="236" y={55 + i * 18} width="30" height="6" rx="3" className="a-line-f" /></g>)}
      </>}
      {kind === 'cards' && <>
        {[0, 1, 2, 3].map((i) => <g key={i}><rect x={16 + (i % 2) * 148} y={30 + Math.floor(i / 2) * 58} width="140" height="50" rx="8" className="a-box" /><rect x={26 + (i % 2) * 148} y={40 + Math.floor(i / 2) * 58} width="60" height="7" rx="3.5" className="a-bar" /><rect x={26 + (i % 2) * 148} y={56 + Math.floor(i / 2) * 58} width="90" height="6" rx="3" className="a-line-f" /></g>)}
      </>}
      {kind === 'flow' && <>
        {[0, 1, 2].map((i) => <g key={i}><rect x={20 + i * 100} y="56" width="80" height="40" rx="8" className="a-box" /><rect x={30 + i * 100} y="70" width="40" height="7" rx="3.5" className="a-bar" />{i < 2 && <path d={`M${100 + i * 100} 76 L${120 + i * 100} 76`} className="a-line" />}</g>)}
        <rect x="20" y="112" width="280" height="8" rx="4" className="a-box" /><rect x="20" y="112" width="170" height="8" rx="4" className="a-bar" />
      </>}
      {kind === 'phone' && <>
        {[0, 1].map((i) => <g key={i}>
          <rect x={70 + i * 110} y={i ? 26 : 22} width="80" height="118" rx="12" className="a-box" />
          <rect x={80 + i * 110} y={i ? 40 : 36} width="60" height="8" rx="4" className="a-bar" />
          <rect x={80 + i * 110} y={i ? 56 : 52} width="60" height="30" rx="6" className="a-line-f" />
          <rect x={80 + i * 110} y={i ? 94 : 90} width="40" height="6" rx="3" className="a-bar" />
          <rect x={80 + i * 110} y={i ? 106 : 102} width="52" height="6" rx="3" className="a-box" />
        </g>)}
      </>}
      {kind === 'shop' && <>
        {[0, 1, 2, 3].map((i) => <g key={i}><rect x={16 + i * 74} y="30" width="66" height="60" rx="8" className="a-box" /><rect x={16 + i * 74} y="98" width="44" height="6" rx="3" className="a-bar" /><rect x={16 + i * 74} y="110" width="26" height="6" rx="3" className="a-line-f" /></g>)}
        <rect x="16" y="128" width="90" height="14" rx="7" className="a-bar" />
      </>}
    </svg>
  )
}

/* ---------- layout ---------- */
function Nav({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top"><b>AK</b>S<span>.</span></a>
        <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {sections.map((s) => (
            <a key={s} href={`#${s}`} className={active === s ? 'active' : ''} onClick={() => setOpen(false)}>{s}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill"><i /> Available for new opportunities</p>
          <h1>
            <span className="hello">Hi, I'm</span>
            <span className="grad name">Adesh Kumar<br />Shrivastva</span>
          </h1>
          <p className="role mono">&gt; <Typewriter words={profile.roles} /></p>
          <p className="lead">{profile.intro}</p>
          <div className="platforms mono">
            <span>🌐 Web</span><span>🤖 Android</span><span>🍎 iOS</span>
          </div>
          <div className="actions">
            <a className="btn btn-lg" href="#projects">View my work <span>→</span></a>
            <a className="btn btn-ghost btn-lg" href={`mailto:${profile.email}`}>Let's talk</a>
          </div>
          <div className="hero-meta mono">
            <span>📍 {profile.location}</span>
            <span>⚡ 2.6+ yrs · 10+ shipped projects</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true"><div className="orbit-wrap">
          <div className="ring r1"><div className="rot">
            {orbit.map((o, i) => (
              <span className="chip3d" key={o.label} style={{ '--ang': `${(360 / orbit.length) * i}deg`, '--c': o.color }}>
                <span className="unrot"><i />{o.label}</span>
              </span>
            ))}
          </div></div>
          <div className="ring r2" />
          <div className="core"><span>AK</span></div>
          </div>
          <div className="code-card">
            <div className="dots"><i /><i /><i /></div>
            <pre className="mono">
              <span className="k">const</span> adesh = {'{'}{'\n'}
              {'  '}role: <span className="s">"Full Stack Developer"</span>,{'\n'}
              {'  '}stack: [<span className="s">"React"</span>, <span className="s">"Next.js"</span>,{'\n'}
              {'          '}<span className="s">"Node.js"</span>, <span className="s">"MongoDB"</span>,{'\n'}
              {'          '}<span className="s">"MySQL"</span>],{'\n'}
              {'  '}platforms: [<span className="s">"Web"</span>, <span className="s">"Android"</span>,{'\n'}
              {'             '}<span className="s">"iOS"</span>],{'\n'}
              {'  '}focus: [<span className="s">"RBAC"</span>, <span className="s">"REST APIs"</span>],{'\n'}
              {'  '}experience: <span className="s">"2.6+ years"</span>,{'\n'}
              {'  '}shipping: <span className="p">true</span>,{'\n'}
              {'}'};
            </pre>
          </div>
        </div>
      </div>
      <a className="scroll-cue mono" href="#about">scroll <span>↓</span></a>
    </section>
  )
}

function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{items.map((m, i) => <span key={i}>{m}<em>✦</em></span>)}</div>
    </div>
  )
}

function SectionHead({ index, title, sub }) {
  return (
    <div className="section-head reveal">
      <span className="mono idx">0{index} /</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index={1} title="About me" />
        <div className="about-grid">
          <div className="reveal">
            <p className="big">
              Full stack web <b>and mobile</b> developer with <b>2.6+ years</b> shipping production software
              for banking, FMCG, government and healthcare clients.
            </p>
            <p className="muted">
              I care about the unglamorous parts that make software dependable: role-based access,
              validation, audit trails, query performance and clean state management — and then wrapping
              them in interfaces people actually enjoy using, on the web and on Android &amp; iOS phones
              (React Native).
            </p>
            <div className="edu">
              <span className="mono">🎓 Education</span>
              <strong>{education.school}</strong>
              <p>{education.degree}</p>
              <small className="mono">{education.period} · {education.place}</small>
            </div>
          </div>
          <div className="stats">
            {stats.map((s, i) => (
              <Tilt className="stat reveal" style={{ '--d': `${i * 80}ms` }} key={s.label}>
                <strong className="grad"><CountUp {...s} /></strong>
                <span>{s.label}</span>
              </Tilt>
            ))}
          </div>
        </div>

        <div className="why">
          {whyHire.map((w, i) => (
            <div className="why-card reveal" key={w.title} style={{ '--d': `${i * 80}ms` }}>
              <span className="why-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const [sel, setSel] = useState(0)
  const job = experience[sel]
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <SectionHead index={2} title="Experience" sub="Where I've been building." />
        <div className="xp reveal">
          <div className="xp-tabs" role="tablist">
            {experience.map((j, i) => (
              <button key={j.company} role="tab" aria-selected={sel === i} className={sel === i ? 'on' : ''} onClick={() => setSel(i)}>
                <b>{j.company}</b>
                <small className="mono">{j.period}</small>
              </button>
            ))}
          </div>
          <div className="xp-panel" key={job.company}>
            <h3>{job.role} <span className="at">@ {job.company}</span></h3>
            <p className="mono place">{job.period} · {job.place}</p>
            <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead index={3} title="Projects" sub="Selected work across enterprise, government and commerce." />
        <div className="filters reveal" role="tablist">
          {cats.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="cards">
          {list.map((p) => (
            <Tilt className="card" key={p.title} style={{ '--a': p.accent[0], '--b': p.accent[1] }}>
              <div className="card-art"><Art kind={p.art} /></div>
              <div className="card-body">
                <small className="mono">{p.category}</small>
                <h3>{p.title}</h3>
                <p className="sub">{p.subtitle}</p>
                <p>{p.description}</p>
                <ul className="hl">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <SectionHead index={4} title="Skills" sub="The toolkit I reach for." />
        <div className="skill-grid">
          {skillGroups.map((g, i) => (
            <div className="skill-card reveal" key={g.name} style={{ '--d': `${i * 60}ms` }}>
              <h3 className="mono">{g.name}</h3>
              <div className="chips">{g.items.map((s) => <span key={s}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="cta reveal">
          <span className="mono idx">05 / Contact</span>
          <h2>Let's build something <span className="grad">reliable</span> together.</h2>
          <p>Have a project, role or idea? My inbox is open — I reply fast.</p>
          <div className="actions center">
            <a className="btn btn-lg" href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <a className="btn btn-ghost btn-lg" href={`tel:${profile.phone.replace(/-/g, '')}`}>☎ {profile.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const active = useActiveSection()
  const progress = useScrollProgress()
  useReveal()
  usePointerGlow()

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="bg" aria-hidden="true"><i className="blob b1" /><i className="blob b2" /><i className="blob b3" /><i className="grid" /></div>
      <div className="spotlight" aria-hidden="true" />
      <Nav active={active} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono">Built with React + Vite</span>
        </div>
      </footer>
    </>
  )
}

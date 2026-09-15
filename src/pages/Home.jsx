import { Link } from 'react-router-dom'

export default function Home() {
  return <>
    <section className="hero-section">
      <div className="hero-copy"><p className="eyebrow">MERN stack developer <span>·</span> Based in India</p><h1>I build digital<br /><em>things that matter.</em></h1><p className="hero-intro">Full-stack engineer focused on the space where thoughtful product design meets robust, scalable technology.</p><div className="hero-actions"><Link className="button button-primary" to="/projects">Explore my work <span>↘</span></Link><a className="text-link" href="mailto:hello@adesh.dev">Let's talk <span>↗</span></a></div></div>
      <div className="hero-visual"><div className="visual-frame"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85" alt="Team collaborating around a table" /><div className="visual-label">Currently building<br /><strong>better digital tools</strong></div></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="visual-index">01 / 04</span></div>
      <div className="scroll-cue">Scroll to discover <span>↓</span></div>
    </section>
    <section className="statement"><p className="eyebrow">What I do <span>↘</span></p><h2>I turn ambitious ideas into <em>useful, usable software.</em></h2><Link className="text-link" to="/about">More about me <span>↗</span></Link></section>
    <section className="home-details"><div className="stats"><div><strong>3+</strong><span>Years learning<br />by building</span></div><div><strong>12</strong><span>Projects from<br />idea to interface</span></div><div><strong>∞</strong><span>Curiosity for<br />what comes next</span></div></div><div className="process-block"><p className="eyebrow">My approach <span>↘</span></p><div className="process-row"><div><span>01</span><strong>Listen</strong><p>Understand the real problem before writing the first line.</p></div><div><span>02</span><strong>Shape</strong><p>Find the simplest useful path through a complex idea.</p></div><div><span>03</span><strong>Build</strong><p>Ship thoughtful software that stays dependable over time.</p></div></div></div></section>
  </>
}

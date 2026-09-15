import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

const links = [
  { to: '/', label: 'Home',  },
  { to: '/about', label: 'About', },
  { to: '/education', label: 'Education', },
  { to: '/projects', label: 'Projects', },
  { to: '/contact', label: 'Contact', },
]

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav" aria-label="Main navigation"><Link className="brand" to="/" onClick={() => setMenuOpen(false)}><span>AD</span> / DEV</Link><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span>{menuOpen ? '×' : '☰'}</span></button><div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>{links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)}>{link.label} <span>{link.number}</span></NavLink>)}</div><a className="availability" href="mailto:hello@adesh.dev"><i /> Available for select projects</a></nav></header>
    <main className={location.pathname === '/' ? 'home-main' : ''}><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/education" element={<Education />} /><Route path="/projects" element={<Projects />} /><Route path="/contact" element={<Contact />} /></Routes></main>
    <footer><span>© 2024 Adesh / Full-stack developer</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:hello@adesh.dev">Email ↗</a></div></footer>
  </div>
}

export default Layout

import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

const NAV_SECTIONS = [
  ['Work', 'work'],
  ['Research', 'research'],
  ['Projects', 'projects'],
  ['Ventures', 'ventures'],
  ['Connect', 'connect'],
]

export default function Navbar({ dark, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  function handleSection(id) {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'text-sand/80'
            : 'bg-sand/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-warm dark:border-stone-800 text-ink dark:text-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-display text-2xl font-semibold tracking-tight"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            KC
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => handleSection(id)}
                className="font-sans text-sm tracking-wide hover:opacity-50 transition-opacity"
              >
                {label}
              </button>
            ))}
            <Link to="/blog" className="font-sans text-sm tracking-wide hover:opacity-50 transition-opacity">
              Writing
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/krunal16-c" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity hidden sm:block">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/krunal-chavda-7877271b3/" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity hidden sm:block">
              <LinkedinIcon />
            </a>
            <button
              onClick={onToggle}
              className="w-8 h-8 flex items-center justify-center hover:opacity-50 transition-opacity"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] hover:opacity-50 transition-opacity"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block w-5 h-px transition-all duration-300 ${transparent ? 'bg-sand/80' : 'bg-ink dark:bg-stone-100'} ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${transparent ? 'bg-sand/80' : 'bg-ink dark:bg-stone-100'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${transparent ? 'bg-sand/80' : 'bg-ink dark:bg-stone-100'} ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col items-start justify-center px-10 gap-2 pt-16">
          {NAV_SECTIONS.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleSection(id)}
              className="font-display text-4xl font-semibold text-sand/70 hover:text-sand transition-colors duration-200 py-2"
            >
              {label}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-semibold text-sand/70 hover:text-sand transition-colors duration-200 py-2"
          >
            Writing
          </Link>
        </div>
        <div className="px-10 pb-12 flex items-center gap-6">
          <a href="https://github.com/krunal16-c" target="_blank" rel="noopener noreferrer"
            className="text-sand/50 hover:text-sand transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/krunal-chavda-7877271b3/" target="_blank" rel="noopener noreferrer"
            className="text-sand/50 hover:text-sand transition-colors">
            <LinkedinIcon />
          </a>
          <a href="mailto:krunal@arcite-ai.com" className="font-sans text-sm text-sand/50 hover:text-sand transition-colors">
            krunal@arcite-ai.com
          </a>
        </div>
      </div>
    </>
  )
}

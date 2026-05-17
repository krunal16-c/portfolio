import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ROLES = [
  'Founder · Arcite AI',
  'AI Research Assistant · USask',
  "Former Students' Union President",
  'Board of Governors · USask',
  'Published · ICCV Paris 2023',
  'AI Readiness Levels · Inventor',
]

const MARQUEE_ITEMS = [...ROLES, ...ROLES]

// Node positions (% of viewBox 0-100)
const NODES = [
  { x: 18, y: 22 }, { x: 42, y: 10 }, { x: 68, y: 18 },
  { x: 88, y: 38 }, { x: 92, y: 65 }, { x: 72, y: 82 },
  { x: 45, y: 90 }, { x: 20, y: 78 }, { x: 8,  y: 52 },
  { x: 50, y: 48 }, { x: 65, y: 55 }, { x: 32, y: 42 },
]

const EDGES = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],
  [9,0],[9,1],[9,2],[10,3],[10,4],[10,5],[11,6],[11,7],[11,8],
  [9,10],[10,11],[11,9],
]

function NetworkGraphic() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute right-0 top-0 h-full w-[55%] opacity-[0.11]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B54520" stopOpacity="1" />
            <stop offset="100%" stopColor="#B54520" stopOpacity="0" />
          </radialGradient>
        </defs>
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x} y1={NODES[a].y}
            x2={NODES[b].x} y2={NODES[b].y}
            stroke="rgba(250,250,247,0.5)"
            strokeWidth="0.25"
            className="network-edge"
            style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${7 + i * 0.3}s` }}
          />
        ))}
        {NODES.map(({ x, y }, i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.5" fill="rgba(181,69,32,0.15)" />
            <circle
              cx={x} cy={y} r="1.2"
              fill="#B54520"
              className="network-node"
              style={{ animationDelay: `${i * 0.25}s`, animationDuration: `${2.5 + i * 0.2}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative min-h-screen bg-charcoal flex flex-col overflow-hidden">

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.028] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Grain */}
      <div className="grain-overlay" />

      {/* Neural network */}
      <NetworkGraphic />

      {/* Thin geometric accent lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
        aria-hidden="true"
      >
        <line x1="0" y1="100%" x2="28%" y2="0" stroke="rgba(250,250,247,0.4)" strokeWidth="0.5" />
        <line x1="100%" y1="0" x2="72%" y2="100%" stroke="rgba(250,250,247,0.4)" strokeWidth="0.5" />
      </svg>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex-1 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-[10px] tracking-[0.4em] uppercase text-sand/30 mb-10"
              >
                Canada · Building Globally
              </motion.p>

              {/* Clip-reveal name */}
              <div aria-label="Krunal Chavda" className="mb-7">
                <div
                  className="overflow-hidden block"
                  style={{
                    fontSize: 'clamp(3.2rem, 15vw, 10.5rem)',
                    lineHeight: 1.1,
                    marginBottom: '-0.06em',
                  }}
                >
                  <motion.h1
                    className="font-display font-bold tracking-tight text-sand block uppercase"
                    style={{ lineHeight: 1.1 }}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Krunal
                  </motion.h1>
                </div>
                <div
                  className="overflow-hidden block"
                  style={{
                    fontSize: 'clamp(3.2rem, 15vw, 10.5rem)',
                    lineHeight: 1.1,
                    marginBottom: '-0.06em',
                  }}
                >
                  <motion.h1
                    className="font-display font-extrabold tracking-tight text-rust block uppercase"
                    style={{ lineHeight: 1.1 }}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                  >
                    Chavda
                  </motion.h1>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.38 }}
                className="flex items-center gap-4 mb-7"
              >
                <div className="w-7 h-px bg-rust/60" />
                <span className="font-sans text-[10px] text-sand/30 tracking-[0.3em] uppercase">AI Researcher · Founder · Builder</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollTo('work')}
                  className="border border-sand/20 px-8 py-3.5 font-sans text-sm tracking-widest uppercase text-sand/80 hover:bg-sand hover:text-charcoal transition-all duration-300"
                >
                  View Work
                </button>
                <a
                  href="https://www.linkedin.com/in/krunal-chavda-7877271b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rust/90 backdrop-blur-sm text-sand px-8 py-3.5 font-sans text-sm tracking-widest uppercase hover:bg-rust transition-all duration-300"
                >
                  LinkedIn →
                </a>
              </motion.div>
            </div>

            {/* Right — credibility stats */}
            

          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-20 border-t border-sand/[0.07] overflow-hidden">
        <div
          className="flex gap-12 py-5 w-max animate-marquee"
          style={{ animationTimingFunction: 'linear' }}
        >
          {MARQUEE_ITEMS.map((role, i) => (
            <span key={i} className="font-sans text-[10px] text-sand/20 tracking-[0.35em] uppercase whitespace-nowrap">
              {role}
              <span className="ml-12 text-rust/20">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

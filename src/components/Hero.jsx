import { Link } from 'react-router-dom'

const ROLES = [
  'Founder · Arcite-AI',
  'Founder · Zester Data Studios',
  'AI Research Assistant · USask',
  'Former Students\' Union President',
  'Board of Governors · USask',
  'Published · ICCV Paris 2023',
]

const MARQUEE_ITEMS = [...ROLES, ...ROLES]

export default function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative min-h-screen bg-charcoal flex flex-col overflow-hidden">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Rust glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(181,69,32,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="opacity-0 animate-fade-up font-sans text-xs tracking-[0.32em] uppercase text-sand/35 mb-10">
                Saskatoon, SK · Building Globally
              </p>

              {/* Clip-reveal name */}
              <div aria-label="Krunal Chavda">
                <div
                  className="overflow-hidden leading-[0.88] inline-block pr-[0.08em]"
                  style={{ fontSize: 'clamp(2.8rem, 14vw, 9.5rem)' }}
                >
                  <h1 className="font-display font-semibold text-sand animate-slide-up inline-block">
                    KRUNAL
                  </h1>
                </div>
                <div
                  className="overflow-hidden leading-[0.88] inline-block pr-[0.08em]"
                  style={{ fontSize: 'clamp(2.8rem, 14vw, 9.5rem)' }}
                >
                  <h1 className="font-display font-semibold text-sand animate-slide-up-delay inline-block">
                    CHAVDA
                  </h1>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-up-late flex flex-col gap-8">
              <p className="font-sans text-xl leading-relaxed text-sand/65 max-w-md">
                AI researcher, founder, and institutional leader building systems that serve human judgment rather than replace it.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo('work')}
                  className="border border-sand/25 px-7 py-3 font-sans text-sm tracking-wide text-sand hover:bg-sand hover:text-charcoal transition-all duration-200"
                >
                  View Work ↓
                </button>
                <Link
                  to="/blog"
                  className="bg-rust text-sand px-7 py-3 font-sans text-sm tracking-wide hover:bg-rust-light transition-all duration-200"
                >
                  Read Writing →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Marquee roles */}
      <div className="relative border-t border-sand/10 overflow-hidden">
        <div
          className="flex gap-10 py-4 w-max animate-marquee"
          style={{ animationTimingFunction: 'linear' }}
        >
          {MARQUEE_ITEMS.map((role, i) => (
            <span key={i} className="font-sans text-xs text-sand/30 tracking-widest uppercase whitespace-nowrap">
              {role}
              <span className="ml-10 text-sand/15">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

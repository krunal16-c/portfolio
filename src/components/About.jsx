import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'
import profile600 from '../assets/profile-600.jpg'
import profile1200 from '../assets/profile-1200.jpg'

const CURRENT = [
  'Principal & Chief AI Officer, Arcite-AI',
  'Co-Founder, Zester Data Studios',
  'AI Research Assistant, Edwards School of Business',
  'BSc Computer Science, University of Saskatchewan',
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 bg-sand dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>About</SectionLabel>
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Narrative */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink dark:text-stone-100 leading-[1.1] mb-8">
                Building human‑centric AI.
              </h2>
              <figure className="mb-8">
                <blockquote className="border-l-2 border-rust pl-5 pr-2 py-1">
                  <p className="font-display italic text-2xl lg:text-3xl text-ink/90 dark:text-stone-100/90 leading-snug">
                    “First say to yourself what you would be; and then do what you have to do.”
                  </p>
                </blockquote>
                <figcaption className="mt-3 font-sans text-xs tracking-[0.18em] uppercase text-muted dark:text-stone-500">
                  Epictetus
                </figcaption>
              </figure>

              <p className="font-sans text-lg text-muted dark:text-stone-400 leading-relaxed mb-5">
                I’ve spent time on both sides of the table: building AI systems from first principles, and sitting inside institutions where decisions have real consequences for people. That mix changed what I care about. I’m less interested in “can we automate it?” and more interested in “should we — and what happens when it fails?”
              </p>
              <p className="font-sans text-lg text-muted dark:text-stone-400 leading-relaxed mb-10">
                The thread through my work is simple: help organizations make better calls under uncertainty. Sometimes that’s a model, sometimes it’s a workflow, sometimes it’s governance. The goal isn’t to replace judgment — it’s to make it easier to exercise.
              </p>

              <div>
                <p className="font-sans text-xs tracking-[0.28em] uppercase text-muted dark:text-stone-500 mb-4">Currently</p>
                <ul className="space-y-2.5">
                  {CURRENT.map(item => (
                    <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-ink dark:text-stone-300">
                      <span className="text-rust mt-0.5 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo / decorative */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-square bg-charcoal overflow-hidden group rounded-2xl ring-1 ring-sand/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <img
                  src={profile600}
                  srcSet={`${profile600} 600w, ${profile1200} 1200w`}
                  sizes="(min-width: 1024px) 360px, 80vw"
                  alt="Krunal Chavda"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  onError={e => { e.target.style.display = 'none' }}
                />
                {/* Fallback decoration */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                  <span
                    className="font-display font-semibold text-sand/[0.06]"
                    style={{ fontSize: 'clamp(6rem, 18vw, 10rem)' }}
                  >
                    KC
                  </span>
                </div>
                {/* Dot grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/60 to-transparent" />
                {/* Corner rust accent */}
                <div className="absolute top-0 left-0 w-16 h-1 bg-rust" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

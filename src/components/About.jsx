import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import profile600 from '../assets/profile-600.jpg'
import profile1200 from '../assets/profile-1200.jpg'

const CURRENT = [
  { role: 'Principal & Chief AI Officer', org: 'Arcite AI' },
  { role: 'AI Research Assistant', org: 'Edwards School of Business, USask' },
  { role: 'BSc Computer Science', org: 'University of Saskatchewan' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-sand dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>About</SectionLabel>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start"
        >
          {/* Narrative */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h2 className="font-display font-bold tracking-tight mb-8">
              <span
                className="text-ink dark:text-stone-100 block"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.05 }}
              >
                Building
              </span>
              <span
                className="text-rust block"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.05 }}
              >
                human-centric
              </span>
              <span
                className="text-ink dark:text-stone-100 block"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.75rem)', lineHeight: 0.93 }}
              >
                AI.
              </span>
            </h2>

            <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed mb-8 max-w-sm">
              AI for governments, universities, and enterprises. Not "can we automate it?" — "should we?"
            </p>

            <motion.div variants={stagger} className="mt-10">
              <p className="font-sans text-[10px] tracking-[0.36em] uppercase text-muted/60 dark:text-stone-500 mb-5">
                Currently
              </p>
              <motion.ul className="space-y-4">
                {CURRENT.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <span className="text-rust mt-1 shrink-0 text-xs">◆</span>
                    <div>
                      <span className="font-sans text-sm font-medium text-ink dark:text-stone-200">{item.role}</span>
                      <span className="font-sans text-sm text-muted dark:text-stone-500">, {item.org}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative offset frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-rust/20 rounded-sm" />
              <div className="absolute -top-6 -right-6 w-full h-full border border-rust/10 rounded-sm" />

              <div className="relative aspect-[4/5] bg-charcoal overflow-hidden group rounded-sm ring-1 ring-charcoal/20 shadow-[0_32px_80px_rgba(0,0,0,0.18)]">
                <img
                  src={profile600}
                  srcSet={`${profile600} 600w, ${profile1200} 1200w`}
                  sizes="(min-width: 1024px) 360px, 80vw"
                  alt="Krunal Chavda"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.92]"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  onError={e => { e.target.style.display = 'none' }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                  <span className="font-display font-bold text-sand/[0.05]" style={{ fontSize: 'clamp(5rem, 16vw, 9rem)' }}>
                    KC
                  </span>
                </div>
                {/* Rust top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rust via-rust/60 to-transparent" />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/70 to-transparent" />
                {/* Bottom caption */}
                <div className="absolute bottom-5 left-5">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-sand/50">Krunal Chavda</p>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-rust/70">Canada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

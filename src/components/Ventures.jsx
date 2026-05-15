import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const STATS = [
  { value: '400+', label: 'Tools Evaluated' },
  { value: '87%', label: 'Search Complexity Reduction' },
  { value: '95%+', label: 'Relevance Accuracy' },
]

const PILLARS = [
  {
    label: 'Discovery',
    body: 'Two-phase AI recommendation system maps your context against 400+ evaluated tools.',
  },
  {
    label: 'Deployment',
    body: 'Forward Deployed Engineers embedded directly into client environments to train, architect, implement, and validate AI systems at production scale.',
  },
  {
    label: 'Training',
    body: 'Role-specific AI learning frameworks. We meet people where they are.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Ventures() {
  return (
    <section id="ventures" className="py-28 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel light>Ventures</SectionLabel>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">
            <motion.div variants={fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.36em] uppercase text-rust mb-5">
                Saskatoon, SK · Founded 2025
              </p>
              <h2
                className="font-display font-extrabold text-sand leading-[0.9] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                Arcite AI
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <p className="font-sans text-base text-sand/50 leading-relaxed max-w-md">
                Your Chief AI Officer + Forward Deployed Engineer. We find proven AI solutions or build custom ones when existing tools fall short.
              </p>
              <a
                href="mailto:temperature6464@gmail.com"
                className="inline-flex items-center gap-2 w-fit font-sans text-sm text-rust border border-rust/30 px-7 py-3.5 hover:bg-rust hover:text-sand transition-all duration-300 tracking-wide uppercase text-[11px]"
              >
                Work With Us →
              </a>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-px bg-sand/[0.06] mb-16"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-charcoal p-8 lg:p-10 group">
                <p
                  className="font-display font-extrabold text-sand tracking-tight mb-1"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  {value}
                </p>
                <p className="font-sans text-xs text-sand/30 tracking-widest uppercase">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Three pillars */}
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand/[0.06]">
            {PILLARS.map(({ label, body }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="bg-charcoal p-8 lg:p-10 border-t-2 border-t-transparent hover:border-t-rust transition-colors duration-300"
              >
                <h3 className="font-display text-xl font-bold text-sand mb-3 tracking-tight">{label}</h3>
                <p className="font-sans text-sm text-sand/40 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const CARDS = [
  {
    label: 'Arcite AI · Ongoing',
    accent: 'bg-rust',
    title: 'AI Readiness Levels (ARL)',
    body: 'A practical maturity framework giving organizations a concrete map from initial awareness to full integration. Specific criteria and actionable next steps at each AI adoption stage, deployed across client organizations.',
    tag: 'Inventor',
  },
  {
    label: 'Edwards School · Ongoing',
    accent: 'bg-charcoal dark:bg-stone-400',
    title: 'Multi-Agent Committee Simulation',
    body: 'Investigating coordination failure modes in multi-agent systems on interdependent tasks under environmental constraints, focused on where coordination breaks down in institutional settings.',
    tag: 'Multi-Agent',
  },
  {
    label: 'ICCV 2023 · Paris',
    accent: 'bg-muted',
    title: 'Plant Root Occlusion Inpainting',
    body: 'GAN-based gap detection and repair in 3D root imaging. Improving phenotyping accuracy for climate-resilient crop development.',
    link: 'https://openaccess.thecvf.com/ICCV2023',
    linkLabel: 'View Paper',
    tag: 'Published',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function Research() {
  return (
    <section id="research" className="py-28 bg-sand dark:bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Research</SectionLabel>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {CARDS.map(({ label, accent, title, body, link, linkLabel, tag }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative border border-warm dark:border-stone-800 p-8 lg:p-10 flex flex-col hover:border-charcoal/30 dark:hover:border-stone-600 transition-colors duration-300 group bg-sand dark:bg-stone-950"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-muted/60 dark:text-stone-500">{label}</span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-rust/60 border border-rust/20 px-2 py-0.5">{tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink dark:text-stone-100 mb-4 group-hover:text-rust transition-colors duration-200 tracking-tight leading-snug">
                {title}
              </h3>
              <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed flex-1">{body}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-xs text-rust mt-6 hover:underline tracking-wide uppercase"
                >
                  {linkLabel} →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

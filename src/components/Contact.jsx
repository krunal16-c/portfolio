import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const LINKS = [
  { label: 'Email', display: 'krunal@arcite-ai.com', href: 'mailto:krunal@arcite-ai.com' },
  { label: 'LinkedIn', display: 'krunal-chavda', href: 'https://www.linkedin.com/in/krunal-chavda-7877271b3/', external: true },
  { label: 'GitHub', display: 'krunal16-c', href: 'https://github.com/krunal16-c', external: true },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Contact() {
  return (
    <section id="connect" className="py-28 bg-paper dark:bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Connect</SectionLabel>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink dark:text-stone-100 leading-[1.05] mb-6 tracking-tight">
              Let's build something<br />
              <span className="text-rust">worth building.</span>
            </h2>
            <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed max-w-sm">
              Research collaborations, advisory work, speaking, and connecting with founders and researchers at the intersection of AI and institutions.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            {LINKS.map(({ label, display, href, external }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between py-5 border-b border-warm dark:border-stone-800 hover:border-rust/30 dark:hover:border-rust/30 transition-colors duration-200"
              >
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted/60 dark:text-stone-500">{label}</span>
                <span className="font-sans text-sm text-ink dark:text-stone-300 group-hover:text-rust transition-colors duration-200 tracking-wide">
                  {display} →
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

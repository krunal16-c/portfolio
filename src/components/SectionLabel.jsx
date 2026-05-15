import { motion } from 'framer-motion'

export default function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-sans text-[10px] tracking-[0.36em] uppercase whitespace-nowrap ${
          light ? 'text-sand/30' : 'text-muted/60 dark:text-stone-500'
        }`}
      >
        {children}
      </motion.span>
      <div className="flex-1 h-px overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`h-full w-full origin-left ${light ? 'bg-sand/[0.12]' : 'bg-warm dark:bg-stone-800'}`}
        />
      </div>
    </div>
  )
}

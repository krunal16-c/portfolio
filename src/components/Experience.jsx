import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const EXPERIENCES = [
  {
    period: 'Sep 2025 - Present',
    role: 'Principal & Chief AI Officer',
    org: 'Arcite AI',
    description: 'Architected a two-phase AI recommendation engine evaluating 400+ tools, reducing client search space by 87% while sustaining 95%+ relevance accuracy. Invented and deployed AI Readiness Levels (ARL). Lead Forward Deployed Engineering: embedded engineers directly into client environments. Custom builds from scratch: finetuned LLMs (QLoRA, LoRA), VLMs, SLMs, AI agents, MCP servers, voice agents, data orchestration layers.',
    tags: ['Founder', 'AI Strategy'],
    stats: [
      { value: '400+', label: 'tools evaluated' },
      { value: '87%', label: 'search space reduction' },
      { value: '95%+', label: 'relevance accuracy' },
    ],
  },
  {
    period: 'Jul 2025 - Present',
    role: 'AI Research Assistant',
    org: 'Edwards School of Business, USask',
    description: 'Investigating coordination failure modes in multi-agent systems handling interdependent tasks under environmental constraints. Built Aurora, a conversational AI training tool simulating donor interaction using Google ADK, resulting in 30% more donor conversions. Built Glaucon, a multi-agent system for government relations research, reducing preparation time by 60%.',
    tags: ['Research', 'Multi-Agent'],
  },
  {
    period: 'May 2024 - Apr 2025',
    role: 'President & CEO',
    org: "University of Saskatchewan Students' Union",
    description: 'Led a $29M organization representing 19,000+ undergraduate students. Doubled student engagement through strategic programming and advocacy at all levels of government. Developed Campus Groups GPT, a RAG system with vector database streamlining question answering across 150+ campus groups, saving 7 hours/week of staff time. Board of Governors: Audit & Finance Committee and Land & Facilities Committee.',
    tags: ['Leadership', 'Governance'],
    stats: [
      { value: '$29M', label: 'organization' },
      { value: '19K+', label: 'students' },
    ],
  },
  {
    period: 'Jan 2024 - Apr 2024',
    role: 'Industrial Engineering Intern',
    org: 'Federated Co-operatives Limited',
    description: 'Drove distribution center efficiency improvements through data mining and operational analysis across manufacturing and logistics workflows. Built SQL and SAS Analytics pipelines for warehouse management systems, delivering process optimization insights to engineering leadership.',
    tags: ['Systems', 'SQL'],
  },
  {
    period: 'Jun 2022 - Apr 2023',
    role: 'Student Research Assistant',
    org: 'Global Institute for Food Security, USask',
    description: 'Optimized Python-based image annotation software by 90% for plant root phenotyping, cutting daily lab processing time. Built desktop GUI for annotation software used across active research workflows. Constructed deep learning dataset pipeline for 3D reconstruction of plant root phenotypes. Co-authored GAN-based method for root gap detection and inpainting, published at ICCV 2023, Paris.',
    tags: ['Computer Vision', 'Research'],
    stats: [
      { value: '90%', label: 'annotation efficiency' },
    ],
  },
]

const rowVariant = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export default function Experience() {
  return (
    <section id="work" className="py-28 bg-paper dark:bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Work</SectionLabel>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              variants={rowVariant}
              className="group grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-0 py-10 border-b border-warm dark:border-stone-800 last:border-0"
            >
              <div className="pt-[0.85rem] lg:text-right lg:pr-8">
                <span className="font-sans text-[11px] text-muted/45 dark:text-stone-500 tabular-nums tracking-wide">{exp.period}</span>
              </div>

              <div className="relative lg:border-l lg:border-warm dark:border-stone-800 lg:pl-14">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute -left-[5px] top-[0.85rem] w-2.5 h-2.5 rounded-full border border-warm dark:border-stone-700 bg-paper dark:bg-stone-900 group-hover:border-rust/70 group-hover:bg-rust/10 transition-all duration-300 z-10" />

                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink dark:text-stone-100 tracking-tight">{exp.role}</h3>
                    <p className="font-sans text-sm text-rust mt-1 tracking-wide">{exp.org}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-sans text-[10px] px-3 py-1.5 bg-rust-pale dark:bg-stone-800 text-rust dark:text-rust-light tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed max-w-2xl">{exp.description}</p>

                {exp.stats && (
                  <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-warm/60 dark:border-stone-800">
                    {exp.stats.map(({ value, label }) => (
                      <div key={label} className="stat-card pr-6">
                        <span className="font-display text-2xl font-bold text-ink dark:text-stone-100">{value}</span>
                        <span className="font-sans text-xs text-muted dark:text-stone-500 ml-2 tracking-wide">{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

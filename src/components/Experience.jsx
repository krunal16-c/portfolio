import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

const EXPERIENCES = [
  {
    period: '2025 — Now',
    role: 'Principal & Chief AI Officer',
    org: 'Arcite-AI',
    description:
      'Co-founded to solve a specific problem: organizations don\'t know which AI tools apply to their context. Forward Deployed Engineers work onsite with client teams. Partner network. Training programs. Serving organizations and non-profits.',
    tags: ['Founder', 'AI Strategy'],
    stats: [
      { value: '400+', label: 'tools evaluated' },
      { value: '87%', label: 'less search complexity' },
      { value: '95%+', label: 'relevance accuracy' },
    ],
  },
  {
    period: '2025 — Now',
    role: 'Co-Founder',
    org: 'Zester Data Studios',
    description:
      'Building the data supply chain for AI and robotics companies. Ore lets individuals monetize their footage. Crucible generates synthetic datasets with human validation. Forge delivers multilingual annotation through in-country workers. Sovereign infrastructure.',
    tags: ['Founder', 'Data Infrastructure'],
  },
  {
    period: '2025 — Now',
    role: 'AI Research Assistant',
    org: 'Edwards School of Business, University of Saskatchewan',
    description:
      'Multi-agent systems simulating university committee dynamics. Conversational AI training tool for donor relations. Role-specific AI learning frameworks. Inventor of AI Readiness Levels (ARL), a maturity framework built on the PIVOT model. Mitacs TRL UP funded.',
    tags: ['Research', 'Multi-Agent'],
  },
  {
    period: '2024 — 2025',
    role: 'President',
    org: "Students' Union, University of Saskatchewan",
    description:
      'Doubled student engagement. Represented student interests across federal, provincial, and municipal governments. Board of Governors: Land & Facilities Committee, Audit & Finance Committee, Presidential Search Committee.',
    tags: ['Leadership', 'Governance'],
    stats: [
      { value: '$29M', label: 'organization' },
      { value: '19K', label: 'students' },
    ],
  },
  {
    period: '2024',
    role: 'Industrial Engineering Intern',
    org: 'Federated Co-operatives Limited',
    description:
      'Systems analysis and operational optimization. SQL, analytics platforms, warehouse management systems.',
    tags: ['Systems', 'SQL'],
  },
  {
    period: '2022 — 2023',
    role: 'Student Assistant',
    org: 'Global Institute for Food Security, University of Saskatchewan',
    description:
      'Optimized image annotation software for root phenotyping by 90%. Deep learning datasets for 3D reconstruction. Contributed to team research published at ICCV 2023 in Paris.',
    tags: ['Computer Vision', 'Research'],
    stats: [
      { value: '90%', label: 'annotation efficiency gain' },
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="work" className="py-28 bg-paper dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Work</SectionLabel>
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-14 py-10 border-b border-warm dark:border-stone-800 last:border-0"
            >
              <div className="pt-1">
                <span className="font-sans text-xs text-muted dark:text-stone-500 tabular-nums">{exp.period}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink dark:text-stone-100">{exp.role}</h3>
                    <p className="font-sans text-sm text-rust mt-1">{exp.org}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="font-sans text-xs px-3 py-1 bg-rust-pale dark:bg-stone-800 text-rust dark:text-rust-light tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed">{exp.description}</p>

                {exp.stats && (
                  <div className="flex flex-wrap gap-8 mt-5 pt-5 border-t border-warm dark:border-stone-800">
                    {exp.stats.map(({ value, label }) => (
                      <div key={label}>
                        <span className="font-display text-3xl font-semibold text-ink dark:text-stone-100">{value}</span>
                        <span className="font-sans text-xs text-muted dark:text-stone-500 ml-2">{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

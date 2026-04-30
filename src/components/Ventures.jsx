import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

const VENTURES = [
  {
    slug: 'arcite',
    location: 'Saskatoon, SK · Founded 2025',
    name: 'Arcite-AI',
    tagline: 'Organizations don\'t fail at AI adoption because of lack of tools. They fail because they don\'t know which tools apply to their context.',
    body: 'Chief AI Officer strategy combined with Forward Deployed Engineering. Two-phase recommendation system across 400+ tools. 87% search complexity reduction, 95%+ relevance accuracy. We start with proven solutions and only build custom when existing tools fall short.',
    pillars: [
      { label: 'Discovery', stat: '400+ tools evaluated' },
      { label: 'Deployment', stat: 'Forward Deployed Engineers' },
      { label: 'Training', stat: 'Role-specific frameworks' },
    ],
    cta: { label: 'Work With Us', href: 'mailto:temperature6464@gmail.com' },
  },
  {
    slug: 'zester',
    location: 'Saskatoon, SK · Founded 2025',
    name: 'Zester Data Studios',
    tagline: 'AI and robotics companies can\'t get the training data they actually need. Real footage of mines, farms, factories, and daily life. That data doesn\'t exist anywhere to buy.',
    body: 'Data infrastructure built as a three-stage production chain. Ore lets individuals monetize their footage. Crucible generates synthetic datasets with human expert validation. Forge delivers multilingual annotation through in-country workers. Sovereign infrastructure. Data never leaves the country.',
    pillars: [
      { label: 'Ore', stat: 'Individual data marketplace' },
      { label: 'Crucible', stat: 'Synthetic generation + annotation' },
      { label: 'Forge', stat: 'In-country multilingual labeling' },
    ],
    cta: { label: 'Learn More', href: 'https://zesterweb.vercel.app' },
  },
]

export default function Ventures() {
  const [ref, inView] = useInView()

  return (
    <section id="ventures" className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel light>Ventures</SectionLabel>
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-20">
            {VENTURES.map((v) => (
              <div key={v.slug}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-10">
                  <div>
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-rust mb-5">
                      {v.location}
                    </p>
                    <h2
                      className="font-display font-semibold text-sand leading-[0.9] mb-8"
                      style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                    >
                      {v.name}
                    </h2>
                    <p className="font-sans text-lg text-sand/60 leading-relaxed">{v.tagline}</p>
                  </div>
                  <div className="flex flex-col justify-center gap-6">
                    <p className="font-sans text-base text-sand/50 leading-relaxed">{v.body}</p>
                    <a
                      href={v.cta.href}
                      target={v.cta.href.startsWith('http') ? '_blank' : undefined}
                      rel={v.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 w-fit font-sans text-sm text-rust border border-rust/35 px-6 py-3 hover:bg-rust hover:text-sand transition-all duration-200"
                    >
                      {v.cta.label} →
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand/10">
                  {v.pillars.map(({ label, stat }) => (
                    <div key={label} className="bg-charcoal p-6 lg:p-8">
                      <p className="font-sans text-xs tracking-[0.28em] uppercase text-rust/60 mb-3">{label}</p>
                      <p className="font-display text-lg font-semibold text-sand">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

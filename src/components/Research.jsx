import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

const CARDS = [
  {
    label: 'Edwards School · Ongoing',
    dot: 'bg-rust',
    title: 'AI Readiness Levels (ARL)',
    body: 'A practical maturity framework built on the PIVOT model. Gives organizations a concrete map from initial awareness to full integration, with specific criteria at each level rather than vague aspirational benchmarks.',
  },
  {
    label: 'Edwards School · Ongoing',
    dot: 'bg-charcoal dark:bg-stone-400',
    title: 'Multi-Agent Committee Simulation',
    body: 'AI simulating university committee dynamics to study institutional decision-making. The goal is to understand where AI can support human judgment — not replace it.',
  },
  {
    label: 'ICCV 2023 · Paris · Team Research',
    dot: 'bg-muted',
    title: 'Plant Root Occlusion Inpainting',
    body: 'Collaborative team publication on GAN-based gap detection and repair in 3D root imaging, improving phenotyping accuracy for climate-resilient crop development.',
    link: 'https://openaccess.thecvf.com/ICCV2023',
    linkLabel: 'View Paper',
  },
]

export default function Research() {
  const [ref, inView] = useInView()

  return (
    <section id="research" className="py-28 bg-sand dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Research</SectionLabel>
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CARDS.map(({ label, dot, title, body, link, linkLabel }) => (
              <div
                key={title}
                className="border border-warm dark:border-stone-800 p-8 lg:p-10 flex flex-col hover:border-charcoal dark:hover:border-stone-600 transition-colors duration-200 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs tracking-[0.25em] uppercase text-muted dark:text-stone-500">{label}</span>
                  <span className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink dark:text-stone-100 mb-4 group-hover:text-rust transition-colors duration-200">{title}</h3>
                <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed flex-1">{body}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans text-sm text-rust mt-6 hover:underline">
                    {linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

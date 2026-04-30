import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

const LINKS = [
  { label: 'Email', display: 'krunal@arcite-ai.com', href: 'mailto:krunal@arcite-ai.com' },
  { label: 'LinkedIn', display: 'krunal-chavda-7877271b3', href: 'https://www.linkedin.com/in/krunal-chavda-7877271b3/', external: true },
  { label: 'GitHub', display: 'krunal16-c', href: 'https://github.com/krunal16-c', external: true },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="connect" className="py-28 bg-paper dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Connect</SectionLabel>
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink dark:text-stone-100 leading-[1.1] mb-6">
              Let's build something worth building.
            </h2>
            <p className="font-sans text-lg text-muted dark:text-stone-400 leading-relaxed">
              I'm interested in research collaborations, advisory work, speaking, and connecting with founders and researchers working at the intersection of AI and institutions.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {LINKS.map(({ label, display, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between py-5 border-b border-warm dark:border-stone-800 hover:border-ink dark:hover:border-stone-500 transition-colors duration-200"
              >
                <span className="font-sans text-sm text-muted dark:text-stone-500">{label}</span>
                <span className="font-sans text-sm text-ink dark:text-stone-300 group-hover:text-rust transition-colors duration-200">
                  {display} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

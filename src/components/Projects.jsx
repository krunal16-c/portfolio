import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'
import VideoModal from './VideoModal'

const GITHUB_PROJECTS = [
  {
    name: 'gov-ca-mcp',
    description: 'MCP servers for Canada\'s Open Government data, making federal datasets accessible to AI tools.',
    tags: ['Python', 'MCP', 'Open Data'],
    href: 'https://github.com/krunal16-c/gov-ca-mcp',
    accent: 'border-l-rust',
  },
  {
    name: 'jobs',
    description: 'AI and automation susceptibility mapping for every occupation in the Canadian economy, using Statistics Canada and ESDC data.',
    tags: ['Python', 'Labour Economics'],
    href: 'https://github.com/krunal16-c/jobs',
    accent: 'border-l-charcoal dark:border-l-stone-500',
  },
  {
    name: 'skillsclaw',
    description: 'Turns recorded workflows into reusable AI skills. Upload a video or SOP, get a production-ready SKILL.md. Multi-provider.',
    tags: ['React', 'AI', 'Open Source'],
    href: 'https://github.com/krunal16-c/skillsclaw',
    accent: 'border-l-rust-light',
  },
  {
    name: 'safetyfirst',
    description: 'AI-powered workplace safety and OH&S compliance. Predict risks, prevent incidents, protect workers.',
    tags: ['AI', 'Safety', 'Enterprise'],
    href: 'https://github.com/krunal16-c/safetyfirst',
    accent: 'border-l-stone-500',
  },
  {
    name: 'prism',
    description: 'Government-grade infrastructure risk management with AI and MCP integration for public budget allocation decisions.',
    tags: ['Python', 'Government', 'Risk'],
    href: 'https://github.com/krunal16-c/prism',
    accent: 'border-l-rust',
  },
  {
    name: 'wildtrack',
    description: 'Wildlife tracking and reporting app. Field data collected via Flutter, routed to relevant authorities through Firebase.',
    tags: ['Flutter', 'Firebase', 'GIS'],
    href: 'https://github.com/krunal16-c/wildtrack',
    accent: 'border-l-charcoal dark:border-l-stone-400',
  },
]

const EXPO_DEMOS = [
  {
    name: 'FoodLens Agent',
    category: 'Food & Health',
    description: 'A tool for restaurant owners and managers: upload an iPhone photo of a dish and get a more appetizing, marketing-ready image for social media.',
    youtubeId: 'iaP-jPCtmK8',
  },
  {
    name: 'Style Me Agent',
    category: 'Fashion AI',
    description: 'Visualize how a haircut will look on you before you commit — saves you (and your barber) the hassle of guesswork.',
    youtubeId: 'B7Q5szY_AsI',
  },
  {
    name: 'RFQ Agent',
    category: 'Procurement',
    description: 'Tracks RFQs across the sites you care about, scores each opportunity against your company profile and fit, and surfaces the best bids to pursue.',
    youtubeId: 'Oq73sFiy9Lo',
  },
  {
    name: 'Aurora — Voice AI',
    category: 'Voice AI',
    description: 'Natural voice interaction that goes beyond commands. Conversational AI with memory and context across sessions.',
    youtubeId: 'fsoa7EzTOs0',
  },
  {
    name: 'Iota',
    category: 'Research',
    description: 'Grant discovery platform for researchers. Surfaces relevant funding opportunities based on your work profile.',
    youtubeId: '7rgNEyiLYPQ',
  },
  {
    name: 'PRISM AI',
    category: 'Government',
    description: 'G7 GovAI submission. AI-driven government services infrastructure for public sector decision-making.',
    youtubeId: 'B9AwN1M5lCs',
  },
  {
    name: 'MCP in Action',
    category: 'Open Data',
    description: 'Live demo connecting MCP protocol directly to Government of Canada open datasets. Real data, real queries.',
    youtubeId: '3CAzFRs7PtU',
  },
  {
    name: 'SkillsClaw',
    category: 'AI Platform',
    description: 'Turns recorded workflows into reusable AI skills. Upload a video or SOP, get a production-ready SKILL.md.',
    href: 'https://github.com/krunal16-c/skillsclaw',
  },
  {
    name: 'AI & Canadian Jobs',
    category: 'Labour Research',
    description: 'Interactive map of AI and automation exposure across every occupation in the Canadian economy.',
    href: 'https://krunal16-c.github.io/jobs/',
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [modal, setModal] = useState(null)

  return (
    <section id="projects" className="py-28 bg-paper dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Projects</SectionLabel>
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Open Source */}
          <p className="font-sans text-lg text-muted dark:text-stone-400 leading-relaxed max-w-2xl mb-10">
            Open-source work ranging from government data tools to AI safety systems. Most were built to solve problems I ran into directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {GITHUB_PROJECTS.map(({ name, description, tags, href, accent }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group border-l-2 ${accent} border border-warm dark:border-stone-800 p-7 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-stone-900/50 transition-all duration-200 flex flex-col bg-sand dark:bg-stone-950`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200">
                    {name}
                  </h3>
                  <span className="text-muted dark:text-stone-500 group-hover:text-rust transition-colors duration-200 ml-2 shrink-0">↗</span>
                </div>
                <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed flex-1 mb-5">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <span key={tag} className="font-sans text-xs text-muted dark:text-stone-500 border border-warm dark:border-stone-800 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 mb-24">
            <a href="https://github.com/krunal16-c" target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors">
              View all on GitHub →
            </a>
          </div>

          {/* Arcite AI demos */}
          <div className="border-t border-warm dark:border-stone-800 pt-16">
            <div className="mb-10">
              <p className="font-sans text-xs tracking-[0.28em] uppercase text-rust mb-3">Arcite AI · Agents</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink dark:text-stone-100 mb-4">Live Demos</h2>
              <p className="font-sans text-base text-muted dark:text-stone-400 max-w-2xl">
                A selection of agents and prototypes — food, procurement, voice, government tools, and research platforms. Click to watch each one in action.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EXPO_DEMOS.map((demo) => {
                const hasVideo = !!demo.youtubeId
                const thumbnailUrl = hasVideo
                  ? `https://img.youtube.com/vi/${demo.youtubeId}/mqdefault.jpg`
                  : null

                if (hasVideo) {
                  return (
                    <button
                      key={demo.name}
                      onClick={() => setModal(demo)}
                      className="group text-left border border-warm dark:border-stone-800 overflow-hidden hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-stone-900/60 transition-all duration-200 bg-sand dark:bg-stone-950 flex flex-col"
                    >
                      <div className="relative aspect-video bg-charcoal overflow-hidden">
                        <img
                          src={thumbnailUrl}
                          alt={demo.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-rust/90 flex items-center justify-center text-sand group-hover:bg-rust group-hover:scale-110 transition-all duration-200 shadow-lg">
                            <PlayIcon />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="font-sans text-xs tracking-[0.18em] uppercase text-sand/80 bg-charcoal/60 backdrop-blur-sm px-2.5 py-1">
                            {demo.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-display text-lg font-semibold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 mb-2">
                          {demo.name}
                        </h3>
                        <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed">{demo.description}</p>
                      </div>
                    </button>
                  )
                }

                return (
                  <a
                    key={demo.name}
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-warm dark:border-stone-800 border-l-2 border-l-rust p-6 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-stone-900/50 transition-all duration-200 flex flex-col bg-sand dark:bg-stone-950"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-sans text-xs tracking-[0.18em] uppercase text-rust/70">{demo.category}</span>
                      <span className="text-muted dark:text-stone-500 group-hover:text-rust transition-colors duration-200">↗</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 mb-3">
                      {demo.name}
                    </h3>
                    <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed">{demo.description}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <VideoModal
          youtubeId={modal.youtubeId}
          title={modal.name}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  )
}

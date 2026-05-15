import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import VideoModal from './VideoModal'

const GITHUB_PROJECTS = [
  {
    name: 'gov-ca-mcp',
    description: 'Two Python-based MCP servers giving LLMs access to Canada\'s open government data: a dataset discovery server indexing 250,000+ datasets from Open Government Canada and a transportation infrastructure server integrating Statistics Canada data. 14 MCP tools, SSE streaming, Docker/Cloudflare Workers.',
    tags: ['Python', 'MCP', 'Open Data'],
    href: 'https://github.com/krunal16-c/gov-ca-mcp',
    accent: 'border-l-rust',
  },
  {
    name: 'prism',
    description: 'Government-grade infrastructure risk management using FastAPI + Next.js 14 + TypeScript. Claude and GPT-4o-mini via LangChain across 18 MCP tools connected to live Statistics Canada data. PCI highway degradation forecasting, freeze-thaw prediction, multi-section corridor optimization across 1,819+ Ontario road sections. G7 GovAI Grand Challenge submission.',
    tags: ['Python', 'Next.js', 'Government'],
    href: 'https://github.com/krunal16-c/prism',
    accent: 'border-l-rust',
  },
  {
    name: 'safetyfirst',
    description: 'AI-powered OH&S platform predicting workplace incident probability using XGBoost, trained and deployed on IBM Watson. Serves predictions via FastAPI REST API. Predicts incident probability over the next 7 days based on worker characteristics, current conditions, and historical patterns. People\'s Choice Award, SaskHack 2026.',
    tags: ['Python', 'XGBoost', 'IBM Watson'],
    href: 'https://github.com/krunal16-c/safetyfirst',
    accent: 'border-l-stone-500',
  },
  {
    name: 'skillsclaw',
    description: 'An AI agent that converts recorded workflows and SOPs into production-ready Claude skill definitions. Upload a video or document, get a structured SKILL.md ready for deployment.',
    tags: ['React', 'AI', 'Claude'],
    href: 'https://github.com/krunal16-c/skillsclaw',
    accent: 'border-l-rust-light',
  },
  {
    name: 'jobs',
    description: 'AI and automation exposure mapping for every occupation in the Canadian economy. Uses Statistics Canada and ESDC data to score susceptibility across hundreds of occupations.',
    tags: ['Python', 'Labour Economics', 'Data'],
    href: 'https://github.com/krunal16-c/jobs',
    accent: 'border-l-charcoal dark:border-l-stone-500',
  },
  {
    name: 'wildtrack',
    description: 'Wildlife tracking and reporting app. Field data collected via Flutter, routed to relevant authorities through Firebase and GIS. 2nd Prize, Eco Hack 2022.',
    tags: ['Flutter', 'Firebase', 'GIS'],
    href: 'https://github.com/krunal16-c/wildtrack',
    accent: 'border-l-charcoal dark:border-l-stone-400',
  },
]

const EXPO_DEMOS = [
  {
    name: 'FoodLens Agent',
    category: 'Food & Health',
    description: 'Restaurant photo enhancement agent: upload a dish photo, get marketing-ready imagery. Google Gemini via FastAPI + React/Vite. 6 style presets, cuisine-specific prompts, Instagram-ready export. 21 pytest tests, TDD approach.',
    youtubeId: 'iaP-jPCtmK8',
  },
  {
    name: 'Style Me Agent',
    category: 'Fashion AI',
    description: 'AI hairstyle recommendation using Google Gemini. Analyzes 7 face shapes and generates 4 personalized style suggestions (Safe, Trendy, Bold, Classic). Reference photo upload and hair color recommendations.',
    youtubeId: 'B7Q5szY_AsI',
  },
  {
    name: 'RFQ Agent',
    category: 'Procurement',
    description: 'Multi-agent procurement automation using LangGraph + LangChain + OpenAI. Monitors CanadaBuys, SAM.gov, MERX, scores opportunities 0-100 via LLM matching, and auto-drafts proposals. FastAPI + PostgreSQL + Next.js 14 + TanStack Query, APScheduler, Slack alerts.',
    youtubeId: 'Oq73sFiy9Lo',
  },
  {
    name: 'Aurora: Voice AI',
    category: 'Voice AI',
    description: 'Conversational AI training tool simulating donor interaction using Google ADK. Enables teams to refine communication skills without live engagement risk. Resulted in 30% more donor conversions.',
    youtubeId: 'fsoa7EzTOs0',
  },
  {
    name: 'Iota',
    category: 'Research',
    description: 'Personalized grant discovery for researchers. Surfaces relevant funding opportunities using LangChain, Tavily API search, and gpt-4o-mini reasoning.',
    youtubeId: '7rgNEyiLYPQ',
  },
  {
    name: 'PRISM AI',
    category: 'Government',
    description: 'G7 GovAI Grand Challenge submission. Infrastructure risk management with PCI highway degradation forecasting, freeze-thaw vulnerability prediction, and multi-section corridor optimization across 1,819+ Ontario road sections.',
    youtubeId: 'B9AwN1M5lCs',
  },
  {
    name: 'MCP in Action',
    category: 'Open Data',
    description: 'Live demo of MCP servers connected to Government of Canada open datasets: 250,000+ datasets, transportation infrastructure, real federal data queries.',
    youtubeId: '3CAzFRs7PtU',
  },
  {
    name: 'SkillsClaw',
    category: 'AI Platform',
    description: 'Converts recorded workflows and SOPs into production-ready Claude skill definitions.',
    href: 'https://github.com/krunal16-c/skillsclaw',
  },
  {
    name: 'AI & Canadian Jobs',
    category: 'Labour Research',
    description: 'Interactive map of AI and automation exposure across every occupation in the Canadian economy using Statistics Canada and ESDC data.',
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

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export default function Projects() {
  const [modal, setModal] = useState(null)

  return (
    <section id="projects" className="py-28 bg-paper dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel>Projects</SectionLabel>

        {/* Open Source */}
        <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed max-w-2xl mb-10">
          Open-source work spanning government data infrastructure, AI safety systems, and labour research tools. Built to solve real problems.
        </p>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {GITHUB_PROJECTS.map(({ name, description, tags, href, accent }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group border-l-2 ${accent} border border-warm dark:border-stone-800 p-7 hover:shadow-lg dark:hover:shadow-stone-900/50 transition-shadow duration-200 flex flex-col bg-sand dark:bg-stone-950`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 tracking-tight">
                  {name}
                </h3>
                <span className="text-muted dark:text-stone-500 group-hover:text-rust transition-colors duration-200 ml-2 shrink-0">↗</span>
              </div>
              <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed flex-1 mb-5">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="font-sans text-[10px] text-muted dark:text-stone-500 border border-warm dark:border-stone-800 px-2 py-0.5 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 mb-24">
          <a
            href="https://github.com/krunal16-c"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors tracking-wide"
          >
            View all on GitHub →
          </a>
        </div>

        {/* Arcite AI demos */}
        <div className="border-t border-warm dark:border-stone-800 pt-16">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-[0.36em] uppercase text-rust mb-3">Arcite AI · Agents</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink dark:text-stone-100 mb-4 tracking-tight">Live Demos</h2>
            <p className="font-sans text-sm text-muted dark:text-stone-400 max-w-2xl">
              Agents and prototypes across food, procurement, voice, government, and research. Click to watch.
            </p>
          </div>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {EXPO_DEMOS.map((demo) => {
              const hasVideo = !!demo.youtubeId
              const thumbnailUrl = hasVideo
                ? `https://img.youtube.com/vi/${demo.youtubeId}/mqdefault.jpg`
                : null

              if (hasVideo) {
                return (
                  <motion.button
                    key={demo.name}
                    onClick={() => setModal(demo)}
                    variants={cardVariant}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group text-left border border-warm dark:border-stone-800 overflow-hidden hover:shadow-xl dark:hover:shadow-stone-900/60 transition-shadow duration-200 bg-sand dark:bg-stone-950 flex flex-col"
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
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-sand/80 bg-charcoal/60 backdrop-blur-sm px-2.5 py-1">
                          {demo.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-display text-lg font-bold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 mb-2 tracking-tight">
                        {demo.name}
                      </h3>
                      <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed">{demo.description}</p>
                    </div>
                  </motion.button>
                )
              }

              return (
                <motion.a
                  key={demo.name}
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariant}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group border border-warm dark:border-stone-800 border-l-2 border-l-rust p-6 hover:shadow-lg dark:hover:shadow-stone-900/50 transition-shadow duration-200 flex flex-col bg-sand dark:bg-stone-950"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-rust/70">{demo.category}</span>
                    <span className="text-muted dark:text-stone-500 group-hover:text-rust transition-colors duration-200">↗</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 mb-3 tracking-tight">
                    {demo.name}
                  </h3>
                  <p className="font-sans text-sm text-muted dark:text-stone-400 leading-relaxed">{demo.description}</p>
                </motion.a>
              )
            })}
          </motion.div>
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

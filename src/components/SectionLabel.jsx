export default function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className={`font-sans text-xs tracking-[0.28em] uppercase whitespace-nowrap ${
        light ? 'text-sand/40' : 'text-muted dark:text-stone-500'
      }`}>
        {children}
      </span>
      <div className={`flex-1 h-px ${light ? 'bg-sand/20' : 'bg-warm dark:bg-stone-800'}`} />
    </div>
  )
}

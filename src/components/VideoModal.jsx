import { useEffect } from 'react'

export default function VideoModal({ youtubeId, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm px-4 py-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="font-sans text-sm text-sand/60 truncate pr-4">{title}</p>
          <button
            onClick={onClose}
            className="font-sans text-sm text-sand/50 hover:text-sand transition-colors shrink-0 flex items-center gap-2"
          >
            Close <span className="text-base">✕</span>
          </button>
        </div>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

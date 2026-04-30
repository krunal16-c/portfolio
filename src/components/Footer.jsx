import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-sand dark:bg-stone-950 border-t border-warm dark:border-stone-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-sm text-muted dark:text-stone-500">
          © {new Date().getFullYear()} Krunal Chavda · Saskatoon, SK
        </p>
        <div className="flex items-center gap-6">
          <Link to="/blog" className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors">Writing</Link>
          <a href="https://github.com/krunal16-c" target="_blank" rel="noopener noreferrer"
            className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/krunal-chavda-7877271b3/" target="_blank" rel="noopener noreferrer"
            className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost } from '../utils/posts'
import Footer from '../components/Footer'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-sand dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <p className="font-sans text-muted dark:text-stone-400 mb-4">Post not found.</p>
          <Link to="/blog" className="font-sans text-sm text-rust hover:underline">← Back to Writing</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sand dark:bg-stone-950 flex flex-col">
      <div className="flex-1 max-w-3xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
        <Link to="/blog" className="font-sans text-xs tracking-[0.25em] uppercase text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors mb-12 block">
          ← All Writing
        </Link>
        <header className="mb-14">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="font-sans text-xs tracking-[0.2em] uppercase text-rust border border-rust/25 px-3 py-1">{tag}</span>
              ))}
            </div>
          )}
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-ink dark:text-stone-100 leading-[1.1] mb-5">{post.title}</h1>
          <div className="flex items-center gap-5">
            <span className="font-sans text-sm text-muted dark:text-stone-500">{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-warm dark:bg-stone-700" />
            <span className="font-sans text-sm text-muted dark:text-stone-500">{post.readTime} min read</span>
          </div>
        </header>
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-semibold">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
        <div className="mt-16 pt-8 border-t border-warm dark:border-stone-800 flex items-center justify-between">
          <Link to="/blog" className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors">← All Writing</Link>
          <Link to="/" className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors">Krunal Chavda →</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

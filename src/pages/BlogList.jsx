import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'
import Footer from '../components/Footer'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

export default function BlogList() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-sand dark:bg-stone-950 flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
        <Link to="/" className="font-sans text-xs tracking-[0.25em] uppercase text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors mb-10 block">
          ← Krunal Chavda
        </Link>
        <div className="mb-16">
          <h1 className="font-display text-5xl lg:text-6xl font-semibold text-ink dark:text-stone-100">Writing</h1>
          <p className="font-sans text-lg text-muted dark:text-stone-400 mt-4">
            On AI, institutions, research, and building things that matter.
          </p>
        </div>
        {posts.map(post => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="flex flex-col md:flex-row gap-4 md:gap-12 py-9 border-b border-warm dark:border-stone-800 last:border-0 group"
          >
            <div className="md:w-32 shrink-0 pt-1">
              <span className="font-sans text-xs text-muted dark:text-stone-500 tabular-nums">{formatDate(post.date)}</span>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 mb-2">
                {post.title}
              </h2>
              <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3">
                {post.tags.map(tag => (
                  <span key={tag} className="font-sans text-xs text-muted dark:text-stone-500 border border-warm dark:border-stone-800 px-2.5 py-0.5">{tag}</span>
                ))}
                <span className="font-sans text-xs text-muted/70 dark:text-stone-600">{post.readTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

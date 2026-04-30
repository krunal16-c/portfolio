import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { getAllPosts } from '../utils/posts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
}

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  const [ref, inView] = useInView()

  return (
    <section id="writing" className="py-28 bg-sand dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-sans text-xs tracking-[0.28em] uppercase text-muted dark:text-stone-500 whitespace-nowrap">Writing</span>
          <div className="flex-1 h-px bg-warm dark:bg-stone-800" />
          <Link to="/blog" className="font-sans text-sm text-muted dark:text-stone-500 hover:text-ink dark:hover:text-stone-100 transition-colors whitespace-nowrap ml-2">
            View All →
          </Link>
        </div>
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {posts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="flex flex-col md:flex-row gap-4 md:gap-14 py-9 border-b border-warm dark:border-stone-800 last:border-0 group"
            >
              <div className="md:w-28 shrink-0 pt-1">
                <span className="font-sans text-xs text-muted dark:text-stone-500 tabular-nums">{formatDate(post.date)}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold text-ink dark:text-stone-100 group-hover:text-rust transition-colors duration-200 mb-2">
                  {post.title}
                </h3>
                <p className="font-sans text-base text-muted dark:text-stone-400 leading-relaxed mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="font-sans text-xs text-muted/70 dark:text-stone-500">{tag}</span>
                  ))}
                  <span className="font-sans text-xs text-muted/70 dark:text-stone-500">{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const postFiles = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim()
      const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '')
      data[key] = val
    }
  })

  return { data, content: match[2] }
}

export function getAllPosts() {
  return Object.entries(postFiles)
    .map(([filepath, raw]) => {
      const slug = filepath.split('/').pop().replace('.md', '')
      const { data, content } = parseFrontmatter(raw)
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        excerpt: data.excerpt || '',
        tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
        readTime: Math.max(1, Math.ceil(content.split(/\s+/).length / 200)),
        published: data.published !== 'false',
        content,
      }
    })
    .filter(p => p.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPost(slug) {
  return getAllPosts().find(p => p.slug === slug) || null
}

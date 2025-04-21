import { BlogCard, BlogPost } from "@/components/blog-card"
import { blogPosts } from "@/config/blogPosts"

export default function BlogPage() {
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  const popularPosts = blogPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, 3)

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-4xl font-bold">Blog</h1>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🆕 Artikel Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🔥 Artikel Populer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {popularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

export const metadata = {
  title: 'Blog | Innodecor Creations',
  description: 'Interior design tips, construction insights, and real estate advice from the experts at Innodecor Creations.',
}

const BlogPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Our <span className="text-gold">Blog</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert insights, tips, and trends in interior design, construction, and real estate
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="text-gold">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold mb-3 hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gold hover:text-gold-dark font-semibold inline-flex items-center gap-2"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage

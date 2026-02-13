import { blogPosts } from '@/data/blogData'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiClock, FiUser, FiTag } from 'react-icons/fi'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Innodecor Creations Blog`,
    description: post.excerpt,
  }
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-6"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <FiTag className="text-gold" />
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <FiUser className="text-gold" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="text-gold" />
              {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="rounded-sm mb-8 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-gray-50 rounded-sm text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today for a free consultation
            </p>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Related <span className="text-gold-gradient">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold mb-2 hover:text-gold transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-gold hover:text-gold-dark font-semibold text-sm"
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

export default BlogPostPage

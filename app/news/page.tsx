import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { newsArticles } from './news.data'

export const metadata = {
  title: 'News & Updates',
  description: 'Latest news, updates, and press releases from the TFS Volunteer Fire Department.',
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <h1 className="mb-4">News & Updates</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay informed about TFS activities, incidents, and community events
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/news/${article.id}`} className="block">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-fire-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-fire-dark/60 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-fire-dark hover:text-fire-red transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-fire-dark/70 mb-4">{article.excerpt}</p>

                    <span className="text-fire-red font-semibold flex items-center group">
                      Read more
                      <ArrowRight
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 text-fire-dark/70">
              Subscribe to receive news and updates from TFS Volunteer Fire Department directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                aria-label="Email address"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

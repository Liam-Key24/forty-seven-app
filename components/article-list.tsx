import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: "The Evolution of Urban Photography in Modern Times",
    excerpt: "Exploring how city photography has transformed with the advent of digital technology and social media",
    image: "/placeholder.svg?height=100&width=100",
    author: "Michael Chen",
    date: "December 13, 2023",
    slug: "urban-photography-evolution"
  },
  {
    title: "Sustainable Fashion: A New Era of Conscious Clothing",
    excerpt: "How the fashion industry is adapting to meet environmental challenges and consumer demands",
    image: "/placeholder.svg?height=100&width=100",
    author: "Emma Roberts",
    date: "December 12, 2023",
    slug: "sustainable-fashion-era"
  },
  {
    title: "The Rise of Artisanal Coffee Culture",
    excerpt: "From simple beans to complex brews: the story of coffee's cultural renaissance",
    image: "/placeholder.svg?height=100&width=100",
    author: "James Wilson",
    date: "December 11, 2023",
    slug: "artisanal-coffee-culture"
  },
  {
    title: "Traditional Crafts in the Digital Age",
    excerpt: "How artisans are preserving ancient techniques while embracing modern technology",
    image: "/placeholder.svg?height=100&width=100",
    author: "Sarah Johnson",
    date: "December 10, 2023",
    slug: "traditional-crafts-digital"
  },
  {
    title: "The Future of Urban Transportation",
    excerpt: "Innovative solutions reshaping how we move through cities",
    image: "/placeholder.svg?height=100&width=100",
    author: "David Lee",
    date: "December 9, 2023",
    slug: "urban-transportation-future"
  },
  {
    title: "Mindful Living in the Modern World",
    excerpt: "Practical approaches to maintaining balance in an increasingly fast-paced society",
    image: "/placeholder.svg?height=100&width=100",
    author: "Lisa Chen",
    date: "December 8, 2023",
    slug: "mindful-living-modern"
  },
  {
    title: "The Renaissance of Vinyl Records",
    excerpt: "Understanding the renewed appreciation for analog music in a digital world",
    image: "/placeholder.svg?height=100&width=100",
    author: "Tom Anderson",
    date: "December 7, 2023",
    slug: "vinyl-records-renaissance"
  }
]

export function ArticleList() {
  return (
    <section className="py-16 px-4 bg-[#FFF7EB]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl italic font-serif text-[#1B2D36] mb-8">ARTICLES</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Articles List */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {articles.map((article, index) => (
                <div key={article.slug}>
                  <Link href={`/articles/${article.slug}`}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={100}
                          height={100}
                          className="bg-gray-200"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium text-[#1B2D36] mb-2">
                          {article.title}
                        </h3>
                        <p className="text-[#1B2D36]/70 text-sm mb-2">
                          {article.excerpt}...
                        </p>
                        <p className="text-sm text-[#1B2D36]/60">
                          {article.author} • {article.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                  {index < articles.length - 1 && (
                    <div className="h-px bg-[#1B2D36]/10 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Advertisement Spaces */}
          <div className="lg:col-span-4 space-y-8">
            <div className="aspect-[3/4] bg-gray-200 w-full" />
            <div className="aspect-[3/4] bg-gray-200 w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}


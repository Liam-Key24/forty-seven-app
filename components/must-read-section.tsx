import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredArticle = {
  title: "The Untold Stories of Urban Life",
  excerpt: "Exploring the hidden narratives and diverse experiences that shape our cities...",
  image: "/placeholder.svg?height=600&width=800",
  author: "Jane Doe",
  date: "June 15, 2024",
  slug: "urban-life-stories"
}

const sideArticles = [
  {
    title: "The Evolution of Street Photography",
    excerpt: "From the early days of film to the digital era, how street photography has captured urban life...",
    image: "/placeholder.svg?height=80&width=80",
    author: "John Smith",
    date: "June 14, 2024",
    slug: "street-photography"
  },
  {
    title: "Urban Architecture Through the Ages",
    excerpt: "A journey through time, exploring how city skylines have transformed over centuries...",
    image: "/placeholder.svg?height=80&width=80",
    author: "Emily Johnson",
    date: "June 13, 2024",
    slug: "urban-architecture"
  },
  {
    title: "City Life: A Cultural Perspective",
    excerpt: "Examining how different cultures shape and are shaped by urban environments...",
    image: "/placeholder.svg?height=80&width=80",
    author: "Michael Chen",
    date: "June 12, 2024",
    slug: "city-life-culture"
  },
  {
    title: "Modern Urban Development",
    excerpt: "The challenges and opportunities in creating sustainable, livable cities for the future...",
    image: "/placeholder.svg?height=80&width=80",
    author: "Sarah Williams",
    date: "June 11, 2024",
    slug: "urban-development"
  }
]

export function MustReadSection() {
  return (
    <section className="py-16 px-4 bg-[#FFF7EB]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8 border-b border-[#1B2D36]">
          <h2 className="text-3xl italic font-serif text-[#1B2D36]">MUST READS</h2>
          <Link 
            href="/must-reads" 
            className="flex items-center text-sm text-[#1B2D36] hover:text-[#1B2D36]/70 transition-colors"
          >
            view all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Link href={`/articles/${featuredArticle.slug}`} className="block">
            <div className="bg-[#1B2D36] text-[#FFF7EB] p-6 rounded-lg shadow-lg h-full flex flex-col">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{featuredArticle.title}</h3>
              <p className="text-sm mb-4 flex-grow">{featuredArticle.excerpt}</p>
              <p className="text-xs text-[#FFF7EB]/60">{featuredArticle.author} • {featuredArticle.date}</p>
            </div>
          </Link>

          {/* Side Articles */}
          <div className="space-y-4">
            {sideArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="block">
                <div className="flex items-start space-x-4 bg-[#FFF7EB] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#1B2D36]/10">
                  <div className="flex-shrink-0">
                    <Image src={article.image} alt={article.title} width={80} height={80} className="rounded-md object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#1B2D36] mb-2">{article.title}</h3>
                    <p className="text-sm text-[#1B2D36]/70 mb-2">{article.excerpt}</p>
                    <p className="text-xs text-[#1B2D36]/60">{article.author} • {article.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


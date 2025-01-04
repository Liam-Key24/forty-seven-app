import Image from 'next/image'
import Link from 'next/link'

interface Article {
  title: string
  category: string
  image: string
  slug: string
}

interface ArticlesGridProps {
  articles: Article[]
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Link key={article.slug} href={`/articles/${article.slug}`} className="block">
          <div className="relative">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={600}
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 rounded-b-lg">
              <h3 className="text-white text-lg font-medium">{article.title}</h3>
              <p className="text-white text-sm">{article.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 
import { notFound } from 'next/navigation'
import Image from 'next/image'

// This would typically come from a CMS or API
const getArticle = (slug: string) => {
  const articles = {
    'banana-change': {
      title: "How bananas have changed in so many ways because of eco-minded vendors",
      content: "Lorem ipsum dolor sit amet...",
      image: "/placeholder.svg?height=900&width=1600",
      category: "Food"
    },
    'cat-cafe': {
      title: "People's new catcafe made me stick i had donuts",
      content: "Lorem ipsum dolor sit amet...",
      image: "/placeholder.svg?height=900&width=1600",
      category: "Lifestyle"
    },
    'health-tips': {
      title: "Getting healthy these are the top 10 to visit this upcoming spring",
      content: "Lorem ipsum dolor sit amet...",
      image: "/placeholder.svg?height=900&width=1600",
      category: "Health"
    }
  }
  return articles[slug as keyof typeof articles]
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <span className="text-sm text-[#1B2D36]/60 uppercase tracking-wider">{article.category}</span>
      <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-8 text-[#1B2D36]">{article.title}</h1>
      <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={1600}
          height={900}
          className="object-cover"
        />
      </div>
      <div className="prose prose-lg max-w-prose mx-auto text-[#1B2D36]">
        <p>{article.content}</p>
      </div>
    </article>
  )
}


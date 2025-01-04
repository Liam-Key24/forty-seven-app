import { CategoryPageLayout } from '../../components/category-page-layout'
import { ArticlesGrid } from '../../components/articles-grid'

const artArticles = [
  {
    title: "The Evolution of Street Art: From Vandalism to Galleries",
    category: "Art",
    image: "/placeholder.svg?height=400&width=600",
    slug: "street-art-evolution"
  },
  {
    title: "Digital Art Revolution: NFTs and Beyond",
    category: "Art",
    image: "/placeholder.svg?height=400&width=600",
    slug: "digital-art-nfts"
  },
  {
    title: "Rediscovering Classical Techniques in Contemporary Painting",
    category: "Art",
    image: "/placeholder.svg?height=400&width=600",
    slug: "classical-techniques-modern-painting"
  }
]

export default function ArtPage() {
  return (
    <CategoryPageLayout
      title="Art"
      description="Discover the latest movements and artists shaping the art world."
    >
      <ArticlesGrid articles={artArticles} />
    </CategoryPageLayout>
  )
}


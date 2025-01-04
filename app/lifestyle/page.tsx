import { CategoryPageLayout } from '../../components/category-page-layout'
import { ArticlesGrid } from '../../components/articles-grid'

const lifestyleArticles = [
  {
    title: "The Art of Slow Living: Embracing a Mindful Lifestyle",
    category: "Lifestyle",
    image: "/placeholder.svg?height=400&width=600",
    slug: "slow-living"
  },
  {
    title: "Minimalism: How Less Can Lead to More",
    category: "Lifestyle",
    image: "/placeholder.svg?height=400&width=600",
    slug: "minimalism"
  },
  {
    title: "The Rise of Digital Nomads: Working from Anywhere",
    category: "Lifestyle",
    image: "/placeholder.svg?height=400&width=600",
    slug: "digital-nomads"
  }
]

export default function LifestylePage() {
  return (
    <CategoryPageLayout
      title="Lifestyle"
      description="Explore the latest trends and insights in modern living."
    >
      <ArticlesGrid articles={lifestyleArticles} />
    </CategoryPageLayout>
  )
}


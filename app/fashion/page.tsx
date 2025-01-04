import { CategoryPageLayout } from '../../components/category-page-layout'
import { ArticlesGrid } from '../../components/articles-grid'

const fashionArticles = [
  {
    title: "Sustainable Fashion: The Future of Style",
    category: "Fashion",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-fashion"
  },
  {
    title: "Retro Revival: How Vintage Trends are Shaping Modern Fashion",
    category: "Fashion",
    image: "/placeholder.svg?height=400&width=600",
    slug: "retro-fashion-revival"
  },
  {
    title: "The Intersection of Technology and Fashion: Smart Clothing",
    category: "Fashion",
    image: "/placeholder.svg?height=400&width=600",
    slug: "tech-fashion-intersection"
  }
]

export default function FashionPage() {
  return (
    <CategoryPageLayout
      title="Fashion"
      description="Stay ahead of the curve with the latest trends and styles in fashion."
    >
      <ArticlesGrid articles={fashionArticles} />
    </CategoryPageLayout>
  )
}


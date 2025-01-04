import { CategoryPageLayout } from '../../components/category-page-layout'
import { ArticlesGrid } from '../../components/articles-grid'

const travelArticles = [
  {
    title: "Hidden Gems: Unexplored Destinations for the Adventurous Traveler",
    category: "Travel",
    image: "/placeholder.svg?height=400&width=600",
    slug: "hidden-travel-gems"
  },
  {
    title: "Sustainable Tourism: How to Travel Responsibly in 2024",
    category: "Travel",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-tourism"
  },
  {
    title: "Culinary Journeys: Exploring the World Through Food",
    category: "Travel",
    image: "/placeholder.svg?height=400&width=600",
    slug: "culinary-journeys"
  }
]

export default function TravelPage() {
  return (
    <CategoryPageLayout
      title="Travel"
      description="Embark on journeys to extraordinary destinations around the globe."
    >
      <ArticlesGrid articles={travelArticles} />
    </CategoryPageLayout>
  )
}


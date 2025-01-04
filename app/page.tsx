import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Newsletter } from '../components/newsletter'
import { Carousel } from '../components/carousel'
import { MustReadSection } from '../components/must-read-section'
import { TrendingStories } from '../components/trending-stories'
import { MidSection } from '../components/mid-section'
import { ArticleList } from '../components/article-list'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider text-primary">Featured Stories</h2>
        <Carousel />
      </section>
      <MustReadSection />
      <TrendingStories />
      <MidSection />
      <ArticleList />
      <Newsletter />
    </main>
  )
}


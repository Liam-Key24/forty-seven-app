import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Newsletter } from '../components/newsletter'
import { Carousel } from '../components/carousel'
import { MustReadSection } from '../components/must-read-section'
import { TrendingStories } from '../components/trending-stories'
import { MidSection } from '../components/mid-section'
import { ArticleList } from '../components/article-list'


export default function LandingPage() {
  return (
    <main className="bg-[#FFF7EB]">
      <Header />
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider text-[#1B2D36]">Featured Stories</h2>
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


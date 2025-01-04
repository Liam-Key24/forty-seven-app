import { Header } from './header'
import { Newsletter } from './newsletter'

interface CategoryPageLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export function CategoryPageLayout({ children, title, description }: CategoryPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#1B2D36]">{title}</h1>
        <p className="text-xl text-[#1B2D36]/80 mb-12">{description}</p>
        {children}
      </main>
      <Newsletter />
    </>
  )
}


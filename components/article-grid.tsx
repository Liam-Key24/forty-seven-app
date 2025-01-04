'use client'

import { motion } from 'framer-motion'
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
  isDark?: boolean
}

export function ArticlesGrid({ articles = [], isDark = false }: ArticlesGridProps) {
  if (articles.length === 0) {
    return <p className={`text-center ${isDark ? 'text-[#FFF7EB]/60' : 'text-[#1B2D36]/60'}`}>No articles found.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <motion.div
          key={article.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <Link href={`/articles/${article.slug}`}>
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className={`text-sm ${isDark ? 'text-[#FFF7EB]/60' : 'text-[#1B2D36]/60'} uppercase tracking-wider`}>{article.category}</span>
            <h3 className={`text-xl font-semibold mt-2 ${isDark ? 'text-[#FFF7EB]' : 'text-[#1B2D36]'}`}>{article.title}</h3>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}


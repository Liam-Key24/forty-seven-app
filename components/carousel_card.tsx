'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CarouselCardProps {
  title: string
  category: string
  image: string
  author: string
  date: string
  slug: string
}

export function CarouselCard({ title, category, image, author, date, slug }: CarouselCardProps) {
  return (
    <Link href={`/articles/${slug}`}>
      <motion.article 
        className="bg-[#FFF7EB] rounded-lg p-4 h-full flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-[3/2] mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <motion.span
          whileHover={{ backgroundColor: '#1B2D36', color: '#FFF7EB' }}
          className="inline-block px-3 py-1 rounded-full text-sm border border-[#1B2D36] text-[#1B2D36] mb-3"
        >
          {category.toLowerCase()}
        </motion.span>
        <h3 className="text-2xl font-bold mb-3 leading-tight text-[#1B2D36]">{title}</h3>
        <p className="mt-auto text-sm text-[#1B2D36]/60">
          {date} | by {author}
        </p>
      </motion.article>
    </Link>
  )
}


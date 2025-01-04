'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { hoverFloat } from '../animations/hover'
import { fadeInUp } from '../animations/fade'

const trendingStories = [
  {
    title: "Urban Photography Trends",
    image: "/placeholder.svg?height=400&width=400",
    slug: "urban-photography"
  },
  {
    title: "Modern Architecture",
    image: "/placeholder.svg?height=400&width=400",
    slug: "modern-architecture"
  },
  {
    title: "Street Culture",
    image: "/placeholder.svg?height=400&width=400",
    slug: "street-culture"
  },
  {
    title: "City Life",
    image: "/placeholder.svg?height=400&width=400",
    slug: "city-life"
  }
]

export function TrendingStories() {
  return (
    <section className="bg-[#1B2D36] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl italic font-serif text-[#FFF7EB]">TRENDING STORIES</h2>
          <Link 
            href="/trending" 
            className="flex items-center text-sm text-[#FFF7EB] hover:text-[#FFF7EB]/70 transition-colors"
          >
            view all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingStories.map((story, index) => (
            <motion.div key={story.slug} {...fadeInUp} transition={{ delay: index * 0.1 }}>
              <Link href={`/stories/${story.slug}`} className="block">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFF7EB] rounded-lg" />
                  
                  <motion.div
                    className="relative"
                    {...hoverFloat}
                  >
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-lg" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-[#FFF7EB] text-lg font-medium">{story.title}</h3>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


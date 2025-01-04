'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { CarouselCard } from './carousel_card'


const carouselItems = [
  {
    id: 1,
    title: "How bananas have changed in so many ways because of over evolved monkeys",
    category: "Food",
    image: "/placeholder.svg?height=400&width=600",
    author: "Frank Glass",
    date: "28 Dec",
    slug: "banana-evolution"
  },
  {
    id: 2,
    title: "The rise of sustainable farming practices in urban environments",
    category: "Environment",
    image: "/placeholder.svg?height=400&width=600",
    author: "Sarah Chen",
    date: "27 Dec",
    slug: "sustainable-farming"
  },
  {
    id: 3,
    title: "Traditional cooking methods making a comeback in modern kitchens",
    category: "Culture",
    image: "/placeholder.svg?height=400&width=600",
    author: "James Wilson",
    date: "26 Dec",
    slug: "traditional-cooking"
  },
  {
    id: 4,
    title: "How local markets are adapting to changing consumer habits",
    category: "Business",
    image: "/placeholder.svg?height=400&width=600",
    author: "Emma Roberts",
    date: "25 Dec",
    slug: "local-markets"
  },
  {
    id: 5,
    title: "The impact of climate change on global food production",
    category: "Climate",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Chang",
    date: "24 Dec",
    slug: "climate-impact"
  }
]

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (carouselItems.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (carouselItems.length - 2)) % (carouselItems.length - 2))
  }

  return (
    <div className="relative">
      <div 
        className="overflow-hidden px-4"
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-1/3 flex-shrink-0">
              <CarouselCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#1B2D36', color: '#FFF7EB' }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 text-[#1B2D36] p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#1B2D36', color: '#FFF7EB' }}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 text-[#1B2D36] p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  )
}


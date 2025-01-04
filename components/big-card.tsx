'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const titles = [
  { title: "The Future of Sustainable Fashion", slug: "sustainable-fashion-future" },
  { title: "Exploring Hidden Gems of Southeast Asia", slug: "southeast-asia-hidden-gems" },
  { title: "The Rise of Plant-Based Diets", slug: "plant-based-diets-rise" }
]

export function BigCard() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 60000) // Change every 60 seconds (1 minute)

    return () => clearInterval(interval)
  }, [])

  const currentTitle = titles[currentTitleIndex]

  return (
    <Link href={`/articles/${currentTitle.slug}`}>
      <div className="bg-[#1B2D36] text-[#FFF7EB] p-6 rounded-lg shadow-lg h-full flex items-center justify-center hover:bg-[#2C3E47] transition-colors duration-300">
        <h2 className="text-2xl font-semibold text-center">{currentTitle.title}</h2>
      </div>
    </Link>
  )
}

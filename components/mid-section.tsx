'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const travelArticles = [
  {
    title: "Exploring Hidden Beaches of Southeast Asia",
    image: "/placeholder.svg?height=600&width=600",
    slug: "hidden-beaches"
  },
  {
    title: "Urban Adventures: Tokyo After Dark",
    image: "/placeholder.svg?height=200&width=400",
    slug: "tokyo-nights"
  },
  {
    title: "Mountain Retreats in the Swiss Alps",
    image: "/placeholder.svg?height=200&width=400",
    slug: "swiss-retreats"
  },
  {
    title: "Cultural Festivals Around the World",
    image: "/placeholder.svg?height=200&width=400",
    slug: "global-festivals"
  }
]

export function MidSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Mid Section</h2>
      {/* Add your mid section content here */}
    </section>
  )
}


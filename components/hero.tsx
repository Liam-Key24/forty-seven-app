'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12 md:py-24"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=900&width=1600"
          alt="Life in the Antarctic"
          width={1600}
          height={900}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D36]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 text-[#FFF7EB]">
          <span className="text-sm uppercase tracking-wider mb-2 block">Featured Story</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Life in the Antarctic</h2>
          <p className="max-w-xl text-lg mb-6">A journey through one of Earth's most extreme environments</p>
          <Link
            href="/stories/antarctic-life"
            className="inline-flex items-center px-6 py-3 bg-[#FFF7EB] text-[#1B2D36] rounded hover:bg-[#1B2D36] hover:text-[#FFF7EB] transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.section>
  )
}


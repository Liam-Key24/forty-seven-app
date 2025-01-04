'use client'

import { motion } from 'framer-motion'
import { hoverScale } from '../animations/hover'
import { fadeIn } from '../animations/fade'

export function Newsletter() {
  return (
    <motion.section
      {...fadeIn}
      viewport={{ once: true }}
      className="bg-[#1B2D36] text-[#FFF7EB] py-16 px-4"
    >
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up to the Newsletter</h2>
        <p className="text-[#FFF7EB]/80 mb-8">Hand Picked Articles straight to your inbox</p>
        <form className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-[#FFF7EB]/10 border border-[#FFF7EB]/20 text-[#FFF7EB] placeholder:text-[#FFF7EB]/60 focus:outline-none focus:ring-2 focus:ring-[#FFF7EB]/40"
          />
          <motion.button
            {...hoverScale}
            className="px-6 py-3 bg-[#FFF7EB] text-[#1B2D36] rounded-lg font-medium hover:bg-[#FFF7EB]/90 transition-colors"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}


'use client'

import { CategoryPageLayout } from '../../components/category-page-layout'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const podcastEpisodes = [
  {
    title: "The Future of Sustainable Living",
    description: "Exploring eco-friendly innovations and lifestyle changes for a greener tomorrow.",
    duration: "45:30",
    date: "2024-03-15"
  },
  {
    title: "Art in the Digital Age",
    description: "Discussing how technology is reshaping the creation and consumption of art.",
    duration: "38:15",
    date: "2024-03-08"
  },
  {
    title: "Hidden Travel Destinations",
    description: "Uncovering lesser-known but breathtaking locations for your next adventure.",
    duration: "52:00",
    date: "2024-03-01"
  }
]

export default function PodcastPage() {
  return (
    <CategoryPageLayout
      title="Podcast"
      description="Listen to in-depth discussions on lifestyle, art, travel, and more."
    >
      <div className="space-y-8">
        {podcastEpisodes.map((episode, index) => (
          <motion.div
            key={episode.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#FFF7EB] p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#1B2D36]">{episode.title}</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#1B2D36] text-[#FFF7EB] p-3 rounded-full"
              >
                <Play size={24} />
              </motion.button>
            </div>
            <p className="text-[#1B2D36]/80 mb-4">{episode.description}</p>
            <div className="flex justify-between text-sm text-[#1B2D36]/60">
              <span>{episode.duration}</span>
              <span>{episode.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </CategoryPageLayout>
  )
}


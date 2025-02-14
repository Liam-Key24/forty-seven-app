'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Lifestyle', href: '/lifestyle' },
  { name: 'Art', href: '/art' },
  { name: 'Travel', href: '/travel' },
  { name: 'Fashion', href: '/fashion' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'More', href: '/more' },
]

export function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-6 border-b border-[#1B2D36]/10">
      <div className="w-full h-auto border-b border-black pb-2 px-3"  >
        <h2>forty seven <span className='italic'>magazine</span></h2>
      </div>
      <div className="container mx-auto">
        <div>
        <h1 className="text-4xl md:text-9xl font-bold tracking-wider text-[#1B2D36] text-center">
            FORTY 
            <span className='italic'>SEVEN</span>
        </h1>
        </div>
          <div className='bg-black w-full md:h-9 px-5 flex items-center italic'> 
<div className="overflow-hidden whitespace-nowrap">
  <motion.div
    animate={{
      x: ["100%", "-100%"]
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
    className="inline-block text-white"
  >
    {/* This text can be imported from a data file */}
    <span className="mr-16">Breaking News: Latest updates and announcements from Forty Seven Magazine</span>
    <span className="mr-16">Breaking News: Latest updates and announcements from Forty Seven Magazine</span>
  </motion.div>
</div>
          </div>
        <nav className="flex justify-evenly my-2 h-16 w-full relative z-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative uppercase tracking-wide group text-[#1B2D36] w-1/6 justify-center bg-black"
            >
              <span className='absolute z-10 group-hover:z-30 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 bg-white w-full h-full flex items-center justify-center border-1 border-black'>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}


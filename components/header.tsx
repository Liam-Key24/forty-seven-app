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
      <div className="container mx-auto">
        <Link href="/" className="block text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1B2D36]">
            FORTY SEVEN
          </h1>
          <p className="text-sm italic mt-1 text-[#1B2D36]/80">magazine</p>
        </Link>
        <nav className="flex justify-center space-x-6 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm uppercase tracking-wide group text-[#1B2D36]"
            >
              {item.name}
              <motion.span
                className="absolute left-0 right-0 bottom-0 h-px bg-[#1B2D36] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}


import Image from 'next/image'
import Link from 'next/link'

interface ListItemCardProps {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  slug: string
}

export function ListItemCard({ title, excerpt, image, author, date, slug }: ListItemCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="block">
      <div className="flex items-start space-x-4 bg-[#FFF7EB] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex-shrink-0">
          <Image src={image} alt={title} width={80} height={80} className="rounded-md object-cover" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-[#1B2D36] mb-2">{title}</h3>
          <p className="text-sm text-[#1B2D36]/70 mb-2">"{excerpt}..."</p>
          <p className="text-xs text-[#1B2D36]/60">{author} • {date}</p>
        </div>
      </div>
    </Link>
  )
}


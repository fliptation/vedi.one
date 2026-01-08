'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AmazonWishlistProps {
  url: string
  title?: string
  className?: string
}

export function AmazonWishlist({
  url,
  title = 'My Wishlist',
  className,
}: AmazonWishlistProps) {
  // Check if it's a placeholder URL
  const isPlaceholder = url.includes('placeholder')

  return (
    <motion.a
      href={isPlaceholder ? '#' : url}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      className={cn(
        'group flex items-center gap-6 p-6 bg-zinc-900 border border-white/5 rounded-lg transition-colors hover:bg-zinc-800/80',
        isPlaceholder && 'cursor-default',
        className
      )}
      whileHover={isPlaceholder ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Amazon icon */}
      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white/60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-4.803.673c-2.532 0-4.946-.48-7.242-1.44-2.296-.96-4.236-2.29-5.818-3.99-.088-.09-.105-.174-.045-.29zm6.597-9.09c0-1.16.27-2.197.82-3.106.55-.91 1.32-1.61 2.312-2.1.87-.423 1.843-.7 2.922-.83.508-.063 1.073-.11 1.7-.136v-.66c0-.853-.083-1.44-.253-1.766-.253-.49-.753-.735-1.493-.735h-.163c-.48.03-.894.17-1.237.418-.343.247-.553.554-.627.916-.073.34-.186.546-.34.614l-1.927-.238c-.32-.063-.48-.2-.48-.41.055-.68.31-1.29.76-1.832.45-.54.996-.96 1.637-1.254a6.152 6.152 0 012.01-.58c.406-.064.848-.095 1.326-.095h.34c1.08.04 1.96.31 2.64.797.68.49 1.09 1.21 1.237 2.166.063.39.1.96.1 1.72v5.025c0 .66.04 1.167.12 1.52.083.352.197.62.34.8.145.18.436.44.873.78.12.08.18.18.18.3 0 .1-.053.19-.16.27l-1.46 1.24c-.14.1-.267.14-.38.14-.11 0-.22-.054-.32-.16a5.347 5.347 0 01-.473-.557 4.382 4.382 0 01-.373-.59c-.6.617-1.15 1.047-1.65 1.287-.66.31-1.39.47-2.19.47-1.016 0-1.86-.31-2.536-.93-.677-.62-1.016-1.51-1.016-2.68 0-.94.24-1.73.72-2.38.48-.65 1.167-1.14 2.064-1.47.856-.33 1.926-.57 3.21-.73.62-.07 1.256-.15 1.912-.23v-.37c0-.74-.076-1.256-.223-1.55-.3-.55-.87-.82-1.71-.82-.54 0-.973.127-1.3.38-.327.253-.55.64-.673 1.16l-1.98-.26c-.134-.03-.2-.12-.2-.27zm7.786 2.348c-.56.07-1.01.14-1.36.21-.756.15-1.376.38-1.86.69-.646.41-.97.99-.97 1.74 0 .58.177 1.04.53 1.38.354.34.805.51 1.354.51.603 0 1.165-.18 1.687-.54.52-.36.78-.79.78-1.28v-2.71h-.16z" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h4 className="text-lg font-medium text-white mb-1">{title}</h4>
        <p className="text-sm text-white/50">
          {isPlaceholder ? 'Link coming soon' : 'View on Amazon'}
        </p>
      </div>

      {/* Arrow */}
      {!isPlaceholder && (
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors group-hover:translate-x-1 transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </motion.a>
  )
}

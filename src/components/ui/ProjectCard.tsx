'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Project {
  id: number
  title: string
  description: string
  url: string
  image: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function ProjectCard({ project, size = 'medium', className }: ProjectCardProps) {
  const sizeClasses = {
    small: 'aspect-[4/3]',
    medium: 'aspect-[4/5]',
    large: 'aspect-[16/10]',
  }

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('group block relative overflow-hidden', className)}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container */}
      <div className={cn('relative bg-zinc-900 overflow-hidden', sizeClasses[size])}>
        {/* Placeholder gradient when no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />

        {/* Image */}
        {project.image && !project.image.includes('placeholder') && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider text-white/60 bg-white/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base line-clamp-2">
            {project.description}
          </p>

          {/* Arrow indicator */}
          <motion.div
            className="mt-4 inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-sm uppercase tracking-wider">View Project</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}

// Simple placeholder card for "coming soon" projects
interface PlaceholderCardProps {
  className?: string
}

export function PlaceholderCard({ className }: PlaceholderCardProps) {
  return (
    <div
      className={cn(
        'relative aspect-[4/5] bg-zinc-900/50 border border-white/5 flex items-center justify-center',
        className
      )}
    >
      <div className="text-center p-8">
        <div className="font-serif text-2xl text-white/30 mb-2">Coming Soon</div>
        <p className="text-sm text-white/20">New projects in the works</p>
      </div>
    </div>
  )
}

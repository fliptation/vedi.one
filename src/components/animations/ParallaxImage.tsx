'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number
  scale?: boolean
  priority?: boolean
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.3,
  scale = false,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`])
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div ref={ref} className={cn('overflow-hidden', containerClassName)}>
      <motion.div
        style={{
          y,
          scale: scale ? scaleValue : 1,
        }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
          priority={priority}
        />
      </motion.div>
    </div>
  )
}

// Simple parallax wrapper for any content
interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function Parallax({
  children,
  className,
  speed = 0.2,
  direction = 'up',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${multiplier * speed * 100}%`, `${-multiplier * speed * 100}%`]
  )

  return (
    <div ref={ref} className={cn('overflow-visible', className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

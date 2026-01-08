'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.03,
  once = true,
  as: Component = 'span',
}: TextRevealProps) {
  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay * 4,
        delayChildren: delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      className={cn('inline', className)}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordVariants}
          className="inline-block whitespace-nowrap"
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Simpler word-by-word reveal (faster performance)
interface WordRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export function WordReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.08,
  once = true,
}: WordRevealProps) {
  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      className={cn('inline', className)}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Line-by-line reveal for paragraphs
interface LineRevealProps {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  staggerDelay = 0.15,
  once = true,
}: LineRevealProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      className={cn(className)}
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          variants={lineVariants}
          className={cn('overflow-hidden', lineClassName)}
        >
          <span className="block">{line}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

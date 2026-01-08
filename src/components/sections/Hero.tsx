'use client'

import { motion } from 'framer-motion'
import { TextReveal, WordReveal } from '@/components/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950 -z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tight leading-none">
            <TextReveal text="Vedran" delay={0.3} />
            <br />
            <TextReveal text="Rudelj" delay={0.5} />
          </h1>

          {/* Title and tagline */}
          <div className="mt-8 md:mt-12 max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-sans leading-relaxed">
              <WordReveal
                text="Co-founder at Unchained Commerce"
                delay={0.8}
              />
            </p>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/50 font-sans">
              <WordReveal
                text="Development • Design • UX • AI Transformation"
                delay={1.1}
              />
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        className="absolute top-1/2 right-12 lg:right-24 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-serif text-[20rem] xl:text-[30rem] leading-none select-none">
          V
        </span>
      </motion.div>
    </section>
  )
}

"use client";

import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/animations";
import { SocialLinksVertical } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <span className="text-sm text-white/40 uppercase tracking-widest mb-4 block">
            Contact
          </span>
        </FadeIn>

        {/* Large headline */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight">
            <TextReveal text="Let's create" delay={0.2} />
            <br />
            <TextReveal text="something" delay={0.4} />
            <br />
            <span className="text-white/40">
              <TextReveal text="together" delay={0.6} />
            </span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - CTA */}
          <div>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg">
                Have a project in mind? Looking for a partner to help with your
                digital transformation? I&apos;d love to hear from you.
              </p>

              {/* Email CTA */}
              <motion.a
                href={siteConfig.links.email}
                className="group inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl font-serif text-white hover:text-white/80 transition-colors">
                  vedi@hey.com
                </span>
                <span className="block h-[2px] bg-white/30 mt-2 origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />
              </motion.a>
            </FadeIn>

            {/* Location */}
            <FadeIn delay={0.5}>
              <div className="mt-16">
                <h3 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                  Based in
                </h3>
                <p className="text-lg text-white/70">
                  Switzerland
                  <br />
                  <span className="text-white/50">Working globally</span>
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Social links */}
          <div>
            <FadeIn delay={0.4}>
              <h3 className="text-sm text-white/40 uppercase tracking-widest mb-8">
                Find me on
              </h3>
              <SocialLinksVertical />
            </FadeIn>

            {/* Additional links */}
            <FadeIn delay={0.6}>
              <div className="mt-16">
                <h3 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                  Companies
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://unchained.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-white/70 hover:text-white transition-colors link-underline"
                  >
                    unchained.ch
                  </a>
                  <a
                    href="https://unchained.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-white/70 hover:text-white transition-colors link-underline"
                  >
                    unchained.shop
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <FadeIn delay={0.8}>
          <div className="font-serif text-[15vw] leading-none text-white/[0.02] select-none whitespace-nowrap">
            VEDRAN RUDELJ
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

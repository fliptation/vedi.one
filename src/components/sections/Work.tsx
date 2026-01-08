"use client";

import { FadeIn } from "@/components/animations";
import { ProjectCard, PlaceholderCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/constants";

export function Work() {
  return (
    <section
      id="work"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <span className="text-sm text-white/40 uppercase tracking-widest mb-4 block">
            Work
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-16 md:mb-24">
            Selected projects
          </h2>
        </FadeIn>

        {/* Asymmetric grid layout inspired by saentys.com */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Large featured project - Unchained Commerce */}
          <FadeIn delay={0.1} className="md:col-span-7">
            <ProjectCard project={projects[0]} size="large" />
          </FadeIn>

          {/* Medium project with offset - Unchained Shop */}
          <FadeIn delay={0.2} className="md:col-span-5 md:mt-24">
            <ProjectCard project={projects[1]} size="medium" />
          </FadeIn>

          {/* Third row - offset grid */}
          <FadeIn delay={0.3} className="md:col-span-5 md:col-start-2">
            <ProjectCard project={projects[2]} size="medium" />
          </FadeIn>

          <FadeIn delay={0.4} className="md:col-span-5">
            <PlaceholderCard />
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-24 text-center">
            <p className="text-white/50 mb-4">
              Interested in working together?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-lg font-serif hover:text-white/70 transition-colors link-underline"
            >
              Let&apos;s talk
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

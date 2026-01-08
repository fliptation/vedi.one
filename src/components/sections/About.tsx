"use client";

import { FadeIn, LineReveal } from "@/components/animations";

const skills = [
  {
    category: "Web & E-Commerce",
    items: ["Websites", "Web Apps", "Online Shops", "Unchained Commerce"],
  },
  {
    category: "Design",
    items: ["UI/UX", "Figma", "Design Systems", "Prototyping"],
  },
  {
    category: "AI & Innovation",
    items: ["LLMs", "AI Transformation", "Automation", "Machine Learning"],
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-zinc-950"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-sm text-white/40 uppercase tracking-widest mb-4 block">
            About
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-16 md:mb-24">
            Building the future
            <br />
            of commerce
          </h2>
        </FadeIn>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Bio */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                I&apos;m a co-founder and partner at Unchained Commerce, a
                Swiss-based agency specializing in modern web development,
                e-commerce solutions, and digital transformation.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                With a passion for clean code, intuitive design, and
                cutting-edge technology, I help businesses navigate the rapidly
                evolving digital landscape. My focus areas include development,
                design, UX, and AI-powered solutions.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Based in Switzerland, working globally. Always exploring new
                technologies and pushing the boundaries of what&apos;s possible
                in digital commerce.
              </p>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.4}>
            <div className="space-y-12">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category}>
                  <h3 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                    {skillGroup.category}
                  </h3>
                  <LineReveal
                    lines={skillGroup.items}
                    lineClassName="text-lg md:text-xl text-white/80 py-1"
                    delay={0.2 + index * 0.1}
                    staggerDelay={0.1}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Stats or highlights */}
        <FadeIn delay={0.6}>
          <div className="mt-24 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "100+", label: "Projects Delivered" },
                { value: "Swiss", label: "Quality" },
                { value: "Open", label: "Source Advocate" },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

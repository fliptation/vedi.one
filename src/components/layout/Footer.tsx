"use client";

import { FadeIn } from "@/components/animations";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navigation } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Logo and tagline */}
            <div>
              <a href="#" className="text-2xl font-serif text-white">
                VR
              </a>
              <p className="mt-4 text-sm text-white/50 max-w-xs">
                Co-founder at Unchained Commerce.
                <br />
                Development, Design, UX & AI Transformation.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                Navigation
              </h4>
              <nav className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm text-white/40 uppercase tracking-widest mb-4">
                Connect
              </h4>
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-sm text-white/40 text-center md:text-left">
              &copy; {currentYear} Vedran Rudelj. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

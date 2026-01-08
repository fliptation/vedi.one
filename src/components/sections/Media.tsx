'use client'

import { FadeIn } from '@/components/animations'
import { YouTubePlaylist } from '@/components/embeds/YouTubePlaylist'
import { SpotifyEmbed } from '@/components/embeds/SpotifyEmbed'
import { AmazonWishlist } from '@/components/embeds/AmazonWishlist'
import { mediaContent } from '@/lib/constants'

export function Media() {
  return (
    <section
      id="media"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <span className="text-sm text-white/40 uppercase tracking-widest mb-4 block">
            Media
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-8">
            Beyond the code
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-16 md:mb-24">
            Music, videos, and things that inspire me. A glimpse into what fuels
            my creativity outside of work.
          </p>
        </FadeIn>

        {/* Content grid */}
        <div className="space-y-20 md:space-y-32">
          {/* YouTube Section */}
          <div>
            <FadeIn>
              <h3 className="text-xl md:text-2xl font-serif mb-8 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                YouTube Playlists
              </h3>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaContent.youtube.map((playlist, index) => (
                <FadeIn key={playlist.id} delay={0.1 * (index + 1)}>
                  <YouTubePlaylist
                    playlistId={playlist.id}
                    title={playlist.title}
                  />
                  <p className="mt-3 text-sm text-white/50">{playlist.title}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Spotify Section */}
          <div>
            <FadeIn>
              <h3 className="text-xl md:text-2xl font-serif mb-8 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Spotify
              </h3>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaContent.spotify.map((playlist, index) => (
                <FadeIn key={playlist.url} delay={0.1 * (index + 1)}>
                  <SpotifyEmbed url={playlist.url} title={playlist.title} />
                  <p className="mt-3 text-sm text-white/50">{playlist.title}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Amazon Wishlist Section */}
          <div>
            <FadeIn>
              <h3 className="text-xl md:text-2xl font-serif mb-8 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-4.803.673c-2.532 0-4.946-.48-7.242-1.44-2.296-.96-4.236-2.29-5.818-3.99-.088-.09-.105-.174-.045-.29zm6.597-9.09c0-1.16.27-2.197.82-3.106.55-.91 1.32-1.61 2.312-2.1.87-.423 1.843-.7 2.922-.83.508-.063 1.073-.11 1.7-.136v-.66c0-.853-.083-1.44-.253-1.766-.253-.49-.753-.735-1.493-.735h-.163c-.48.03-.894.17-1.237.418-.343.247-.553.554-.627.916-.073.34-.186.546-.34.614l-1.927-.238c-.32-.063-.48-.2-.48-.41.055-.68.31-1.29.76-1.832.45-.54.996-.96 1.637-1.254a6.152 6.152 0 012.01-.58c.406-.064.848-.095 1.326-.095h.34c1.08.04 1.96.31 2.64.797.68.49 1.09 1.21 1.237 2.166.063.39.1.96.1 1.72v5.025c0 .66.04 1.167.12 1.52.083.352.197.62.34.8.145.18.436.44.873.78.12.08.18.18.18.3 0 .1-.053.19-.16.27l-1.46 1.24c-.14.1-.267.14-.38.14-.11 0-.22-.054-.32-.16a5.347 5.347 0 01-.473-.557 4.382 4.382 0 01-.373-.59c-.6.617-1.15 1.047-1.65 1.287-.66.31-1.39.47-2.19.47-1.016 0-1.86-.31-2.536-.93-.677-.62-1.016-1.51-1.016-2.68 0-.94.24-1.73.72-2.38.48-.65 1.167-1.14 2.064-1.47.856-.33 1.926-.57 3.21-.73.62-.07 1.256-.15 1.912-.23v-.37c0-.74-.076-1.256-.223-1.55-.3-.55-.87-.82-1.71-.82-.54 0-.973.127-1.3.38-.327.253-.55.64-.673 1.16l-1.98-.26c-.134-.03-.2-.12-.2-.27zm7.786 2.348c-.56.07-1.01.14-1.36.21-.756.15-1.376.38-1.86.69-.646.41-.97.99-.97 1.74 0 .58.177 1.04.53 1.38.354.34.805.51 1.354.51.603 0 1.165-.18 1.687-.54.52-.36.78-.79.78-1.28v-2.71h-.16z" />
                </svg>
                Wishlist
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <AmazonWishlist
                url={mediaContent.amazon.url}
                title={mediaContent.amazon.title}
                className="max-w-lg"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

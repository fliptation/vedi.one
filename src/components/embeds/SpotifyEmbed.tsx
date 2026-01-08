'use client'

import { cn } from '@/lib/utils'

interface SpotifyEmbedProps {
  url: string
  title?: string
  className?: string
  compact?: boolean
}

export function SpotifyEmbed({
  url,
  title = 'Spotify Playlist',
  className,
  compact = false,
}: SpotifyEmbedProps) {
  // Check if it's a placeholder URL
  const isPlaceholder = url.includes('placeholder')

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          'bg-zinc-900 border border-white/5 flex items-center justify-center rounded-lg',
          compact ? 'h-20' : 'h-80',
          className
        )}
      >
        <div className="text-center p-8">
          <svg
            className="w-10 h-10 text-white/20 mx-auto mb-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <p className="text-white/30 text-sm">{title}</p>
          <p className="text-white/20 text-xs mt-1">Coming soon</p>
        </div>
      </div>
    )
  }

  // Extract Spotify URI from URL
  const getSpotifyEmbedUrl = (spotifyUrl: string) => {
    // Handle different Spotify URL formats
    const match = spotifyUrl.match(/spotify\.com\/(playlist|album|track|artist)\/([a-zA-Z0-9]+)/)
    if (match) {
      const [, type, id] = match
      return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`
    }
    return null
  }

  const embedUrl = getSpotifyEmbedUrl(url)

  if (!embedUrl) {
    return (
      <div className={cn('bg-zinc-900 rounded-lg p-4 text-white/50 text-center', className)}>
        Invalid Spotify URL
      </div>
    )
  }

  return (
    <div className={cn('rounded-lg overflow-hidden', className)}>
      <iframe
        src={embedUrl}
        title={title}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
        style={{ height: compact ? '80px' : '352px', border: 0 }}
      />
    </div>
  )
}

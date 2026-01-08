'use client'

import { cn } from '@/lib/utils'

interface YouTubePlaylistProps {
  playlistId: string
  title?: string
  className?: string
}

export function YouTubePlaylist({
  playlistId,
  title = 'YouTube Playlist',
  className,
}: YouTubePlaylistProps) {
  // Check if it's a placeholder ID
  const isPlaceholder = playlistId.includes('PLAYLIST_ID')

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          'aspect-video bg-zinc-900 border border-white/5 flex items-center justify-center rounded-lg',
          className
        )}
      >
        <div className="text-center p-8">
          <svg
            className="w-12 h-12 text-white/20 mx-auto mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <p className="text-white/30 text-sm">{title}</p>
          <p className="text-white/20 text-xs mt-1">Playlist coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('aspect-video rounded-lg overflow-hidden', className)}>
      <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}

// Single video embed
interface YouTubeVideoProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeVideo({
  videoId,
  title = 'YouTube Video',
  className,
}: YouTubeVideoProps) {
  return (
    <div className={cn('aspect-video rounded-lg overflow-hidden', className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

export function YouTubeVideo({ videoId, title = 'Vídeo' }: YouTubeVideoProps) {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 transition-all duration-500 hover:shadow-black/50">
      <div className="absolute inset-0 rounded-2xl border border-white/20 z-10 pointer-events-none" />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

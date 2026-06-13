'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

export function YouTubeVideo({ videoId, title = 'Vídeo' }: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const loadVideo = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/40 transition-all duration-500 hover:shadow-3xl hover:shadow-black/50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass border effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 z-10 pointer-events-none" />
      
      {!isLoaded ? (
        <>
          {/* Thumbnail with lazy loading */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300" />
          
          {/* Play button */}
          <button
            onClick={loadVideo}
            aria-label="Reproduzir vídeo"
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
          >
            <div className={`
              relative flex items-center justify-center
              w-20 h-20 md:w-24 md:h-24
              rounded-full
              bg-white/20 backdrop-blur-md
              border border-white/30
              transition-all duration-500
              ${isHovered ? 'scale-110 bg-white/30' : 'scale-100'}
              group-hover:shadow-lg group-hover:shadow-white/20
            `}>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Play 
                className={`
                  w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1
                  transition-transform duration-300
                  ${isHovered ? 'scale-110' : 'scale-100'}
                `}
              />
            </div>
          </button>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { YouTubeVideo } from './youtube-video'
import { AnimatedButton } from './animated-button'
import { ParticlesEffect } from './particles-effect'

export function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0d0610]">
      {/* Particles effect */}
      <ParticlesEffect />

      {/* Hero Section - Image at Top */}
      <section className="relative w-full">
        {/* Title Section - Above Image */}
        <div className="relative z-20 w-full pt-6 md:pt-10 pb-4 md:pb-6 px-4 bg-gradient-to-b from-[#0d0610] via-[#0d0610] to-transparent">
          <div 
            className={`
              text-center
              transition-all duration-1000 ease-out
              ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 tracking-tight text-balance">
              <span className="bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
                Tua Presença é Amor
              </span>
            </h1>
            
            <p 
              className={`
                text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto text-pretty
                transition-all duration-1000 ease-out delay-300
                ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Prepare seu coração para viver algo especial.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div 
          className={`
            relative w-full aspect-square max-h-[50vh] md:max-h-[55vh]
            transition-transform duration-[2000ms] ease-out
            ${isLoaded ? 'scale-100' : 'scale-105'}
          `}
        >
          {/* Top fade gradient */}
          <div 
            className="absolute top-0 left-0 right-0 h-16 md:h-24 z-10"
            style={{
              background: 'linear-gradient(to bottom, #0d0610 0%, transparent 100%)',
            }}
          />
          
          {/* Bottom fade gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-20 md:h-32 z-10"
            style={{
              background: 'linear-gradient(to top, #0d0610 0%, transparent 100%)',
            }}
          />

          {/* Left fade gradient */}
          <div 
            className="absolute top-0 bottom-0 left-0 w-8 md:w-16 z-10"
            style={{
              background: 'linear-gradient(to right, #0d0610 0%, transparent 100%)',
            }}
          />

          {/* Right fade gradient */}
          <div 
            className="absolute top-0 bottom-0 right-0 w-8 md:w-16 z-10"
            style={{
              background: 'linear-gradient(to left, #0d0610 0%, transparent 100%)',
            }}
          />

          <Image
            src="/images/background.jpg"
            alt="Tua Presença é Amor - Pe. Lico, Aline Lázaro e Giu Tavares"
            fill
            className="object-contain object-center"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Video Section - Middle */}
      <section className="relative z-20 w-full px-4 py-6 md:py-10">
        <div 
          className={`
            w-full max-w-2xl mx-auto
            transition-all duration-1000 ease-out delay-300
            ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <YouTubeVideo 
            videoId="QeNWivgaYdc" 
            title="Tua Presença é Amor - Vídeo Oficial"
          />
        </div>
      </section>

      {/* Buttons Section - Bottom */}
      <section className="relative z-20 w-full px-4 pb-8 md:pb-12">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <div 
            className={`
              flex flex-col sm:flex-row gap-3 md:gap-4 w-full justify-center
              transition-all duration-1000 ease-out delay-500
              ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <AnimatedButton 
              href="https://www.instagram.com/tuapresenca_oficial"
              icon="instagram"
              delay={600}
            >
              Seguir no Instagram
            </AnimatedButton>
            
            <AnimatedButton 
              href="https://wa.me/5514988201043?text=Quero%20compartilhar%20minha%20experiência%20com%20o%20evento%20Tua%20Presença%20é%20Amor"
              icon="whatsapp"
              delay={700}
            >
              Compartilhar experiência
            </AnimatedButton>
          </div>

          <p 
            className={`
              mt-6 md:mt-8 text-white/60 text-xs md:text-sm
              transition-all duration-1000 ease-out delay-700
              ${showContent ? 'opacity-100' : 'opacity-0'}
            `}
          >
            Com amor, Tua Presença
          </p>
        </div>
      </section>
    </main>
  )
}

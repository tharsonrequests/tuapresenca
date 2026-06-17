'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { YouTubeVideo } from './youtube-video'
import { AnimatedButton } from './animated-button'
import { ParticlesEffect } from './particles-effect'
import { Heart, Instagram, MessageCircle } from 'lucide-react'

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
          <div className="mb-6 text-center md:mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80">
              Uma mensagem para o seu coração
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
              Veja o que Deus tem a falar com você
            </h2>
          </div>

          <YouTubeVideo 
            videoId="QeNWivgaYdc" 
            title="Tua Presença é Amor - Vídeo Oficial"
          />
        </div>
      </section>

      <section className="relative z-20 w-full px-4 pb-16 pt-4 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center shadow-2xl shadow-black/20 backdrop-blur-sm md:px-12 md:py-14">
          <Heart className="mx-auto h-7 w-7 fill-amber-200/15 text-amber-200" />
          <h2 className="mt-5 font-serif text-3xl font-bold text-white md:text-4xl">
            Sua experiência também faz parte dessa história
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            Viveu um momento especial no Tua Presença? Envie uma mensagem de
            agradecimento ou compartilhe conosco como essa experiência tocou o
            seu coração. Queremos ouvir você.
          </p>
          <div className="mx-auto mt-8 flex max-w-sm justify-center">
            <AnimatedButton
              href="https://wa.me/5514996441170?text=Quero%20deixar%20meu%20agradecimento%20e%20compartilhar%20minha%20experi%C3%AAncia%20com%20o%20evento%20Tua%20Presen%C3%A7a%20%C3%A9%20Amor"
              icon="whatsapp"
              delay={0}
            >
              Compartilhar minha experiência
            </AnimatedButton>
          </div>
        </div>
      </section>

      <footer className="relative z-20 px-4 pb-10 text-center text-xs text-white/50">
        Com amor, Tua Presença
      </footer>

      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-7 md:right-7">
        <Link
          href="https://www.instagram.com/tuapresenca_oficial?igsh=ZW9peTcxNWc0OHlvl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguir Tua Presença no Instagram"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-fuchsia-600 via-pink-500 to-amber-400 text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 md:h-14 md:w-14"
        >
          <Instagram className="h-6 w-6 md:h-7 md:w-7" />
        </Link>
        <Link
          href="https://wa.me/5514996441170?text=Quero%20deixar%20meu%20agradecimento%20e%20compartilhar%20minha%20experi%C3%AAncia%20com%20o%20evento%20Tua%20Presen%C3%A7a%20%C3%A9%20Amor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Tua Presença pelo WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 md:h-14 md:w-14"
        >
          <MessageCircle className="h-6 w-6 fill-white/10 md:h-7 md:w-7" />
        </Link>
      </div>
    </main>
  )
}

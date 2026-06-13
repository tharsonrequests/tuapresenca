'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { YouTubeVideo } from './youtube-video'
import { AnimatedButton } from './animated-button'
import { ParticlesEffect } from './particles-effect'
import { ArrowUpRight, Heart, Instagram, MessageCircle, Sparkles } from 'lucide-react'

// Mantém a proposta pronta para ser reativada futuramente.
const SHOW_SPONSORSHIP = false

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

      {/* About Section */}
      <section className="relative z-20 w-full px-4 py-20 md:px-8 md:py-32">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80">
              <span className="h-px w-10 bg-amber-200/60" />
              Quem somos
            </div>

            <h2 className="max-w-2xl font-serif text-4xl font-bold leading-[1.08] text-white md:text-6xl">
              Mais do que um evento, uma missão transformadora
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/70 md:text-lg">
              <p>
                O Tua Presença chega à sua 6ª edição com um propósito muito claro:
                levar adiante a mensagem de Jesus. Mais do que um evento, é um
                convite a viver momentos de verdadeira conexão espiritual.
              </p>
              <p>
                Apresentamos a presença de Deus de forma viva, criativa e
                contemporânea, unindo adoração, pregação, oração, música, dança e
                poesia em um encontro intenso e inesquecível.
              </p>
            </div>

            <blockquote className="mt-9 border-l border-amber-200/50 pl-6 font-serif text-xl italic leading-9 text-amber-100/90 md:text-2xl">
              “Proporcionar um encontro do povo com Nosso Senhor Jesus Cristo:
              eis a nossa missão.”
            </blockquote>

          </div>

          <div className="relative mx-auto h-[540px] w-full max-w-[520px] sm:h-[650px]">
            <div className="absolute -inset-8 rounded-full bg-fuchsia-800/10 blur-3xl" />

            <div className="absolute left-0 top-8 h-[72%] w-[70%] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/40">
              <Image
                src="/images/about/momento-de-adoracao.jpg"
                alt="Momento de adoração no evento Tua Presença"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 330px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0610]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute right-0 top-0 h-[38%] w-[43%] rotate-2 overflow-hidden rounded-2xl border-2 border-[#0d0610] shadow-xl shadow-black/50">
              <Image
                src="/images/about/equipe-fundadora.jpg"
                alt="Equipe à frente do Tua Presença"
                fill
                className="object-cover"
                sizes="210px"
              />
            </div>

            <div className="absolute bottom-3 right-0 h-[36%] w-[57%] -rotate-2 overflow-hidden rounded-2xl border-2 border-[#0d0610] shadow-xl shadow-black/50">
              <Image
                src="/images/about/comunidade.jpg"
                alt="Comunidade reunida no Tua Presença"
                fill
                className="object-cover"
                sizes="270px"
              />
            </div>

            <div className="absolute bottom-[22%] left-[55%] flex h-12 w-12 items-center justify-center rounded-full border border-amber-100/30 bg-[#24102b]/90 shadow-lg shadow-black/40 backdrop-blur-md">
              <Heart className="h-5 w-5 fill-amber-200/20 text-amber-200" />
            </div>
          </div>
        </div>

        {SHOW_SPONSORSHIP && <div className="mx-auto mt-24 w-full max-w-7xl md:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80">
              <span className="h-px w-10 bg-amber-200/60" />
              Proposta de patrocínio
              <span className="h-px w-10 bg-amber-200/60" />
            </div>
            <h3 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              Evangelize com a gente
            </h3>
            <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
              Estamos em busca de parceiros para fazer parte desta missão
              transformadora. Conheça nossos planos de patrocínio:
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                name: 'Bronze',
                price: 'R$ 150,00',
                accent: 'from-red-500/25 to-orange-400/5',
                items: [
                  'Inclusão da logo nas mídias on',
                  'Exibição da logo no telão antes do início do evento',
                ],
              },
              {
                name: 'Prata',
                price: 'R$ 300,00',
                accent: 'from-fuchsia-500/25 to-purple-400/5',
                items: [
                  'Inclusão da logo nas mídias on',
                  'Vídeo dedicado nas mídias sociais junto a outros patrocinadores da mesma categoria',
                  'Exibição da logo no telão antes do início do evento',
                ],
              },
              {
                name: 'Ouro',
                price: 'R$ 700,00',
                accent: 'from-violet-500/30 to-blue-500/5',
                items: [
                  'Inclusão da logo nas mídias on',
                  'Vídeo dedicado nas mídias sociais com maior destaque para a marca',
                  'Exibição da logo no telão antes do início do evento',
                ],
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${plan.accent} p-7 backdrop-blur-sm md:p-8`}
              >
                <div className="absolute inset-0 bg-[#16091b]/70" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    Plano
                  </p>
                  <h4 className="mt-2 font-serif text-4xl font-bold text-white">
                    {plan.name}
                  </h4>
                  <ul className="mt-7 space-y-4">
                    {plan.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-amber-200/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-t border-white/10 pt-6 font-serif text-3xl font-bold text-amber-100">
                    {plan.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center text-center">
            <p className="font-serif text-xl text-white/80 md:text-2xl">
              Obrigado por evangelizar com a gente!
            </p>
            <Link
              href="https://wa.me/14997778706?text=Ol%C3%A1%21%20Quero%20conhecer%20a%20proposta%20de%20patroc%C3%ADnio%20do%20Tua%20Presen%C3%A7a."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-amber-100/30 bg-amber-100 px-7 py-4 text-sm font-bold text-[#211027] transition-transform duration-300 hover:scale-[1.03]"
            >
              Quero patrocinar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>}
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
              href="https://wa.me/14997778706?text=Quero%20deixar%20meu%20agradecimento%20e%20compartilhar%20minha%20experi%C3%AAncia%20com%20o%20evento%20Tua%20Presen%C3%A7a%20%C3%A9%20Amor"
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
          href="https://wa.me/14997778706?text=Quero%20deixar%20meu%20agradecimento%20e%20compartilhar%20minha%20experi%C3%AAncia%20com%20o%20evento%20Tua%20Presen%C3%A7a%20%C3%A9%20Amor"
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

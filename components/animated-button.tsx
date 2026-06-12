'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, MessageCircle } from 'lucide-react'

interface AnimatedButtonProps {
  href: string
  icon: 'instagram' | 'whatsapp'
  children: React.ReactNode
  delay?: number
}

export function AnimatedButton({ href, icon, children, delay = 0 }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const Icon = icon === 'instagram' ? Instagram : MessageCircle

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative inline-flex items-center justify-center gap-3 
        px-6 py-3.5 md:px-8 md:py-4
        text-white font-semibold text-sm md:text-base
        rounded-full overflow-hidden
        transition-all duration-300 ease-out
        ${isHovered ? 'scale-[1.03]' : 'scale-100'}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: isHovered 
          ? '0 8px 32px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 255, 255, 0.1)' 
          : '0 8px 30px rgba(0, 0, 0, 0.2)',
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Animated shine effect */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden"
      >
        <div 
          className="absolute inset-0 animate-shine"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%, transparent 100%)',
            transform: 'skewX(-20deg)',
          }}
        />
      </div>
      
      {/* Subtle glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Icon with subtle original color */}
      <Icon 
        className="relative z-10 w-5 h-5 transition-transform duration-300"
        style={{
          color: icon === 'instagram' 
            ? (isHovered ? '#E1306C' : 'rgba(225, 48, 108, 0.85)') 
            : (isHovered ? '#25D366' : 'rgba(37, 211, 102, 0.85)'),
        }}
      />
      
      {/* Text */}
      <span className="relative z-10 text-white">{children}</span>
    </Link>
  )
}

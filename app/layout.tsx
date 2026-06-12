import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tua Presenca e Amor | Evento Especial',
  description: 'Prepare seu coracao para viver algo especial. Uma experiencia de conexao espiritual e amor.',
  keywords: ['evento', 'tua presenca', 'amor', 'espiritual', 'conexao'],
  authors: [{ name: 'Tua Presenca e Amor' }],
  openGraph: {
    title: 'Tua Presença é Amor',
    description: 'Prepare seu coração para viver algo especial. Uma experiência de conexão espiritual e amor.',
    url: 'https://tuapresenca.com.br',
    siteName: 'Tua Presença é Amor',
    images: [
      {
        url: '/images/background.jpg',
        width: 1200,
        height: 630,
        alt: 'Tua Presença é Amor - Evento Especial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tua Presença é Amor',
    description: 'Prepare seu coração para viver algo especial.',
    images: ['/images/background.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

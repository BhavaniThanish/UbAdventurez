import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: 'UB Adventurez | Premium Adventure Tourism',
  description: 'Experience the thrill of a lifetime with UB Adventurez. Premium adventure tourism and outdoor recreation for the bold explorer.',
  keywords: ['adventure tourism', 'outdoor recreation', 'extreme sports', 'nature tours', 'hiking', 'rafting', 'camping'],
}

export const viewport: Viewport = {
  themeColor: '#1a1d2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

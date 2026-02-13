import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Innodecor Creations | Premium Interior Design & Construction in Indore',
  description: 'Where Creativity Meets Craftsmanship. Leading interior design, construction, and real estate services in Indore, Madhya Pradesh. Transform your space with luxury and expertise.',
  keywords: 'interior design Indore, construction services Indore, real estate Indore, luxury interiors, home renovation, commercial interiors',
  openGraph: {
    title: 'Innodecor Creations | Premium Interior Design & Construction',
    description: 'Where Creativity Meets Craftsmanship',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

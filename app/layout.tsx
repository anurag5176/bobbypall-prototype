import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import SplashIntro from "./components/SplashIntro"
import PerformanceScript from "./performance-script"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  title: "Bobby Pall - East African Photographer",
  description: "Professional photography services including glam, family, travel, corporate, fashion, and botanical photography. Based in Nairobi, Kenya.",
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable} antialiased`}>
      <head>
        <PerformanceScript />
      </head>
      <body className="min-h-screen bg-black text-white font-montserrat">
        {/* Splash intro overlay */}
        <SplashIntro>
          {/* Your actual site underneath */}
          {children}
        </SplashIntro>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import SplashIntro from "./components/SplashIntro"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Bobby Pall - East African Photographer",
  description: "Professional photography services including glam, family, travel, corporate, fashion, and botanical photography. Based in Nairobi, Kenya.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable} antialiased`}>
      <head>
        <link rel="preload" as="video" href="/video.mp4" type="video/mp4" />
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

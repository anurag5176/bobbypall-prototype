"use client"

import Link from "next/link"
import Image from "next/image"
import MobileNav from "./mobile-nav"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "GALLERY", href: "/gallery" },
  { name: "STYLES", href: "/styles" },
  { name: "STORY", href: "/story" },
  { name: "LEGACY", href: "/legacy" },
]

export default function AestheticHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src="/Logo.jpg"
              alt="Bobby Pall Photography Logo"
              width={80}
              height={80}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white font-medium tracking-wider text-xs lg:text-sm transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

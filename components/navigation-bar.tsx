"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "GALLERY", href: "/gallery" },
  { name: "STYLES", href: "/styles" },
  { name: "STORY", href: "/story" },
  { name: "LEGACY", href: "/legacy" },
]

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset'
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-white/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo */}
            <Link href="/" className="group flex-shrink-0">
              <Image
                src="/Logo.jpg"
                alt="Bobby Pall Photography"
                width={100}
                height={60}
                className="w-20 h-12 lg:w-28 lg:h-16 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-3 text-white/90 hover:text-white font-medium tracking-wider text-sm transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:text-white/80 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-white/20">
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/Logo.jpg"
                    alt="Bobby Pall Photography"
                    width={50}
                    height={30}
                    className="w-10 h-6"
                  />
                  <span className="text-white font-medium tracking-wider">MENU</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between px-6 py-4 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                  >
                    <span className="font-medium tracking-wider text-sm">{item.name}</span>
                    <ChevronDown className="w-4 h-4 text-white/50 group-hover:text-white group-hover:rotate-90 transition-all duration-200" />
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/20">
                <div className="text-center space-y-2">
                  <p className="text-white/80 text-sm font-medium tracking-wider">BOBBY PALL</p>
                  <p className="text-white/60 text-xs">East African Photographer</p>
                  <div className="w-16 h-px bg-white/30 mx-auto mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

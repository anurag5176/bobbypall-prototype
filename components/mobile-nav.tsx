"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "GALLERY", href: "/gallery" },
  { name: "STYLES", href: "/styles" },
  { name: "STORY", href: "/story" },
  { name: "LEGACY", href: "/legacy" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="md:hidden">
      {/* Menu Button - Always visible */}
      <button
        onClick={toggleMenu}
        className="relative z-[99999] p-2 text-white hover:text-white/80 transition-all duration-300"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[99998] bg-black/90 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        >
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-black border-l border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-white font-medium tracking-wider">MENU</h2>
              <button
                onClick={closeMenu}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-6 py-4 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                >
                  <span className="font-medium tracking-wider text-sm">{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-white/60 text-xs tracking-wider mb-2">BOBBY PALL</p>
                <p className="text-white/40 text-xs">East African Photographer</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

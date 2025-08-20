"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    id: 1,
    src: "/fashion.png",
    title: "Glam Photography",
    subtitle: "Capturing the unseen beauty",
    category: "Glam",
  },
  {
    id: 2,
    src: "/travel.png",
    title: "Travel Brochure",
    subtitle: "Stories from around the world",
    category: "Travel",
  },
  {
    id: 3,
    src: "/family.png",
    title: "Family Photography",
    subtitle: "Preserving precious moments",
    category: "Family",
  },
  {
    id: 4,
    src: "/fashion.png",
    title: "Corporate Photography",
    subtitle: "Professional excellence captured",
    category: "Corporate",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images - Optimized for mobile */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-2000 ease-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <img 
              src={image.src} 
              alt={image.title} 
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          </div>
        ))}
      </div>

      {/* Centered Content - Mobile responsive */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 md:px-8">
        <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
          {/* Slide indicator - Top */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="text-xs font-light text-white/70 tracking-widest">
              {String(currentSlide + 1).padStart(2, "0")}
            </div>
            <div className="h-px bg-white/30 w-8 sm:w-12"></div>
            <div className="text-xs font-light text-white/70 tracking-widest">{heroImages[currentSlide].category}</div>
          </div>

          {/* Main content - Centered */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant font-light text-white mb-4 sm:mb-6 text-shadow-subtle leading-tight">
            {heroImages[currentSlide].title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto font-light">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* CTA Button - Centered */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 group border border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-white/90 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 rounded-lg"
          >
            <span className="text-sm sm:text-base font-light tracking-wider">Explore Work</span>
            <div className="w-6 h-px bg-white/60 group-hover:w-8 group-hover:bg-white transition-all duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows - Repositioned to avoid mobile menu */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300 group border border-white/20"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300 group border border-white/20"
        aria-label="Next photo"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Slide Indicators - Bottom center */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 sm:w-3 h-1 transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "bg-white w-8 sm:w-10"
                : "bg-white/40 hover:bg-white/60 hover:w-6 sm:hover:w-8"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile-specific adjustments */}
      <div className="md:hidden absolute top-4 left-4 z-20">
        <div className="text-xs text-white/60 tracking-wider">
          {String(currentSlide + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}

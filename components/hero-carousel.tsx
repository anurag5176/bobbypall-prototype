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
      {/* Background Images - No more parallax */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-2000 ease-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            {/* Sophisticated overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Content positioned in bottom left */}
      <div className="absolute bottom-0 left-0 z-20 p-8 md:p-12 lg:p-16 max-w-2xl">
        <div className={`transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
          {/* Slide indicator */}
          <div className="flex items-center gap-3 mb-6">
            <div className="text-xs font-light text-white/70 tracking-widest">
              {String(currentSlide + 1).padStart(2, "0")}
            </div>
            <div className="h-px bg-white/30 flex-1 max-w-12"></div>
            <div className="text-xs font-light text-white/70 tracking-widest">{heroImages[currentSlide].category}</div>
          </div>

          {/* Main content - MUCH smaller and aesthetic */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-light text-white mb-4 text-shadow-subtle leading-tight">
            {heroImages[currentSlide].title}
          </h1>

          <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed max-w-md font-light">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* Refined CTA */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 group border border-white/20 px-6 py-3 text-white/90 hover:text-white hover:border-white/40 transition-all duration-300"
          >
            <span className="text-sm font-light tracking-wider">Explore Work</span>
            <div className="w-6 h-px bg-white/60 group-hover:w-8 group-hover:bg-white transition-transform duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Horizontal Navigation Arrows - Much more accessible */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Horizontal Slide Indicators - Much more accessible */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-1 transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60 hover:w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

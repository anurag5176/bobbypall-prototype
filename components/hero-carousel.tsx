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
    description: "Where elegance meets artistry in every frame"
  },
  {
    id: 2,
    src: "/travel.png",
    title: "Travel Brochure",
    subtitle: "Stories from around the world",
    category: "Travel",
    description: "Documenting cultures and landscapes with purpose"
  },
  {
    id: 3,
    src: "/family.png",
    title: "Family Photography",
    subtitle: "Preserving precious moments",
    category: "Family",
    description: "Timeless memories captured with love and care"
  },
  {
    id: 4,
    src: "/corporate.png",
    title: "Corporate Photography",
    subtitle: "Professional excellence captured",
    category: "Corporate",
    description: "Building brand identity through compelling imagery"
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
      {/* Background Images */}
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
            {/* Desktop overlay - stronger on left, lighter on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 lg:block hidden" />
            {/* Mobile overlay - centered gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 lg:hidden" />
          </div>
        ))}
      </div>

      {/* Desktop Layout - Left Content Panel */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center z-20 px-6 sm:px-8 lg:px-12 xl:px-16 hidden lg:flex">
        <div className={`max-w-lg transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white/80 font-light tracking-[0.2em] text-sm uppercase">
              {heroImages[currentSlide].category}
            </span>
            <div className="w-8 h-px bg-white/30"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-white mb-4 leading-tight">
            {heroImages[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 leading-relaxed font-light max-w-md">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/70 mb-8 leading-relaxed max-w-sm font-light">
            {heroImages[currentSlide].description}
          </p>

          {/* CTA Button */}
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-4 border-2 border-white/30 px-8 py-4 text-white/90 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
          >
            <span className="font-medium tracking-wider text-sm">Explore Portfolio</span>
            <div className="w-6 h-px bg-white/60 group-hover:w-8 group-hover:bg-white transition-all duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Desktop Layout - Right Side Image Focus */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-center z-10 hidden lg:flex">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Current Image Display */}
          <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem]">
            <img 
              src={heroImages[currentSlide].src} 
              alt={heroImages[currentSlide].title}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            {/* Image overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:hidden">
        <div className={`text-center max-w-sm mx-auto transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
          
          {/* Category Badge - Mobile */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            <span className="text-white/80 font-light tracking-wider text-xs uppercase">
              {heroImages[currentSlide].category}
            </span>
            <div className="w-6 h-px bg-white/30"></div>
          </div>

          {/* Main Title - Mobile */}
          <h1 className="text-xl sm:text-2xl font-cormorant font-light text-white mb-3 leading-tight">
            {heroImages[currentSlide].title}
          </h1>

          {/* Subtitle - Mobile */}
          <p className="text-xs sm:text-sm text-white/90 mb-4 leading-relaxed font-light">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* CTA Button - Mobile */}
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-white/90 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 rounded-lg"
          >
            <span className="font-medium tracking-wider text-sm">Explore Work</span>
            <div className="w-4 h-px bg-white/60 group-hover:w-6 group-hover:bg-white transition-all duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Navigation Controls - Desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex">
        <div className="flex items-center gap-6">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300 border border-white/20 group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300 border border-white/20 group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Navigation Controls - Mobile */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 lg:hidden">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300 border border-white/20 group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-all duration-300 border border-white/20 group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Slide Counter - Bottom Right Corner */}
      <div className="absolute bottom-6 right-6 z-30">
        <div className="text-right">
          <div className="text-white/60 text-sm font-light tracking-wider mb-1">
            {String(currentSlide + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}
          </div>
          <div className="w-12 h-px bg-white/30"></div>
        </div>
      </div>
    </div>
  )
}

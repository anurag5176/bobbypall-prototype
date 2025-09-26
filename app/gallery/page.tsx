"use client"

import { useState, useEffect, useRef } from "react"
import NavigationBar from "@/components/navigation-bar"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

const photographyStyles = [
  {
    id: "glam",
    name: "Glam Photography",
    description: "Capturing the unseen beauty",
  },
  {
    id: "family",
    name: "Family Photography",
    description: "Preserving precious moments",
  },
  {
    id: "travel",
    name: "Travel Brochure",
    description: "Stories from around the world",
  },
  {
    id: "corporate",
    name: "Corporate Photography",
    description: "Professional excellence captured",
  },
  {
    id: "fashion",
    name: "Fashion Brochure",
    description: "Where style meets art",
  },
  {
    id: "flowers",
    name: "Flowers",
    description: "Nature's delicate beauty",
  },
]

// Gallery data using actual images from public folder
const galleryImages = [
  // Glam Photography
  { id: 1, src: "/GLAM/1.png", category: "glam", title: "Elegant Beauty", year: "2023" },
  { id: 2, src: "/GLAM/2.png", category: "glam", title: "Confident Gaze", year: "2023" },
  { id: 3, src: "/GLAM/3.png", category: "glam", title: "Inner Light", year: "2022" },
  { id: 4, src: "/GLAM/4.png", category: "glam", title: "Timeless Grace", year: "2023" },
  { id: 5, src: "/GLAM/5.png", category: "glam", title: "Natural Radiance", year: "2022" },

  // Family Photography
  { id: 6, src: "/Family/1.png", category: "family", title: "Generational Love", year: "2023" },
  { id: 7, src: "/Family/2.png", category: "family", title: "Family Bond", year: "2022" },
  { id: 8, src: "/Family/3.png", category: "family", title: "Celebration", year: "2023" },
  { id: 9, src: "/Family/4.png", category: "family", title: "Togetherness", year: "2022" },
  { id: 10, src: "/Family/5.png", category: "family", title: "Milestone Memory", year: "2023" },
  { id: 11, src: "/Family/6.png", category: "family", title: "Joyful Moments", year: "2022" },

  // Travel Brochure
  { id: 12, src: "/Travel/1.png", category: "travel", title: "African Safari", year: "2023" },
  { id: 13, src: "/Travel/2.png", category: "travel", title: "Coastal Beauty", year: "2022" },
  { id: 14, src: "/Travel/3.png", category: "travel", title: "Mountain Majesty", year: "2023" },
  { id: 15, src: "/Travel/4.png", category: "travel", title: "Desert Dreams", year: "2022" },
  { id: 16, src: "/Travel/5.png", category: "travel", title: "Cultural Heritage", year: "2023" },
  { id: 17, src: "/Travel/6.png", category: "travel", title: "Urban Exploration", year: "2022" },
  { id: 18, src: "/Travel/7.png", category: "travel", title: "Natural Wonders", year: "2023" },

  // Corporate Photography
  { id: 19, src: "/CORPORATE/1.png", category: "corporate", title: "Executive Presence", year: "2023" },
  { id: 20, src: "/CORPORATE/2.png", category: "corporate", title: "Team Collaboration", year: "2022" },
  { id: 21, src: "/CORPORATE/3.png", category: "corporate", title: "Professional Excellence", year: "2023" },
  { id: 22, src: "/CORPORATE/4.png", category: "corporate", title: "Business Success", year: "2022" },

  // Fashion Brochure
  { id: 23, src: "/fashion.png", category: "fashion", title: "African Elegance", year: "2023" },

  // Flowers
  { id: 24, src: "/flower.png", category: "flowers", title: "Botanical Grace", year: "2023" },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("glam")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredImages = galleryImages.filter((img) => img.category === activeFilter)

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="bg-black">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <h1 className="text-display font-serif text-white mb-8">Gallery</h1>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              A curated collection of stories told through light, shadow, and the authentic beauty of African life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {photographyStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setActiveFilter(style.id)}
                className={`px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeFilter === style.id
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={galleryRef} className="grid-masonry">
            {filteredImages.map((image, index) => {
              // Create dynamic sizing pattern for masonry layout
              const sizeVariants = ['masonry-item-small', 'masonry-item-medium', 'masonry-item-large', 'masonry-item-extra-large'];
              const sizeClass = sizeVariants[index % sizeVariants.length];
              
              return (
                <div
                  key={image.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isLoaded ? "fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => openLightbox(image)}
                >
                  <div className={`image-container rounded-2xl overflow-hidden relative ${sizeClass}`}>
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="image-overlay flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-medium mb-2 text-lg">{image.title}</h3>
                      <p className="text-white/70 text-sm">{image.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-serif mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.year}</p>
            </div>

            {/* Navigation */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

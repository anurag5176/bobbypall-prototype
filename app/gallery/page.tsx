"use client"

import { useState, useEffect, useRef } from "react"
import NavigationBar from "@/components/navigation-bar"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

const photographyStyles = [
  {
    id: "all",
    name: "All Works",
    description: "Complete collection",
  },
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

// Sample gallery data - in real implementation, this would come from a CMS or API
const galleryImages = [
  // Glam Photography
  { id: 1, src: "/placeholder.svg?height=800&width=600&text=Glam+Portrait+1", category: "glam", title: "Elegant Beauty", year: "2023" },
  { id: 2, src: "/placeholder.svg?height=600&width=800&text=Glam+Portrait+2", category: "glam", title: "Confident Gaze", year: "2023" },
  { id: 3, src: "/placeholder.svg?height=900&width=600&text=Glam+Portrait+3", category: "glam", title: "Inner Light", year: "2022" },
  { id: 4, src: "/placeholder.svg?height=700&width=700&text=Glam+Portrait+4", category: "glam", title: "Timeless Grace", year: "2023" },
  { id: 5, src: "/placeholder.svg?height=800&width=600&text=Glam+Portrait+5", category: "glam", title: "Natural Radiance", year: "2022" },
  { id: 6, src: "/placeholder.svg?height=600&width=900&text=Glam+Portrait+6", category: "glam", title: "Sophisticated Style", year: "2023" },
  { id: 7, src: "/placeholder.svg?height=800&width=600&text=Glam+Portrait+7", category: "glam", title: "Modern Elegance", year: "2022" },
  { id: 8, src: "/placeholder.svg?height=700&width=800&text=Glam+Portrait+8", category: "glam", title: "Artistic Vision", year: "2023" },

  // Family Photography
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=1000&text=Family+Moment+1",
    category: "family",
    title: "Generational Love",
    year: "2023",
  },
  { id: 10, src: "/placeholder.svg?height=800&width=600&text=Family+Moment+2", category: "family", title: "Family Bond", year: "2022" },
  { id: 11, src: "/placeholder.svg?height=600&width=900&text=Family+Moment+3", category: "family", title: "Celebration", year: "2023" },
  { id: 12, src: "/placeholder.svg?height=700&width=800&text=Family+Moment+4", category: "family", title: "Togetherness", year: "2022" },
  {
    id: 13,
    src: "/placeholder.svg?height=600&width=1000&text=Family+Moment+5",
    category: "family",
    title: "Milestone Memory",
    year: "2023",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=800&width=600&text=Family+Moment+6",
    category: "family",
    title: "Joyful Moments",
    year: "2022",
  },
  { id: 15, src: "/placeholder.svg?height=600&width=900&text=Family+Moment+7", category: "family", title: "Family Heritage", year: "2023" },
  { id: 16, src: "/placeholder.svg?height=700&width=800&text=Family+Moment+8", category: "family", title: "Love & Laughter", year: "2022" },

  // Travel Brochure
  {
    id: 17,
    src: "/placeholder.svg?height=800&width=600&text=Travel+Destination+1",
    category: "travel",
    title: "African Safari",
    year: "2023",
  },
  { id: 18, src: "/placeholder.svg?height=600&width=800&text=Travel+Destination+2", category: "travel", title: "Coastal Beauty", year: "2022" },
  { id: 19, src: "/placeholder.svg?height=900&width=600&text=Travel+Destination+3", category: "travel", title: "Mountain Majesty", year: "2023" },
  { id: 20, src: "/placeholder.svg?height=700&width=700&text=Travel+Destination+4", category: "travel", title: "Desert Dreams", year: "2022" },
  { id: 21, src: "/placeholder.svg?height=800&width=600&text=Travel+Destination+5", category: "travel", title: "Cultural Heritage", year: "2023" },
  { id: 22, src: "/placeholder.svg?height=600&width=900&text=Travel+Destination+6", category: "travel", title: "Urban Exploration", year: "2022" },
  { id: 23, src: "/placeholder.svg?height=800&width=600&text=Travel+Destination+7", category: "travel", title: "Natural Wonders", year: "2023" },
  { id: 24, src: "/placeholder.svg?height=700&width=800&text=Travel+Destination+8", category: "travel", title: "Adventure Awaits", year: "2022" },

  // Corporate Photography
  { id: 25, src: "/placeholder.svg?height=600&width=800&text=Corporate+Portrait+1", category: "corporate", title: "Executive Presence", year: "2023" },
  { id: 26, src: "/placeholder.svg?height=800&width=600&text=Corporate+Portrait+2", category: "corporate", title: "Team Collaboration", year: "2022" },
  { id: 27, src: "/placeholder.svg?height=700&width=900&text=Corporate+Portrait+3", category: "corporate", title: "Professional Excellence", year: "2023" },
  { id: 28, src: "/placeholder.svg?height=800&width=600&text=Corporate+Portrait+4", category: "corporate", title: "Business Success", year: "2022" },
  { id: 29, src: "/placeholder.svg?height=600&width=800&text=Corporate+Portrait+5", category: "corporate", title: "Leadership Vision", year: "2023" },
  { id: 30, src: "/placeholder.svg?height=900&width=600&text=Corporate+Portrait+6", category: "corporate", title: "Corporate Culture", year: "2022" },
  { id: 31, src: "/placeholder.svg?height=700&width=800&text=Corporate+Portrait+7", category: "corporate", title: "Brand Identity", year: "2023" },
  { id: 32, src: "/placeholder.svg?height=800&width=600&text=Corporate+Portrait+8", category: "corporate", title: "Professional Growth", year: "2022" },

  // Fashion Brochure
  {
    id: 33,
    src: "/placeholder.svg?height=1000&width=600&text=Fashion+Style+1",
    category: "fashion",
    title: "African Elegance",
    year: "2023",
  },
  { id: 34, src: "/placeholder.svg?height=800&width=600&text=Fashion+Style+2", category: "fashion", title: "Modern Heritage", year: "2022" },
  { id: 35, src: "/placeholder.svg?height=900&width=600&text=Fashion+Style+3", category: "fashion", title: "Bold Statement", year: "2023" },
  { id: 36, src: "/placeholder.svg?height=800&width=600&text=Fashion+Style+4", category: "fashion", title: "Creative Vision", year: "2022" },
  {
    id: 37,
    src: "/placeholder.svg?height=1000&width=600&text=Fashion+Style+5",
    category: "fashion",
    title: "Timeless Beauty",
    year: "2023",
  },
  {
    id: 38,
    src: "/placeholder.svg?height=800&width=600&text=Fashion+Style+6",
    category: "fashion",
    title: "Contemporary Style",
    year: "2022",
  },
  { id: 39, src: "/placeholder.svg?height=900&width=600&text=Fashion+Style+7", category: "fashion", title: "Artistic Direction", year: "2023" },
  { id: 40, src: "/placeholder.svg?height=800&width=600&text=Fashion+Style+8", category: "fashion", title: "Fashion Forward", year: "2022" },

  // Flowers
  {
    id: 41,
    src: "/placeholder.svg?height=600&width=900&text=Flower+Beauty+1",
    category: "flowers",
    title: "Botanical Grace",
    year: "2023",
  },
  { id: 42, src: "/placeholder.svg?height=800&width=600&text=Flower+Beauty+2", category: "flowers", title: "Nature's Art", year: "2022" },
  { id: 43, src: "/placeholder.svg?height=700&width=800&text=Flower+Beauty+3", category: "flowers", title: "Delicate Beauty", year: "2023" },
  { id: 44, src: "/placeholder.svg?height=600&width=900&text=Flower+Beauty+4", category: "flowers", title: "Natural Harmony", year: "2022" },
  {
    id: 45,
    src: "/placeholder.svg?height=800&width=600&text=Flower+Beauty+5",
    category: "flowers",
    title: "Floral Poetry",
    year: "2023",
  },
  {
    id: 46,
    src: "/placeholder.svg?height=700&width=800&text=Flower+Beauty+6",
    category: "flowers",
    title: "Organic Elegance",
    year: "2022",
  },
  { id: 47, src: "/placeholder.svg?height=600&width=900&text=Flower+Beauty+7", category: "flowers", title: "Natural Wonder", year: "2023" },
  { id: 48, src: "/placeholder.svg?height=800&width=600&text=Flower+Beauty+8", category: "flowers", title: "Botanical Art", year: "2022" },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

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
    <div className="min-h-screen bg-black">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
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
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isLoaded ? "fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div className="image-container rounded-2xl overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
            ))}
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

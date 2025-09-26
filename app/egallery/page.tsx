"use client"

import { useState, useEffect } from "react"
import NavigationBar from "@/components/navigation-bar"
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react"

export default function EGalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const openInNewTab = () => {
    window.open("https://miracle-outcomes-884111.framer.app/?embed=1", "_blank")
  }

  return (
    <div className="bg-black">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <h1 className="text-display font-serif text-white mb-8">E-Gallery</h1>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              An interactive digital showcase featuring curated collections and immersive visual experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-full"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  Exit Fullscreen
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  Fullscreen
                </>
              )}
            </button>
            
            <button
              onClick={openInNewTab}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-full"
            >
              <ExternalLink className="w-4 h-4" />
              Open in New Tab
            </button>
          </div>
        </div>
      </section>

      {/* Framer Embed Section */}
      <section className={`pb-20 px-6 transition-all duration-500 ${isFullscreen ? "fixed inset-0 z-40 bg-black" : ""}`}>
        <div className={`${isFullscreen ? "h-screen w-full" : "max-w-7xl mx-auto"}`}>
          <div className={`relative ${isFullscreen ? "h-full" : "aspect-video rounded-2xl overflow-hidden"}`}>
            <iframe
              src="https://miracle-outcomes-884111.framer.app/?embed=1"
              title="E-Gallery Interactive Showcase"
              className={`w-full h-full border-0 ${isFullscreen ? "" : "rounded-2xl"}`}
              allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            
            {/* Loading Overlay */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-body">Loading E-Gallery...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      {!isFullscreen && (
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-headline font-serif text-white mb-6">Interactive Digital Experience</h2>
            <p className="text-body-large text-white/80 leading-relaxed mb-8">
              This e-gallery showcases an interactive digital experience built with Framer, featuring dynamic layouts, 
              smooth animations, and immersive visual storytelling. Explore the collection through an intuitive 
              interface designed to enhance your viewing experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <h3 className="text-title font-serif text-white">Interactive Design</h3>
                <p className="text-body text-white/70">
                  Navigate through collections with smooth transitions and engaging interactions.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-title font-serif text-white">Responsive Layout</h3>
                <p className="text-body text-white/70">
                  Optimized for all devices with adaptive layouts and touch-friendly controls.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-title font-serif text-white">Modern Technology</h3>
                <p className="text-body text-white/70">
                  Built with cutting-edge web technologies for the best performance and experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Close Button */}
      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="fixed top-6 right-6 z-50 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <Minimize2 className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  )
}


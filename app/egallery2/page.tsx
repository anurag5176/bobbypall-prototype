"use client"

import { useState, useEffect } from "react"
import NavigationBar from "@/components/navigation-bar"
import DomeGallery from "@/components/dome-gallery"
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react"

export default function EGallery2Page() {
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
            <h1 className="text-display font-serif text-white mb-8">Dome Gallery</h1>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              An immersive 3D spherical gallery experience. Drag to rotate, tap to explore, and discover art in a whole new dimension.
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

      {/* Dome Gallery Section */}
      <section className={`pb-20 px-6 transition-all duration-500 ${isFullscreen ? "fixed inset-0 z-40 bg-black" : ""}`}>
        <div className={`${isFullscreen ? "h-screen w-full" : "max-w-7xl mx-auto h-[80vh] min-h-[600px]"}`}>
          <div className={`relative ${isFullscreen ? "h-full" : "h-full rounded-2xl overflow-hidden"}`}>
            <DomeGallery
              images={[
                {
                  src: '/GLAM/1.png',
                  alt: 'Glam Photography 1'
                },
                {
                  src: '/GLAM/2.png',
                  alt: 'Glam Photography 2'
                },
                {
                  src: '/GLAM/3.png',
                  alt: 'Glam Photography 3'
                },
                {
                  src: '/GLAM/4.png',
                  alt: 'Glam Photography 4'
                },
                {
                  src: '/GLAM/5.png',
                  alt: 'Glam Photography 5'
                },
                {
                  src: '/Family/1.png',
                  alt: 'Family Photography 1'
                },
                {
                  src: '/Family/2.png',
                  alt: 'Family Photography 2'
                },
                {
                  src: '/Family/3.png',
                  alt: 'Family Photography 3'
                },
                {
                  src: '/Family/4.png',
                  alt: 'Family Photography 4'
                },
                {
                  src: '/Family/5.png',
                  alt: 'Family Photography 5'
                },
                {
                  src: '/Family/6.png',
                  alt: 'Family Photography 6'
                },
                {
                  src: '/Travel/1.png',
                  alt: 'Travel Photography 1'
                },
                {
                  src: '/Travel/2.png',
                  alt: 'Travel Photography 2'
                },
                {
                  src: '/Travel/3.png',
                  alt: 'Travel Photography 3'
                },
                {
                  src: '/Travel/4.png',
                  alt: 'Travel Photography 4'
                },
                {
                  src: '/Travel/5.png',
                  alt: 'Travel Photography 5'
                },
                {
                  src: '/Travel/6.png',
                  alt: 'Travel Photography 6'
                },
                {
                  src: '/Travel/7.png',
                  alt: 'Travel Photography 7'
                },
                {
                  src: '/CORPORATE/1.png',
                  alt: 'Corporate Photography 1'
                },
                {
                  src: '/CORPORATE/2.png',
                  alt: 'Corporate Photography 2'
                },
                {
                  src: '/CORPORATE/3.png',
                  alt: 'Corporate Photography 3'
                },
                {
                  src: '/CORPORATE/4.png',
                  alt: 'Corporate Photography 4'
                },
                {
                  src: '/fashion.png',
                  alt: 'Fashion Photography'
                },
                {
                  src: '/flower.png',
                  alt: 'Flower Photography'
                }
              ]}
              fit={0.6}
              fitBasis="auto"
              minRadius={400}
              maxRadius={800}
              padFactor={0.2}
              overlayBlurColor="#0a0a0a"
              maxVerticalRotationDeg={8}
              dragSensitivity={25}
              enlargeTransitionMs={400}
              segments={35}
              dragDampening={1.5}
              openedImageWidth="500px"
              openedImageHeight="500px"
              imageBorderRadius="20px"
              openedImageBorderRadius="20px"
              grayscale={false}
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      {!isFullscreen && (
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-headline font-serif text-white mb-6">3D Spherical Experience</h2>
            <p className="text-body-large text-white/80 leading-relaxed mb-8">
              This dome gallery creates an immersive 3D environment where your photography collection 
              is arranged in a spherical formation. Navigate by dragging to rotate the sphere, and 
              tap any image to view it in full detail with smooth animations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <h3 className="text-title font-serif text-white">Interactive 3D Navigation</h3>
                <p className="text-body text-white/70">
                  Drag to rotate the sphere and explore your collection from every angle with smooth physics.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-title font-serif text-white">Immersive Viewing</h3>
                <p className="text-body text-white/70">
                  Tap any image to view it in full detail with elegant zoom animations and transitions.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-title font-serif text-white">Modern Technology</h3>
                <p className="text-body text-white/70">
                  Built with advanced 3D rendering and gesture recognition for the ultimate viewing experience.
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

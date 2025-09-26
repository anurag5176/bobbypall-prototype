"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NavigationBar from "@/components/navigation-bar"
import { ArrowRight, Camera, Users, Globe, Building, Palette, Flower } from "lucide-react"

const photographyStyles = [
  {
    id: "glam",
    title: "Glam Photography",
    subtitle: "Capturing the unseen beauty",
    description:
      "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition.",
    icon: Camera,
    heroImage: "/GLAM/4.png",
    galleryImages: [
      "/GLAM/1.png",
      "/GLAM/2.png",
      "/GLAM/3.png",
      "/GLAM/5.png",
    ],
    services: ["Model Portraits", "Fashion Shoots", "Beauty Photography", "Editorial Work"],
    approach: "Collaborative approach that brings out inner confidence and beauty",
  },
  {
    id: "family",
    title: "Family Photography",
    subtitle: "Preserving precious moments",
    description:
      "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition.",
    icon: Users,
    heroImage: "/Family/3.png",
    galleryImages: [
      "/Family/1.png",
      "/Family/2.png",
      "/Family/4.png",
      "/Family/5.png",
    ],
    services: ["Family Portraits", "Generational Photos", "Milestone Celebrations", "Candid Moments"],
    approach: "Natural, relaxed sessions that capture authentic family connections",
  },
  {
    id: "travel",
    title: "Travel Brochure",
    subtitle: "Stories from around the world",
    description:
      "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition.",
    icon: Globe,
    heroImage: "/Travel/2.png",
    galleryImages: [
      "/Travel/1.png",
      "/Travel/3.png",
      "/Travel/4.png",
      "/Travel/5.png",
    ],
    services: ["Destination Photography", "Cultural Documentation", "Tourism Campaigns", "Travel Stories"],
    approach: "Immersive storytelling that captures the essence of places and cultures",
  },
  {
    id: "corporate",
    title: "Corporate Photography",
    subtitle: "Professional excellence captured",
    description:
      "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition.",
    icon: Building,
    heroImage: "/corporate.png",
    galleryImages: [
      "/corporate.png",
      "/corporate.png",
      "/corporate.png",
      "/corporate.png",
    ],
    services: ["Executive Portraits", "Team Photography", "Event Coverage", "Brand Imagery"],
    approach: "Professional, polished photography that enhances corporate identity",
  },
  {
    id: "fashion",
    title: "Fashion Brochure",
    subtitle: "Where style meets art",
    description:
      "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition.",
    icon: Palette,
    heroImage: "/fashion.png",
    galleryImages: [
      "/fashion.png",
      "/fashion.png",
      "/fashion.png",
      "/fashion.png",
    ],
    services: ["Editorial Fashion", "Brand Campaigns", "Designer Portfolios", "Creative Direction"],
    approach: "Collaborative storytelling through style and substance",
  },
  {
    id: "flowers",
    title: "Flowers",
    subtitle: "Nature's delicate beauty",
    description:
      "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition.",
    icon: Flower,
    heroImage: "/flower.png",
    galleryImages: [
      "/flower.png",
      "/flower.png",
      "/flower.png",
      "/flower.png",
    ],
    services: ["Botanical Photography", "Nature Studies", "Artistic Compositions", "Fine Art Prints"],
    approach: "Patient observation that reveals the hidden beauty in nature",
  },
]

export default function StylesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeStyle, setActiveStyle] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-black bg-black">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <h1 className="text-display font-serif text-white mb-8">Our Styles</h1>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              Six distinct approaches to visual storytelling, each rooted in purpose, driven by passion, and committed
              to capturing the unseen beauty in every subject.
            </p>
          </div>
        </div>
      </section>

      {/* Styles Showcase */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {photographyStyles.map((style, index) => (
            <div key={style.id} className={`mb-32 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Content */}
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-caption text-white/60 font-medium tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="h-px bg-white/30 flex-1 max-w-16"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <style.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-headline font-serif text-white">{style.title}</h2>
                    </div>
                    
                    <p className="text-body-large text-white font-medium mb-6">{style.subtitle}</p>

                    <p className="text-body text-white/70 leading-relaxed mb-8">{style.description}</p>

                    <blockquote className="border-l-2 border-white/20 pl-8 mb-10">
                      <p className="text-body text-white italic leading-relaxed">
                        "The successful model-photographer collaboration extends beyond the visible. It's about capturing the unseen – the fleeting expressions, the subtle gestures, and the emotions that breathe life into the composition."
                      </p>
                    </blockquote>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-title font-serif text-white mb-6">What I offer</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {style.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-white/70 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                    <p className="text-caption text-white/50 italic">{style.approach}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/gallery"
                    className="btn-secondary inline-flex items-center gap-3 group"
                  >
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="relative">
                  {/* Hero Image */}
                  <div className="image-container rounded-2xl overflow-hidden mb-8">
                    <img
                      src={style.heroImage}
                      alt={`${style.title} photography by Bobby Pall`}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="image-overlay"></div>
                  </div>

                  {/* Gallery Grid */}
                  <div className="grid grid-cols-4 gap-4">
                    {style.galleryImages.map((image, imageIndex) => (
                      <div key={imageIndex} className="image-container rounded-xl overflow-hidden">
                        <img
                          src={image}
                          alt={`${style.title} example ${imageIndex + 1}`}
                          className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-serif text-white mb-8">Ready to tell your story?</h2>
          <p className="text-body-large text-white/80 mb-10 leading-relaxed">
            Every project begins with a conversation. Let's discuss how we can bring your vision to life through
            authentic, powerful photography.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/gallery"
              className="btn-primary"
            >
              View Complete Portfolio
            </Link>
            <a
              href="mailto:hello@bobbypall.com"
              className="btn-secondary"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

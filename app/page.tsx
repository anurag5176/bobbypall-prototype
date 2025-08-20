"use client"

import AestheticHeader from "@/components/aesthetic-header"
import HeroCarousel from "@/components/hero-carousel"
import { useState, useEffect } from "react"

// Counter component for animated statistics
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return <span>{count}</span>
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <AestheticHeader />
      <HeroCarousel />

      {/* About Me Section */}
      <section className="section-spacing px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-headline font-serif text-white mb-8 leading-tight">
                  Through the lens of Bobby Pall
                </h2>
                <p className="text-body-large text-white/80 leading-relaxed mb-8">
                  Bobby Pall is an acclaimed East African photographer renowned for his dedication to cross-cultural and documentary photography. His work celebrates cultural diversity and emphasizes the preservation of history and traditions across African societies.
                </p>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  With a masterful narrative style, Bobby captures real-life experiences, establishing himself as a prominent figure in visual storytelling. Every photograph tells a story that extends beyond the frame, inviting viewers to engage with deeper meanings and authentic human experiences.
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  This is where art meets purpose. Where vision becomes voice.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=700&width=800&text=Bobby+Pall+Portrait"
                  alt="Bobby Pall - East African Photographer"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 card-metallic p-8 rounded-2xl max-w-xs">
                <p className="text-caption text-white/60 mb-2">Based in</p>
                <p className="text-body font-medium text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Impact & Experience</h2>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              Numbers that tell the story of dedication, passion, and the countless moments captured through the lens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-display font-serif text-white mb-4">
                <AnimatedCounter end={140} />
              </div>
              <h3 className="text-title font-serif text-white mb-4">Finished Photosessions</h3>
              <p className="text-body text-white/70 leading-relaxed">
                Professional photography sessions completed with excellence and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="text-display font-serif text-white mb-4">
                <AnimatedCounter end={105} />
              </div>
              <h3 className="text-title font-serif text-white mb-4">Studio Sessions</h3>
              <p className="text-body text-white/70 leading-relaxed">
                Controlled environment sessions that bring out the best in every subject.
              </p>
            </div>

            <div className="text-center">
              <div className="text-display font-serif text-white mb-4">
                <AnimatedCounter end={230} />
              </div>
              <h3 className="text-title font-serif text-white mb-4">Happy Clients</h3>
              <p className="text-body text-white/70 leading-relaxed">
                Satisfied clients who trust Bobby to capture their most precious moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-headline font-serif text-white mb-8 leading-tight">
                  Through the lens of truth
                </h2>
                <p className="text-body-large text-white/80 leading-relaxed mb-8">
                  Photography is not about capturing what you see—it's about revealing what others feel. Every frame I
                  create carries the weight of stories untold, the beauty of moments unnoticed, and the power of
                  perspectives unchanged.
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  This is where art meets purpose. Where vision becomes voice.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=700&width=800&text=Portrait+Series"
                  alt="Bobby Pall at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Style Showcase */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Signature Style</h2>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              A distinctive approach that combines technical mastery with emotional depth, creating images that resonate beyond the visual.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Emotional Authenticity",
                description: "Every photograph captures genuine emotion, not staged moments. I wait for the truth to reveal itself.",
                image: "/placeholder.svg?height=400&width=400&text=Emotion"
              },
              {
                title: "Professional Excellence",
                description: "My work celebrates the richness of African culture while challenging stereotypes and misconceptions.",
                image: "/placeholder.svg?height=400&width=400&text=Excellence"
              },
              {
                title: "Narrative Power",
                description: "Each image tells a story that extends beyond the frame, inviting viewers to engage with deeper meanings.",
                image: "/placeholder.svg?height=400&width=400&text=Story"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="image-container rounded-2xl overflow-hidden mb-8 group-hover:scale-105 transition-transform duration-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="image-overlay"></div>
                </div>
                <h3 className="text-title font-serif text-white mb-4 group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
                <p className="text-body text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Selected Works</h2>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              A glimpse into the stories that define us, the moments that move us, and the beauty that surrounds us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/placeholder.svg?height=600&width=500&text=Glam+Photography",
                title: "Glam Photography",
                description: "Capturing the unseen beauty",
                year: "2023"
              },
              {
                src: "/placeholder.svg?height=600&width=500&text=Family+Photography",
                title: "Family Photography",
                description: "Preserving precious moments",
                year: "2023"
              },
              {
                src: "/placeholder.svg?height=600&width=500&text=Travel+Photography",
                title: "Travel Brochure",
                description: "Stories from around the world",
                year: "2023"
              },
            ].map((work, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="image-container rounded-2xl overflow-hidden mb-6">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-title font-serif text-white group-hover:text-white/90 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-body text-white/70">{work.description}</p>
                  <p className="text-caption text-white/50">{work.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/gallery"
              className="btn-primary inline-flex items-center gap-3 group"
            >
              <span className="font-medium">View Complete Gallery</span>
              <div className="w-8 h-px bg-black group-hover:w-12 transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Behind the Lens */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=700&text=Behind+the+Lens"
                  alt="Bobby Pall in his studio"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="text-headline font-serif text-white mb-8 leading-tight">Behind the lens</h2>
                <p className="text-body-large text-white/80 leading-relaxed mb-8">
                  My approach is built on patience, respect, and deep cultural understanding. I don't just take photographs—I build relationships, earn trust, and create spaces where authentic moments can unfold naturally.
                </p>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  Every subject I photograph becomes a collaborator in storytelling. Their comfort, their truth, their dignity—these are the foundations of powerful imagery.
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  This collaborative approach has taken me from the bustling streets of Nairobi to the remote villages of the Maasai Mara, always with the same mission: to capture the authentic spirit of Africa through African eyes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-display font-serif text-white leading-relaxed mb-10">
            "I don't just take photographs. I collect moments, preserve memories, and share the stories that make us
            human."
          </blockquote>
          <cite className="text-body text-white/70">— Bobby Pall</cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-serif text-white mb-8">Ready to tell your story?</h2>
          <p className="text-body-large text-white/80 mb-12 leading-relaxed">
            Every project begins with a conversation. Let's discuss how we can bring your vision to life through
            authentic, powerful photography that captures the essence of your narrative.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/gallery"
              className="btn-primary"
            >
              View Portfolio
            </a>
            <a
              href="mailto:hello@bobbypall.com"
              className="btn-secondary"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

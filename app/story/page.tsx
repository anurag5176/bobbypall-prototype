"use client"

import { useState, useEffect } from "react"
import AestheticHeader from "@/components/aesthetic-header"

export default function StoryPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <AestheticHeader />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <h1 className="text-display font-serif text-white mb-8 leading-tight">
              The lens chooses the photographer, not the other way around
            </h1>
            <p className="text-body-large text-white/80 leading-relaxed">
              This is not just my story. This is the story of every frame I've captured, every soul I've encountered,
              and every truth I've dared to reveal through light and shadow.
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-headline font-serif text-white mb-8">Where it all began</h2>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  I was seven when I first held my grandfather's camera. Not to take a picture, but to understand why
                  this small black box made him disappear for hours. He would return with stories that seemed too vivid,
                  too real to be captured by mere mechanics.
                </p>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  "Bobby," he said, "a camera doesn't take pictures. It steals souls and gives them back as stories." I
                  didn't understand then. I thought he was being dramatic, the way old people often are when they want
                  to sound wise.
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  Twenty-three years later, I finally understood. Every photograph is a theft. Every frame, a
                  confession. Every click, a promise to honor what was trusted to you in that split second of
                  vulnerability.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=700&width=600&text=Young+Bobby+with+Grandfather's+Camera"
                  alt="Young Bobby with his grandfather's camera"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 card-metallic p-8 rounded-2xl max-w-xs">
                <p className="text-caption text-white/60 mb-2">First camera</p>
                <p className="text-body font-medium text-white">Grandfather's Pentax, 1987</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-headline font-serif text-white leading-relaxed mb-8">
            "I don't document reality. I reveal the truth that hides behind what we think we see."
          </blockquote>
          <p className="text-body text-white/70 leading-relaxed">
            Photography, for me, has never been about technical perfection or aesthetic beauty—though both have their
            place. It's about the moment when pretense falls away, when the subject forgets the camera exists, when the
            real story emerges from behind the carefully constructed facade we all wear.
          </p>
        </div>
      </section>

      {/* The Awakening */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=700&text=Breakthrough+Moment"
                  alt="Bobby's breakthrough moment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="text-headline font-serif text-white mb-8">The awakening</h2>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  My first real photograph wasn't planned. I was twenty-two, walking through Kibera with my camera,
                  trying to capture "poverty" for a university assignment. How naive. How arrogant.
                </p>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  Then I saw her—an elderly woman sitting outside her home, braiding her granddaughter's hair. The light
                  was wrong. The composition was off. Everything my professors had taught me said this wasn't "the
                  shot."
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  But something in that moment—the tenderness, the quiet dignity, the unspoken love passing between
                  generations—demanded to be witnessed. I raised my camera, and for the first time, I wasn't taking a
                  picture. I was receiving a gift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-8">My ideology</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
              <h3 className="text-title font-serif text-white mb-4">Truth over beauty</h3>
              <p className="text-body text-white/70 leading-relaxed">
                A raw, honest moment will always triumph over a perfectly composed lie. Beauty emerges from
                authenticity, not the other way around.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
              <h3 className="text-title font-serif text-white mb-4">Stories, not subjects</h3>
              <p className="text-body text-white/70 leading-relaxed">
                Every person I photograph is a storyteller. My job is not to impose my narrative, but to create space
                for theirs to emerge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
              <h3 className="text-title font-serif text-white mb-4">Legacy through lens</h3>
              <p className="text-body text-white/70 leading-relaxed">
                Photography is time travel. Every frame I capture today becomes tomorrow's history, next generation's
                heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-headline font-serif text-white mb-8">Why I do what I do</h2>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  Africa has been photographed by outsiders for too long. Our stories filtered through foreign lenses,
                  our narratives shaped by external perspectives. I photograph from within—not as an observer, but as a
                  participant in the story being told.
                </p>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  Every frame I capture is an act of reclamation. Every story I tell is a declaration that we are the
                  authors of our own narrative. This is not about representation—it's about truth-telling.
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  When someone looks at my photographs fifty years from now, I want them to see not just what we looked
                  like, but who we were. Our dignity. Our complexity. Our humanity in all its beautiful, contradictory
                  fullness.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=700&text=Bobby+at+Work+in+Field"
                  alt="Bobby at work in the field"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Manifesto */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-headline font-serif text-white mb-12">A personal manifesto</h2>
            <div className="space-y-10 text-left">
              <p className="text-body-large text-white leading-relaxed font-medium">
                I believe that every person carries within them a story worth telling, a truth worth preserving, a
                moment worth capturing.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                I believe that photography is not about the photographer—it's about the trust placed in you by those who
                allow you to witness their truth.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                I believe that technique serves story, not the other way around. The most technically perfect photograph
                means nothing if it has no soul.
              </p>
              <p className="text-body text-white/70 leading-relaxed">
                I believe that our responsibility as African photographers is not just to document our present, but to
                preserve our legacy for generations who will inherit what we leave behind.
              </p>
              <p className="text-body-large text-white leading-relaxed font-medium">
                Most importantly, I believe that every click of the shutter is a promise—to honor, to remember, to tell
                the truth as it was given to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-display font-serif text-white leading-tight mb-8">
            "This is my gift. This is my burden. This is my calling."
          </blockquote>
          <cite className="text-body text-white/70">— Bobby Pall</cite>
        </div>
      </section>
    </div>
  )
}

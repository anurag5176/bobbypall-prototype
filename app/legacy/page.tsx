"use client"

import { useState, useEffect } from "react"
import NavigationBar from "@/components/navigation-bar"
import { Award, Users, BookOpen, Target, Heart, Star } from "lucide-react"

const mentorshipPrograms = [
  {
    id: "beginner",
    title: "Foundations of Photography",
    subtitle: "Building blocks for beginners",
    description:
      "A comprehensive introduction to photography fundamentals, designed for those taking their first steps behind the lens. Learn composition, lighting, and the technical skills that form the foundation of great photography.",
    approach: "Community-based learning, collaborative practice, hands-on experience",
    duration: "12 weeks",
    maxStudents: 15,
    icon: BookOpen,
  },
  {
    id: "intermediate",
    title: "Advanced Techniques & Style",
    subtitle: "Developing your unique voice",
    description:
      "For photographers ready to move beyond basics and develop their distinctive style. Explore advanced techniques, creative direction, and the business aspects of professional photography.",
    approach: "Individual mentorship, portfolio development, industry insights",
    duration: "16 weeks",
    maxStudents: 10,
    icon: Target,
  },
  {
    id: "professional",
    title: "Professional Development",
    subtitle: "Building a sustainable career",
    description:
      "Transform your passion into a thriving business. Learn client management, marketing strategies, pricing, and the entrepreneurial skills needed to succeed in the competitive world of professional photography.",
    approach: "Business mentorship, networking, real-world projects",
    duration: "20 weeks",
    maxStudents: 8,
    icon: Award,
  },
]

const successStories = [
  {
    id: 1,
    name: "Sarah Mwangi",
    role: "Glam Photography Specialist",
    story:
      "Bobby's mentorship transformed my approach to portrait photography. His guidance on lighting and posing helped me develop a signature style that clients love. I now run a successful studio in Nairobi.",
    image: "/placeholder.svg?height=400&width=400&text=Sarah+Mwangi",
    year: "2022 Graduate",
  },
  {
    id: 2,
    name: "David Ochieng",
    role: "Family Photography Expert",
    story:
      "The mentorship program gave me the confidence to pursue my passion for family photography. Bobby taught me how to capture authentic moments and build lasting relationships with clients.",
    image: "/placeholder.svg?height=400&width=400&text=David+Ochieng",
    year: "2023 Graduate",
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    role: "Travel Photography Professional",
    story:
      "Through Bobby's guidance, I learned to tell compelling stories through my travel photography. His emphasis on cultural sensitivity and authentic representation has shaped my entire approach.",
    image: "/placeholder.svg?height=400&width=400&text=Grace+Wanjiku",
    year: "2021 Graduate",
  },
]

export default function LegacyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? "slide-up" : "opacity-0"}`}>
            <h1 className="text-display font-serif text-white mb-8">Building the Next Generation</h1>
            <p className="text-body-large text-white/80 max-w-4xl mx-auto leading-relaxed">
              My commitment extends beyond creating images—it's about nurturing the photographers who will tell the
              stories of tomorrow. Through mentorship, education, and community building, I'm investing in the future
              of African photography.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Mentorship Programs</h2>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              Structured learning experiences designed to accelerate your growth and help you find your unique voice
              in photography.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {mentorshipPrograms.map((program, index) => (
              <div key={program.id} className="card-metallic p-8 rounded-2xl group hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-title font-serif text-white group-hover:text-white/90 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-body text-white/70">{program.subtitle}</p>
                  </div>
                </div>

                <p className="text-body text-white/80 leading-relaxed mb-6">{program.description}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <span className="text-caption text-white/60">Approach: {program.approach}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <span className="text-caption text-white/60">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <span className="text-caption text-white/60">Max Students: {program.maxStudents}</span>
                  </div>
                </div>

                <button className="btn-secondary w-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Success Stories</h2>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              The real measure of mentorship is the success of those who've walked this path. These are the stories
              of transformation, growth, and achievement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {successStories.map((story, index) => (
              <div key={story.id} className="group">
                <div className="image-container rounded-2xl overflow-hidden mb-8 group-hover:scale-105 transition-transform duration-700">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-title font-serif text-white group-hover:text-white/90 transition-colors">
                      {story.name}
                    </h3>
                    <span className="text-caption text-white/50">{story.year}</span>
                  </div>
                  <p className="text-body text-white/70 font-medium">{story.role}</p>
                  <p className="text-body text-white/80 leading-relaxed">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="section-spacing px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-headline font-serif text-white mb-8 leading-tight">
                  Vision for the future
                </h2>
                <p className="text-body-large text-white/80 leading-relaxed mb-8">
                  My dream is to see a new generation of African photographers who not only master the technical
                  aspects of their craft but also understand the power and responsibility that comes with telling
                  stories through images.
                </p>
                <p className="text-body text-white/70 leading-relaxed mb-8">
                  I envision a community where photographers support each other, share knowledge freely, and
                  collectively elevate the standard of African photography on the global stage.
                </p>
                <p className="text-body text-white/70 leading-relaxed">
                  This is about more than individual success—it's about building a legacy that will inspire and
                  empower photographers for generations to come.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-container rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=700&text=Future+Vision"
                  alt="Future of African Photography"
                  className="w-full h-[500px] object-cover"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline font-serif text-white mb-6">Values & Principles</h2>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
              The foundation upon which all mentorship and education is built. These principles guide every
              interaction, every lesson, and every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Authenticity",
                description: "Every story deserves to be told with truth and respect for its subjects.",
              },
              {
                icon: Star,
                title: "Excellence",
                description: "We pursue mastery not for perfection, but for the power to serve stories better.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Photography is a collaborative art that thrives on shared knowledge and support.",
              },
              {
                icon: Target,
                title: "Purpose",
                description: "Every image should serve a purpose beyond aesthetics—to inform, inspire, or move.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-title font-serif text-white mb-4 group-hover:text-white/90 transition-colors">
                  {value.title}
                </h3>
                <p className="text-body text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-serif text-white mb-8">Ready to begin your journey?</h2>
          <p className="text-body-large text-white/80 mb-12 leading-relaxed">
            Whether you're taking your first steps in photography or ready to elevate your craft to the next level,
            I'm here to guide you on your path to becoming the photographer you were meant to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary">
              Apply for Mentorship
            </button>
            <a
              href="mailto:hello@bobbypall.com"
              className="btn-secondary"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

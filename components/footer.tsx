"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-1 space-y-6">
                <Link href="/" className="group">
                  <Image
                    src="/Logo.jpg"
                    alt="Bobby Pall Photography"
                    width={120}
                    height={72}
                    className="w-24 h-14 lg:w-32 lg:h-20 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </Link>
                <div className="space-y-4">
                  <h3 className="text-title font-serif text-white">Bobby Pall</h3>
                  <p className="text-body text-white/70 leading-relaxed">
                    East African photographer capturing authentic stories through the lens of cultural diversity and human connection.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-title font-serif text-white">Quick Links</h4>
                <nav className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Gallery", href: "/gallery" },
                    { name: "E-Gallery", href: "/egallery" },
                    { name: "Styles", href: "/styles" },
                    { name: "Story", href: "/story" },
                    { name: "Legacy", href: "/legacy" },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-body text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-title font-serif text-white">Services</h4>
                <nav className="space-y-3">
                  {[
                    "Glam Photography",
                    "Family Photography", 
                    "Travel Brochure",
                    "Corporate Photography",
                    "Fashion Brochure",
                    "Flower Photography"
                  ].map((service) => (
                    <span
                      key={service}
                      className="block text-body text-white/70"
                    >
                      {service}
                    </span>
                  ))}
                </nav>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="text-title font-serif text-white">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-body text-white/70">Email</p>
                      <a 
                        href="mailto:hello@bobbypall.com"
                        className="text-body text-white hover:text-white/80 transition-colors duration-300"
                      >
                        hello@bobbypall.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-body text-white/70">Phone</p>
                      <a 
                        href="tel:+254700000000"
                        className="text-body text-white hover:text-white/80 transition-colors duration-300"
                      >
                        +254 700 000 000
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-body text-white/70">Location</p>
                      <p className="text-body text-white">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h5 className="text-body font-medium text-white mb-3">Follow</h5>
                  <div className="flex space-x-4">
                    {[
                      { name: "Instagram", href: "#", icon: Instagram },
                      { name: "Facebook", href: "#", icon: Facebook },
                      { name: "Twitter", href: "#", icon: Twitter },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-caption text-white/60">
                  © {currentYear} Bobby Pall Photography. All rights reserved.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-caption text-white/60 hover:text-white/80 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-caption text-white/60 hover:text-white/80 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/contact" 
                  className="text-caption text-white/60 hover:text-white/80 transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

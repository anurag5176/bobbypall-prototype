"use client"

import { useState, useEffect } from "react"
import { Monitor, Smartphone } from "lucide-react"
import { setDesktopSiteRequested, hasRequestedDesktopSite } from "@/lib/mobile-detection"

export default function DesktopToggle() {
  const [isDesktopRequested, setIsDesktopRequested] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if desktop site is already requested
    setIsDesktopRequested(hasRequestedDesktopSite())
    
    // Show toggle on mobile devices
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsVisible(isMobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleDesktopMode = () => {
    const newState = !isDesktopRequested
    setDesktopSiteRequested(newState)
    setIsDesktopRequested(newState)
    
    // Reload the page to apply changes
    window.location.reload()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleDesktopMode}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          isDesktopRequested
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm'
        }`}
        title={isDesktopRequested ? 'Switch to Mobile View' : 'Switch to Desktop View'}
      >
        {isDesktopRequested ? (
          <>
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium">Mobile</span>
          </>
        ) : (
          <>
            <Monitor className="w-4 h-4" />
            <span className="text-sm font-medium">Desktop</span>
          </>
        )}
      </button>
    </div>
  )
}

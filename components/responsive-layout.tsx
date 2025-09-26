"use client"

import { useEffect, useState } from 'react'
import { shouldUseDesktopLayout, getDesktopSitePreference, setDesktopSitePreference } from '@/lib/mobile-detection'

interface ResponsiveLayoutProps {
  children: React.ReactNode
  mobileClassName?: string
  desktopClassName?: string
  forceDesktop?: boolean
}

export default function ResponsiveLayout({ 
  children, 
  mobileClassName = "", 
  desktopClassName = "",
  forceDesktop = false 
}: ResponsiveLayoutProps) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkLayout = () => {
      const shouldUseDesktop = forceDesktop || shouldUseDesktopLayout()
      setIsDesktop(shouldUseDesktop)
      setIsLoaded(true)
    }

    checkLayout()

    // Listen for resize events
    const handleResize = () => {
      checkLayout()
    }

    window.addEventListener('resize', handleResize)
    
    // Listen for storage changes (when user toggles desktop site preference)
    const handleStorageChange = () => {
      checkLayout()
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [forceDesktop])

  if (!isLoaded) {
    return <div className="min-h-screen bg-black">{children}</div>
  }

  const className = isDesktop ? desktopClassName : mobileClassName

  return (
    <div className={`${className} ${isDesktop ? 'desktop-layout' : 'mobile-layout'}`}>
      {children}
    </div>
  )
}

// Hook for components to check if they should use desktop layout
export function useDesktopLayout() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkLayout = () => {
      const shouldUseDesktop = shouldUseDesktopLayout()
      setIsDesktop(shouldUseDesktop)
      setIsLoaded(true)
    }

    checkLayout()

    const handleResize = () => {
      checkLayout()
    }

    const handleStorageChange = () => {
      checkLayout()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { isDesktop, isLoaded }
}

// Component to toggle desktop site preference
export function DesktopSiteToggle() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkPreference = () => {
      const preference = getDesktopSitePreference()
      setIsDesktop(preference)
      setIsLoaded(true)
    }

    checkPreference()

    const handleStorageChange = () => {
      checkPreference()
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const toggleDesktopSite = () => {
    const newPreference = !isDesktop
    setDesktopSitePreference(newPreference)
    setIsDesktop(newPreference)
    
    // Reload the page to apply changes
    window.location.reload()
  }

  if (!isLoaded) return null

  return (
    <button
      onClick={toggleDesktopSite}
      className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/20 transition-colors"
      title={isDesktop ? "Switch to Mobile View" : "Switch to Desktop View"}
    >
      {isDesktop ? "📱 Mobile" : "🖥️ Desktop"}
    </button>
  )
}

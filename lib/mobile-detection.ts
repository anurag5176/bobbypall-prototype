/**
 * Mobile detection utility that respects user's desktop site preference
 * This allows users to use browser's "Request Desktop Site" feature
 */

export function shouldUseMobileOptimizations(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check if user has requested desktop site (common indicators)
  const isDesktopSiteRequested = 
    // Check for desktop user agent override
    navigator.userAgent.includes('Mobile') && 
    !navigator.userAgent.includes('Mobile Safari') ||
    // Check for desktop viewport width
    window.innerWidth >= 1024 ||
    // Check for desktop site preference in localStorage
    localStorage.getItem('desktop-site') === 'true' ||
    // Check for desktop site preference in sessionStorage
    sessionStorage.getItem('desktop-site') === 'true';
  
  // If desktop site is requested, don't use mobile optimizations
  if (isDesktopSiteRequested) {
    return false;
  }
  
  // Standard mobile detection
  return window.innerWidth < 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check if it's actually a mobile device (not just small screen)
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isSmallScreen(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

export function shouldUseDesktopLayout(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Use desktop layout if:
  // 1. Screen is large enough (>= 1024px)
  // 2. User has requested desktop site
  // 3. Not a mobile device OR user has overridden mobile detection
  return window.innerWidth >= 1024 || 
         localStorage.getItem('desktop-site') === 'true' ||
         sessionStorage.getItem('desktop-site') === 'true' ||
         (!isMobileDevice() && window.innerWidth >= 768);
}

export function setDesktopSitePreference(preferDesktop: boolean): void {
  if (typeof window === 'undefined') return;
  
  if (preferDesktop) {
    localStorage.setItem('desktop-site', 'true');
    sessionStorage.setItem('desktop-site', 'true');
  } else {
    localStorage.removeItem('desktop-site');
    sessionStorage.removeItem('desktop-site');
  }
}

export function getDesktopSitePreference(): boolean {
  if (typeof window === 'undefined') return false;
  
  return localStorage.getItem('desktop-site') === 'true' ||
         sessionStorage.getItem('desktop-site') === 'true';
}

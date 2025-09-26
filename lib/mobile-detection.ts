/**
 * Enhanced mobile detection that respects user preferences
 * and allows desktop site requests to override mobile detection
 */

export interface MobileDetectionOptions {
  respectUserAgent?: boolean;
  respectViewport?: boolean;
  respectDesktopRequest?: boolean;
  minWidth?: number;
}

const DEFAULT_OPTIONS: MobileDetectionOptions = {
  respectUserAgent: true,
  respectViewport: true,
  respectDesktopRequest: true,
  minWidth: 768
};

/**
 * Check if user has requested desktop site
 */
export function hasRequestedDesktopSite(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for desktop site request in localStorage
  const desktopRequested = localStorage.getItem('desktop-site-requested');
  if (desktopRequested === 'true') return true;
  
  // Check for desktop site request in sessionStorage
  const sessionDesktopRequested = sessionStorage.getItem('desktop-site-requested');
  if (sessionDesktopRequested === 'true') return true;
  
  // Check for desktop site request in URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('desktop') || urlParams.has('desktop-site') || urlParams.get('view') === 'desktop') return true;
  
  return false;
}

/**
 * Set desktop site request preference
 */
export function setDesktopSiteRequested(requested: boolean): void {
  if (typeof window === 'undefined') return;
  
  if (requested) {
    localStorage.setItem('desktop-site-requested', 'true');
    sessionStorage.setItem('desktop-site-requested', 'true');
  } else {
    localStorage.removeItem('desktop-site-requested');
    sessionStorage.removeItem('desktop-site-requested');
  }
}

/**
 * Handle URL parameter changes for desktop site requests
 */
export function handleUrlParameterChange(): void {
  if (typeof window === 'undefined') return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const desktopRequested = urlParams.has('desktop') || urlParams.has('desktop-site') || urlParams.get('view') === 'desktop';
  
  if (desktopRequested) {
    setDesktopSiteRequested(true);
  }
}

/**
 * Enhanced mobile detection that respects user preferences
 */
export function isMobileDevice(options: MobileDetectionOptions = {}): boolean {
  if (typeof window === 'undefined') return false;
  
  const opts = { ...DEFAULT_OPTIONS, ...options };
  
  // If user has requested desktop site, respect that preference
  if (opts.respectDesktopRequest && hasRequestedDesktopSite()) {
    return false;
  }
  
  let isMobile = false;
  
  // Check viewport width
  if (opts.respectViewport) {
    isMobile = window.innerWidth < opts.minWidth!;
  }
  
  // Check user agent
  if (opts.respectUserAgent) {
    const userAgent = navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    isMobile = isMobile || mobileRegex.test(userAgent);
  }
  
  return isMobile;
}

/**
 * Check if device is mobile but user wants desktop experience
 */
export function shouldUseMobileOptimizations(): boolean {
  if (typeof window === 'undefined') return false;
  
  // If user requested desktop site, don't use mobile optimizations
  if (hasRequestedDesktopSite()) return false;
  
  // Otherwise, use normal mobile detection
  return isMobileDevice();
}

/**
 * Get responsive breakpoint based on current viewport
 */
export function getCurrentBreakpoint(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Check if current viewport is mobile-sized regardless of user agent
 */
export function isMobileViewport(minWidth: number = 768): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < minWidth;
}

export default function PerformanceScript() {
  return (
    <>
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/Logo.jpg" as="image" type="image/jpeg" />
      
      {/* Preload first hero image */}
      <link rel="preload" href="/fashion.png" as="image" type="image/png" />
      
      {/* Performance monitoring */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window.addEventListener('load', () => {
                setTimeout(() => {
                  const navigation = performance.getEntriesByType('navigation')[0];
                  const paint = performance.getEntriesByType('paint');
                  const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
                  
                  if (navigation && fcp) {
                    console.log('Performance Metrics:', {
                      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
                      firstContentfulPaint: fcp.startTime,
                      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
                    });
                  }
                }, 0);
              });
            }
            
            // Intersection Observer polyfill for older browsers
            if (!('IntersectionObserver' in window)) {
              import('intersection-observer').then(() => {
                console.log('Intersection Observer polyfill loaded');
              });
            }
          `,
        }}
      />
    </>
  )
}


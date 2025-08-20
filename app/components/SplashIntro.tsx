'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WebsiteVisibilityProvider } from '../contexts/WebsiteVisibilityContext';

type SplashIntroProps = {
  src?: string;
  poster?: string;
  durationMs?: number; // expected video duration for safety timer
  storageKey?: string;
  children: React.ReactNode;
};

export default function SplashIntro({
  src = '/video.mp4',
  poster = '/video_poster.jpg',
  durationMs = 4000,
  storageKey = 'introSeen',
  children
}: SplashIntroProps) {
  const [show, setShow] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);
  const [websiteVisible, setWebsiteVisible] = useState(false);
  const [websiteRendering, setWebsiteRendering] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const shouldReduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const force = params.has('intro');
    
    // Skip splash on mobile for better performance, unless user prefers reduced motion
    if (shouldReduceMotion || isMobile) {
      console.log('Skipping splash intro - reduced motion preference or mobile device');
      setShow(false);
      setWebsiteVisible(true);
      setWebsiteRendering(true);
      return;
    }

    console.log('Showing splash intro on desktop');
    setShow(true);
    setWebsiteVisible(false); // Hide website during splash
    setWebsiteRendering(false); // Don't render website yet
    setVideoLoaded(false); // Reset video loaded state
    
    // Start rendering website 1 second after video starts
    const renderTimer = setTimeout(() => {
      console.log('Starting website render for reveal effect');
      setWebsiteRendering(true);
    }, 1000);
    
    document.documentElement.classList.add('overflow-hidden');

    // Safety timer: ensure exit even if onEnded fails
    const safety = window.setTimeout(() => handleFinish(), Math.max(3000, durationMs + 800));
    
    return () => {
      window.clearTimeout(safety);
      window.clearTimeout(renderTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion, isMobile]);

  const handleFinish = () => {
    // Trigger slide-up
    setExitAnim(true);
    // After animation completes, unmount and show website
    window.setTimeout(() => {
      setShow(false);
      setWebsiteVisible(true); // Show website after splash
      document.documentElement.classList.remove('overflow-hidden');
    }, 850);
  };

  const onCanPlay = () => {
    // Video is ready to play - start smooth transition
    setVideoLoaded(true);
  };

  const onLoadStart = () => {
    console.log('Video load started');
  };

  const onLoadedData = () => {
    console.log('Video data loaded');
  };

  const onPlay = () => {
    console.log('Video started playing');
  };

  const onPause = () => {
    console.log('Video paused');
  };

  const onError = (e: any) => {
    console.error('Video error:', e);
    handleFinish();
  };

  return (
    <WebsiteVisibilityProvider isVisible={websiteVisible}>
      {/* Splash intro overlay */}
      <AnimatePresence>
        {show && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] bg-[#0A0A0B]"
            initial={{ y: 0 }}
            animate={{ y: exitAnim ? '-100%' : 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            {/* Subtle metallic gradient behind the video to avoid abrupt edges */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-80"
                   style={{ background: 'linear-gradient(135deg,#0A0A0B 0%,#121315 40%,#1B1C1F 100%)' }} />
            </div>

            {/* Poster Image - fades out when video loads */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <img 
                src={poster} 
                alt="Video poster" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Video - fades in when loaded */}
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              src={src}
              autoPlay
              muted
              playsInline
              preload="metadata"
              controls={false}
              onCanPlay={onCanPlay}
              onEnded={handleFinish}
              onLoadStart={onLoadStart}
              onLoadedData={onLoadedData}
              onPlay={onPlay}
              onPause={onPause}
              onError={onError}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website content - starts rendering 1 second after video starts */}
      <div className={`transition-opacity duration-1000 ${websiteRendering ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </WebsiteVisibilityProvider>
  );
}

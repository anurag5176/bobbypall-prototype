'use client';

import { createContext, useContext, ReactNode } from 'react';

interface WebsiteVisibilityContextType {
  isVisible: boolean;
}

const WebsiteVisibilityContext = createContext<WebsiteVisibilityContextType>({
  isVisible: false,
});

export const useWebsiteVisibility = () => useContext(WebsiteVisibilityContext);

interface WebsiteVisibilityProviderProps {
  children: ReactNode;
  isVisible: boolean;
}

export function WebsiteVisibilityProvider({ children, isVisible }: WebsiteVisibilityProviderProps) {
  return (
    <WebsiteVisibilityContext.Provider value={{ isVisible }}>
      {children}
    </WebsiteVisibilityContext.Provider>
  );
}

import type { Gtag } from 'gtag.js';

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export const initGA = (measurementId: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function (...args: Parameters<Gtag>) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());

  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  });
};
  
 
  export const trackPageView = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID
        || '', {
        page_path: url,
      });
    }
  };
  

  export const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };
  

  export const portfolioEvents = {
    viewProject: (projectName: string) => {
      trackEvent('view_project', 'Projects', projectName);
    },
  
    clickExternalLink: (linkName: string, url: string) => {
      trackEvent('click', 'External Links', `${linkName} - ${url}`);
    },
  
    openAboutOverlay: () => {
      trackEvent('open', 'Overlay', 'About');
    },
  
    closeAboutOverlay: () => {
      trackEvent('close', 'Overlay', 'About');
    },
  
    clickContactLink: (platform: string) => {
      trackEvent('click', 'Contact', platform);
    },
  
    regenerateTree: () => {
      trackEvent('click', 'Animation', 'Regenerate Tree');
    },
  
    hoverSpotlight: (projectName: string) => {
      trackEvent('hover', 'Spotlight', projectName);
    },
  
    playVideo: (videoName: string) => {
      trackEvent('play', 'Video', videoName);
    },
  
    downloadCV: () => {
      trackEvent('download', 'Document', 'CV');
    },
  };
  

  import { useEffect } from 'react';
  import { useLocation } from 'react-router-dom';
  
  export function usePageTracking() {
    const location = useLocation();
  
    useEffect(() => {
      trackPageView(location.pathname + location.search);
    }, [location]);
  }
import "./index.css";
import { useEffect, useState } from "react";
import LenisProvider from "./components/LenisProvider";
import { ScrollToTop } from "./components/ScrollToTop";
import { IntroScreen } from "./components/IntroScreen";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";
import { TopLinks } from "./components/TopLinks";
import { AboutOverlay } from "./components/overlays/AboutOverlay";

import { initGA, usePageTracking, portfolioEvents } from "./lib/analytics";
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

    
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      initGA(GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    const introTimer = setTimeout(() => {
      setIntroDone(true);
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }, 2600);

    return () => {
      clearTimeout(introTimer);
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  useEffect(() => {
    if (aboutOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      portfolioEvents.openAboutOverlay();
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [aboutOpen]);

  const handleCloseAbout = () => {
    setAboutOpen(false);
    portfolioEvents.closeAboutOverlay();
  };

  return (
    <HelmetProvider>
      <LenisProvider>
        <PageTracker />
        
        <ScrollToTop />
        <TopLinks onAbout={() => setAboutOpen(true)} />

        <AnimatePresence mode="wait">
          {!introDone && <IntroScreen />}
        </AnimatePresence>

        {introDone && <AnimatedRoutes/>}

        <AnimatePresence>
          {aboutOpen && (
            <AboutOverlay onClose={handleCloseAbout} />
          )}
        </AnimatePresence>
      </LenisProvider>
    </HelmetProvider>
  );
}

function PageTracker() {
  usePageTracking();
  return null;
}
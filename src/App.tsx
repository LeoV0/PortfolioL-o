import "./index.css";
import { useEffect, useState } from "react";
import LenisProvider from "./components/LenisProvider";
import { ScrollToTop } from "./components/ScrollToTop";
import { IntroScreen } from "./components/IntroScreen";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";
import { TopLinks } from "./components/TopLinks";
import { AboutOverlay } from "./components/overlays/AboutOverlay";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [aboutOpen]);

  return (
    <LenisProvider>
      <ScrollToTop />
      <TopLinks onAbout={() => setAboutOpen(true)} />

      <AnimatePresence mode="wait">
        {!introDone && <IntroScreen />}
      </AnimatePresence>

      {introDone && <AnimatedRoutes introDone={introDone} />}

      <AnimatePresence>
        {aboutOpen && (
          <AboutOverlay onClose={() => setAboutOpen(false)} />
        )}
      </AnimatePresence>
    </LenisProvider>
  );
}

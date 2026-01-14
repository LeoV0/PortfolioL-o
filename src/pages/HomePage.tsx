"use client";
import { useEffect, useState } from "react";
import { Component } from "../components/etheral-shadow";
import Floating, { FloatingElement } from "../components/ui/parallax-floating";
import Magnet from "../components/ui/Magnet";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import ProjectsReveal from "../components/ProjectsReveal";
import AboutReveal from "../components/AboutReveal";

type ScreenshotTransitionProps = {
  imageSrc: string;
  duration?: number;
  onComplete: () => void;
};

function ScreenshotTransition({
  imageSrc,
  duration = 1.8,
  onComplete,
}: ScreenshotTransitionProps) {
  useEffect(() => {
    const timeout = setTimeout(onComplete, duration * 1000);
    return () => clearTimeout(timeout);
  }, [duration, onComplete]);

  return (
    <div className="pointer-events-none absolute inset-0 z-40">
      <motion.img
        src={imageSrc}
        className="pointer-events-none w-full h-full object-cover"
        initial={{ y: "100%", opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration * 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/40" />

      <motion.div
        className="absolute inset-x-0 bottom-0 pb-16 px-8 md:px-16 lg:px-24 flex flex-col gap-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: duration * 0.3, duration: duration * 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

  const navigate = useNavigate();

  const handleCardClick = (path: string, withScreenshotTransition = false) => {
    if (withScreenshotTransition) {
      setTargetPath(path);
      setIsTransitioning(true);
      return;
    }

    navigate(path);
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
      <Component
  color="rgba(128,128,128,1)"
  animation={{
    scale: isMobile ? 40 : 100,
    speed: isMobile ? 40 : 90,
  }}
  noise={{
    opacity: isMobile ? 0.3 : 1,
    scale: 1.2,
  }}
  sizing="fill"
/>
      </div>

      {!isTransitioning && (
        <Floating
          sensitivity={1.5}
          easingFactor={0.08}
          className="absolute inset-0 z-0"
        >
          <FloatingElement
            depth={0.5}
            className="top-[65%] left-[10%] pointer-events-auto block md:hidden"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/japanese-art")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_8.png"
                className="w-32 h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={1.0}
            className="top-[12%] left-[55%] pointer-events-auto block md:hidden"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/yumetrack")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_3.png"
                className="w-38 h-60 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={1.0}
            className="top-[2%] left-[5%] pointer-events-auto block md:hidden"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/generative-art")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_9.png"
                className="w-36 h-79 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
      depth={0.9}
      className="top-[60%] left-[50%] pointer-events-auto block md:hidden"
    >
      <button
        type="button"
        onClick={() => handleCardClick("/projet/berserk")}
        className="block focus:outline-none"
      >
        <img
          src="/images/Screenshot_73.png"
          className="w-38 h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </button>
    </FloatingElement>

          <FloatingElement
            depth={0.5}
            className="top-[8%] left-[8%] pointer-events-auto hidden md:block"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/japanese-art")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_8.png"
                className="w-32 h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={1.0}
            className="top-[12%] left-[32%] pointer-events-auto hidden md:block"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/yumetrack")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_3.png"
                className="w-38 h-60 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={1.0}
            className="top-[6%] left-[62%] pointer-events-auto hidden md:block"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/generative-art")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_9.png"
                className="w-36 h-79 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={1.2}
            className="top-[60%] left-[10%] pointer-events-auto hidden md:block"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/generative-art")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_10.png"
                className="w-30 h-30 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={0.8}
            className="top-[66%] left-[46%] pointer-events-auto hidden md:block"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/generative-art")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_11.png"
                className="w-36 h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
            depth={1.0}
            className="top-[76%] left-[70%] pointer-events-auto hidden md:block"
          >
            <button
              type="button"
              onClick={() => handleCardClick("/projet/yumetrack")}
              className="block focus:outline-none"
            >
              <img
                src="/images/Screenshot_4.png"
                className="w-38 h-60 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </FloatingElement>

          <FloatingElement
  depth={1.1}
  className="top-[60%] left-[24%] pointer-events-auto hidden md:block"
>
  <button
    type="button"
    onClick={() => handleCardClick("/projet/berserk")}
    className="block focus:outline-none"
  >
    <img
      src="/images/Screenshot_73.png"
      className="w-38 h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    />
  </button>
</FloatingElement>
        </Floating>
      )}

      {!isTransitioning && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 mt-30">
          <div className="pointer-events-auto text-center">

            <Magnet padding={40} magnetStrength={5}>
              <div className="mt-12 flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="px-8 py-2 bg-white text-black rounded-full text-sm uppercase tracking-[0.2em] cursor-pointer"
                  onClick={() => setShowProjects(true)}
                >
                  View projects
                </button>

                <button
                  type="button"
                  className="px-8 py-2 border border-white/60 text-white rounded-full text-sm uppercase tracking-[0.2em] cursor-pointer hover:bg-white hover:text-black transition-colors"
                  onClick={() => setShowAbout(true)}
                >
                  About
                </button>
              </div>
            </Magnet>
          </div>
        </div>
      )}

      {isTransitioning && targetPath && (
        <ScreenshotTransition
          imageSrc="/images/Screenshot_17.png"
          onComplete={() => {
            setIsTransitioning(false);
            navigate(targetPath);
            setTargetPath(null);
          }}
        />
      )}

      <AnimatePresence>
        {showProjects && (
          <ProjectsReveal onClose={() => setShowProjects(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAbout && (
          <AboutReveal onClose={() => setShowAbout(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
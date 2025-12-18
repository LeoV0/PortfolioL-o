"use client";
import { useEffect, useState } from "react";
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react";
import { TextScramble } from "../components/ui/text-scramble";
import Floating, { FloatingElement } from "../components/ui/parallax-floating";
import Magnet from "../components/ui/Magnet";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

type ActiveEffect = "mesh" | "dots" | "combined";

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

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />

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

export default function BackgroundPaperShaders() {
  const [speed] = useState(1.0);
  const [activeEffect] = useState<ActiveEffect>("mesh");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);

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
      {activeEffect === "mesh" && (
        <MeshGradient
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          distortion={0.8}
          swirl={0.2}
          speed={speed}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        />
      )}

      {activeEffect === "dots" && (
        <DotOrbit
          colors={["#333333", "#1a1a1a", "#666666", "#ffffff"]}
          colorBack="#000000"
          stepsPerColor={3}
          size={1}
          spreading={1}
          speed={speed}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        />
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
            distortion={0.8}
            swirl={0.2}
            speed={speed * 0.4}
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
          />
          <DotOrbit
            colors={["#333333", "#1a1a1a", "#666666", "#ffffff"]}
            colorBack="rgba(0,0,0,0)"
            stepsPerColor={3}
            size={1}
            spreading={1}
            speed={speed * 1.2}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
              opacity: 0.7,
            }}
          />
        </>
      )}

      {!isTransitioning && (
        <Floating
          sensitivity={1.5}
          easingFactor={0.08}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <FloatingElement
            depth={0.5}
            className="top-[8%] left-[8%] pointer-events-auto"
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
            className="top-[12%] left-[32%] pointer-events-auto"
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
            className="top-[6%] left-[62%] pointer-events-auto"
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
            className="top-[60%] left-[10%] pointer-events-auto"
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
            className="top-[66%] left-[46%] pointer-events-auto"
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
            className="top-[76%] left-[70%] pointer-events-auto"
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
        </Floating>
      )}

      {!isTransitioning && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <div className="pointer-events-auto text-center">
            <h1 className="text-white italic font-thin text-6xl md:text-7xl tracking-wide works-script">
              WORKS
            </h1>
            <Magnet padding={40} magnetStrength={5}>
              <button type="button" className="mt-6 px-8 py-2 bg-white text-black rounded-full text-sm uppercase tracking-[0.2em] cursor-pointer" onClick={() => handleCardClick("/projet/yumetrack")}>
                View projects
              </button>
            </Magnet>
          </div>
        </div>
      )}

      {!isTransitioning && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 left-6 pointer-events-auto">
            <TextScramble text="「 Léo—Gousset 」" />
          </div>

          <div className="absolute top-6 right-6 pointer-events-auto text-right">
            <TextScramble text="「 Nantes—France 」" />
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: `${3 / speed}s` }}
            />
            <div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/30 rounded-full blur-xl animate-pulse"
              style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
            />
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
    </div>
  );
}

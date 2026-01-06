import { motion } from "motion/react";
import { TextScramble } from "./ui/text-scramble";
import { LocationTag } from "../components/location-tag";


type AboutRevealProps = {
  onClose: () => void;
};

export default function AboutReveal({ onClose }: AboutRevealProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs  tracking-[0.25em] text-white/70 z-10">
        <button
          onClick={onClose}
          className="hover:text-white transition-colors cursor-pointer"
        >
          <TextScramble 
    text="← Back" 
  />
        </button>
        <TextScramble 
    text="「 About 」" 
  />
      </header>

      <div className="max-w-3xl px-6 text-white/80 space-y-6">
      <LocationTag city="Nantes" country="FRANCE" timezone="Europe/Paris" />

        <h1 className="text-3xl md:text-4xl font-light">
          Léo Gousset — Front-end & Creative developer
        </h1>

        <p className="text-sm md:text-base leading-relaxed">
        Passionate about React, creative web experiences and the visual universe inspired by Japanese art, I design interfaces where animation and typography play a central role.
        </p>

        <p className="text-sm md:text-base leading-relaxed">
        I enjoy exploring the Canvas API, shaders, and micro-interactions to create immersive projects, while keeping the code clean, structured, and easy to maintain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-white/60 pt-4 border-t border-white/20">
          <div className="space-y-1">
          <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Role" />
</p>
            <p>Front-end developer, UI design</p>
          </div>
          <div className="space-y-1">
          <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Stack" />
</p>
            <p>React, TypeScript, Canvas API, Motion</p>
          </div>
          <div className="space-y-1">
          <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Links" />
</p>
            <div className="flex gap-4 text-[0.7rem] tracking-[0.2em] uppercase">
              <a
                href="https://github.com/LeoV0"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/l%C3%A9o-gousset/"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

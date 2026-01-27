import { motion } from "motion/react";
import { TextScramble } from "./ui/text-scramble";

const KATAKANA_CHARS =
  "アイウエオカキクケコサシスセソタチツテト";

export function IntroScreen() {


  return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#f9f5f0] text-neutral-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative flex flex-col items-center gap-3 text-center px-6">
          <motion.p
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-neutral-500"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            日本 — INTERFACES CALMES & PRÉCISES
          </motion.p>

          <motion.p
            className="text-[11px] md:text-sm tracking-[0.28em] uppercase text-neutral-400"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            FRONT-END DEVELOPER — 日本
          </motion.p>
        </div>

        <div className="absolute bottom-10 left-6 md:left-10">
          <TextScramble
            as="h1"
            duration={1.2}
            speed={0.045}
            characterSet={KATAKANA_CHARS}
            className="text-5xl md:text-7xl font-light tracking-[0.24em] uppercase text-neutral-700"
          >
            LEO ー PORTFOLIO
          </TextScramble>
        </div>
      </motion.div>
  );
}

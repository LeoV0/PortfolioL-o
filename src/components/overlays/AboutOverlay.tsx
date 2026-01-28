import { useEffect, useState } from "react"
import { SimpleTree } from "../simple-growth-tree"
import { portfolioEvents } from "../../lib/analytics"

export function AboutOverlay({ onClose }: { onClose: () => void }) {
  const [showText, setShowText] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setShowText(false)
    portfolioEvents.closeAboutOverlay();
    setTimeout(onClose, 500) 
  }

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 1000)
    return () => clearTimeout(t)
  }, []);

  useEffect(() => {
    if (!isClosing) portfolioEvents.openAboutOverlay();
  }, [isClosing]);

  return (
    <div
      className={`fixed inset-0 z-[999] bg-[#f9f5f0] flex items-center justify-center overflow-hidden
        transition-opacity duration-500 ${isClosing ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className={`absolute inset-0 transition-all duration-500
          ${isClosing ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        <SimpleTree />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`max-w-xl text-center transition-all duration-400
            ${showText && !isClosing ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}`}
        >
          <div className="max-w-2xl mx-auto text-center text-neutral-900">
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.25em] mb-3">
              LÉO — GOUSSET
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-neutral-900 mb-10">
              Front-end & Creative Developer
            </p>

            <p className="text-sm leading-loose text-neutral-700 mb-6">
              Passionate about React, creative web experiences and visual universes inspired by
              Japanese art, I design interfaces where animation and typography play a central role.
            </p>

            <p className="text-sm leading-loose text-neutral-700 mb-12">
              I enjoy exploring the Canvas API, shaders, and micro-interactions to create immersive
              projects, while keeping the code clean, structured, and easy to maintain.
            </p>

            <div className="space-y-2 text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">
              <p>Front-end Developer · UI Design</p>
              <p>React · TypeScript · Motion</p>
            </div>

            <div className="flex justify-center gap-10 text-xs tracking-widest">
              <a
                href="https://github.com/LeoV0"
                target="_blank"
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/l%C3%A9o-gousset/"
                target="_blank"
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleClose}
        className="
          absolute top-6 right-6
          w-8 h-8
          flex items-center justify-center
          text-black/60
          hover:text-black
          transition
          cursor-pointer
        "
        aria-label="Close"
      >
        <span className="block w-4 h-px bg-current rotate-45 absolute" />
        <span className="block w-4 h-px bg-current -rotate-45 absolute" />
      </button>
    </div>
  )
}

import { PageLayout } from "../components/PageLayout";
import { pageMotion } from "../motion/pageMotion";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function ProjetBerserk() {

  const navigate = useNavigate();

  const goToNextProject = () => {
    navigate("/projet/yumetrack");
  };

  return (
    <PageLayout title="ベルセルク" subtitle="BERUSERUKU — BERSERK">

      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 text-xl tracking-[0.3em] text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        ←
      </Link>

      <div className="max-w-4xl mx-auto space-y-32 pb-32">
        
        <motion.div 
          className="text-center space-y-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageMotion.heroFade}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-tight">
            A web experience<br />
            inspired by darkness
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            Translating the raw atmosphere of Berserk 1997 into an immersive digital journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-neutral-200 -mt-18">
          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Timeline
            </span>
            <p className="text-neutral-700">2 weeks · Solo project · 2026</p>
          </div>
          
          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Highlights
            </span>
            <ul className="text-neutral-700 space-y-1">
              <li>Custom WebGL shaders</li>
              <li>3D scroll animations</li>
              <li>Cinematic typography</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Links
            </span>
            <div className="space-y-2">
              <a 
                href="https://berserk-1997.vercel.app/" 
                target="_blank"
                rel="noreferrer"
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                Visit website ↗
              </a>
              <a 
                href="https://github.com/LeoV0/Berserk" 
                target="_blank"
                rel="noreferrer"
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                View code ↗
              </a>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:-mx-24 h-[70vh]">
          <img
            src="/images/BerserkHero.png"
            alt="Dark atmosphere"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              01 — Context
            </span>
            <p className="text-neutral-700 leading-loose">
              Berserk's 1997 anime is known for its oppressive atmosphere and tragic narrative. 
              I wanted to capture that essence through careful use of typography, dark imagery, 
              and motion that feels heavy yet deliberate.
            </p>
          </div>
          
          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              02 — Vision
            </span>
            <p className="text-neutral-700 leading-loose">
              Each scroll becomes a descent into the Golden Age arc. Slow parallax, 
              cinematic transitions, and 3D elements work together to create tension 
              and release just like the story itself.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
            03 — Demo
          </span>
          <div className="aspect-video bg-neutral-200">
          <video
  src="/videos/BerserkSite.mp4"
  className="w-full h-full object-cover"
  muted
  loop
  playsInline
  controls
  preload="none"
/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="/images/Behelit.png"
            alt="Design detail"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="space-y-6 flex flex-col justify-center">
            <img
              src="/images/Griffith.png"
              alt="Design detail"
              loading="lazy"
              className="w-full aspect-square object-cover"
            />
            <div className="space-y-3">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
                Technical Stack
              </span>
              <p className="text-sm text-neutral-600">
                React · Three.js · Framer Motion · GLSL Shaders
              </p>
            </div>
          </div>
        </div>

        <blockquote className="border-l-2 border-neutral-300 pl-8 py-4">
          <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed italic">
            "Every element was designed to slow down the user, 
            making them feel the weight of the narrative."
          </p>
        </blockquote>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
            04 — In Motion
          </span>
          <div className="aspect-video bg-neutral-200">
            <img
              src="/images/Brigade.png"
              alt="Project demo"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

 <div
        className="flex items-center justify-center cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors mt-16"
        onClick={goToNextProject}
      >
        Next Project →
      </div>
      </div>
    </PageLayout>
  );
}
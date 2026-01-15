import { motion } from "motion/react";
import { Link  } from "react-router-dom";
import { useEffect } from "react";
import InfiniteGallery from "../components/3d-gallery-photography";
import { TextScramble } from "../components/ui/text-scramble";

export default function ProjetBerserk() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }, []);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col">
      <motion.div
    className="fixed inset-0 bg-black z-9999 pointer-events-none"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  />
        <section className="relative h-screen overflow-hidden">
          <motion.img
          key="generative-art"
            src="/images/Screenshot_75.png"
            className="w-full h-full object-cover"
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/40" />

          <header className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs  tracking-[0.25em] text-white/70 z-10">
  <Link to="/" className="hover:text-white transition-colors">
  <TextScramble 
    text="← Back" 
  />
    
  </Link>

  <TextScramble 
    text="「 Berserk — 1997 」" 
    className="text-white/70 hover:text-white transition-colors"
  />
</header>

          <motion.div
  className="absolute inset-x-0 bottom-0 pb-16 px-8 md:px-16 lg:px-24 flex flex-col gap-3 z-10"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
  <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
    「 Project — Berserk 1997 」
  </p>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-light max-w-xl">
  Immersive website based on the atmosphere of the 1997 anime Berserk.
  </h1>
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-white/20">
    <p className=" text-white/80 text-xl md:text-2xl lg:text-3xl font-light max-w-xl mt-1">Made by Léo</p>
   

  </div>
</motion.div>

        </section>

        <section className="bg-black px-6 md:px-16 lg:px-24 py-16 space-y-10">
          <div className="max-w-3xl space-y-4 text-sm md:text-base text-white/70 leading-relaxed">
          <p>
  This project is an interactive tribute to the 1997 adaptation of Berserk,
  built to translate its heavy atmosphere, fatalism and fragile moments of calm
  into a web experience. Each section is composed like a storyboarded sequence:
  hero shots, slow camera moves and carefully timed transitions guide the user
  through the Golden Age arc.
</p>
<p>
  I combined React, Framer Motion and React Three Fiber to bring iconic symbols
  of the series to life in 3D: the Behelit rising and falling with scroll,
  Griffith’s bust slowly rotating in the dark, and the Brand of Sacrifice glowing
  within a custom WebGL fog shader. The page is structured like an editorial
  layout, with strong typographic hierarchy and cinematic spacing, so that the
  text, images and real‑time 3D all work together to tell one continuous story.
</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs md:text-sm text-white/60">
  <div className="space-y-1">
    <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
      <TextScramble text="Role" />
    </p>
    <p>Developer front-end, UI design, 3D integration</p>
  </div>

  <div className="space-y-1">
    <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
      <TextScramble text="Duration" />
    </p>
    <p>2 weeks</p>
  </div>

  <div className="space-y-1">
    <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
      <TextScramble text="Year" />
    </p>
    <p>2026</p>
  </div>

  <div className="space-y-1">
    <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
      <TextScramble text="Stack" />
    </p>
    <p>React, TypeScript, Framer Motion, React Three Fiber, Drei, WebGL shader</p>
  </div>

  <div className="space-y-2">
    <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
      <TextScramble text="Links" />
    </p>
    <div className="flex flex-row items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase">
      <a
        href="https://berserk-1997.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        Live website
      </a>
      <a
        href="https://github.com/LeoV0/Berserk"
        target="_blank"
        rel="noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        GitHub repo
      </a>
    </div>
  </div>
</div>
        </section>

        <section className="bg-black">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
            <h2 className="text-sm md:text-base uppercase tracking-[0.25em] text-white/60 text-center pb-12">
              「 Démo 」
            </h2>
            </div>
          <video
            src="/videos/BerserkSite.mp4"
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </section>

        

        <section className="bg-black px-6 md:px-16 lg:px-24 py-24">
  <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
    <h2 className="text-sm md:text-base uppercase tracking-[0.25em] text-white/60 text-center">
      「 Flying posters — generative snapshots 」
    </h2>
    <InfiniteGallery
      className="w-full h-[520px] md:h-[620px] lg:h-[720px]"
      images={[
        "/images/Screenshot_72.png",
        "/images/Screenshot_73.png",
        "/images/Screenshot_76.png",
        "/images/Screenshot_77.png",
        "/images/Screenshot_78.png",
        "/images/Screenshot_79.png",
      ]}
      visibleCount={8}
      speed={1}
    />
  </div>
</section>

        <section className="bg-black">
          <Link
            to="/projet/generative-art"
            className="group relative block w-full h-[80vh] md:h-screen overflow-hidden"
          >
            <img
              src="/images/Screenshot_18.png"
              alt="Japanese Art project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
                「 Next — Generative Art 」
              </p>
              <p className="text-sm md:text-base text-white/80 max-w-xl">
              Discover the Generative Art project.
              </p>
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors">
              View the project →
              </span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

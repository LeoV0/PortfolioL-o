import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import InfiniteGallery from "../components/3d-gallery-photography";
export default function ProjetJapaneseArt() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col">
      <motion.div
    className="fixed inset-0 bg-black z-[9999] pointer-events-none"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  />
        <section className="relative h-screen overflow-hidden">
          <motion.img
          key="japanese-art"
            src="/images/Screenshot_17.png"
            className="w-full h-full object-cover"
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

          <header className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/70 z-10">
            <Link to="/" className="hover:text-white transition-colors">
              ← Back
            </Link>
            <span>「 Japanese—Art 」</span>
          </header>

          <motion.div
            className="absolute inset-x-0 bottom-0 pb-16 px-8 md:px-16 lg:px-24 flex flex-col gap-3 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
              「 Project — Japanese Art 」
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light max-w-xl">
              Japanese visual narratives for the web.
            </h1>
          </motion.div>
        </section>

        <section className="bg-black px-6 md:px-16 lg:px-24 py-16 space-y-10">
          <div className="max-w-3xl space-y-4 text-sm md:text-base text-white/70 leading-relaxed">
          <p>
          This second exploration of the Canvas API takes the editorial universe inspired by Japanese prints a step further by adding a layer of digital effects: Japanese symbols, visual glitches and an atmosphere reminiscent of film credits or a Matrix-style terminal.
The layout is still based on a technical grid in the background, like a plan or storyboard for the interface. The layout remains built on a
  technical grid in the background, like a blueprint or
  storyboard for the interface.
</p>
<p>
The Canvas API is used to animate the main image with distortion effects
  and falling symbols, while a sakura cursor reacts to clicks to enhance the interactive dimension.
  This project allowed me to This project allowed me to
  continue learning Canvas (rendering management, animations, text effects)
  while working on a consistent artistic direction based on Japanese quotations
  and a strong visual universe.
</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs md:text-sm text-white/60">
            <div className="space-y-1">
              <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
                Role
              </p>
              <p>Développer, UI design, animation</p>
            </div>
            <div className="space-y-1">
              <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
                Duration
              </p>
              <p>1 month</p>
            </div>
            <div className="space-y-1">
              <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
                Year
              </p>
              <p>2025</p>
            </div>
            <div className="space-y-1">
              <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
                Stack
              </p>
              <p>React JSX, Canvas API</p>
            </div>
            <div className="space-y-2">
              <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
                Link
              </p>
              <div className="flex flex-row items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase">
                <a
                  href="https://japanese-art.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Live website
                </a>
                <a
                  href="https://github.com/LeoV0/Japanese-Art"
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
            src="/videos/2025-12-18 15-14-23.mp4"
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
        "/images/Screenshot_8.png",
        "/images/Screenshot_33.png",
        "/images/Screenshot_45.png",
        "/images/Screenshot_46.png",
      ]}
      visibleCount={8}
      speed={1}
    />
  </div>
</section>

        <section className="bg-black">
          <Link
            to="/projet/yumetrack"
            className="group relative block w-full h-[80vh] md:h-screen overflow-hidden"
          >
            <img
              src="/images/Screenshot_19.png"
              alt="YumeTrack project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
                「 Next — YumeTrack 」
              </p>
              <p className="text-sm md:text-base text-white/80 max-w-xl">
              Discover the YumeTrack project.
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

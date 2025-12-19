import { motion } from "motion/react";
import { Link  } from "react-router-dom";
import { useEffect } from "react";
import InfiniteGallery from "../components/3d-gallery-photography";
import { TextScramble } from "../components/ui/text-scramble";

export default function ProjetGenerativeArt() {

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
            src="/images/Screenshot_18.png"
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
    text="「 Generative—Art 」" 
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
    「 Project — Generative Art 」
  </p>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-light max-w-xl">
    Generative visuals driven by code and randomness.
  </h1>
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-white/20">
    <p className=" text-white/80 text-xl md:text-2xl lg:text-3xl font-light max-w-xl mt-1">Made by Léo</p>
   

  </div>
</motion.div>

        </section>

        <section className="bg-black px-6 md:px-16 lg:px-24 py-16 space-y-10">
          <div className="max-w-3xl space-y-4 text-sm md:text-base text-white/70 leading-relaxed">
          <p>
          This project was born out of a desire to explore the Canvas API as a medium for visual expression,
 using code to compose a piece of generative art.
The interface is inspired by architectural plans and graph paper, with
a layout designed like a digital poster where each element is placed
in a highly controlled manner.
</p>
<p>
I used the Canvas API to create an animated background (moving blue squares,
  variations in the centre of the scene), which allowed me to experiment with the 
  properties of Canvas while building a lively atmosphere. The React page 
  is designed like an editorial poster: large hero visuals, calm typography 
  and smooth animations that enhance the reading experience.
</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs md:text-sm text-white/60">
            <div className="space-y-1">
            <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Role" />
</p>
              <p>Développer, UI design, animation</p>
            </div>
            <div className="space-y-1">
            <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Duration" />
</p>
              <p>1 month</p>
            </div>
            <div className="space-y-1">
            <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Year" />
</p>
              <p>2025</p>
            </div>
            <div className="space-y-1">
            <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Stack" />
</p>
              <p>React JSX, Canvas API</p>
            </div>
            <div className="space-y-2">
            <p className="uppercase tracking-[0.2em] text-[0.7rem] text-white/40">
  <TextScramble text="Links" />
</p>
              <div className="flex flex-row items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase">
                <a
                  href="https://generative-art-landing-page.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Live website
                </a>
                <a
                  href="https://github.com/LeoV0/Generative-Art"
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
            src="/videos/2025-12-18 14-35-57.mp4"
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
        "/images/Screenshot_11.png",
        "/images/Screenshot_31.png",
        "/images/Screenshot_32.png",
        "/images/Screenshot_40.png",
        "/images/Screenshot_41.png",
        "/images/Screenshot_42.png",
      ]}
      visibleCount={8}
      speed={1}
    />
  </div>
</section>

        <section className="bg-black">
          <Link
            to="/projet/japanese-art"
            className="group relative block w-full h-[80vh] md:h-screen overflow-hidden"
          >
            <img
              src="/images/Screenshot_17.png"
              alt="Japanese Art project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
                「 Next — Japanese Art 」
              </p>
              <p className="text-sm md:text-base text-white/80 max-w-xl">
              Discover the Japanese Art project.
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

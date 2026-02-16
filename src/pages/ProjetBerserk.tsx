import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { OptimizedImage } from "../components/OptimizedImage";
import { PageLayout } from "../components/PageLayout";
import { SEO, seoConfig } from "../components/SEO";
import { portfolioEvents } from "../lib/analytics";
import { pageMotion } from "../motion/pageMotion";

export default function ProjetBerserk() {
  const navigate = useNavigate();

  const goToNextProject = () => {
    navigate("/projet/yumetrack");
  };

  return (
    <PageLayout title="ベルセルク" subtitle="BERUSERUKU — BERSERK">
      <SEO {...seoConfig.berserk} />
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex gap-8 text-xs tracking-[0.25em] text-black"
        aria-label="Retour à l'accueil"
      >
        Back
      </Link>

      <div className="max-w-4xl mx-auto space-y-32 pb-32">
        <motion.div
          className="text-center space-y-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageMotion.heroFade}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-tight">
            A web experience
            <br />
            inspired by darkness
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            Translating the raw atmosphere of Berserk 1997 into an immersive
            digital journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-neutral-200 -mt-18">
          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Timeline
            </span>
            <p className="text-neutral-700">2 weeks · Solo project · 2026</p>
          </div>

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Highlights
            </span>
            <ul className="text-neutral-700 space-y-1">
              <li>Custom WebGL shaders</li>
              <li>3D scroll animations</li>
              <li>Cinematic typography</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Links
            </span>
            <div className="space-y-2">
              <a
                href="https://berserk-1997.vercel.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  portfolioEvents.clickExternalLink(
                    "Berserk Website",
                    "https://berserk-1997.vercel.app/",
                  )
                }
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                Visit website ↗
              </a>
              <a
                href="https://github.com/LeoV0/Berserk"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  portfolioEvents.clickExternalLink(
                    "Berserk GitHub",
                    "https://github.com/LeoV0/Berserk",
                  )
                }
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                View code ↗
              </a>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
          <OptimizedImage
            src="/images/BerserkHero.png"
            webpSrc="/images/BerserkHero.webp"
            alt="Berserk project preview"
            aspectRatio="16/9"
            loading="eager"
            className="h-[70vh] w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              01 — Context
            </span>
            <p className="text-neutral-700 leading-loose">
              Berserk's 1997 anime is known for its oppressive atmosphere and
              tragic narrative. I wanted to capture that essence through careful
              use of typography, dark imagery, and motion that feels heavy yet
              deliberate.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              02 — Vision
            </span>
            <p className="text-neutral-700 leading-loose">
              Each scroll becomes a descent into the Golden Age arc. Slow
              parallax, cinematic transitions, and 3D elements work together to
              create tension and release just like the story itself.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
            03 — Demo
          </span>
          <div className="aspect-video bg-neutral-200">
            <video
              src="/videos/BerserkSite.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => portfolioEvents.playVideo("Demo Berserk")}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <OptimizedImage
            src="/images/Behelit.png"
            webpSrc="/images/Behelit.webp"
            alt="Behelit"
            aspectRatio="4/5"
            loading="lazy"
          />
          <div className="space-y-6 flex flex-col justify-center">
            <OptimizedImage
              src="/images/Griffith.png"
              webpSrc="/images/Griffith.webp"
              alt="Griffith"
              aspectRatio="1/1"
              loading="lazy"
            />
            <div className="space-y-3">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
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
            "Every element was designed to slow down the user, making them feel
            the weight of the narrative."
          </p>
        </blockquote>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
            04 — In Motion
          </span>
          <div className="aspect-video bg-neutral-200">
            <OptimizedImage
              src="/images/Brigade.png"
              webpSrc="/images/Brigade.webp"
              alt="Brigade du Faucon Blanc"
              aspectRatio="16/9"
              loading="lazy"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-center cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors mt-16"
          onClick={() => {
            portfolioEvents.viewProject("YumeTrack");
            goToNextProject();
          }}
        >
          Next Project →
        </div>
      </div>
    </PageLayout>
  );
}

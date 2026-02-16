import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { OptimizedImage } from "../components/OptimizedImage";
import { PageLayout } from "../components/PageLayout";
import { SEO, seoConfig } from "../components/SEO";
import { portfolioEvents } from "../lib/analytics";
import { pageMotion } from "../motion/pageMotion";

export default function ProjetJapaneseArt() {
  const navigate = useNavigate();

  const goToNextProject = () => {
    navigate("/projet/generative-art");
  };

  return (
    <PageLayout title="日本美術" subtitle="NIHON BIJUTSU — JAPANESE ART">
      <SEO {...seoConfig.japaneseArt} />

      <Link
        to="/"
        className="fixed top-6 left-6 z-50 text-xl tracking-[0.3em] text-neutral-500 hover:text-neutral-900 transition-colors"
        aria-label="Retour à l'accueil"
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
            Japanese visual narratives
            <br />
            for the web
          </h2>

          <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            A digital exploration inspired by Japanese prints, symbols and
            cinematic atmospheres.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-neutral-200 -mt-18">
          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Timeline
            </span>
            <p className="text-neutral-700">1 month · Solo project · 2025</p>
          </div>

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Highlights
            </span>
            <ul className="text-neutral-700 space-y-1">
              <li>Canvas API distortions</li>
              <li>Animated symbols & glitches</li>
              <li>Editorial visual direction</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Links
            </span>
            <div className="space-y-2">
              <a
                href="https://japanese-art.vercel.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  portfolioEvents.clickExternalLink(
                    "Japanese Art Website",
                    "https://japanese-art.vercel.app/",
                  )
                }
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                Visit website ↗
              </a>
              <a
                href="https://github.com/LeoV0/Japanese-Art"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  portfolioEvents.clickExternalLink(
                    "Japanese Art Github",
                    "https://github.com/LeoV0/Japanese-Art",
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
            src="/images/JapaneseHero.png"
            webpSrc="/images/JapaneseHero.webp"
            alt="Japanese Art Hero"
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
              This project expands an editorial universe inspired by Japanese
              prints by adding digital effects such as animated symbols,
              glitches and cinematic transitions. The layout is structured
              around a technical grid, similar to a blueprint or storyboard.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              02 — Approach
            </span>
            <p className="text-neutral-700 leading-loose">
              The Canvas API animates the main visual with distortion effects
              and falling symbols, while interactive elements like a sakura
              cursor reinforce the immersive experience.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
            03 — Demo
          </span>
          <div className="aspect-video bg-neutral-200">
            <video
              src="/videos/JapaneseArt.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => portfolioEvents.playVideo("Demo JapaneseArt")}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <OptimizedImage
            src="/images/Screenshot_112.png"
            webpSrc="/images/Screenshot_112.webp"
            alt="Design detail"
            aspectRatio="4/5"
            loading="lazy"
          />
          <div className="space-y-6 flex flex-col justify-center">
            <OptimizedImage
              src="/images/Screenshot_111.png"
              webpSrc="/images/Screenshot_111.webp"
              alt="Design detail"
              aspectRatio="1/1"
              loading="lazy"
            />
            <div className="space-y-3">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
                Technical Stack
              </span>
              <p className="text-sm text-neutral-600">
                React · Canvas API · Generative Algorithms
              </p>
            </div>
          </div>
        </div>

        <blockquote className="border-l-2 border-neutral-300 pl-8 py-4">
          <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed italic">
            “Between tradition and code, visuals become a living language.”
          </p>
        </blockquote>
        <div
          className="flex items-center justify-center cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors mt-16"
          onClick={() => {
            portfolioEvents.viewProject("GenerativeArt");
            goToNextProject();
          }}
        >
          Next Project →
        </div>
      </div>
    </PageLayout>
  );
}

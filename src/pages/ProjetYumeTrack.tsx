import { PageLayout } from "../components/PageLayout";
import { pageMotion } from "../motion/pageMotion";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { OptimizedImage } from "../components/OptimizedImage";
import { SEO, seoConfig } from "../components/SEO";
import { portfolioEvents } from "../lib/analytics";



export default function ProjetGenerativeArt() {

  const navigate = useNavigate();

  const goToNextProject = () => {
    navigate("/projet/japanese-art");
  };
  
  return (
    <PageLayout title="夢トラック" subtitle="Yume Torakku — YUMETRACK">
<SEO {...seoConfig.yumetrack} />

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
            Track your anime
            <br />
            episode by episode
          </h2>

          <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            A modern web application designed to manage anime progress,
            favourites and discovery in a clean dashboard interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-neutral-200 -mt-18">

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Timeline
            </span>
            <p className="text-neutral-700">2 months · Solo project · 2025</p>
          </div>

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Highlights
            </span>
            <ul className="text-neutral-700 space-y-1">
              <li>Authentication & user accounts</li>
              <li>Anime tracking & status management</li>
              <li>Dashboard-inspired UI</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              Links
            </span>
            <div className="space-y-2">
              <a
                href="https://yumetrack.netlify.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() => portfolioEvents.clickExternalLink('YumeTrack Website', 'https://yumetrack.netlify.app/')}
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                Visit website ↗
              </a>
              <a
                href="https://github.com/LeoV0/AnimeStats"
                target="_blank"
                rel="noreferrer"
                onClick={() => portfolioEvents.clickExternalLink('YumeTrack Github', 'https://github.com/LeoV0/AnimeStats')}
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                View code ↗
              </a>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:-mx-24 h-[70vh]">
          
          <OptimizedImage
  src="/images/YumeTrackHero.png"
  webpSrc="/images/YumeTrackHero.webp"
  alt="YumeTrack hero"
  className="w-full h-full object-cover"
  loading="lazy"
/>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              01 — Context
            </span>
            <p className="text-neutral-700 leading-loose">
              YumeTrack is a web application built to track anime series
              episode by episode. Users can create an account, manage
              their library and organise content similarly to existing
              anime tracking platforms.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
              02 — Approach
            </span>
            <p className="text-neutral-700 leading-loose">
              The project focuses on clarity and usability, with multiple
              views for ongoing series, completed shows, favourites and
              discovery. The UI is inspired by modern dashboards while
              handling authentication, status logic and data presentation.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
            03 — Demo
          </span>
          <div className="aspect-video bg-neutral-200">
          <video
  src="/videos/YumeTrack.mp4"
  className="w-full h-full object-cover"
  muted
  loop
  playsInline
  controls
  preload="none"
  onPlay={() => portfolioEvents.playVideo('Demo YumeTrack')}
/>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          
          <OptimizedImage
  src="/images/Screenshot_3.png"
  webpSrc="/images/Screenshot_3.webp"
  alt="Design detail"
  className="w-full aspect-[4/5] object-cover"

  loading="lazy"
/>
          <div className="space-y-6 flex flex-col justify-center">
            
            <OptimizedImage
  src="/images/Screenshot_114.png"
  webpSrc="/images/Screenshot_114.webp"
  alt="Design detail"
  className="w-full aspect-square object-cover"

  loading="lazy"
/>
            <div className="space-y-3">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
                Technical Stack
              </span>
              <p className="text-sm text-neutral-600">
                React · NestJS · NeonDB
              </p>
            </div>
          </div>
        </div>
      

        <blockquote className="border-l-2 border-neutral-300 pl-8 py-4">
          <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed italic">
            “A personal dashboard to keep track of fictional journeys.”
          </p>
        </blockquote>



        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">
            04 — In Motion
          </span>
          <div className="aspect-video bg-neutral-200">
            
            <OptimizedImage
  src="/images/YumeTrackMotion.png"
  webpSrc="/images/YumeTrackMotion.webp"
  alt="Project motion"
  className="w-full h-full object-cover"
  loading="lazy"
/>
          </div>
        </div>


        <div
        className="flex items-center justify-center cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors mt-16"
        onClick={() => {
          portfolioEvents.viewProject('JapaneseArt');
          goToNextProject();
        }}
      >
        Next Project →
      </div>
      </div>
    </PageLayout>
  );
}
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
    navigate("/projet/berserk");
  };

  return (
    <PageLayout title="生成アート" subtitle="SEISEI ĀTO — GENERATIVE ART">
<SEO {...seoConfig.generativeArt} />


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
            Generative visuals<br />
            driven by code
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
            Exploring the Canvas API as a medium for visual expression using randomness and algorithms
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
              <li>Canvas API animations</li>
              <li>Generative algorithms</li>
              <li>Editorial poster design</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              Links
            </span>
            <div className="space-y-2">
              <a 
                href="https://generative-art-landing-page.vercel.app/" 
                target="_blank"
                rel="noreferrer"
                onClick={() => portfolioEvents.clickExternalLink('Generative Art Website', 'https://generative-art-landing-page.vercel.app/')}
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                Visit website ↗
              </a>
              <a 
                href="https://github.com/LeoV0/Generative-Art" 
                target="_blank"
                rel="noreferrer"
                onClick={() => portfolioEvents.clickExternalLink('Generative Art GitHub', 'https://github.com/LeoV0/Generative-Art')}
                className="block text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                View code ↗
              </a>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
          

<OptimizedImage
  src="/images/GenerativeHero.png"
  webpSrc="/images/GenerativeHero.webp"
  alt="Generative Art Hero"
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
              This project was born out of a desire to explore the Canvas API as a medium for visual expression,
              using code to compose a piece of generative art. The interface is inspired by architectural plans 
              and graph paper, with a layout designed like a digital poster.
            </p>
          </div>
          
          <div className="space-y-4">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
              02 — Approach
            </span>
            <p className="text-neutral-700 leading-loose">
              I used the Canvas API to create animated backgrounds with moving blue squares and variations 
              in the center of the scene. The React page is designed like an editorial poster with large 
              hero visuals, calm typography and smooth animations.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-600">
            03 — Demo
          </span>
          <div className="aspect-video bg-neutral-200">
          <video
  src="/videos/GenerativeArt.mp4"
  className="w-full h-full object-cover"
  muted
  loop
  playsInline
  controls
  preload="none"
  onPlay={() => portfolioEvents.playVideo('Demo GenerativeArt')}
/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          <OptimizedImage
  src="/images/Screenshot_110.png"
  webpSrc="/images/Screenshot_110.webp"
  alt="Generative Art Shoot"
  aspectRatio="4/5"
  loading="lazy"
/>
          <div className="space-y-6 flex flex-col justify-center">
            
            <OptimizedImage
  src="/images/Screenshot_109.png"
  webpSrc="/images/Screenshot_109.webp"
  alt="Generative Art Screenshot"
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
            "Code becomes a brush, randomness becomes intention, 
            and the canvas becomes infinite possibility."
          </p>
        </blockquote>
 <div
        className="flex items-center justify-center cursor-pointer text-neutral-700 hover:text-neutral-900 transition-colors mt-16"
        onClick={() => {
          portfolioEvents.viewProject('Berserk');
          goToNextProject();
        }}
      >
        Next Project →
      </div>
      </div>
    </PageLayout>
  );
}
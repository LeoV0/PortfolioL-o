import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

export function SEO({ 
  title, 
  description, 
  image = "/og-image.png",
  url,
  type = "website",
  keywords = "développeur front-end, web developer, React, TypeScript, portfolio, Léo"
}: SEOProps) {
  const fullTitle = `${title} | Léo - Front-End Developer`;
  const currentUrl = url || window.location.href;
  const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Léo" />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Léo - Portfolio" />
      <meta property="og:locale" content="fr_FR" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      <html lang="fr" />
    </Helmet>
  );
}

export const seoConfig = {
  home: {
    title: "Accueil",
    description: "Portfolio de Léo, développeur front-end spécialisé en React, TypeScript et animations web. Découvrez mes projets créatifs et interfaces élégantes.",
    keywords: "portfolio développeur, React developer, TypeScript, front-end developer, web animations, design japonais",
  },
  
  berserk: {
    title: "Berserk - Web Experience",
    description: "Une expérience web immersive inspirée de l'anime Berserk 1997. WebGL shaders, animations 3D et typographie cinématique.",
    keywords: "WebGL, Three.js, React, animations 3D, web experience, berserk",
    image: "/images/BerserkHero.png",
  },
  
  yumetrack: {
    title: "YumeTrack - Dream Tracker",
    description: "Application de suivi d'animés avec interface minimaliste. Explorez vos animés avec des visualisations élégantes.",
    keywords: "dream tracker, React app, data visualization, journal application",
    image: "/images/YumeTrackHero.png",
  },
  
  japaneseArt: {
    title: "Japanese Art - Gallery",
    description: "Galerie d'art japonais interactive avec animations fluides et design épuré.",
    keywords: "art japonais, galerie web, design minimaliste, Japanese aesthetics",
    image: "/images/JapaneseHero.png",
  },
  
  generativeArt: {
    title: "Generative Art - Canvas Experiments",
    description: "Expérimentations d'art génératif avec Canvas et algorithmes procéduraux.",
    keywords: "generative art, canvas, algorithmes, art procédural, creative coding",
    image: "/images/GenerativeHero.png",
  },
};
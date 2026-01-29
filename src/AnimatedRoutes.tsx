import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjetGenerativeArt = lazy(() => import("./pages/ProjetGenerativeArt"));
const ProjetJapaneseArt = lazy(() => import("./pages/ProjetJapaneseArt"));
const ProjetYumeTrack = lazy(() => import("./pages/ProjetYumeTrack"));
const ProjetBerserk = lazy(() => import("./pages/ProjetBerserk"));

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="min-h-screen bg-[#f9f5f0] flex items-center justify-center">
          <div className="text-sm tracking-[0.3em] uppercase text-neutral-600">
            読み込み中... — Chargement...
          </div>
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projet/japanese-art" element={<ProjetJapaneseArt />} />
          <Route path="/projet/generative-art" element={<ProjetGenerativeArt />} />
          <Route path="/projet/yumetrack" element={<ProjetYumeTrack />} />
          <Route path="/projet/berserk" element={<ProjetBerserk />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
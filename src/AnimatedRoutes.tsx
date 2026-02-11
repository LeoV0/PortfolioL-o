import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjetGenerativeArt = lazy(() => import("./pages/ProjetGenerativeArt"));
const ProjetJapaneseArt = lazy(() => import("./pages/ProjetJapaneseArt"));
const ProjetYumeTrack = lazy(() => import("./pages/ProjetYumeTrack"));
const ProjetBerserk = lazy(() => import("./pages/ProjetBerserk"));

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projet/japanese-art" element={<ProjetJapaneseArt />} />
        <Route
          path="/projet/generative-art"
          element={<ProjetGenerativeArt />}
        />
        <Route path="/projet/yumetrack" element={<ProjetYumeTrack />} />
        <Route path="/projet/berserk" element={<ProjetBerserk />} />
      </Routes>
    </AnimatePresence>
  );
}

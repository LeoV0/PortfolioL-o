import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import ProjetGenerativeArt from "./pages/ProjetGenerativeArt";
import ProjetJapaneseArt from "./pages/ProjetJapaneseArt";
import ProjetYumeTrack from "./pages/ProjetYumeTrack";
import HomePage from "./pages/HomePage";
import ProjetBerserk from "./pages/ProjetBerserk";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projet/japanese-art" element={<ProjetJapaneseArt />} />
        <Route path="/projet/generative-art" element={<ProjetGenerativeArt />} />
        <Route path="/projet/yumetrack" element={<ProjetYumeTrack />} />
        <Route path="/projet/berserk" element={<ProjetBerserk />} />

      </Routes>
    </AnimatePresence>
  );
}

// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundPaperShaders from "./components/BackgroundPaperShaders";
import GenerativeArt from "./pages/ProjetGenerativeArt";
import ProjetYumeTrack from "./pages/ProjetYumeTrack";
import ProjetJapaneseArt from "./pages/ProjetJapaneseArt";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BackgroundPaperShaders />} />
        <Route path="/projet/japanese-art" element={<ProjetJapaneseArt />} />
        <Route path="/projet/generative-art" element={<GenerativeArt />} />
        <Route path="/projet/yumetrack" element={<ProjetYumeTrack />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

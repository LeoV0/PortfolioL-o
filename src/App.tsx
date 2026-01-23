import "./index.css";
import LenisProvider from "./components/LenisProvider";
import { ScrollToTop } from "./components/ScrollToTop";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <LenisProvider>
      <ScrollToTop />
      <AnimatedRoutes />
    </LenisProvider>
  );
}

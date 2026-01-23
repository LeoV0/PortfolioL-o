import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, {
      immediate: true,
    });
  }, [pathname, lenis]);

  return null;
}

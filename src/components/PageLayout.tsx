import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

type PageLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isHome?: boolean;
};

export function PageLayout({
  title,
  subtitle,
  children,
  isHome = false,
}: PageLayoutProps) {
  const titleControls = useAnimation();
  const containerControls = useAnimation();
  const [showContent, setShowContent] = useState(false);
  const [_isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const titleVariants: Variants = {
    hidden: {
      top: "60%",
      left: "50%",
      x: "-50%",
      y: "50%",
      scale: 1,
      opacity: 0,
    },
    center: {
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    dock: {
      top: "0.5rem",
      left: "0.5rem",
      x: 0,
      y: 0,
      scale: 0.5,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  useEffect(() => {
    const runAnimation = async () => {
      if (isHome) {
        document.body.style.overflow = "hidden";
        await containerControls.start({
          y: "0%",
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        });

        await titleControls.start("center");

        await new Promise((resolve) => setTimeout(resolve, 700));

        await titleControls.start("dock");
        setShowContent(true);
      } else {
        containerControls.set({ y: "0%" });
        titleControls.set("dock");
        setShowContent(true);
      }
    };

    runAnimation();
  }, [isHome, titleControls, containerControls]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleChange = () => setIsMobileOrTablet(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-[#f9f5f0] overflow-hidden"
      initial={{ y: isHome ? "100%" : "0%" }}
      animate={containerControls}
    >
      <motion.div
        className="fixed z-40 pointer-events-none"
        variants={titleVariants}
        initial="hidden"
        animate={titleControls}
      >
        <div className="flex flex-col items-center text-center gap-1">
          <div className="text-5xl md:text-7xl tracking-[0.2em] text-neutral-800">
            {title}
          </div>
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>

      {showContent && (
        <motion.main
          className="pt-48 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isHome ? 0.8 : 0.4 }}
        >
          {children}
        </motion.main>
      )}
    </motion.div>
  );
}

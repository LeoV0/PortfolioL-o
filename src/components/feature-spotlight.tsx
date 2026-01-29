import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioEvents } from "../lib/analytics";
interface SpotlightProps {
  title: string;
  index: string;
  img: string;
  hoverImg?: string;
  offsetY?: number;
}

export function FeaturedSpotlight({ title, index, img, hoverImg, offsetY = 0 }: SpotlightProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const navigate = useNavigate();

  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const showText = isHovered || !isDesktop;


  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();

    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleClick = () => {
    portfolioEvents.viewProject(title);
    navigate(`/projet/${slug}`);
  };

  return (
    <div
      className="group relative flex cursor-pointer flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        top: isDesktop ? offsetY : 0,
        position: "relative",
      }}
    >
      <div
        className="relative transition-all duration-700"
        style={{
          transform: isHovered ? "translateX(4px) translateY(-4px)" : "translateX(0) translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="absolute -inset-3 border transition-all duration-700 md:-inset-4"
          style={{
            borderColor: isHovered ? "hsl(var(--foreground) / 0.15)" : "transparent",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <div className="relative h-[200px] w-[180px] sm:h-[240px] sm:w-[220px] md:h-[280px] md:w-[260px] lg:h-[320px] lg:w-[300px] overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
            style={{
              transform: isHovered ? "scale(1.03)" : "scale(1)",
              opacity: isHovered ? 0 : 1,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {hoverImg && (
            <img
              src={hoverImg}
              alt={title + " hover"}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              style={{
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                opacity: isHovered ? 1 : 0,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          )}

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-700"
            style={{
              opacity: isHovered ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <div className="absolute left-2 top-2 h-5 w-px bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:h-6"
            style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top", transitionDelay: "50ms" }}
          />
          <div className="absolute left-2 top-2 h-px w-5 bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:w-6"
            style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transitionDelay: "100ms" }}
          />
          <div className="absolute bottom-2 right-2 h-5 w-px bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:h-6"
            style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleY(1)" : "scaleY(0)", transformOrigin: "bottom", transitionDelay: "150ms" }}
          />
          <div className="absolute bottom-2 right-2 h-px w-5 bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:w-6"
            style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "right", transitionDelay: "200ms" }}
          />
        </div>

        <div
  className="
    absolute 
    top-3 left-3 
    md:-bottom-8 md:left-auto md:right-0 md:top-auto
    md:translate-y-2
    flex items-center gap-2 
    font-mono text-xs md:text-sm
    text-neutral-600 md:text-muted-foreground
    transition-all duration-700
    pointer-events-none
  "
  style={{
    opacity: showText ? 1 : 0.5,
    transform: showText ? "translateY(0)" : "translateY(4px)",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  }}
>
          <span>{title}</span>
          <span>{index}</span>
        </div>
      </div>
    </div>
  );
}
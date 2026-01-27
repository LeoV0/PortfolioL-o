import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SpotlightProps {
  title: string;
  index: string;
  img: string;
  hoverImg?: string;
  offsetY?: number;
}

export function FeaturedSpotlight({ title, index, img, hoverImg, offsetY = 0 }: SpotlightProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const navigate = useNavigate();

  const slug = title.toLowerCase().replace(/\s+/g, "-");


  return (
    <div
      className="group relative flex cursor-pointer flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/projet/${slug}`)}
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
          className="absolute -bottom-6 right-0 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-all duration-700 md:-bottom-8 md:text-sm"
          style={{
            opacity: isHovered ? 1 : 0.4,
            transform: isHovered ? "translateY(12px)" : "translateY(0)",
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

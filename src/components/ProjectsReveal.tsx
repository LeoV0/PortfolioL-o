import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextScramble } from "./ui/text-scramble";

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

type Project = {
  title: string;
  image: string;
  path: string;
};

const projects: Project[] = [
  { title: "Generative Art", image: "/images/Screenshot_18.png", path: "/projet/generative-art" },
  { title: "Japanese Art", image: "/images/Screenshot_17.png", path: "/projet/japanese-art" },
  { title: "YumeTrack", image: "/images/Screenshot_19.png", path: "/projet/yumetrack" },
  { title: "Berserk", image: "/images/Screenshot_73.png", path: "/projet/berserk" },

];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export default function ProjectsReveal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrentIndex([currentIndex + newDirection, newDirection]);
  };

  const projectIndex = wrap(0, projects.length, currentIndex);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-[0.25em] text-white/70 z-10">
        <button onClick={onClose} className="hover:text-white transition-colors cursor-pointer">
        <TextScramble 
    text="← Back" 
  />
        </button>
        <TextScramble 
    text="「 Projects 」" 
  />
      </header>

      <div className="hidden lg:flex gap-10 items-end mt-10 px-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="relative cursor-pointer w-72 h-[440px] shrink-0"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(project.path)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/30" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Project</p>
              <h3 className="text-lg font-light text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden w-full h-full flex items-center justify-center mt-10">
        <div className="w-full max-w-lg px-8">
          <motion.div
            className="relative w-full h-[440px] cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0 w-full h-full"
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                onClick={() => navigate(projects[projectIndex].path)}
              >
                <img
                  src={projects[projectIndex].image}
                  alt={projects[projectIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/30" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Project</p>
                  <h3 className="text-2xl font-light text-white">
                    {projects[projectIndex].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === projectIndex ? "bg-white w-8" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

type Project = {
  title: string;
  image: string;
  path: string;
};

const projects: Project[] = [
  {
    title: "Generative Art",
    image: "/images/Screenshot_18.png",
    path: "/projet/generative-art",
  },
  {
    title: "Japanese Art",
    image: "/images/Screenshot_17.png",
    path: "/projet/japanese-art",
  },
  {
    title: "YumeTrack",
    image: "/images/Screenshot_19.png",
    path: "/projet/yumetrack",
  },
];

export default function ProjectsReveal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/70 z-10">
        <button
          onClick={onClose}
          className="hover:text-white transition-colors cursor-pointer"
        >
          ← Back
        </button>
        <span>「 Projects 」</span>
      </header>

      <div className="flex gap-10 items-end mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="relative cursor-pointer w-72 h-[440px]" 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(project.path)}
          >
            <img
              src={project.image}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

            <div className="absolute bottom-4 left-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Project
              </p>
              <h3 className="text-lg font-light text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

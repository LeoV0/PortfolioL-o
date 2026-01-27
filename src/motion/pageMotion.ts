export const pageMotion = {
  container: {
    initial: { y: "100%" },
    animate: { y: "0%" },
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  dockDelay: 2000,

  dock: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1] as const,
  },

  contentFade: {
    delay: 0.2,
  },

  heroFade: {
    delay: 0.2,
    duration: 0.4,
  },
};

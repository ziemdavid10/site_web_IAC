import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  // Récupère la progression du scroll (de 0 à 1)
  const { scrollYProgress } = useScroll();

  // Ajoute un effet de ressort (spring) pour une animation plus fluide et organique
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
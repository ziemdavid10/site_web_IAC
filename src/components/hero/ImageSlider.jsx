import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageSlider.scss';

const images = [
  '/Nouveau_média/conference-ia.jpg.jpeg',
  '/Nouveau_média/interview-fred-ngaba-crtv.jpg.jpeg',
  '/Nouveau_média/gain-riyad.jpg.jpeg',
  '/Nouveau_média/iac-union-europeenne.jpg.jpeg',
  '/Nouveau_média/visite-pnud-iac.jpg.jpeg',
  '/Nouveau_média/conference-universite-catholique.jpg.jpeg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="slider-image"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <img src={images[current]} alt="IAC Activity" />
        </motion.div>
      </AnimatePresence>

      <div className="slider-overlay" />

      <div className="slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

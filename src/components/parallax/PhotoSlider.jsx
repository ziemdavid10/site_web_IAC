import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './PhotoSlider.scss';

const PhotoSlider = ({ images, interval = 4000, tag, quote, author }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="photo-slider" ref={ref}>
      <motion.div className="photo-slider__bg" style={{ y }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="IAC"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </motion.div>

      <div className="photo-slider__overlay" />

      <div className="photo-slider__content">
        {tag && <span className="photo-slider__tag">{tag}</span>}
        {quote && <blockquote className="photo-slider__quote">"{quote}"</blockquote>}
        {author && <cite className="photo-slider__author">— {author}</cite>}
      </div>

      <div className="photo-slider__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;

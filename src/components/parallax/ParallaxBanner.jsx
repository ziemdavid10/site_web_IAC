import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxBanner.scss';

const ParallaxBanner = ({ image, quote, author, tag }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div className="parallax-banner" ref={ref}>
      <motion.div className="parallax-banner__bg" style={{ y }}>
        <img src={image} alt={tag || 'IAC'} />
      </motion.div>

      <div className="parallax-banner__overlay" />

      <div className="parallax-banner__content">
        {tag && <span className="parallax-banner__tag">{tag}</span>}
        {quote && (
          <blockquote className="parallax-banner__quote">"{quote}"</blockquote>
        )}
        {author && <cite className="parallax-banner__author">— {author}</cite>}
      </div>
    </div>
  );
};

export default ParallaxBanner;

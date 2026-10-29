import { useEffect, useRef, useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import './Hero.scss';

const stats = [
  { end: 500, suffix: 'K+', label: 'Téléchargements Dastudy' },
  { end: 15,  suffix: '',   label: 'Pays couverts' },
  { end: 3,   suffix: '',   label: "Ans d'existence" },
  { end: 50,  suffix: '+',  label: 'Partenaires actifs' },
];

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const StatItem = ({ end, suffix, label, delay }) => {
  const { count, ref } = useCountUp(end);
  return (
    <motion.div
      ref={ref}
      className="hero__stat"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  return (
  <section className="hero" id="home">
    <ImageSlider />

    <div className="hero__particles">
      {[...Array(20)].map((_, i) => (
        <span key={i} className="particle" style={{ '--i': i }} />
      ))}
    </div>

    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h1>
        Intelligence Artificielle<br />
        <span className="hero__accent">Cameroun</span>
      </h1>

      <p>
        Premier hub national dédié à l'IA au Cameroun. Nous fédérons chercheurs,
        entrepreneurs et institutions pour bâtir un écosystème technologique
        éthique, souverain et au service du développement africain.
      </p>

      <div className="hero-btns">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/services')}
          >
            Nos Formations
          </motion.button>
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/presentation')}
          >
            Découvrir l'IAC
          </motion.button>
      </div>

      <div className="hero__stats">
        {stats.map((s, i) => (
          <StatItem key={i} end={s.end} suffix={s.suffix} label={s.label} delay={0.6 + i * 0.1} />
        ))}
      </div>
    </motion.div>

    <div className="hero__visual">
      <div className="hero__globe">
        <div className="ring ring--1" />
        <div className="ring ring--2" />
        <div className="ring ring--3" />
        <div className="globe-core">
          <picture>
            <source type="image/webp" srcSet="/logos/caipi.webp 1x, /logos/caipi@2x.webp 2x" />
            <img src="/logos/caipi.png" alt="CAIPI — Cameroon Artificial Intelligence Policy Institute" width="480" height="211" />
          </picture>
        </div>
      </div>
    </div>

    <div className="hero__scroll-hint">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <LuChevronDown aria-hidden />
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;

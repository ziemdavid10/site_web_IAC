import { useEffect, useRef, useState } from 'react';
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
      {/* <motion.span
        className="hero__badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm285 93q35-35 35-85v-240H360v240q0 50 35 85t85 35q50 0 85-35Zm115-93q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>Lauréat IAChallenge 2022 — Bordeaux, France
      </motion.span> */}

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
          <img src="/Logo CAIPI.png" alt="IAC" />
        </div>
      </div>
    </div>

    <div className="hero__scroll-hint">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;

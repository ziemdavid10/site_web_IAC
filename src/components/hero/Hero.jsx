import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ImageSlider from './ImageSlider';
import './Hero.scss';

const stats = [
  { value: '500K+', label: 'Téléchargements Dastudy' },
  { value: '15', label: 'Pays couverts' },
  { value: '3', label: 'Ans d\'existence' },
  { value: '50+', label: 'Partenaires actifs' },
];

const Hero = () => (
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
      <motion.span
        className="hero__badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm285 93q35-35 35-85v-240H360v240q0 50 35 85t85 35q50 0 85-35Zm115-93q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>Lauréat IAChallenge 2022 — Bordeaux, France
      </motion.span>

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
        <Link to="services" smooth duration={600}>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Nos Formations
          </motion.button>
        </Link>
        <Link to="about" smooth duration={600}>
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Découvrir l'IAC
          </motion.button>
        </Link>
      </div>

      <div className="hero__jcia-cta">
        <motion.button
          className="btn-jcia"
          onClick={() => window.dispatchEvent(new CustomEvent('openJcia'))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="material-symbols-rounded">smart_display</span>
          Parlons JCIA
        </motion.button>
      </div>

      <div className="hero__stats">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="hero__stat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </motion.div>
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

export default Hero;

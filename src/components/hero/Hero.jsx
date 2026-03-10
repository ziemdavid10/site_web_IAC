import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1>Intelligence Artificielle Cameroun</h1>
        <p>Promouvoir l'innovation technologique et l'éthique de l'IA pour le développement du Cameroun.</p>
        <div className="hero-btns">
          <button className="btn-primary">Nos Services</button>
          <button className="btn-outline">Nous Découvrir</button>
        </div>
      </motion.div>
      <div className="ai-background-animation">
        {/* Ici, on pourrait intégrer un canvas Three.js ou des SVG animés */}
      </div>
    </section>
  );
};

export default Hero;
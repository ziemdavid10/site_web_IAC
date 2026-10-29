import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Countdown from '../hero/Countdown';
import './JciaCountdownBanner.scss';

const JciaCountdownBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="jcia-banner">
      <div className="jcia-banner__inner">
        <div className="jcia-banner__text">
          <span className="material-symbols-rounded">event_upcoming</span>
          <span><strong>JCIA 2027</strong> — Prochaine édition · 20 & 21 Avril 2027 · Yaoundé, Cameroun</span>
        </div>
        <div className="jcia-banner__countdown">
          <Countdown />
        </div>
        <motion.button
          className="jcia-banner__cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/jcia')}
        >
          En savoir plus →
        </motion.button>
      </div>
    </div>
  );
};

export default JciaCountdownBanner;

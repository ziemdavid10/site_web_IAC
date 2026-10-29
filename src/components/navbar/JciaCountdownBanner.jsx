import { motion } from 'framer-motion';
import { LuCalendarClock, LuArrowUpRight } from 'react-icons/lu';
import Countdown from '../hero/Countdown';
import { JCIA_OFFICIAL_URL, NEXT_JCIA } from '../../config/site';
import './JciaCountdownBanner.scss';

const JciaCountdownBanner = () => (
  <div className="jcia-banner" role="region" aria-label="Prochaine édition des JCIA">
    <div className="jcia-banner__inner">
      <div className="jcia-banner__text">
        <LuCalendarClock className="jcia-banner__icon" aria-hidden />
        <strong>JCIA {NEXT_JCIA.year}</strong>
        <span className="jcia-banner__details">— Prochaine édition · {NEXT_JCIA.dates} · {NEXT_JCIA.city}</span>
      </div>
      <div className="jcia-banner__countdown">
        <Countdown />
      </div>
      <motion.a
        className="jcia-banner__cta"
        href={JCIA_OFFICIAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`En savoir plus sur les JCIA ${NEXT_JCIA.year} (site officiel, nouvel onglet)`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        En savoir plus <LuArrowUpRight aria-hidden />
      </motion.a>
    </div>
  </div>
);

export default JciaCountdownBanner;

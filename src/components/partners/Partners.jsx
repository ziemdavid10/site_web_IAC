import { motion } from 'framer-motion';
import './Partners.scss';

const Partners = () => {
  return (
    <div className="partners-slider">
      <div className="partners-track">
        {/* Doubler les logos pour l'effet infini */}
        {['Unesco', 'AFD', 'Atos', 'Huawei', 'AUF', 'Minpostel'].map((p, i) => (
          <div className="partner-logo" key={i}>{p}</div>
        ))}
        {['Unesco', 'AFD', 'Atos', 'Huawei', 'AUF', 'Minpostel'].map((p, i) => (
          <div className="partner-logo" key={i + 'copy'}>{p}</div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
import { motion } from 'framer-motion';
import './Service.scss';

const trainingData = [
  { type: "Rapide", duration: "1 Jour", modules: ["Généralités sur l'IA", "Initiation Chatbots"] },
  { type: "Intensive", duration: "3 Jours", modules: ["Prompting", "IA vs Logiciel", "Cas pratiques"] },
  { type: "Technique", duration: "1 Mois", modules: ["Business Intelligence", "Analyse de données", "Reporting"] }
];

const Services = () => (
  <section className="services" id="services">
    <h2 className="section-title">Nos Formations</h2>
    <div className="training-grid">
      {trainingData.map((item, index) => (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="training-card" 
          key={index}
        >
          <h3>Formation {item.type}</h3>
          <p className="duration">⏳ {item.duration}</p>
          <ul>
            {item.modules.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
import { motion } from 'framer-motion';
import './Ecosystem.scss';

const ecosystemData = [
  {
    name: "Alain BOMBA",
    solution: "iNgeyaa",
    desc: "Système de gestion intelligente de la circulation utilisant l'AIoT pour réguler les feux de signalisation et réduire les embouteillages.",
    tag: "Smart City"
  },
  {
    name: "David KENFACK",
    solution: "Dastudy",
    desc: "Plateforme éducative avec assistant virtuel IA, comptant plus de 500 000 téléchargements dans 15 pays.",
    tag: "EdTech"
  },
  {
    name: "Bruno Alex KENFACK",
    solution: "AITECAF",
    desc: "Expert en vision par ordinateur et ambassadeur Zindi, développant des solutions IA adaptées aux défis africains.",
    tag: "Computer Vision"
  }
];

const Ecosystem = () => {
  return (
    <section className="ecosystem">
      <motion.div 
        className="ecosystem__header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">National AI Ecosystem</h2>
        <p className="section-subtitle">Découvrez les pionniers qui façonnent l'avenir technologique du Cameroun</p>
      </motion.div>

      <div className="ecosystem__grid">
        {ecosystemData.map((actor, index) => (
          <motion.div 
            className="actor-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(49, 39, 131, 0.2)" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="actor-card__badge">{actor.tag}</div>
            <div className="actor-card__content">
              <h3>{actor.solution}</h3>
              <h4>{actor.name}</h4>
              <p>{actor.desc}</p>
            </div>
            <div className="actor-card__footer">
              <button className="btn-text">En savoir plus →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
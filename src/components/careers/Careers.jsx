import React from 'react';
import { motion } from 'framer-motion';
import './Careers.scss';

const jobOffers = [
  {
    title: "Stage en Communication & Marketing",
    count: "2 stagiaires",
    location: "Yaoundé (Coron)",
    duration: "3 mois, renouvelable",
    remuneration: "Oui",
    requirements: ["Licence en marketing/comm", "Maîtrise outils digitaux", "Créativité"],
    contact: "contact@iacameroun.com"
  },
  {
    title: "Stage en Développement Web",
    count: "2 stagiaires",
    location: "Yaoundé (Coron)",
    duration: "3 mois, renouvelable",
    remuneration: "Oui",
    requirements: ["Licence Programmation/BD", "Passion informatique", "Adaptabilité"],
    contact: "699 089 937"
  },
  {
    title: "Appel à Projets : Technicien IA",
    count: "Indéterminé",
    location: "Yaoundé",
    duration: "Indéterminée",
    special: "Spécialisation IA requise",
    requirements: ["Compétences solides en IA", "Gestion de projets autonome", "Passion innovation"],
    contact: "contact@iacameroun.com"
  }
];

const Careers = () => {
  return (
    <section className="careers-section" id="careers">
      <div className="section-header">
        <span className="subtitle">Opportunités</span>
        <h2>Rejoignez l'Aventure IAC</h2>
        <p>Contribuez à l'essor de l'IA au Cameroun au sein d'une équipe dynamique.</p>
      </div>

      <div className="offers-grid">
        {jobOffers.map((offer, index) => (
          <motion.div 
            className="offer-card"
            key={index}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="card-badge">{offer.duration}</div>
            <h3>{offer.title}</h3>
            <p className="offer-meta"><strong>Effectif:</strong> {offer.count}</p>
            <p className="offer-meta"><strong>Rémunération:</strong> {offer.remuneration}</p>
            
            <div className="requirements">
              <h4>Profil recherché :</h4>
              <ul>
                {offer.requirements.map((req, i) => <li key={i}>{req}</li>)}
              </ul>
            </div>

            <div className="card-footer">
              <p>RDV : Lundi 29 Juillet 2024 à 9h</p>
              <button className="btn-apply">Postuler maintenant</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
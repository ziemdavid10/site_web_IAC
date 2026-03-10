import React from 'react';
import { motion } from 'framer-motion';
import './Mission.scss';

const missions = [
  "Accompagner l'État du Cameroun dans sa politique d'adoption de l'IA.",
  "Fédérer les acteurs de l'écosystème IA au Cameroun.",
  "Accompagner les organisations publiques et privées.",
  "Promouvoir les initiatives camerounaises à l'international.",
  "Résoudre des problèmes locaux par des solutions d'IA locale.",
  "Favoriser une IA éthique, inclusive et bénéfique pour tous les citoyens.",
  "Renforcer la capacité d'innovation technologique au Cameroun.",
  "Soutenir les talents locaux et les startups en IA.",
  "Contribuer à la création d'un cadre réglementaire pour l'IA au Cameroun."
];

const Vision = () => {
  return (
    <section className="vision-section" id="about">
      <div className="vision-container">
        <motion.div 
          className="vision-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="tag">Notre Vision</span>
          <h2>Bâtir un avenir technologique éthique</h2>
          <p>
            Fondée suite au succès de l'IAChallenge 2022 à Bordeaux, l'IAC s'engage à 
            transformer le paysage numérique africain. Nous croyons en une IA qui 
            favorise l'inclusion et le bien-être de tous les citoyens.
          </p>
          <div className="mission-list">
            {missions.map((m, i) => (
              <motion.div 
                key={i} 
                className="mission-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="check">✔</span> {m}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="vision-visual">
          {/* Animation symbolisant un cerveau connecté ou réseau neuronal */}
          <div className="ai-sphere">
             <div className="orbit"></div>
             <div className="core">IA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
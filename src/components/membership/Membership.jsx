import React from 'react';
import { motion } from 'framer-motion';
import './Membership.scss';

const Membership = () => (
  <section className="membership-section">
    <motion.div 
      className="membership-card"
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-header">
        <h3>Devenir Membre IAC</h3>
        <div className="price">10 000 <span>FCFA / an</span></div>
      </div>
      
      <div className="card-body">
        <p className="intro">Ouvert aux étudiants, chercheurs, professionnels et entrepreneurs passionnés par l'IA.</p>
        <div className="conditions">
          <h4>Pourquoi nous rejoindre ?</h4>
          <ul>
            <li>Accès aux réseaux d'experts internationaux</li>
            <li>Participation aux projets de co-innovation</li>
            <li>Tarifs préférentiels sur les formations techniques</li>
            <li>Droit de vote à l'Assemblée Générale annuelle</li>
          </ul>
        </div>
        <button className="btn-join">Obtenir ma qualité de membre</button>
        <p className="footer-note">*Un reçu est délivré après versement en une tranche unique.</p>
      </div>
    </motion.div>
  </section>
);

export default Membership;
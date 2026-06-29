import React from 'react';
import { motion } from 'framer-motion';
import personIcon from '../../assets/icons/person.png';
import buildingIcon from '../../assets/icons/building.png';
import './Membership.scss';

const plans = [
  {
    name: 'Membre Individuel',
    price: '10 000',
    period: 'FCFA / an',
    icon: personIcon,
    color: '#00d2ff',
    audience: 'Étudiants, chercheurs, professionnels, entrepreneurs',
    benefits: [
      'Accès aux réseaux d\'experts nationaux et internationaux',
      'Participation aux projets de co-innovation IAC',
      'Tarifs préférentiels sur toutes les formations',
      'Droit de vote à l\'Assemblée Générale annuelle',
      'Accès aux ressources et publications exclusives',
      'Invitation aux événements et conférences IAC',
      'Certificat de membre officiel IAC',
    ],
    cta: 'Devenir Membre',
  },
  {
    name: 'Membre Entreprise',
    price: 'Sur devis',
    period: 'Partenariat annuel',
    icon: buildingIcon,
    color: '#312783',
    featured: true,
    audience: 'PME, grandes entreprises, institutions publiques',
    benefits: [
      'Tout ce qui est inclus dans le plan individuel',
      'Visibilité sur le site et les supports IAC',
      'Accès prioritaire aux talents et stagiaires IAC',
      'Participation aux comités de pilotage stratégiques',
      'Co-organisation d\'événements et de formations',
      'Accompagnement personnalisé à la transformation IA',
      'Représentation dans les délégations internationales',
      'Rapport annuel d\'impact et de visibilité',
    ],
    cta: 'Nous Contacter',
  },
];

const Membership = () => (
  <section className="membership-section">
    <motion.div
      className="membership-section__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="membership-tag">Rejoignez-nous</span>
      <h2 className="section-title" style={{ color: 'white' }}>Devenir Membre IAC</h2>
      <p>Intégrez le premier réseau national dédié à l'Intelligence Artificielle au Cameroun.</p>
    </motion.div>

    <div className="membership-cards">
      {plans.map((plan, i) => (
        <motion.div
          key={i}
          className={`membership-card ${plan.featured ? 'featured' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -8 }}
          style={{ '--plan-color': plan.color }}
        >
          {plan.featured && <div className="membership-card__badge">⭐ Recommandé</div>}

          <div className="membership-card__header">
            <div className="plan-icon"><img src={plan.icon} alt="" width={48} height={48} /></div>
            <h3>{plan.name}</h3>
            <div className="price">
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
            </div>
            <p className="audience">{plan.audience}</p>
          </div>

          <div className="membership-card__body">
            <ul>
              {plan.benefits.map((b, j) => (
                <li key={j}>
                  <span className="check">✓</span> {b}
                </li>
              ))}
            </ul>

            <button className="btn-join">
              {plan.cta}
            </button>

            {i === 0 && (
              <p className="footer-note">
                * Reçu délivré après versement en une tranche unique.<br />
                Contact : <strong>699 089 937</strong> | contact@iacameroun.com
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Membership;

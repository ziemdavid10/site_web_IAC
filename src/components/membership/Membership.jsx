import { useState } from 'react';
import { LuBuilding2 as BuildingIcon, LuUser as PersonIcon, LuStar, LuCheck, LuIdCard } from 'react-icons/lu';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import MembershipForm from './MembershipForm';
import './Membership.scss';

const plans = [
  {
    name: 'Membre Individuel',
    price: '10 000',
    period: 'FCFA / an',
    icon: PersonIcon,
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
    action: 'join',
  },
  {
    name: 'Membre Entreprise',
    price: 'Sur devis',
    period: 'Partenariat annuel',
    icon: BuildingIcon,
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
    action: 'partner',
  },
];

const Membership = () => {
  const [open, setOpen] = useState(false);

  // Plan individuel → formulaire d'adhésion ; plan entreprise → formulaire de partenariat
  const handleCta = (plan) => {
    if (plan.action === 'partner') {
      document.getElementById('partenariat')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setOpen(true);
    }
  };

  return (
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
          {plan.featured && <div className="membership-card__badge"><LuStar aria-hidden /> Recommandé</div>}

          <div className="membership-card__header">
            <div className="plan-icon"><plan.icon size={48} aria-hidden /></div>
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
                  <span className="check"><LuCheck aria-hidden /></span> {b}
                </li>
              ))}
            </ul>

            <button type="button" className="btn-join" onClick={() => handleCta(plan)}>
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

    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Adhésion — Membre individuel"
      subtitle="Rejoignez le premier réseau national dédié à l'IA au Cameroun."
      icon={LuIdCard}
    >
      <MembershipForm />
    </Modal>
  </section>
  );
};

export default Membership;

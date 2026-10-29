import { useState } from 'react';
import {
  LuBrain as BrainIcon,
  LuFlame as FireIcon,
  LuHandshake as HandshakeIcon,
  LuMic as MicIcon,
  LuSatellite as SatelliteIcon,
  LuStar as StarIcon,
  LuTrophy as TrophyIcon,
  LuZap as FlashIcon,
  LuCalendarDays,
  LuUsers,
  LuWallet,
  LuCheck,
} from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import './Service.scss';

const trainings = [
  {
    type: 'Rapide',
    duration: '1 Jour',
    price: 'Sur devis',
    icon: FlashIcon,
    color: '#00d2ff',
    audience: 'Grand public, dirigeants, décideurs',
    modules: [
      'Généralités sur l\'Intelligence Artificielle',
      'Initiation aux Chatbots (ChatGPT, Gemini, Copilot)',
      'IA vs Logiciel traditionnel : comprendre les différences',
      'Cas d\'usage concrets en entreprise',
      'Enjeux éthiques et réglementaires',
    ],
    badge: 'Initiation',
  },
  {
    type: 'Intensive',
    duration: '3 Jours',
    price: 'Sur devis',
    icon: FireIcon,
    color: '#f59e0b',
    audience: 'Professionnels, managers, équipes techniques',
    modules: [
      'Prompting avancé et ingénierie des prompts',
      'IA Générative : images, textes, vidéos',
      'Automatisation des processus métier avec l\'IA',
      'Intégration de l\'IA dans les workflows existants',
      'Atelier pratique : construire son premier agent IA',
      'Sécurité et gouvernance des données IA',
    ],
    badge: 'Populaire',
    featured: true,
  },
  {
    type: 'Technique',
    duration: '1 Mois',
    price: 'Sur devis',
    icon: BrainIcon,
    color: '#8b5cf6',
    audience: 'Développeurs, data scientists, ingénieurs',
    modules: [
      'Business Intelligence & Analyse de données',
      'Machine Learning : algorithmes supervisés et non supervisés',
      'Deep Learning et réseaux de neurones',
      'Computer Vision et traitement du langage naturel (NLP)',
      'Déploiement de modèles IA en production',
      'Reporting et visualisation avancée (Power BI, Tableau)',
      'Projet de fin de formation avec certification',
    ],
    badge: 'Expert',
  },
];

const otherServices = [
  {
    icon: MicIcon,
    title: 'Conférences & Séminaires',
    desc: 'Organisation de conférences thématiques sur l\'IA pour les universités, entreprises et institutions publiques. Intervenants nationaux et internationaux.',
  },
  {
    icon: HandshakeIcon,
    title: 'Conseil & Accompagnement',
    desc: 'Audit de maturité IA, feuille de route stratégique, accompagnement à la transformation numérique pour PME et grandes entreprises.',
  },
  {
    icon: TrophyIcon,
    title: 'Hackathons & Compétitions',
    desc: 'Organisation de challenges IA pour identifier et valoriser les talents locaux. Partenariat avec Zindi Africa et réseaux internationaux.',
  },
  {
    icon: SatelliteIcon,
    title: 'Médias & Sensibilisation',
    desc: 'Émissions TV (Canal 2, CRTV), podcasts, publications et campagnes de sensibilisation pour démocratiser l\'IA au grand public.',
  },
];

const Services = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="services" id="services">
      <motion.div
        className="services__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="services__tag">Ce que nous faisons</span>
        <h2 className="section-title">Nos Formations & Services</h2>
        <p>Des programmes conçus pour tous les niveaux, du grand public aux experts techniques.</p>
      </motion.div>

      <div className="training-tabs">
        {trainings.map((t, i) => (
          <button
            key={i}
            className={`tab-btn ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            style={{ '--tab-color': t.color }}
          >
            {/* {t.icon}  */}
            Formation {t.type}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="training-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          {(() => {
            const t = trainings[active];
            return (
              <div className="detail-card" style={{ '--card-color': t.color }}>
                {t.featured && <div className="detail-card__featured"><StarIcon size={13} aria-hidden />Le plus demandé</div>}
                <div className="detail-card__left">
                  <div className="detail-card__icon"><t.icon size={48} aria-hidden /></div>
                  <h3>Formation {t.type}</h3>
                  <div className="detail-card__meta">
                    <span><LuCalendarDays aria-hidden /> {t.duration}</span>
                    <span><LuUsers aria-hidden /> {t.audience}</span>
                    <span><LuWallet aria-hidden /> {t.price}</span>
                  </div>
                  <a href="mailto:contact@iacameroun.com" className="btn-contact">
                    Demander un devis
                  </a>
                </div>
                <div className="detail-card__right">
                  <h4>Modules du programme</h4>
                  <ul>
                    {t.modules.map((m, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <span className="module-check"><LuCheck aria-hidden /></span> {m}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </AnimatePresence>

      <div className="other-services">
        <h3>Autres Services</h3>
        <div className="other-services__grid">
          {otherServices.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-card__icon"><s.icon size={40} aria-hidden /></div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

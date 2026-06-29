import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import flashIcon from '../../assets/icons/flash.png';
import fireIcon from '../../assets/icons/fire.png';
import brainIcon from '../../assets/icons/brain.png';
import micIcon from '../../assets/icons/microphone.png';
import handshakeIcon from '../../assets/icons/handshake.png';
import trophyIcon from '../../assets/icons/trophy.png';
import satelliteIcon from '../../assets/icons/satellite.png';
import starIcon from '../../assets/icons/star.png';
import './Service.scss';

const trainings = [
  {
    type: 'Rapide',
    duration: '1 Jour',
    price: 'Sur devis',
    icon: flashIcon,
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
    icon: fireIcon,
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
    icon: brainIcon,
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
    icon: micIcon,
    title: 'Conférences & Séminaires',
    desc: 'Organisation de conférences thématiques sur l\'IA pour les universités, entreprises et institutions publiques. Intervenants nationaux et internationaux.',
  },
  {
    icon: handshakeIcon,
    title: 'Conseil & Accompagnement',
    desc: 'Audit de maturité IA, feuille de route stratégique, accompagnement à la transformation numérique pour PME et grandes entreprises.',
  },
  {
    icon: trophyIcon,
    title: 'Hackathons & Compétitions',
    desc: 'Organisation de challenges IA pour identifier et valoriser les talents locaux. Partenariat avec Zindi Africa et réseaux internationaux.',
  },
  {
    icon: satelliteIcon,
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
                {t.featured && <div className="detail-card__featured"><img src={starIcon} alt="" width={13} height={13} />Le plus demandé</div>}
                <div className="detail-card__left">
                  <div className="detail-card__icon"><img src={t.icon} alt="" width={48} height={48} /></div>
                  <h3>Formation {t.type}</h3>
                  <div className="detail-card__meta">
                    <span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg> {t.duration}</span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg> {t.audience}</span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"/></svg> {t.price}</span>
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
                        <span className="module-check">✓</span> {m}
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
              <div className="service-card__icon"><img src={s.icon} alt="" width={40} height={40} /></div>
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

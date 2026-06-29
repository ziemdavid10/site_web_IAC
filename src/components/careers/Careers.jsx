import React from 'react';
import { motion } from 'framer-motion';
import megaphoneIcon from '../../assets/icons/megaphone.png';
import laptopIcon from '../../assets/icons/laptop.png';
import brainIcon from '../../assets/icons/brain.png';
import globeIcon from '../../assets/icons/globe.png';
import rocketIcon from '../../assets/icons/rocket.png';
import handshakeIcon from '../../assets/icons/handshake.png';
import graduationIcon from '../../assets/icons/graduation.png';
import mailIcon from '../../assets/icons/mail.png';
import scheduleIcon from '../../assets/icons/schedule.png';
import locationIcon from '../../assets/icons/location.png';
import personIcon from '../../assets/icons/person.png';
import './Careers.scss';

const jobOffers = [
  {
    title: 'Stage en Communication & Marketing Digital',
    count: '2 stagiaires',
    location: 'Yaoundé — Coron',
    duration: '3 mois, renouvelable',
    remuneration: 'Rémunéré',
    icon: megaphoneIcon,
    icon1: mailIcon,
    icon2: scheduleIcon,
    color: '#00d2ff',
    requirements: [
      'Licence en Marketing, Communication ou équivalent',
      'Maîtrise des outils digitaux et réseaux sociaux',
      'Créativité et sens de l\'esthétique visuelle',
      'Capacité à produire du contenu engageant sur l\'IA',
    ],
    contact: 'contact@iacameroun.com',
    rdv: 'Lundi 29 Juillet 2024 à 9h',
  },
  {
    title: 'Stage en Développement Web & Applications',
    count: '2 stagiaires',
    location: 'Yaoundé — Coron',
    duration: '3 mois, renouvelable',
    remuneration: 'Rémunéré',
    icon: laptopIcon,
    icon1: mailIcon,
    icon2: scheduleIcon,
    color: '#8b5cf6',
    requirements: [
      'Licence en Informatique, Programmation ou Bases de données',
      'Maîtrise de React, Node.js ou technologies web modernes',
      'Passion pour l\'informatique et l\'innovation',
      'Adaptabilité et esprit d\'équipe',
    ],
    contact: '+237 699 089 937',
    rdv: 'Lundi 29 Juillet 2024 à 9h',
  },
  {
    title: 'Appel à Projets — Technicien IA',
    count: 'Indéterminé',
    location: 'Yaoundé',
    duration: 'Indéterminée',
    remuneration: 'Selon projet',
    icon: brainIcon,
    icon1: mailIcon,
    icon2: scheduleIcon,
    color: '#f59e0b',
    special: true,
    requirements: [
      'Compétences solides en Machine Learning / Deep Learning',
      'Expérience en développement de modèles IA',
      'Capacité à gérer des projets de manière autonome',
      'Passion pour l\'innovation et l\'impact social',
    ],
    contact: 'contact@iacameroun.com',
    rdv: 'Candidature permanente',
  },
];

const values = [
  { icon: globeIcon, title: 'Impact Africain', desc: 'Contribuez à des projets qui transforment réellement le Cameroun et l\'Afrique.' },
  { icon: rocketIcon, title: 'Innovation', desc: 'Travaillez sur des technologies de pointe dans un environnement stimulant.' },
  { icon: handshakeIcon, title: 'Réseau', desc: 'Intégrez un réseau d\'experts nationaux et internationaux de l\'IA.' },
  { icon: graduationIcon, title: 'Formation', desc: 'Accédez à des formations continues et des certifications reconnues.' },
];

const Careers = () => (
  <section className="careers-section" id="careers">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="careers__tag">Opportunités</span>
      <h2>Rejoignez l'Aventure IAC</h2>
      <p>Contribuez à l'essor de l'IA au Cameroun au sein d'une équipe dynamique et visionnaire.</p>
    </motion.div>

    <div className="careers__values">
      {values.map((v, i) => (
        <motion.div
          key={i}
          className="value-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <img src={v.icon} alt="" width={40} height={40} />
          <h4>{v.title}</h4>
          <p>{v.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="offers-grid">
      {jobOffers.map((offer, index) => (
        <motion.div
          className={`offer-card ${offer.special ? 'special' : ''}`}
          key={index}
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          style={{ '--offer-color': offer.color }}
        >
          <div className="offer-card__top">
            <div className="offer-icon"><img src={offer.icon} alt="" width={40} height={40} /></div>
            <div className="offer-meta-top">
              <span className="offer-duration">{offer.duration}</span>
              <span className="offer-pay">{offer.remuneration}</span>
            </div>
          </div>

          <h3>{offer.title}</h3>

          <div className="offer-details">
            <span><img src={locationIcon} alt="" width={15} height={15} /> {offer.location}</span>
            <span><img src={personIcon} alt="" width={15} height={15} /> {offer.count}</span>
          </div>

          <div className="requirements">
            <h4>Profil recherché :</h4>
            <ul>
              {offer.requirements.map((req, i) => (
                <li key={i}><span className="req-check">✓</span> {req}</li>
              ))}
            </ul>
          </div>

          <div className="offer-card__footer">
            <p className="rdv-info"><img src={offer.icon2} alt="" width={15} height={15} /> {offer.rdv}</p>
            <p className="contact-info"><img src={offer.icon1} alt="" width={15} height={15} /> {offer.contact}</p>
            <button className="btn-apply">Postuler maintenant</button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Careers;

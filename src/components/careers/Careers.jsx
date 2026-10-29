import { useState } from 'react';
import {
  LuBrain as BrainIcon,
  LuCalendarClock as ScheduleIcon,
  LuGlobe as GlobeIcon,
  LuGraduationCap as GraduationIcon,
  LuHandshake as HandshakeIcon,
  LuLaptop as LaptopIcon,
  LuMail as MailIcon,
  LuMapPin as LocationIcon,
  LuMegaphone as MegaphoneIcon,
  LuRocket as RocketIcon,
  LuUser as PersonIcon,
  LuCheck,
  LuBriefcase as BriefcaseIcon,
} from 'react-icons/lu';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import ApplicationForm, { SPONTANEOUS } from './ApplicationForm';
import './Careers.scss';

const jobOffers = [
  {
    title: 'Stage en Communication & Marketing Digital',
    count: '2 stagiaires',
    location: 'Yaoundé — Coron',
    duration: '3 mois, renouvelable',
    remuneration: 'Rémunéré',
    icon: MegaphoneIcon,
    icon1: MailIcon,
    icon2: ScheduleIcon,
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
    icon: LaptopIcon,
    icon1: MailIcon,
    icon2: ScheduleIcon,
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
    icon: BrainIcon,
    icon1: MailIcon,
    icon2: ScheduleIcon,
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
  { icon: GlobeIcon, title: 'Impact Africain', desc: 'Contribuez à des projets qui transforment réellement le Cameroun et l\'Afrique.' },
  { icon: RocketIcon, title: 'Innovation', desc: 'Travaillez sur des technologies de pointe dans un environnement stimulant.' },
  { icon: HandshakeIcon, title: 'Réseau', desc: 'Intégrez un réseau d\'experts nationaux et internationaux de l\'IA.' },
  { icon: GraduationIcon, title: 'Formation', desc: 'Accédez à des formations continues et des certifications reconnues.' },
];

const Careers = () => {
  const [applyTo, setApplyTo] = useState(null);

  return (
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
          <v.icon size={40} aria-hidden />
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
            <div className="offer-icon"><offer.icon size={40} aria-hidden /></div>
            <div className="offer-meta-top">
              <span className="offer-duration">{offer.duration}</span>
              <span className="offer-pay">{offer.remuneration}</span>
            </div>
          </div>

          <h3>{offer.title}</h3>

          <div className="offer-details">
            <span><LocationIcon size={15} aria-hidden /> {offer.location}</span>
            <span><PersonIcon size={15} aria-hidden /> {offer.count}</span>
          </div>

          <div className="requirements">
            <h4>Profil recherché :</h4>
            <ul>
              {offer.requirements.map((req, i) => (
                <li key={i}><span className="req-check"><LuCheck aria-hidden /></span> {req}</li>
              ))}
            </ul>
          </div>

          <div className="offer-card__footer">
            <p className="rdv-info"><offer.icon2 size={15} aria-hidden /> {offer.rdv}</p>
            <p className="contact-info"><offer.icon1 size={15} aria-hidden /> {offer.contact}</p>
            <button type="button" className="btn-apply" onClick={() => setApplyTo(offer.title)}>
              Postuler maintenant
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="careers__spontaneous">
      <p>Aucune offre ne correspond à votre profil ? Envoyez-nous une candidature spontanée.</p>
      <button type="button" className="btn-spontaneous" onClick={() => setApplyTo(SPONTANEOUS)}>
        Candidature spontanée
      </button>
    </div>

    <Modal
      open={Boolean(applyTo)}
      onClose={() => setApplyTo(null)}
      title="Postuler à l'IAC"
      subtitle={applyTo && applyTo !== SPONTANEOUS ? applyTo : 'Candidature spontanée'}
      icon={BriefcaseIcon}
    >
      <ApplicationForm key={applyTo} offers={jobOffers.map((o) => o.title)} defaultOffer={applyTo || ''} />
    </Modal>
  </section>
  );
};

export default Careers;

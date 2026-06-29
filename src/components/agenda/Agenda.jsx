import { motion } from 'framer-motion';
import './Agenda.scss';

import clockIcon from "../../assets/icons/schedule.png"
import locationIcon from "../../assets/icons/location.png"

const events = [
  {
    day: '27 Sept',
    month: '— 26 Oct',
    title: 'Ateliers de Renforcement en IA',
    time: 'Samedi & Dimanche, 09h — 17h',
    location: 'Yaoundé, IAC',
    description: 'Formations pratiques intensives sur ChatGPT, Microsoft Copilot, Google Gemini et l\'IA générative. Ouvert aux professionnels et étudiants.',
    type: 'Workshop',
    featured: false,
  },
  {
    day: '20',
    month: 'Novembre 2024',
    title: '2e Journées Camerounaises de l\'IA',
    time: 'Toute la journée',
    location: 'Yaoundé — Lieu à confirmer',
    description: 'Le grand rendez-vous national des acteurs de l\'écosystème IA au Cameroun. Conférences, panels, démonstrations et networking. Intervenants nationaux et internationaux.',
    type: 'Summit',
    featured: true,
  },
  {
    day: 'Déc.',
    month: '2024',
    title: 'IA & Publicité — Séminaire Sectoriel',
    time: 'À définir',
    location: 'Yaoundé',
    description: 'Session dédiée à la valeur ajoutée de l\'IA pour le secteur publicitaire et les médias. Cas pratiques et retours d\'expérience.',
    type: 'Seminar',
    featured: false,
  },
  {
    day: 'Jan.',
    month: '2025',
    title: 'Lancement Programme de Certification IA',
    time: 'À définir',
    location: 'Yaoundé & Douala',
    description: 'Lancement officiel du programme de certification en Intelligence Artificielle de l\'IAC, en partenariat avec les universités camerounaises.',
    type: 'Launch',
    featured: false,
  },
];

const typeColors = {
  Workshop: '#00d2ff',
  Summit: '#312783',
  Seminar: '#f59e0b',
  Launch: '#10b981',
};

const Agenda = () => (
  <section className="agenda">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="agenda__tag">Calendrier 2024 — 2025</span>
      <h2 className="section-title">Agenda des Activités</h2>
      <p>Ne manquez aucun rendez-vous de la révolution technologique au Cameroun.</p>
    </motion.div>

    <div className="agenda__list">
      {events.map((event, index) => (
        <motion.div
          className={`event-card ${event.featured ? 'featured' : ''}`}
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ '--type-color': typeColors[event.type] }}
        >
          <div className="event-card__date">
            <span className="day">{event.day}</span>
            <span className="month">{event.month}</span>
          </div>

          <div className="event-card__info">
            <div className="type-badge" style={{ background: `${typeColors[event.type]}20`, color: typeColors[event.type] }}>
              {event.type}
            </div>
            <h3>{event.title}</h3>
            <p className="time"> <img src={clockIcon} alt=""/> {event.time}</p>
            <p className="loc"><img src={locationIcon} alt=""/> {event.location}</p>
            <p className="desc">{event.description}</p>
          </div>

          <div className="event-card__action">
            <button className="btn-register">S'inscrire</button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Agenda;

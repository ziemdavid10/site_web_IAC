import { motion } from 'framer-motion';
import './Agenda.scss';

const events = [
  {
    date: "27 Sept - 26 Oct",
    title: "Ateliers de Renforcement en IA",
    time: "Samedi & Dimanche (09h - 17h)",
    description: "Formations pratiques sur ChatGPT, Copilot, Google Gemini et l'IA générative.",
    type: "Workshop"
  },
  {
    date: "20 Novembre 2024",
    title: "2e édition des Journées Camerounaises de l'IA",
    time: "Toute la journée",
    location: "Yaoundé",
    description: "Le grand rendez-vous national des acteurs de l'écosystème IA au Cameroun.",
    type: "Summit",
    featured: true
  },
  {
    date: "Décembre",
    title: "IA et Publicité",
    time: "À définir",
    description: "Session dédiée à la valeur ajoutée de l'IA pour le secteur publicitaire.",
    type: "Seminar"
  }
];

const Agenda = () => {
  return (
    <section className="agenda">
      <div className="section-header">
        <h2 className="section-title">Calendrier des Activités</h2>
        <p>Ne manquez aucun rendez-vous de la révolution technologique au Cameroun.</p>
      </div>

      <div className="agenda__list">
        {events.map((event, index) => (
          <motion.div 
            className={`event-card ${event.featured ? 'featured' : ''}`}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="event-card__date">
              <span className="day">{event.date.split(' ')[0]}</span>
              <span className="month">{event.date.split(' ').slice(1).join(' ')}</span>
            </div>
            
            <div className="event-card__info">
              <div className="type-badge">{event.type}</div>
              <h3>{event.title}</h3>
              <p className="time">🕒 {event.time}</p>
              {event.location && <p className="loc">📍 {event.location}</p>}
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
};

export default Agenda;
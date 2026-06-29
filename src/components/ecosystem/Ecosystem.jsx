import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Ecosystem.scss';

const ecosystemData = [
  {
    name: 'Alain BOMBA',
    solution: 'iNgeyaa',
    role: 'Ingénieur IA & Smart City',
    desc: 'Système de gestion intelligente de la circulation utilisant l\'AIoT pour réguler les feux de signalisation en temps réel et réduire les embouteillages dans les grandes villes camerounaises.',
    tag: 'Smart City',
    color: '#00d2ff',
    achievements: ['AIoT Traffic Management', 'Réduction embouteillages -40%', 'Déployé à Yaoundé'],
  },
  {
    name: 'David KENFACK',
    solution: 'Dastudy',
    role: 'Entrepreneur EdTech',
    desc: 'Plateforme éducative révolutionnaire intégrant un assistant virtuel IA, comptant plus de 500 000 téléchargements dans 15 pays africains. Lauréat de plusieurs prix d\'innovation.',
    tag: 'EdTech',
    color: '#f59e0b',
    achievements: ['500K+ téléchargements', '15 pays couverts', 'Assistant IA intégré'],
  },
  {
    name: 'Bruno Alex KENFACK',
    solution: 'AITECAF',
    role: 'Expert Computer Vision',
    desc: 'Expert en vision par ordinateur et ambassadeur Zindi Africa, développant des solutions IA adaptées aux défis spécifiques du continent africain. Formateur et mentor de la prochaine génération.',
    tag: 'Computer Vision',
    color: '#8b5cf6',
    achievements: ['Ambassadeur Zindi Africa', 'Expert Vision par Ordinateur', 'Mentor IA'],
  },
  {
    name: 'Prof. Ransome BAWACK',
    solution: 'Recherche IA',
    role: 'Professeur & Chercheur',
    desc: 'Professeur invité à l\'ASMAC, spécialiste de l\'IA appliquée aux sciences de gestion et à la transformation digitale des organisations africaines. Auteur de nombreuses publications internationales.',
    tag: 'Recherche',
    color: '#10b981',
    achievements: ['Invité ASMAC', 'Publications internationales', 'IA & Management'],
  },
  {
    name: 'M. Boris Landry KOUEKAM',
    solution: 'IAC',
    role: 'Fondateur & Directeur IAC',
    desc: 'Visionnaire et fondateur de l\'Intelligence Artificielle Cameroun. Interviewé par la CRTV, il porte la voix de l\'IA camerounaise sur la scène nationale et internationale, notamment au sein du réseau GAIN à Riyad.',
    tag: 'Leadership',
    color: '#312783',
    achievements: ['Fondateur IAC', 'Membre GAIN — Riyad', 'Interviewé CRTV'],
  },
  {
    name: 'Guillaume SOTO',
    solution: 'Expertise France',
    role: 'Partenaire International',
    desc: 'Représentant d\'Expertise France au Cameroun, partenaire stratégique de l\'IAC pour le renforcement des capacités institutionnelles et le développement de l\'écosystème IA national.',
    tag: 'Partenariat',
    color: '#ef4444',
    achievements: ['Expertise France', 'Coopération technique', 'Renforcement capacités'],
  },
];

const Ecosystem = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="ecosystem">
      <motion.div
        className="ecosystem__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="ecosystem__tag">Acteurs & Innovateurs</span>
        <h2 className="section-title">Écosystème IA National</h2>
        <p className="section-subtitle">
          Découvrez les pionniers qui façonnent l'avenir technologique du Cameroun
          et portent l'innovation africaine sur la scène mondiale.
        </p>
      </motion.div>

      <div className="ecosystem__grid">
        {ecosystemData.map((actor, index) => (
          <motion.div
            className={`actor-card ${selected === index ? 'expanded' : ''}`}
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: `0 20px 40px rgba(0,0,0,0.12)` }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => setSelected(selected === index ? null : index)}
            style={{ '--actor-color': actor.color }}
          >
            <div className="actor-card__badge">{actor.tag}</div>
            <div className="actor-card__content">
              <h3>{actor.solution}</h3>
              <h4>{actor.name}</h4>
              <p className="actor-role">{actor.role}</p>
              <p className="actor-desc">{actor.desc}</p>
            </div>

            <AnimatePresence>
              {selected === index && (
                <motion.div
                  className="actor-card__achievements"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {actor.achievements.map((a, i) => (
                    <span key={i} className="achievement-tag">✓ {a}</span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="actor-card__footer">
              <button className="btn-text">
                {selected === index ? 'Réduire ↑' : 'En savoir plus →'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;

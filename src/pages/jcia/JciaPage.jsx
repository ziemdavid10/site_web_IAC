import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from '../../components/hero/Countdown';
import './JciaPage.scss';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

// ── DONNÉES ──────────────────────────────────────────────────────────────────

const keyStats = [
  { icon: 'groups', value: '3 000', label: 'Participants cumulés' },
  { icon: 'language', value: '10', label: 'Pays représentés' },
  { icon: 'wifi', value: '200', label: 'Participants en ligne' },
  { icon: 'how_to_vote', value: '+5 000', label: 'Votants CAIA 2025' },
  { icon: 'mic', value: '34', label: 'Intervenants programmés' },
  { icon: 'record_voice_over', value: '40', label: 'Prises de parole' },
  { icon: 'school', value: '2', label: 'Masterclasses' },
  { icon: 'emoji_events', value: '7', label: 'Catégories CAIA' },
];

const days = [
  {
    num: 1,
    date: '22 Avril 2025',
    place: 'Hilton Hôtel — Salle Bouma',
    icon: 'location_city',
    color: '#312783',
    highlights: [
      'Cérémonie d\'ouverture officielle avec le Ministre des Postes et Télécommunications',
      'Conférence inaugurale du Prof Ébénézier Njoh Mouelle : « Le pouvoir d\'État et la mise en œuvre de l\'IA en Afrique »',
      'Démonstration « Witness » — vidéosurveillance augmentée par IA (Dr Ifriky Tadadjeu)',
      'Démonstration PAKAZURE « Seavantis » — IA appliquée à la logistique maritime',
      'Keynote Alain Claude Bah Essem — IA & Fintech (Nexus Cloud Technologies, UK)',
      'Lecture des Cameroon Artificial Intelligence Awards 2025',
      'Ouverture du Salon d\'exposition 100 % IA',
      'Conférence : « IA, pilier de l\'économie numérique : avances, freins, perspectives »',
    ],
  },
  {
    num: 2,
    date: '23 Avril 2025',
    place: 'ENSPY — Salle des Actes',
    icon: 'science',
    color: '#0891b2',
    highlights: [
      'Masterclass Guillaume Soto : « Les agents IA et le Retrieval-Augmented Generation »',
      'Masterclass Habib Iya : « Tirer profit de l\'IA générative dans le contexte entrepreneurial local »',
      'Fireside Chat — Success Stories : talents camerounais de l\'IA à l\'international',
      'Conférence : « L\'IA Made in Cameroon : solutions pour nos challenges communautaires »',
      'Intervenants : Dr Fred Ngaba, David Kenfack, Armel Fameni, Sage Destin Kouam',
    ],
  },
  {
    num: 3,
    date: '24 Avril 2025',
    place: 'IRIC — Amphi 500',
    icon: 'account_balance',
    color: '#7c3aed',
    highlights: [
      'Cérémonie de clôture avec chœur des Internationalistes de l\'IRIC',
      'Conférence : « L\'IAmatie : mariage entre l\'IA et la diplomatie économique »',
      'Exposé UNESCO : « IA et Humanité — pourquoi l\'UNESCO s\'engage pour une IA éthique »',
      'Remise d\'une distinction honorifique à l\'IAC',
      'Remise d\'un prix honorifique au Ministre des Postes et Télécommunications',
      'Lecture des recommandations stratégiques des JCIA 2025',
      'Photo de famille et fin officielle',
    ],
  },
];

const awards = [
  { cat: 'Best Scientific Contribution in AI', winner: 'CHEGNO TEKAM Valencienne', icon: 'biotech' },
  { cat: 'Best Functional AI Solution', winner: 'SHINYUY Marcel Fonyuy', icon: 'memory' },
  { cat: 'Most Innovative AI Prototype', winner: 'GWADE Steve', icon: 'lightbulb' },
  { cat: 'Promising Idea for AI Future', winner: 'EYENGA MINKONDA LAURENTINE Serena', icon: 'rocket_launch' },
  { cat: 'Outstanding Female Contributor in AI', winner: 'LONI TANDE EBENYE Miriam', icon: 'stars' },
  { cat: '1st Place — JCIA Hackathon', winner: 'Ubinifu — DJIKA ASMAOUN Houma', icon: 'emoji_events' },
  { cat: '2nd Place — JCIA Hackathon', winner: 'PlumVision — GWADE Steve', icon: 'workspace_premium' },
];

const recommendations = [
  {
    icon: 'gavel',
    title: 'Gouvernance & Souveraineté',
    text: 'Mettre en place une stratégie nationale de l\'IA portée au plus haut niveau institutionnel, avec feuille de route, priorités sectorielles et indicateurs mesurables.',
  },
  {
    icon: 'trending_up',
    title: 'Économie & Industrialisation',
    text: 'Identifier les secteurs prioritaires (agriculture, santé, éducation, logistique, finance) et lancer des programmes pilotes sectoriels IA.',
  },
  {
    icon: 'public',
    title: 'Diplomatie & Coopération',
    text: 'Inscrire l\'IA dans l\'agenda diplomatique camerounais et positionner les JCIA comme plateforme annuelle de diplomatie technologique.',
  },
  {
    icon: 'balance',
    title: 'Éthique & Inclusion',
    text: 'Adopter un cadre national d\'éthique de l\'IA aligné sur les principes internationaux et adapté aux réalités camerounaises.',
  },
  {
    icon: 'storage',
    title: 'Données & Infrastructures',
    text: 'Mettre en place une politique nationale de données pour l\'IA et investir dans la connectivité, le cloud et les centres de données.',
  },
  {
    icon: 'school',
    title: 'Éducation & Compétences',
    text: 'Intégrer l\'IA dans les curricula universitaires et créer des parcours de formation différenciés pour tous les profils.',
  },
  {
    icon: 'store',
    title: 'IA Made in Cameroon',
    text: 'Créer un label « IA Made in Cameroon » pour valoriser et accompagner les solutions développées localement.',
  },
  {
    icon: 'hub',
    title: 'Réseau Diaspora',
    text: 'Créer un réseau international des talents camerounais de l\'IA pour le mentorat, les masterclasses et les collaborations.',
  },
];

const roadmap = [
  { horizon: '30 jours', action: 'Publier le rapport officiel et la galerie média', icon: 'description' },
  { horizon: '60 jours', action: 'Réunion de restitution avec les partenaires', icon: 'groups' },
  { horizon: '90 jours', action: 'Base de données des startups et projets IA', icon: 'database' },
  { horizon: '3 — 6 mois', action: 'Lancer des ateliers sectoriels IA', icon: 'handshake' },
  { horizon: '6 mois', action: 'Suivi des lauréats CAIA et exposants', icon: 'track_changes' },
  { horizon: '12 mois', action: 'Publier un baromètre camerounais de l\'IA', icon: 'bar_chart' },
];

const partners = [
  { logo: '/logoIAC/undp-logo-blue.4f32e17f.svg', name: 'PNUD' },
  { logo: '/logoIAC/logo-eu--fr.svg', name: 'Union Européenne' },
  { logo: '/logoIAC/logo-expertise-france-fond-transparent270-haut.jpg', name: 'Expertise France' },
  { logo: '/logoIAC/MINPOSTEL.png', name: 'MINPOSTEL' },
  { logo: '/logoIAC/IRIC.png', name: 'IRIC' },
  { logo: '/logoIAC/UnicDouala.jpg', name: 'Univ. de Douala' },
  { logo: '/logoIAC/logo-UCAC-ICY.png', name: 'UCAC-ICY' },
  { logo: '/logoIAC/canal2.png', name: 'Canal 2' },
  { logo: '/logoIAC/logo_CRTV.svg', name: 'CRTV' },
  { logo: '/logoIAC/Advanced-IT-Group.png', name: 'Advanced-IT' },
];

// ── COMPOSANT ────────────────────────────────────────────────────────────────

const JciaPage = ({ onBack }) => {
  const [activeDay, setActiveDay] = useState(0);
  const [openRec, setOpenRec] = useState(null);

  return (
    <div className="jcia-page">

      {/* ── HERO ── */}
      <section className="jcia-hero">
        <div className="jcia-hero__bg" />
        <div className="jcia-hero__overlay" />
        <motion.div className="jcia-hero__content" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.8 }}>
          <button className="jcia-back-btn" onClick={onBack}>
            <span className="material-symbols-rounded">arrow_back</span> Retour
          </button>
          <span className="jcia-hero__edition">2e Édition · Rapport Officiel</span>
          <h1>Journées Camerounaises<br /><span>de l'Intelligence Artificielle</span></h1>
          <p className="jcia-hero__theme">
            <span className="material-symbols-rounded">format_quote</span>
            Intelligence Artificielle et Développement Économique : Innover pour Transformer
          </p>
          <div className="jcia-hero__meta">
            <span><span className="material-symbols-rounded">calendar_month</span> 22 — 24 Avril 2025</span>
            <span><span className="material-symbols-rounded">location_on</span> Hilton · ENSPY · IRIC — Yaoundé</span>
            <span><span className="material-symbols-rounded">corporate_fare</span> Organisé par l'IAC</span>
          </div>
        </motion.div>
      </section>

      {/* ── COUNTDOWN JCIA 2027 ── */}
      <section className="jcia-countdown-section">
        <motion.div
          className="jcia-countdown-section__inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="jcia-countdown-section__text">
            <span className="jcia-tag">
              <span className="material-symbols-rounded">event_upcoming</span>
              Prochaine édition
            </span>
            <h2>JCIA 2027</h2>
            <p>
              Rendez-vous les <strong>20 et 21 Avril 2027</strong> pour la prochaine édition
              des Journées Camerounaises de l'Intelligence Artificielle.
              Marquez la date dans vos agendas !
            </p>
            <div className="jcia-countdown-section__badges">
              <span><span className="material-symbols-rounded">calendar_month</span> 20 — 21 Avril 2027</span>
              <span><span className="material-symbols-rounded">location_on</span> Yaoundé, Cameroun</span>
            </div>
          </div>
          <div className="jcia-countdown-section__timer">
            <Countdown />
          </div>
        </motion.div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section className="jcia-stats">
        <motion.div className="jcia-section-header" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="jcia-tag"><span className="material-symbols-rounded">analytics</span> Chiffres Clés</span>
          <h2>L'édition 2025 en chiffres</h2>
        </motion.div>
        <div className="jcia-stats__grid">
          {keyStats.map((s, i) => (
            <motion.div key={i} className="jcia-stat-card"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <span className="material-symbols-rounded jcia-stat-card__icon">{s.icon}</span>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section className="jcia-program">
        <motion.div className="jcia-section-header" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="jcia-tag"><span className="material-symbols-rounded">event_note</span> Programme</span>
          <h2>Architecture des 3 journées</h2>
          <p>Un parcours d'expérience articulé autour de 4 piliers : Connaissance, Innovation, Reconnaissance, Connexion.</p>
        </motion.div>

        <div className="jcia-day-tabs">
          {days.map((d, i) => (
            <button key={i} className={`day-tab ${activeDay === i ? 'active' : ''}`}
              onClick={() => setActiveDay(i)} style={{ '--day-color': d.color }}>
              <span className="material-symbols-rounded">{d.icon}</span>
              Jour {d.num}
              <em>{d.date}</em>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeDay} className="jcia-day-content"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}
            style={{ '--day-color': days[activeDay].color }}
          >
            <div className="jcia-day-content__header">
              <span className="material-symbols-rounded">{days[activeDay].icon}</span>
              <div>
                <h3>Jour {days[activeDay].num} — {days[activeDay].date}</h3>
                <p><span className="material-symbols-rounded">location_on</span> {days[activeDay].place}</p>
              </div>
            </div>
            <ul className="jcia-day-content__list">
              {days[activeDay].highlights.map((h, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}>
                  <span className="material-symbols-rounded">chevron_right</span> {h}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── AWARDS ── */}
      <section className="jcia-awards">
        <motion.div className="jcia-section-header" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="jcia-tag"><span className="material-symbols-rounded">emoji_events</span> Awards</span>
          <h2>Cameroon Artificial Intelligence Awards 2025</h2>
          <p>7 catégories, plus de 5 000 votants — les meilleurs talents IA du Cameroun mis à l'honneur.</p>
        </motion.div>
        <div className="jcia-awards__grid">
          {awards.map((a, i) => (
            <motion.div key={i} className="jcia-award-card"
              initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: '0 24px 50px rgba(49,39,131,0.15)' }}
            >
              <div className="jcia-award-card__icon">
                <span className="material-symbols-rounded">{a.icon}</span>
              </div>
              <span className="jcia-award-card__num">#{i + 1}</span>
              <h4>{a.cat}</h4>
              <p>{a.winner}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── RECOMMANDATIONS ── */}
      <section className="jcia-recs">
        <motion.div className="jcia-section-header" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="jcia-tag"><span className="material-symbols-rounded">tips_and_updates</span> Recommandations</span>
          <h2>Recommandations Stratégiques</h2>
          <p>13 axes d'action formulés à partir des grandes thématiques des JCIA 2025.</p>
        </motion.div>
        <div className="jcia-recs__grid">
          {recommendations.map((r, i) => (
            <motion.div key={i} className={`jcia-rec-card ${openRec === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              onClick={() => setOpenRec(openRec === i ? null : i)}
            >
              <div className="jcia-rec-card__head">
                <span className="material-symbols-rounded">{r.icon}</span>
                <h4>{r.title}</h4>
                <span className="material-symbols-rounded toggle-icon">
                  {openRec === i ? 'expand_less' : 'expand_more'}
                </span>
              </div>
              <AnimatePresence>
                {openRec === i && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    {r.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="jcia-roadmap">
        <motion.div className="jcia-section-header" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="jcia-tag"><span className="material-symbols-rounded">route</span> Feuille de route</span>
          <h2>Actions Post-JCIA 2025</h2>
        </motion.div>
        <div className="jcia-roadmap__track">
          {roadmap.map((r, i) => (
            <motion.div key={i} className="jcia-roadmap__item"
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <div className="jcia-roadmap__dot">
                <span className="material-symbols-rounded">{r.icon}</span>
              </div>
              <div className="jcia-roadmap__body">
                <span className="jcia-roadmap__horizon">{r.horizon}</span>
                <p>{r.action}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section className="jcia-partners">
        <motion.div className="jcia-section-header" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="jcia-tag"><span className="material-symbols-rounded">handshake</span> Partenaires</span>
          <h2>Institutions & Partenaires Associés</h2>
        </motion.div>
        <div className="jcia-partners__logos">
          {partners.map((p, i) => (
            <motion.div key={i} className="jcia-partner-logo"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.08 }}
            >
              <img src={p.logo} alt={p.name} />
              <span>{p.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONCLUSION ── */}
      <section className="jcia-conclusion">
        <motion.div className="jcia-conclusion__inner" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="material-symbols-rounded jcia-conclusion__icon">flare</span>
          <h2>L'enjeu est désormais de bâtir</h2>
          <p>
            Les JCIA 2025 ont marqué une étape importante dans la construction d'un
            écosystème camerounais de l'IA. L'enjeu n'est plus seulement de parler
            d'intelligence artificielle — c'est de bâtir, avec méthode et responsabilité,
            les conditions d'une IA utile au Cameroun, ouverte sur l'Afrique
            et connectée au monde.
          </p>
          <button className="jcia-conclusion__cta" onClick={onBack}>
            <span className="material-symbols-rounded">arrow_back</span> Retour au site IAC
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default JciaPage;

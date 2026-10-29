import {
  LuBuilding2 as BuildingIcon,
  LuFileText as DocumentIcon,
  LuGlobe as GlobeIcon,
  LuGraduationCap as GraduationIcon,
  LuHandshake as HandshakeIcon,
  LuLightbulb as IdeaIcon,
  LuRocket as RocketIcon,
  LuScale as JusticeIcon,
} from 'react-icons/lu';
import { motion } from 'framer-motion';
import './Mission.scss';

const missions = [
  { icon: BuildingIcon, text: "Accompagner l'État du Cameroun dans sa politique d'adoption de l'IA." },
  { icon: HandshakeIcon, text: "Fédérer les acteurs de l'écosystème IA au Cameroun." },
  { icon: BuildingIcon, text: "Accompagner les organisations publiques et privées dans leur transformation numérique." },
  { icon: GlobeIcon, text: "Promouvoir les initiatives camerounaises à l'international." },
  { icon: IdeaIcon, text: "Résoudre des problèmes locaux par des solutions d'IA locale et souveraine." },
  { icon: JusticeIcon, text: "Favoriser une IA éthique, inclusive et bénéfique pour tous les citoyens." },
  { icon: RocketIcon, text: "Renforcer la capacité d'innovation technologique au Cameroun." },
  { icon: GraduationIcon, text: "Soutenir les talents locaux, les startups et les chercheurs en IA." },
  { icon: DocumentIcon, text: "Contribuer à la création d'un cadre réglementaire pour l'IA au Cameroun." },
];

const keyFacts = [
  { label: 'Fondée en', value: '2022', sub: 'Suite à l\'IAChallenge de Bordeaux' },
  { label: 'Siège', value: 'Yaoundé', sub: 'Rue de l\'aéroport, Coron' },
  { label: 'Statut', value: 'ONG', sub: 'Reconnue par l\'État du Cameroun' },
  { label: 'Réseau', value: 'GAIN', sub: 'Global AI Network — Riyad' },
];

const Vision = () => (
  <section className="vision-section" id="about">
    <div className="vision-container">
      <motion.div
        className="vision-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="tag">Notre Vision</span>
        <h2>Bâtir un avenir technologique éthique pour l'Afrique</h2>
        <p>
          Fondée suite au succès de l'IAChallenge 2022 à Bordeaux, l'Intelligence Artificielle
          Cameroun (IAC) est la première organisation nationale dédiée à la promotion, au
          développement et à la régulation éthique de l'IA au Cameroun. Reconnue par l'État,
          membre du réseau mondial GAIN, l'IAC est le pont entre l'Afrique et l'innovation mondiale.
        </p>

        <div className="key-facts">
          {keyFacts.map((f, i) => (
            <motion.div
              key={i}
              className="key-fact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <strong>{f.value}</strong>
              <span className="fact-label">{f.label}</span>
              <span className="fact-sub">{f.sub}</span>
            </motion.div>
          ))}
        </div>

        <h3 className="missions-title">Nos Missions</h3>
        <div className="mission-list">
          {missions.map((m, i) => (
            <motion.div
              key={i}
              className="mission-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <span className="mission-icon"><m.icon size={28} aria-hidden /></span>
              <span>{m.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="vision-visual">
        <div className="ai-sphere">
          <div className="orbit orbit--outer" />
          <div className="orbit orbit--inner" />
          <div className="core">
            <img src="/Logo 1.png" alt="IAC" />
          </div>
        </div>

        <div className="vision-quote">
          <blockquote>
            "L'IA n'est pas une menace pour l'Afrique, c'est sa plus grande opportunité."
          </blockquote>
          <cite>— M. Boris Landry KOUEKAM, Fondateur IAC</cite>
        </div>
      </div>
    </div>
  </section>
);

export default Vision;

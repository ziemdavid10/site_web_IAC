import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LegalShared.scss';

const cookieTypes = [
  {
    name: 'Cookies essentiels',
    icon: 'lock',
    required: true,
    color: '#312783',
    desc: 'Indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.',
    examples: ['Session utilisateur', 'Préférences de langue', 'Sécurité CSRF', 'Consentement cookies'],
  },
  {
    name: 'Cookies analytiques',
    icon: 'analytics',
    required: false,
    color: '#0891b2',
    desc: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
    examples: ['Pages visitées', 'Durée de visite', 'Source de trafic', 'Taux de rebond'],
  },
  {
    name: 'Cookies fonctionnels',
    icon: 'tune',
    required: false,
    color: '#7c3aed',
    desc: 'Permettent de mémoriser vos préférences pour une meilleure expérience.',
    examples: ['Préférences d\'affichage', 'Formulaires pré-remplis', 'Langue préférée'],
  },
  {
    name: 'Cookies marketing',
    icon: 'campaign',
    required: false,
    color: '#f59e0b',
    desc: 'Utilisés pour vous proposer des contenus pertinents sur nos activités et événements.',
    examples: ['Suivi des campagnes JCIA', 'Publicités ciblées', 'Réseaux sociaux'],
  },
];

const sections = [
  {
    id: 'definition',
    icon: 'help_outline',
    title: 'Qu\'est-ce qu\'un cookie ?',
    content: (
      <>
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
          lors de votre visite sur notre site. Il permet au site de mémoriser des informations sur votre
          visite, comme votre langue préférée et d'autres paramètres.
        </p>
        <div className="legal-highlight">
          Les cookies ne contiennent pas de virus et ne peuvent pas endommager votre appareil.
          Ils sont essentiels au bon fonctionnement de nombreux services en ligne.
        </div>
      </>
    ),
  },
  {
    id: 'types',
    icon: 'category',
    title: 'Types de cookies utilisés',
    content: (
      <div className="cookie-types-grid">
        {cookieTypes.map((c, i) => (
          <div key={i} className="cookie-type-card" style={{ '--cookie-color': c.color }}>
            <div className="cookie-type-card__head">
              <span className="material-symbols-rounded">{c.icon}</span>
              <div>
                <h4>{c.name}</h4>
                {c.required && <span className="required-badge">Obligatoire</span>}
              </div>
            </div>
            <p>{c.desc}</p>
            <ul>
              {c.examples.map((e, j) => <li key={j}>{e}</li>)}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'duree',
    icon: 'schedule',
    title: 'Durée de conservation',
    content: (
      <ul>
        <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
        <li><strong>Cookies persistants :</strong> conservés jusqu'à 13 mois maximum</li>
        <li><strong>Cookies de consentement :</strong> conservés 6 mois (mémorisation de vos choix)</li>
        <li><strong>Cookies analytiques :</strong> conservés 13 mois</li>
      </ul>
    ),
  },
  {
    id: 'gestion',
    icon: 'settings',
    title: 'Gérer vos préférences',
    content: (
      <>
        <p>
          Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement
          disponible en bas de page, ou directement depuis les paramètres de votre navigateur.
        </p>
        <p>Instructions pour les principaux navigateurs :</p>
        <ul>
          <li><strong>Google Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
          <li><strong>Mozilla Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
          <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
          <li><strong>Microsoft Edge :</strong> Paramètres → Confidentialité → Cookies</li>
        </ul>
        <div className="legal-highlight">
          La désactivation de certains cookies peut affecter le fonctionnement de notre site
          et la qualité de votre expérience de navigation.
        </div>
      </>
    ),
  },
  {
    id: 'tiers',
    icon: 'share',
    title: 'Cookies tiers',
    content: (
      <p>
        Notre site peut intégrer des contenus ou services de tiers (réseaux sociaux, outils d'analyse)
        susceptibles de déposer leurs propres cookies. L'IAC n'a pas de contrôle sur ces cookies tiers.
        Nous vous invitons à consulter les politiques de confidentialité de ces services pour plus d'informations.
      </p>
    ),
  },
];

const CookiePolicyPage = () => (
  <div>
    <section className="legal-hero">
      <motion.div
        className="legal-hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="legal-hero__tag">
          <span className="material-symbols-rounded">cookie</span>
          Politique de Cookies
        </span>
        <h1>Gestion des Cookies</h1>
        <p>
          Transparence totale sur l'utilisation des cookies sur le site de l'IAC
          et sur la manière dont vous pouvez gérer vos préférences.
        </p>
        <div className="legal-hero__meta">
          <span><span className="material-symbols-rounded">calendar_month</span> Dernière mise à jour : Janvier 2025</span>
        </div>
      </motion.div>
    </section>

    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="legal-body">
        <nav className="legal-toc">
          <h3>Sommaire</h3>
          <ol>
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
          </ol>
        </nav>

        {sections.map((s, i) => (
          <motion.div
            key={s.id}
            id={s.id}
            className="legal-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="legal-section__title">
              <span className="material-symbols-rounded">{s.icon}</span>
              <h2>{s.title}</h2>
            </div>
            {s.content}
          </motion.div>
        ))}
      </div>
    </div>

    <nav className="legal-footer-nav">
      <Link to="/confidentialite">
        <span className="material-symbols-rounded">privacy_tip</span> Confidentialité
      </Link>
      <Link to="/conditions-utilisation">
        <span className="material-symbols-rounded">description</span> CGU
      </Link>
      <Link to="/remboursement">
        <span className="material-symbols-rounded">payments</span> Remboursement
      </Link>
      <Link to="/">
        <span className="material-symbols-rounded">home</span> Accueil
      </Link>
    </nav>
  </div>
);

export default CookiePolicyPage;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LegalShared.scss';

const sections = [
  {
    id: 'objet',
    icon: 'description',
    title: 'Objet et champ d\'application',
    content: (
      <>
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation
          du site web de l'<strong>Intelligence Artificielle Cameroun (IAC)</strong>, accessible à l'adresse
          <strong> www.iacameroun.com</strong>, ainsi que l'ensemble des services numériques proposés par l'IAC.
        </p>
        <p>
          En accédant à ce site, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas
          ces conditions, veuillez ne pas utiliser ce site.
        </p>
      </>
    ),
  },
  {
    id: 'editeur',
    icon: 'corporate_fare',
    title: 'Éditeur du site',
    content: (
      <>
        <p><strong>Intelligence Artificielle Cameroun (IAC)</strong></p>
        <ul>
          <li>Statut : Organisation à but non lucratif reconnue par l'État du Cameroun</li>
          <li>Siège : Rue de l'aéroport, Immeuble Lucas Mill, Face Cami-Toyota Coron, Yaoundé</li>
          <li>Téléphone : +237 699 089 937</li>
          <li>Email : contact@iacameroun.com</li>
        </ul>
      </>
    ),
  },
  {
    id: 'acces',
    icon: 'lock_open',
    title: 'Accès au site',
    content: (
      <>
        <p>
          L'accès au site est gratuit et ouvert à tout utilisateur disposant d'une connexion internet.
          L'IAC se réserve le droit de suspendre, modifier ou interrompre l'accès au site à tout moment,
          sans préavis, notamment pour des raisons de maintenance, de mise à jour ou de sécurité.
        </p>
        <div className="legal-highlight">
          L'IAC ne saurait être tenu responsable des interruptions de service liées à des problèmes
          techniques, de réseau ou de force majeure.
        </div>
      </>
    ),
  },
  {
    id: 'propriete',
    icon: 'copyright',
    title: 'Propriété intellectuelle',
    content: (
      <>
        <p>
          L'ensemble des contenus présents sur ce site — textes, images, logos, vidéos, graphiques,
          données, structure et code source — sont la propriété exclusive de l'IAC ou de ses partenaires,
          et sont protégés par les lois camerounaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p>Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle,
          est strictement interdite sans l'autorisation écrite préalable de l'IAC.</p>
        <ul>
          <li>Le logo IAC et les marques associées sont des marques déposées</li>
          <li>Les contenus des JCIA (rapports, présentations, photos) sont protégés par le droit d'auteur</li>
          <li>Les données statistiques publiées sont la propriété de l'IAC</li>
        </ul>
      </>
    ),
  },
  {
    id: 'utilisation',
    icon: 'rule',
    title: 'Utilisation acceptable',
    content: (
      <>
        <p>En utilisant ce site, vous vous engagez à :</p>
        <ul>
          <li>Ne pas utiliser le site à des fins illicites ou contraires aux présentes CGU</li>
          <li>Ne pas tenter d'accéder sans autorisation aux systèmes informatiques de l'IAC</li>
          <li>Ne pas diffuser de contenus illégaux, offensants, diffamatoires ou portant atteinte aux droits de tiers</li>
          <li>Ne pas perturber le fonctionnement normal du site par des attaques informatiques</li>
          <li>Ne pas collecter les données personnelles d'autres utilisateurs sans leur consentement</li>
          <li>Respecter les droits de propriété intellectuelle de l'IAC et de ses partenaires</li>
        </ul>
      </>
    ),
  },
  {
    id: 'responsabilite',
    icon: 'balance',
    title: 'Limitation de responsabilité',
    content: (
      <>
        <p>
          L'IAC s'efforce de maintenir les informations publiées sur ce site à jour et exactes.
          Cependant, l'IAC ne garantit pas l'exhaustivité, l'exactitude ou l'actualité des informations
          diffusées et décline toute responsabilité pour :
        </p>
        <ul>
          <li>Les erreurs ou omissions dans les contenus publiés</li>
          <li>Les dommages directs ou indirects résultant de l'utilisation du site</li>
          <li>Les contenus de sites tiers accessibles via des liens hypertextes</li>
          <li>Les interruptions ou dysfonctionnements du site</li>
        </ul>
      </>
    ),
  },
  {
    id: 'liens',
    icon: 'link',
    title: 'Liens hypertextes',
    content: (
      <p>
        Le site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif.
        L'IAC n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu,
        leurs pratiques en matière de confidentialité ou leur disponibilité. La création de liens vers
        le site de l'IAC est autorisée sous réserve qu'elle ne porte pas atteinte à l'image de l'organisation.
      </p>
    ),
  },
  {
    id: 'droit',
    icon: 'gavel',
    title: 'Droit applicable et juridiction',
    content: (
      <>
        <p>
          Les présentes CGU sont régies par le droit camerounais. En cas de litige relatif à
          l'interprétation ou à l'exécution des présentes conditions, les parties s'engagent à
          rechercher une solution amiable avant tout recours judiciaire.
        </p>
        <p>
          À défaut de résolution amiable, tout litige sera soumis à la compétence exclusive
          des tribunaux compétents de Yaoundé, Cameroun.
        </p>
      </>
    ),
  },
  {
    id: 'modifications',
    icon: 'edit_note',
    title: 'Modifications des CGU',
    content: (
      <p>
        L'IAC se réserve le droit de modifier les présentes CGU à tout moment. Les modifications
        prennent effet dès leur publication sur le site. Il vous appartient de consulter régulièrement
        cette page. La poursuite de l'utilisation du site après modification vaut acceptation des nouvelles CGU.
      </p>
    ),
  },
];

const TermsPage = () => (
  <div>
    <section className="legal-hero">
      <motion.div
        className="legal-hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="legal-hero__tag">
          <span className="material-symbols-rounded">description</span>
          Conditions d'utilisation
        </span>
        <h1>Conditions Générales d'Utilisation</h1>
        <p>
          Règles et conditions régissant l'accès et l'utilisation du site web
          et des services numériques de l'Intelligence Artificielle Cameroun.
        </p>
        <div className="legal-hero__meta">
          <span><span className="material-symbols-rounded">calendar_month</span> Dernière mise à jour : Janvier 2025</span>
          <span><span className="material-symbols-rounded">gavel</span> Droit camerounais applicable</span>
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
      <Link to="/politique-cookies">
        <span className="material-symbols-rounded">cookie</span> Cookies
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

export default TermsPage;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LegalShared.scss';

const sections = [
  {
    id: 'responsable',
    icon: 'corporate_fare',
    title: 'Responsable du traitement',
    content: (
      <>
        <p>
          Le responsable du traitement de vos données personnelles est <strong>Intelligence Artificielle Cameroun (IAC)</strong>,
          organisation à but non lucratif reconnue par l'État du Cameroun.
        </p>
        <div className="legal-contact-box">
          <h4>Coordonnées du responsable</h4>
          <p>
            Rue de l'aéroport, Immeuble Lucas Mill, Face Cami-Toyota Coron, Yaoundé, Cameroun<br />
            Téléphone : <a href="tel:+237699089937">+237 699 089 937</a><br />
            Email : <a href="mailto:contact@iacameroun.com">contact@iacameroun.com</a>
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'collecte',
    icon: 'database',
    title: 'Données collectées',
    content: (
      <>
        <p>Dans le cadre de nos activités, nous collectons les données suivantes :</p>
        <ul>
          <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
          <li><strong>Données professionnelles :</strong> organisation, fonction, secteur d'activité</li>
          <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
          <li><strong>Données de formulaire :</strong> informations soumises via nos formulaires de contact, d'adhésion ou de partenariat</li>
          <li><strong>Données d'événements :</strong> inscriptions aux JCIA, formations et ateliers IAC</li>
        </ul>
      </>
    ),
  },
  {
    id: 'finalites',
    icon: 'task_alt',
    title: 'Finalités du traitement',
    content: (
      <>
        <p>Vos données sont traitées pour les finalités suivantes :</p>
        <ul>
          <li>Gestion des adhésions et du registre des membres IAC</li>
          <li>Organisation et gestion des événements (JCIA, formations, ateliers)</li>
          <li>Communication institutionnelle et envoi de newsletters</li>
          <li>Traitement des demandes de partenariat et de contact</li>
          <li>Amélioration de nos services numériques et de notre site web</li>
          <li>Respect de nos obligations légales et réglementaires</li>
          <li>Promotion de l'écosystème IA camerounais</li>
        </ul>
        <div className="legal-highlight">
          Nous ne vendons, ne louons et ne cédons jamais vos données personnelles à des tiers à des fins commerciales.
        </div>
      </>
    ),
  },
  {
    id: 'bases',
    icon: 'gavel',
    title: 'Bases légales du traitement',
    content: (
      <>
        <p>Nos traitements reposent sur les bases légales suivantes :</p>
        <ul>
          <li><strong>Consentement :</strong> pour l'envoi de communications marketing et l'utilisation de cookies non essentiels</li>
          <li><strong>Exécution d'un contrat :</strong> pour la gestion des adhésions et inscriptions aux événements</li>
          <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité de notre site</li>
          <li><strong>Obligation légale :</strong> pour le respect des réglementations applicables au Cameroun</li>
        </ul>
      </>
    ),
  },
  {
    id: 'conservation',
    icon: 'schedule',
    title: 'Durée de conservation',
    content: (
      <>
        <p>Vos données sont conservées pour les durées suivantes :</p>
        <ul>
          <li><strong>Données membres :</strong> durée de l'adhésion + 3 ans après résiliation</li>
          <li><strong>Données événements :</strong> 5 ans à compter de l'événement</li>
          <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
          <li><strong>Données de navigation :</strong> 13 mois maximum</li>
          <li><strong>Données comptables :</strong> 10 ans conformément à la législation camerounaise</li>
        </ul>
      </>
    ),
  },
  {
    id: 'droits',
    icon: 'verified_user',
    title: 'Vos droits',
    content: (
      <>
        <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
          <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
          <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
          <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
          <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
          <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
          <li><strong>Droit de retrait du consentement :</strong> à tout moment, sans affecter les traitements antérieurs</li>
        </ul>
        <div className="legal-contact-box">
          <h4>Exercer vos droits</h4>
          <p>
            Pour exercer vos droits, contactez-nous à :<br />
            <a href="mailto:contact@iacameroun.com">contact@iacameroun.com</a><br />
            Nous répondrons dans un délai de 30 jours.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'securite',
    icon: 'security',
    title: 'Sécurité des données',
    content: (
      <>
        <p>
          L'IAC met en œuvre des mesures techniques et organisationnelles appropriées pour protéger
          vos données contre tout accès non autorisé, perte, destruction ou divulgation accidentelle.
        </p>
        <ul>
          <li>Chiffrement des données en transit (HTTPS/TLS)</li>
          <li>Accès restreint aux données sur la base du besoin d'en connaître</li>
          <li>Sensibilisation régulière de notre équipe à la protection des données</li>
          <li>Procédures de gestion des incidents de sécurité</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    icon: 'cookie',
    title: 'Cookies',
    content: (
      <>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation.
          Pour plus d'informations, consultez notre{' '}
          <Link to="/politique-cookies">Politique de Cookies</Link>.
        </p>
        <div className="legal-highlight">
          Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement
          disponible en bas de page.
        </div>
      </>
    ),
  },
  {
    id: 'modifications',
    icon: 'edit_note',
    title: 'Modifications de la politique',
    content: (
      <p>
        L'IAC se réserve le droit de modifier la présente politique à tout moment.
        Toute modification substantielle sera notifiée par email aux membres enregistrés
        ou via un avis visible sur notre site. La date de dernière mise à jour est
        indiquée en haut de cette page.
      </p>
    ),
  },
];

const PrivacyPage = () => (
  <div>
    <section className="legal-hero">
      <motion.div
        className="legal-hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="legal-hero__tag">
          <span className="material-symbols-rounded">privacy_tip</span>
          Politique de Confidentialité
        </span>
        <h1>Protection de vos données personnelles</h1>
        <p>
          L'IAC s'engage à protéger votre vie privée et à traiter vos données
          personnelles avec transparence, conformément aux réglementations applicables.
        </p>
        <div className="legal-hero__meta">
          <span><span className="material-symbols-rounded">calendar_month</span> Dernière mise à jour : Janvier 2025</span>
          <span><span className="material-symbols-rounded">corporate_fare</span> Intelligence Artificielle Cameroun</span>
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
      <Link to="/conditions-utilisation">
        <span className="material-symbols-rounded">description</span> Conditions d'utilisation
      </Link>
      <Link to="/politique-cookies">
        <span className="material-symbols-rounded">cookie</span> Politique de Cookies
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

export default PrivacyPage;

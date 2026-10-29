import { Link } from 'react-router-dom';
import {
  LuShieldCheck, LuBuilding2, LuDatabase, LuTarget, LuGavel, LuShare2, LuGlobe, LuClock,
  LuUserCheck, LuLock, LuUsers, LuCookie, LuFilePen, LuSettings2, LuLandmark,
} from 'react-icons/lu';
import LegalLayout from './LegalLayout';
import { useCookieConsent } from '../../context/cookieConsent';
import { ORG } from '../../config/site';

const ManageCookiesButton = () => {
  const { openPreferences } = useCookieConsent();
  return (
    <button type="button" className="legal-btn legal-btn--primary" onClick={openPreferences}>
      <LuSettings2 aria-hidden /> Gérer mes préférences de cookies
    </button>
  );
};

const sections = [
  {
    id: 'responsable',
    icon: LuBuilding2,
    title: 'Responsable du traitement',
    content: (
      <>
        <p>
          Le responsable du traitement de vos données personnelles est <strong>{ORG.name} ({ORG.short})</strong>,
          organisation à but non lucratif reconnue par l'État du Cameroun, éditrice du site {ORG.website}.
        </p>
        <div className="legal-contact-box">
          <h4>Coordonnées du responsable</h4>
          <p>
            {ORG.address}<br />
            Téléphone : <a href={ORG.phoneHref}>{ORG.phone}</a><br />
            Email : <a href={`mailto:${ORG.email}`}>{ORG.email}</a>
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'cadre',
    icon: LuLandmark,
    title: 'Cadre juridique',
    content: (
      <>
        <p>
          Les traitements réalisés par l'IAC respectent la <strong>loi n° 2024/017 du 23 décembre 2024 relative
          à la protection des données à caractère personnel au Cameroun</strong>, entrée en vigueur le 23 juin 2026,
          ainsi que la législation camerounaise sur la cybersécurité et les communications électroniques.
        </p>
        <p>
          Lorsque nos services s'adressent à des personnes situées dans l'Union européenne (partenaires, participants
          en ligne aux JCIA), nous appliquons également les principes du Règlement général sur la protection des
          données (RGPD).
        </p>
      </>
    ),
  },
  {
    id: 'collecte',
    icon: LuDatabase,
    title: 'Données collectées',
    content: (
      <>
        <p>Nous ne collectons que les données strictement nécessaires à chaque finalité :</p>
        <ul>
          <li><strong>Identification et contact :</strong> nom, prénom, adresse email, numéro de téléphone.</li>
          <li><strong>Données professionnelles :</strong> organisation, fonction, secteur d'activité.</li>
          <li><strong>Formulaires :</strong> informations transmises via nos formulaires d'adhésion, de partenariat, de candidature ou de contact.</li>
          <li><strong>Événements :</strong> inscriptions aux JCIA, formations et ateliers, votes aux Cameroon Artificial Intelligence Awards.</li>
          <li><strong>Navigation :</strong> adresse IP, type de navigateur, pages consultées — uniquement via des cookies que vous avez acceptés, à l'exception des données techniques indispensables.</li>
        </ul>
        <div className="legal-highlight">
          Nous ne collectons aucune donnée sensible (santé, opinions politiques ou religieuses, données biométriques)
          via ce site.
        </div>
      </>
    ),
  },
  {
    id: 'finalites',
    icon: LuTarget,
    title: 'Finalités du traitement',
    content: (
      <>
        <ul>
          <li>Gestion des adhésions et du registre des membres de l'IAC.</li>
          <li>Organisation des événements (JCIA, formations, ateliers) et délivrance d'attestations.</li>
          <li>Traitement des demandes de partenariat, de contact et des candidatures.</li>
          <li>Communication institutionnelle et lettres d'information, avec votre accord.</li>
          <li>Mesure d'audience et amélioration du site, avec votre accord.</li>
          <li>Respect de nos obligations légales et réglementaires.</li>
        </ul>
        <div className="legal-highlight">
          L'IAC ne vend, ne loue et ne cède jamais vos données personnelles à des tiers à des fins commerciales.
        </div>
      </>
    ),
  },
  {
    id: 'bases',
    icon: LuGavel,
    title: 'Bases légales',
    content: (
      <ul>
        <li><strong>Consentement explicite, libre et éclairé :</strong> lettres d'information, cookies non essentiels. Il peut être retiré à tout moment.</li>
        <li><strong>Exécution d'un contrat ou de mesures précontractuelles :</strong> adhésion, inscription à un événement ou à une formation.</li>
        <li><strong>Intérêt légitime :</strong> sécurité du site, gestion des demandes de contact.</li>
        <li><strong>Obligation légale :</strong> conservation des pièces comptables et réponses aux autorités.</li>
      </ul>
    ),
  },
  {
    id: 'destinataires',
    icon: LuShare2,
    title: 'Destinataires et prestataires',
    content: (
      <>
        <p>
          Vos données sont accessibles aux seules équipes habilitées de l'IAC. Elles peuvent être transmises à des
          prestataires techniques agissant sur nos instructions :
        </p>
        <ul>
          <li><strong>Hébergement du site :</strong> Network Solutions.</li>
          <li><strong>Envoi des formulaires :</strong> EmailJS, qui achemine vos demandes (adhésion, partenariat, candidature) vers notre boîte de réception.</li>
          <li><strong>Polices et ressources du site :</strong> hébergées sur nos propres serveurs ; aucune donnée n'est transmise à un service de polices tiers.</li>
          <li><strong>Mesure d'audience et marketing :</strong> uniquement si vous les avez acceptés — voir la <Link to="/politique-cookies">Politique de cookies</Link>.</li>
          <li><strong>Partenaires d'événements :</strong> uniquement les informations nécessaires (ex. liste d'émargement), avec information préalable.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'transferts',
    icon: LuGlobe,
    title: 'Transferts hors du Cameroun',
    content: (
      <p>
        Certains prestataires (hébergement, outils de mesure) peuvent traiter des données hors du territoire camerounais.
        Conformément à la loi n° 2024/017, ces transferts ne sont réalisés que vers des pays ou des prestataires offrant
        un niveau de protection suffisant, dans le respect des autorisations requises auprès de l'autorité de protection
        des données.
      </p>
    ),
  },
  {
    id: 'conservation',
    icon: LuClock,
    title: 'Durées de conservation',
    content: (
      <table className="legal-table">
        <thead>
          <tr><th>Données</th><th>Durée</th></tr>
        </thead>
        <tbody>
          <tr><td data-label="Données">Membres</td><td data-label="Durée">Durée de l'adhésion + 3 ans</td></tr>
          <tr><td data-label="Données">Participants aux événements</td><td data-label="Durée">5 ans après l'événement</td></tr>
          <tr><td data-label="Données">Demandes de contact et partenariat</td><td data-label="Durée">3 ans après le dernier échange</td></tr>
          <tr><td data-label="Données">Candidatures</td><td data-label="Durée">2 ans, sauf demande de suppression</td></tr>
          <tr><td data-label="Données">Choix en matière de cookies</td><td data-label="Durée">6 mois</td></tr>
          <tr><td data-label="Données">Statistiques de navigation</td><td data-label="Durée">13 mois maximum</td></tr>
          <tr><td data-label="Données">Pièces comptables</td><td data-label="Durée">10 ans (obligation légale)</td></tr>
        </tbody>
      </table>
    ),
  },
  {
    id: 'droits',
    icon: LuUserCheck,
    title: 'Vos droits',
    content: (
      <>
        <p>Vous disposez à tout moment des droits suivants sur vos données :</p>
        <ul>
          <li><strong>Accès :</strong> savoir quelles données nous détenons et en obtenir une copie.</li>
          <li><strong>Rectification :</strong> faire corriger des données inexactes ou incomplètes.</li>
          <li><strong>Effacement :</strong> obtenir la suppression de vos données.</li>
          <li><strong>Opposition :</strong> refuser l'utilisation de vos données, notamment à des fins de prospection ou de profilage.</li>
          <li><strong>Retrait du consentement :</strong> à tout moment, sans remettre en cause les traitements antérieurs.</li>
        </ul>
        <div className="legal-contact-box">
          <h4>Exercer vos droits</h4>
          <p>
            Écrivez-nous à <a href={`mailto:${ORG.email}?subject=${encodeURIComponent('Exercice de mes droits — données personnelles')}`}>{ORG.email}</a>{' '}
            en précisant votre demande. Nous répondons dans un délai d'un mois. Si vous estimez que vos droits ne sont
            pas respectés, vous pouvez saisir l'Autorité de protection des données à caractère personnel du Cameroun.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'securite',
    icon: LuLock,
    title: 'Sécurité des données',
    content: (
      <ul>
        <li>Chiffrement des échanges entre votre navigateur et notre site (HTTPS/TLS).</li>
        <li>Accès aux données limité aux personnes qui en ont besoin.</li>
        <li>Sensibilisation régulière de nos équipes à la protection des données.</li>
        <li>Procédure de gestion et de notification des incidents de sécurité.</li>
      </ul>
    ),
  },
  {
    id: 'mineurs',
    icon: LuUsers,
    title: 'Mineurs',
    content: (
      <p>
        Nos services s'adressent principalement aux adultes. Les mineurs participant à nos activités (concours,
        ateliers scolaires) doivent disposer de l'autorisation de leur représentant légal, qui peut exercer leurs
        droits en leur nom.
      </p>
    ),
  },
  {
    id: 'cookies',
    icon: LuCookie,
    title: 'Cookies',
    content: (
      <>
        <p>
          Les cookies non essentiels ne sont déposés qu'avec votre accord. Le détail des cookies, de leur durée et de
          leurs émetteurs figure dans notre <Link to="/politique-cookies">Politique de cookies</Link>.
        </p>
        <ManageCookiesButton />
      </>
    ),
  },
  {
    id: 'modifications',
    icon: LuFilePen,
    title: 'Évolution de cette politique',
    content: (
      <p>
        Cette politique peut être mise à jour pour refléter l'évolution de nos services ou de la réglementation.
        La date de dernière mise à jour figure en haut de page. En cas de changement important, nous vous en
        informerons par un avis sur le site ou par email pour les membres.
      </p>
    ),
  },
];

const PrivacyPage = () => (
  <LegalLayout
    tag="Politique de confidentialité"
    tagIcon={LuShieldCheck}
    title="Protection de vos données personnelles"
    intro="L'IAC s'engage à traiter vos données avec transparence, loyauté et sécurité. Cette page explique quelles données nous collectons, pourquoi, et comment exercer vos droits."
    meta={[{ icon: LuLandmark, text: 'Conforme à la loi n° 2024/017' }]}
    sections={sections}
  />
);

export default PrivacyPage;

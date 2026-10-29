import { Link } from 'react-router-dom';
import {
  LuCookie, LuInfo, LuLayers, LuListChecks, LuClock, LuSettings2, LuShare2, LuMail,
  LuActivity, LuCircleCheck, LuCircleX, LuRotateCcw,
} from 'react-icons/lu';
import LegalLayout from './LegalLayout';
import { useCookieConsent } from '../../context/cookieConsent';
import { CATEGORIES, SERVICES } from '../../config/cookieConfig';
import { ORG } from '../../config/site';

const formatDate = (iso) => {
  try {
    return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(iso));
  } catch {
    return iso;
  }
};

// ── Statut du consentement, mis à jour en direct ────────────────────────────
const ConsentStatus = () => {
  const { consent, prefs, hasConsented, openPreferences, resetConsent } = useCookieConsent();

  return (
    <section className="consent-status" aria-labelledby="consent-status-title" aria-live="polite">
      <div className="consent-status__head">
        <h2 id="consent-status-title"><LuActivity aria-hidden /> Vos choix actuels</h2>
        <small>
          {hasConsented
            ? `Enregistrés le ${formatDate(consent.ts)}`
            : 'Aucun choix enregistré : seuls les cookies essentiels sont actifs.'}
        </small>
      </div>

      <div className="consent-status__grid">
        {CATEGORIES.map(({ key, label, icon: Icon, color }) => {
          const on = Boolean(prefs[key]);
          return (
            <div key={key} className="consent-status__item" style={{ '--cat-color': color }}>
              <Icon aria-hidden />
              <strong>{label}</strong>
              <span className={`consent-status__pill ${on ? 'is-on' : 'is-off'}`}>
                {on ? <LuCircleCheck aria-hidden /> : <LuCircleX aria-hidden />}
                {on ? 'Autorisés' : 'Refusés'}
              </span>
            </div>
          );
        })}
      </div>

      <div className="consent-status__actions">
        <button type="button" className="legal-btn legal-btn--primary" onClick={openPreferences}>
          <LuSettings2 aria-hidden /> Modifier mes préférences
        </button>
        {hasConsented && (
          <button type="button" className="legal-btn legal-btn--outline" onClick={resetConsent}>
            <LuRotateCcw aria-hidden /> Retirer mon consentement
          </button>
        )}
      </div>

      {hasConsented && (
        <p className="consent-status__id">Référence de votre consentement : {consent.id}</p>
      )}
    </section>
  );
};

const ManageButton = () => {
  const { openPreferences } = useCookieConsent();
  return (
    <button type="button" className="legal-btn legal-btn--primary" onClick={openPreferences}>
      <LuSettings2 aria-hidden /> Ouvrir le panneau de préférences
    </button>
  );
};

// ── Tableau généré depuis le registre (config/cookieConfig.js) ──────────────
const CookieTable = () => {
  const activeServices = SERVICES.filter((s) => s.enabled);
  const labelOf = (key) => CATEGORIES.find((c) => c.key === key)?.label || key;

  return (
    <>
      <p>
        Ce tableau est généré automatiquement à partir de la configuration du site : il reflète en permanence
        les cookies réellement susceptibles d'être déposés.
      </p>
      <table className="legal-table">
        <thead>
          <tr><th>Cookie</th><th>Service</th><th>Catégorie</th><th>Finalité</th><th>Durée</th></tr>
        </thead>
        <tbody>
          {activeServices.flatMap((s) => s.cookies.map((c) => (
            <tr key={`${s.id}-${c.name}`}>
              <td data-label="Cookie"><code>{c.name}</code></td>
              <td data-label="Service">{s.name}<br /><small>{s.provider}</small></td>
              <td data-label="Catégorie">{labelOf(s.category)}</td>
              <td data-label="Finalité">{s.purpose}</td>
              <td data-label="Durée">{c.duration}</td>
            </tr>
          )))}
        </tbody>
      </table>
      {activeServices.length === 1 && (
        <div className="legal-highlight">
          À ce jour, le site n'utilise <strong>aucun cookie de mesure d'audience, fonctionnel ou marketing</strong>.
          Si un tel outil est ajouté, il apparaîtra ici et votre accord vous sera redemandé.
        </div>
      )}
    </>
  );
};

const sections = [
  {
    id: 'definition',
    icon: LuInfo,
    title: "Qu'est-ce qu'un cookie ?",
    content: (
      <>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lorsque
          vous consultez un site. Il permet de mémoriser des informations sur votre visite, comme vos préférences,
          ou de mesurer la fréquentation des pages.
        </p>
        <div className="legal-highlight">
          Les cookies non essentiels ne sont jamais déposés avant votre accord. Refuser est aussi simple qu'accepter :
          un seul clic, sans incidence sur l'accès au site.
        </div>
      </>
    ),
  },
  {
    id: 'categories',
    icon: LuLayers,
    title: 'Catégories de cookies',
    content: (
      <div className="cookie-types-grid">
        {CATEGORIES.map(({ key, label, icon: Icon, color, description, required }) => (
          <div key={key} className="cookie-type-card" style={{ '--cookie-color': color }}>
            <div className="cookie-type-card__head">
              <Icon aria-hidden />
              <div>
                <h4>{label}</h4>
                {required && <span className="required-badge">Obligatoire</span>}
              </div>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'liste',
    icon: LuListChecks,
    title: 'Liste des cookies utilisés',
    content: <CookieTable />,
  },
  {
    id: 'duree',
    icon: LuClock,
    title: 'Durée de conservation de vos choix',
    content: (
      <ul>
        <li>Vos choix sont conservés <strong>6 mois</strong> dans le cookie <code>iac_consent</code>, puis vous sont redemandés.</li>
        <li>Ils vous sont également redemandés si la liste des cookies utilisés évolue de façon significative.</li>
        <li>Lorsque vous retirez votre accord à une catégorie, les cookies correspondants sont immédiatement supprimés.</li>
      </ul>
    ),
  },
  {
    id: 'gestion',
    icon: LuSettings2,
    title: 'Gérer vos préférences',
    content: (
      <>
        <p>
          Vous pouvez modifier vos choix à tout moment : via le bouton en haut de cette page, le lien
          « Gérer les cookies » en pied de page, ou l'icône cookie affichée en bas à gauche de l'écran.
        </p>
        <ManageButton />
        <p style={{ marginTop: 20 }}>Vous pouvez aussi bloquer les cookies depuis votre navigateur :</p>
        <ul>
          <li><strong>Google Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies tiers</li>
          <li><strong>Mozilla Firefox :</strong> Paramètres → Vie privée et sécurité</li>
          <li><strong>Safari :</strong> Réglages → Confidentialité</li>
          <li><strong>Microsoft Edge :</strong> Paramètres → Cookies et autorisations de site</li>
        </ul>
      </>
    ),
  },
  {
    id: 'tiers',
    icon: LuShare2,
    title: 'Cookies tiers',
    content: (
      <p>
        Les outils tiers (mesure d'audience, réseaux sociaux) déposent leurs propres cookies et appliquent leur propre
        politique de confidentialité. Ils ne sont chargés qu'après votre accord pour la catégorie concernée. Pour en
        savoir plus sur le traitement de vos données, consultez notre{' '}
        <Link to="/confidentialite">Politique de confidentialité</Link>.
      </p>
    ),
  },
  {
    id: 'contact',
    icon: LuMail,
    title: 'Contact',
    content: (
      <p>
        Pour toute question sur les cookies, écrivez-nous à <a href={`mailto:${ORG.email}`}>{ORG.email}</a>.
      </p>
    ),
  },
];

const CookiePolicyPage = () => (
  <LegalLayout
    tag="Politique de cookies"
    tagIcon={LuCookie}
    title="Cookies et traceurs"
    intro="Transparence totale sur les cookies utilisés par le site de l'IAC, et contrôle complet sur vos choix, à tout moment."
    sections={sections}
    before={<ConsentStatus />}
  />
);

export default CookiePolicyPage;

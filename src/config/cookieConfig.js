// ─────────────────────────────────────────────────────────────────────────────
// Registre central des cookies du site IAC.
//
// C'est la SOURCE UNIQUE utilisée par :
//   • le bandeau / la modale de consentement,
//   • la page « Politique de cookies » (tableau généré automatiquement),
//   • le moteur qui charge ou bloque les scripts selon le consentement.
//
// Pour ajouter un outil (ex. Matomo, Hotjar, YouTube…), il suffit d'ajouter un
// service dans SERVICES avec sa catégorie, ses cookies et ses fonctions
// load() / revoke(). Aucun autre fichier n'est à modifier.
//
// Les identifiants d'outils tiers se configurent dans le fichier .env :
//   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
//   VITE_META_PIXEL_ID=123456789012345
// Sans identifiant, le service est considéré comme inactif et n'est jamais chargé.
// ─────────────────────────────────────────────────────────────────────────────

import { LuLock, LuChartColumn, LuSlidersHorizontal, LuMegaphone } from 'react-icons/lu';
import { loadScript } from '../utils/cookies';

// Incrémentez cette version quand la liste des cookies change de façon
// significative : le bandeau sera de nouveau présenté à tous les visiteurs.
export const CONSENT_VERSION = '2026-10';
export const CONSENT_COOKIE = 'iac_consent';
export const CONSENT_DURATION_DAYS = 182; // ≈ 6 mois
export const LEGACY_STORAGE_KEY = 'iac_cookie_consent';

export const CATEGORIES = [
  {
    key: 'essential',
    label: 'Essentiels',
    icon: LuLock,
    color: '#312783',
    required: true,
    description:
      'Indispensables au fonctionnement et à la sécurité du site. Ils ne peuvent pas être désactivés.',
  },
  {
    key: 'analytics',
    label: "Mesure d'audience",
    icon: LuChartColumn,
    color: '#0891b2',
    required: false,
    description:
      'Nous aident à comprendre quelles pages sont consultées afin d\'améliorer le contenu et la navigation.',
  },
  {
    key: 'functional',
    label: 'Fonctionnels',
    icon: LuSlidersHorizontal,
    color: '#7c3aed',
    required: false,
    description:
      'Mémorisent vos préférences et activent des contenus intégrés (vidéos, cartes, réseaux sociaux).',
  },
  {
    key: 'marketing',
    label: 'Marketing',
    icon: LuMegaphone,
    color: '#d97706',
    required: false,
    description:
      'Mesurent l\'efficacité de nos campagnes (ex. promotion des JCIA) sur les réseaux sociaux.',
  },
];

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const META_ID = import.meta.env.VITE_META_PIXEL_ID;

export const SERVICES = [
  // ── ESSENTIELS ──────────────────────────────────────────────────────────
  {
    id: 'iac-consent',
    name: 'Consentement cookies',
    provider: 'IAC (ce site)',
    category: 'essential',
    enabled: true,
    purpose: 'Mémorise vos choix en matière de cookies pour ne pas vous les redemander à chaque visite.',
    cookies: [{ name: CONSENT_COOKIE, duration: '6 mois' }],
  },

  // ── MESURE D'AUDIENCE ───────────────────────────────────────────────────
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    provider: 'Google Ireland Ltd.',
    category: 'analytics',
    enabled: Boolean(GA_ID),
    purpose: 'Statistiques de fréquentation anonymisées (pages vues, durée, provenance).',
    privacyUrl: 'https://policies.google.com/privacy',
    cookies: [
      { name: '_ga', pattern: /^_ga($|_)/, duration: '13 mois' },
      { name: '_gid', pattern: /^_gid$/, duration: '24 heures' },
    ],
    load() {
      window[`ga-disable-${GA_ID}`] = false;
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
      window.gtag('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { anonymize_ip: true });
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, { id: 'iac-ga4' });
    },
    revoke() {
      window[`ga-disable-${GA_ID}`] = true;
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
    },
  },

  // ── MARKETING ───────────────────────────────────────────────────────────
  {
    id: 'meta-pixel',
    name: 'Meta Pixel',
    provider: 'Meta Platforms Ireland Ltd.',
    category: 'marketing',
    enabled: Boolean(META_ID),
    purpose: 'Mesure des campagnes publicitaires diffusées sur Facebook et Instagram.',
    privacyUrl: 'https://www.facebook.com/privacy/policy/',
    cookies: [{ name: '_fbp', pattern: /^_fbp$/, duration: '3 mois' }],
    load() {
      if (window.fbq) {
        window.fbq('consent', 'grant');
        return;
      }
      // Équivalent lisible du code d'installation officiel de Meta
      const fbq = function fbq(...args) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue.push(args);
      };
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      window.fbq = fbq;
      window._fbq = fbq;
      loadScript('https://connect.facebook.net/en_US/fbevents.js', { id: 'iac-meta-pixel' });
      window.fbq('init', META_ID);
      window.fbq('track', 'PageView');
    },
    revoke() {
      if (window.fbq) window.fbq('consent', 'revoke');
    },
  },
];

export const servicesByCategory = (categoryKey, { onlyEnabled = true } = {}) =>
  SERVICES.filter((s) => s.category === categoryKey && (!onlyEnabled || s.enabled));

export const DEFAULT_PREFS = CATEGORIES.reduce(
  (acc, c) => ({ ...acc, [c.key]: Boolean(c.required) }),
  {},
);

export const ALL_GRANTED = CATEGORIES.reduce((acc, c) => ({ ...acc, [c.key]: true }), {});

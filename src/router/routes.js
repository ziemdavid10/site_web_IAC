import { lazy } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Table centrale des routes du site.
// Chaque page est chargée à la demande (code splitting) et porte son titre et
// sa description (référencement). Ajouter une page = ajouter une entrée ici.
// ─────────────────────────────────────────────────────────────────────────────

export const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/home/HomePage')),
    title: 'Intelligence Artificielle Cameroun — Hub national de l\'IA',
    description: 'Premier hub national dédié à l\'intelligence artificielle au Cameroun : formations, écosystème, événements et JCIA.',
  },
  {
    path: '/presentation',
    component: lazy(() => import('../pages/presentation/PresentationPage')),
    title: 'Présentation — Notre vision et nos missions',
    description: 'Découvrez la vision, les missions et l\'histoire d\'Intelligence Artificielle Cameroun (IAC).',
  },
  {
    path: '/services',
    component: lazy(() => import('../pages/services/ServicesPage')),
    title: 'Formations & services en intelligence artificielle',
    description: 'Formations rapides, intensives et techniques en IA, conseil, hackathons et accompagnement des organisations.',
  },
  {
    path: '/ecosysteme',
    component: lazy(() => import('../pages/ecosysteme/EcosystemePage')),
    title: 'Écosystème IA au Cameroun',
    description: 'Les acteurs, projets et partenaires de l\'écosystème camerounais de l\'intelligence artificielle.',
  },
  {
    path: '/actualites',
    component: lazy(() => import('../pages/actualites/ActualitesPage')),
    title: 'Actualités & agenda',
    description: 'Galerie photo, faits marquants et agenda des activités d\'Intelligence Artificielle Cameroun.',
  },
  {
    path: '/carrieres',
    component: lazy(() => import('../pages/carrieres/CarrieresPage')),
    title: 'Carrières & stages',
    description: 'Rejoignez l\'IAC : offres de stage, appels à projets et candidatures spontanées.',
  },
  {
    path: '/membres',
    component: lazy(() => import('../pages/membres/MembresPage')),
    title: 'Devenir membre ou partenaire',
    description: 'Adhérez à l\'IAC en tant que membre individuel ou devenez partenaire entreprise.',
  },
  {
    path: '/jcia/2025',
    component: lazy(() => import('../pages/jcia/Jcia2025Page')),
    title: 'JCIA 2025 — Rapport officiel de la 2e édition',
    description: 'Chiffres clés, programme, lauréats CAIA et 12 recommandations des Journées Camerounaises de l\'IA 2025.',
  },
  {
    path: '/jcia/2023',
    component: lazy(() => import('../pages/jcia/Jcia2023Page')),
    title: 'JCIA 2023 — L\'édition fondatrice',
    description: 'La première édition des Journées Camerounaises de l\'Intelligence Artificielle et le rapport Année 1 de l\'IAC.',
  },
  {
    path: '/confidentialite',
    component: lazy(() => import('../pages/legal/PrivacyPage')),
    title: 'Politique de confidentialité',
    description: 'Comment l\'IAC collecte, utilise et protège vos données personnelles, conformément à la loi n° 2024/017.',
  },
  {
    path: '/politique-cookies',
    component: lazy(() => import('../pages/legal/CookiePolicyPage')),
    title: 'Politique de cookies',
    description: 'Les cookies utilisés sur le site de l\'IAC et la gestion de vos préférences.',
  },
  {
    path: '/conditions-utilisation',
    component: lazy(() => import('../pages/legal/TermsPage')),
    title: 'Conditions générales d\'utilisation',
    description: 'Règles d\'accès et d\'utilisation du site d\'Intelligence Artificielle Cameroun.',
  },
  {
    path: '/remboursement',
    component: lazy(() => import('../pages/legal/RefundPage')),
    title: 'Politique de remboursement',
    description: 'Conditions de remboursement des adhésions, formations et inscriptions aux JCIA.',
  },
];

// Anciennes adresses conservées pour ne pas casser les liens existants
export const redirects = [
  { from: '/jcia', to: '/jcia/2025' },
];

# Site web — Intelligence Artificielle Cameroun (IAC)

Site vitrine de l'IAC et des Journées Camerounaises de l'Intelligence Artificielle (JCIA).
React 18 · Vite 4 · React Router · Framer Motion · SCSS · react-icons (Lucide).

## Démarrage

```bash
npm install
cp .env.example .env   # puis renseigner les identifiants (facultatif)
npm run dev            # http://localhost:5173
npm run build          # génère dist/
npm run lint           # doit passer sans avertissement
```

## Structure

```
public/
  .htaccess            Réécriture SPA, HTTPS, cache et en-têtes (Apache / Network Solutions)
  icons/ favicon.ico   Icônes du site et de l'application
  og-image.jpg         Image de partage sur les réseaux sociaux
  rapports/            Rapports PDF téléchargeables (JCIA 2025, IAC Année 1)
  robots.txt sitemap.xml site.webmanifest
  logoIAC/ Nouveau_média/   Logos partenaires et photos d'activités

src/
  main.jsx             Point d'entrée (police DM Sans auto-hébergée + styles globaux)
  App.jsx              Mise en page générale (bandeau, navbar, contenu, footer, cookies)
  router/routes.js     Table des routes : page, titre et description de chaque URL
  config/
    site.js            Coordonnées, réseaux sociaux, date des prochaines JCIA, date des pages légales
    cookieConfig.js    Registre des cookies et des outils soumis au consentement
  context/             Consentement cookies (fournisseur + hook useCookieConsent)
  hooks/               useForm, useCountdown, usePageMeta
  services/            formService : envoi des formulaires (EmailJS ou messagerie)
  utils/               cookies, validateurs de formulaires, préréglages d'animation
  styles/
    abstracts/         Jetons de la charte (couleurs, typo, points de rupture) + mixins — aucun CSS émis
    base/              Reset, typographie, boutons, accessibilité, animations
    main.scss          Styles globaux (importés une seule fois)
  components/
    ui/                Composants génériques (Modal)
    forms/             Champs de formulaire réutilisables + styles
    routing/           ErrorBoundary, ScrollToTop, PageLoader
    seo/               PageMeta (titre / description par page)
    navbar/ footer/ cookies/ cursor/ …   Composants du site (un dossier = JSX + SCSS)
  pages/
    jcia/              Pages JCIA 2025 et 2023 ; contenu éditable dans jcia/data/*.js
    legal/             Confidentialité, cookies, CGU, remboursement (gabarit LegalLayout)
    error/             Page d'erreur (404 et erreur d'affichage)
    …                  Une page par route
```

Dans un fichier SCSS, les jetons de la charte s'importent avec :

```scss
@use '../../styles/abstracts' as *;   // $primary-color, $accent-color, @include mobile…
```

## Tâches courantes

| Besoin | Fichier |
| --- | --- |
| Changer la date / le lieu des prochaines JCIA (décomptes, bandeaux) | `src/config/site.js` → `NEXT_JCIA` |
| Modifier le contenu d'une page JCIA | `src/pages/jcia/data/jcia2025.js`, `jcia2023.js` |
| Ajouter une page | `src/router/routes.js` (+ `public/sitemap.xml`) |
| Ajouter un outil soumis aux cookies (Analytics, Pixel…) | `src/config/cookieConfig.js` |
| Mettre à jour la date des pages légales | `src/config/site.js` → `LEGAL_LAST_UPDATE` |
| Couleurs, typographie, points de rupture | `src/styles/abstracts/_variables.scss` |

## Variables d'environnement

Voir `.env.example`. Pour le déploiement automatique, les déclarer en *secrets* GitHub
(Settings → Secrets and variables → Actions) : elles sont transmises au build par
`.github/workflows/deploy.yml`.

- **Formulaires** (`VITE_EMAILJS_*`) — sans configuration, les formulaires ouvrent la
  messagerie du visiteur avec un e-mail pré-rempli vers contact@iacameroun.com.
  Modèle EmailJS : variables `{{form_name}}`, `{{subject}}`, `{{from_name}}`, `{{reply_to}}`, `{{message}}`.
- **Mesure d'audience / marketing** (`VITE_GA_MEASUREMENT_ID`, `VITE_META_PIXEL_ID`) — chargés
  uniquement après consentement.

## Déploiement

Un `push` sur `main` construit le site et l'envoie par FTP dans `/htdocs/` (voir `deploy.yml`).
Le fichier `public/.htaccess` est indispensable : il renvoie toutes les URL vers l'application
(pages internes, 404) et force le HTTPS — le certificat SSL doit être actif chez l'hébergeur.

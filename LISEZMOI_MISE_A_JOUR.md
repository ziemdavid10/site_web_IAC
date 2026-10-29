# Mise à jour du site IAC — v2.0.0

Copiez le contenu de cette archive à la racine du projet `site_web_IAC/` en écrasant les
fichiers existants (l'arborescence est conservée), puis exécutez :

```bash
npm install        # ajoute la police DM Sans auto-hébergée (@fontsource-variable/dm-sans)
npm run lint       # doit passer sans avertissement
npm run build
```

## 1. Fichiers à SUPPRIMER du projet

Ces fichiers ne sont plus utilisés (remplacés ou jamais référencés par le site) :

```
public/RAPPORT IAC ANNEE 1 Original.docx
public/Rapport_final_JCIA_2025-1 (1).docx
public/docx_extract/[Content_Types].xml
public/docx_extract/_rels/.rels
public/docx_extract/customXml/_rels/item1.xml.rels
public/docx_extract/customXml/item1.xml
public/docx_extract/customXml/itemProps1.xml
public/docx_extract/docProps/app.xml
public/docx_extract/docProps/core.xml
public/docx_extract/docProps/thumbnail.jpeg
public/docx_extract/word/_rels/document.xml.rels
public/docx_extract/word/document.xml
public/docx_extract/word/fontTable.xml
public/docx_extract/word/footer1.xml
public/docx_extract/word/numbering.xml
public/docx_extract/word/settings.xml
public/docx_extract/word/styles.xml
public/docx_extract/word/stylesWithEffects.xml
public/docx_extract/word/theme/theme1.xml
public/docx_extract/word/webSettings.xml
public/docx_temp.zip
public/dribbble.png
public/facebook.png
public/hero.png
public/instagram.png
public/linkedin.png
public/mountains.png
public/mypic.jpg
public/people.webp
public/planets.png
public/scroll.png
public/stars.png
public/sun.png
public/youtube.png
public/ziem.jpg
src/App.scss
src/assets/icons/brain.png
src/assets/icons/building.png
src/assets/icons/document.png
src/assets/icons/euro.png
src/assets/icons/fire.png
src/assets/icons/flash.png
src/assets/icons/globe.png
src/assets/icons/graduation.png
src/assets/icons/handshake.png
src/assets/icons/idea.png
src/assets/icons/justice.png
src/assets/icons/laptop.png
src/assets/icons/location.png
src/assets/icons/mail.png
src/assets/icons/megaphone.png
src/assets/icons/microphone.png
src/assets/icons/news.png
src/assets/icons/person.png
src/assets/icons/photo.png
src/assets/icons/public.png
src/assets/icons/rocket.png
src/assets/icons/satellite.png
src/assets/icons/schedule.png
src/assets/icons/star.png
src/assets/icons/trophy.png
src/assets/icons/tv.png
src/components/PageHero.scss
src/components/parallax/ParallaxBanner.jsx
src/components/parallax/ParallaxBanner.scss
src/pages/jcia/JciaPage.jsx
src/pages/jcia/JciaPage.scss
src/pages/jcia/JciaRoute.jsx
src/pages/legal/NotFoundPage.jsx
src/pages/legal/NotFoundPage.scss
```

Commande (depuis la racine du projet) :

```bash
rm -rf src/App.scss src/assets/icons src/components/PageHero.scss \
  src/components/parallax/ParallaxBanner.jsx src/components/parallax/ParallaxBanner.scss \
  src/pages/jcia/JciaPage.jsx src/pages/jcia/JciaPage.scss src/pages/jcia/JciaRoute.jsx \
  src/pages/legal/NotFoundPage.jsx src/pages/legal/NotFoundPage.scss \
  public/docx_extract public/docx_temp.zip "public/RAPPORT IAC ANNEE 1 Original.docx" \
  "public/Rapport_final_JCIA_2025-1 (1).docx" public/dribbble.png public/facebook.png \
  public/hero.png public/instagram.png public/linkedin.png public/mountains.png public/mypic.jpg \
  public/people.webp public/planets.png public/scroll.png public/stars.png public/sun.png \
  public/youtube.png public/ziem.jpg
```

Également recommandé : supprimer `build.zip` (15 Mo) à la racine du dépôt.

## 2. À vérifier avant la mise en ligne

- **Dossier des photos** : dans l'archive reçue, le dossier `public/Nouveau_média` s'appelait
  `Nouveau_m#U00e9dia` (accent perdu lors de la compression). Il doit s'appeler exactement
  `public/Nouveau_média`, sinon les photos du site ne s'affichent pas.
- **Certificat SSL** : `public/.htaccess` force désormais le HTTPS. Le certificat doit être actif
  chez Network Solutions avant le déploiement.
- **Secrets GitHub** (Settings → Secrets and variables → Actions), facultatifs :
  `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
  (envoi direct des formulaires ; sans eux, la messagerie du visiteur s'ouvre avec l'e-mail
  pré-rempli), `VITE_GA_MEASUREMENT_ID`, `VITE_META_PIXEL_ID`.

## 3. Où modifier quoi

Voir le `README.md` (section « Tâches courantes ») : date des JCIA, contenu des pages JCIA,
routes, cookies, couleurs de la charte.

import { useEffect } from 'react';
import { BRAND } from '../config/site';

const SITE_NAME = `${BRAND} — Intelligence Artificielle Cameroun`;
const SITE_URL = 'https://www.iacameroun.com';

const setMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/);
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

// Met à jour le titre, la description et les balises de partage de la page.
const usePageMeta = ({ title, description, path, noindex = false }) => {
  useEffect(() => {
    // Le nom de marque est ajouté sauf s'il figure déjà dans le titre
    const fullTitle = !title ? SITE_NAME : title.includes(BRAND) ? title : `${title} | ${BRAND}`;
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    if (path) {
      setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`);
      setMeta('link[rel="canonical"]', 'href', `${SITE_URL}${path}`);
    }
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow');
  }, [title, description, path, noindex]);
};

export default usePageMeta;

// Utilitaires bas niveau pour lire, écrire et supprimer des cookies first-party.
// Aucune dépendance : fonctionne uniquement côté navigateur.

const isBrowser = typeof document !== 'undefined';

export const getCookie = (name) => {
  if (!isBrowser) return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${encodeURIComponent(name)}=`));
  return match ? decodeURIComponent(match.split('=').slice(1).join('=')) : null;
};

export const setCookie = (name, value, { days = 182, path = '/', sameSite = 'Lax' } = {}) => {
  if (!isBrowser) return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=${path}; SameSite=${sameSite}${secure}`;
};

// Supprime un cookie sur l'hôte courant et sur le domaine parent
// (les outils tiers comme Google Analytics posent leurs cookies sur ".domaine.com").
export const deleteCookie = (name) => {
  if (!isBrowser) return;
  const past = 'Thu, 01 Jan 1970 00:00:00 GMT';
  const host = window.location.hostname;
  const parts = host.split('.');
  const domains = [''];
  for (let i = 0; i < parts.length - 1; i += 1) {
    domains.push(`; domain=.${parts.slice(i).join('.')}`);
  }
  domains.forEach((domain) => {
    document.cookie = `${name}=; expires=${past}; path=/${domain}`;
  });
};

// Liste les noms de cookies présents correspondant à un motif (chaîne exacte ou RegExp).
export const findCookies = (pattern) => {
  if (!isBrowser || !document.cookie) return [];
  return document.cookie
    .split('; ')
    .map((row) => decodeURIComponent(row.split('=')[0]))
    .filter((name) => (pattern instanceof RegExp ? pattern.test(name) : name === pattern));
};

export const deleteCookiesMatching = (patterns = []) => {
  patterns.forEach((pattern) => findCookies(pattern).forEach(deleteCookie));
};

// Injecte un script externe une seule fois.
export const loadScript = (src, { id, async = true } = {}) => {
  if (!isBrowser) return;
  if (id && document.getElementById(id)) return;
  const script = document.createElement('script');
  script.src = src;
  script.async = async;
  if (id) script.id = id;
  document.head.appendChild(script);
};

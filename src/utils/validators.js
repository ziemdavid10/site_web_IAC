// Règles de validation réutilisables. Chaque règle renvoie un message
// d'erreur (chaîne) ou null si la valeur est valide.

const isEmpty = (v) => v === undefined || v === null || (Array.isArray(v) ? v.length === 0 : String(v).trim() === '');

export const required = (msg = 'Ce champ est obligatoire.') => {
  const rule = (v) => (isEmpty(v) ? msg : null);
  rule.isRequired = true; // permet d'afficher l'astérisque automatiquement
  return rule;
};

export const email = (msg = 'Adresse e-mail invalide.') => (v) => (
  isEmpty(v) || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()) ? null : msg
);

// Numéros camerounais (6XX XX XX XX) ou internationaux (+…)
export const phone = (msg = 'Numéro de téléphone invalide.') => (v) => {
  if (isEmpty(v)) return null;
  const digits = String(v).replace(/[\s.\-()]/g, '');
  return /^\+?\d{8,15}$/.test(digits) ? null : msg;
};

export const url = (msg = 'Lien invalide (ex. https://…).') => (v) => {
  if (isEmpty(v)) return null;
  try {
    const u = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
    return u.hostname.includes('.') ? null : msg;
  } catch {
    return msg;
  }
};

export const minLength = (n, msg) => (v) => (
  isEmpty(v) || String(v).trim().length >= n ? null : (msg || `${n} caractères minimum.`)
);

export const accepted = (msg = 'Veuillez accepter pour continuer.') => {
  const rule = (v) => (v ? null : msg);
  rule.isRequired = true;
  return rule;
};

// Applique un schéma { champ: [règles] } à un objet de valeurs
export const validate = (schema, values) => Object.entries(schema).reduce((errors, [field, rules]) => {
  const error = rules.map((rule) => rule(values[field], values)).find(Boolean);
  return error ? { ...errors, [field]: error } : errors;
}, {});

// ─────────────────────────────────────────────────────────────────────────────
// Envoi des formulaires du site.
//
// • Si EmailJS est configuré (.env), le message est envoyé directement :
//     VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
//   Le modèle EmailJS doit utiliser les variables :
//     {{form_name}} {{subject}} {{from_name}} {{reply_to}} {{message}}
// • Sinon, la messagerie du visiteur s'ouvre avec un e-mail pré-rempli
//   adressé à contact@iacameroun.com : aucune demande n'est perdue.
// ─────────────────────────────────────────────────────────────────────────────
import { ORG } from '../config/site';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailServiceConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

// Met en forme les champs : « Libellé : valeur » sur une ligne chacun
const formatFields = (fields) => fields
  .filter(({ value }) => value !== undefined && value !== null && String(value).trim() !== '')
  .map(({ label, value }) => `${label} : ${Array.isArray(value) ? value.join(', ') : value}`)
  .join('\n');

/**
 * @param {object} payload
 * @param {string} payload.formName  Nom du formulaire (ex. « Candidature »)
 * @param {string} payload.subject   Objet de l'e-mail
 * @param {string} payload.fromName  Nom de l'expéditeur
 * @param {string} payload.replyTo   E-mail de l'expéditeur
 * @param {{label: string, value: any}[]} payload.fields
 * @returns {Promise<{ via: 'emailjs' | 'mailto' }>}
 */
export const sendForm = async ({ formName, subject, fromName, replyTo, fields }) => {
  const message = formatFields(fields);

  if (isEmailServiceConfigured) {
    const emailjs = await import('@emailjs/browser'); // chargé uniquement à l'envoi
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { form_name: formName, subject, from_name: fromName, reply_to: replyTo, message },
      { publicKey: PUBLIC_KEY },
    );
    return { via: 'emailjs' };
  }

  const body = `${message}\n\n— Envoyé depuis le formulaire « ${formName} » du site ${ORG.website}`;
  window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { via: 'mailto' };
};

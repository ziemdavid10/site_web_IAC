import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CookieConsentContext } from './cookieConsent';
import {
  ALL_GRANTED,
  CATEGORIES,
  CONSENT_COOKIE,
  CONSENT_DURATION_DAYS,
  CONSENT_VERSION,
  DEFAULT_PREFS,
  LEGACY_STORAGE_KEY,
  SERVICES,
} from '../config/cookieConfig';
import { deleteCookie, deleteCookiesMatching, getCookie, setCookie } from '../utils/cookies';

// Normalise un objet de préférences : catégories connues uniquement,
// catégories obligatoires toujours actives.
const sanitize = (prefs = {}) =>
  CATEGORIES.reduce(
    (acc, c) => ({ ...acc, [c.key]: c.required ? true : Boolean(prefs[c.key]) }),
    {},
  );

const randomId = () =>
  (window.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`);

const readStoredConsent = () => {
  try {
    const raw = getCookie(CONSENT_COOKIE);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.v === CONSENT_VERSION && parsed.prefs) {
        return { ...parsed, prefs: sanitize(parsed.prefs) };
      }
      return null; // version obsolète → on redemande
    }
    // Migration de l'ancien stockage (localStorage) vers le cookie de consentement.
    const legacy = window.localStorage?.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      window.localStorage.removeItem(LEGACY_STORAGE_KEY);
      return { v: CONSENT_VERSION, id: randomId(), ts: new Date().toISOString(), prefs: sanitize(JSON.parse(legacy)) };
    }
  } catch {
    /* cookie illisible ou stockage bloqué : on repart de zéro */
  }
  return null;
};

const persistConsent = (record) => {
  setCookie(CONSENT_COOKIE, JSON.stringify(record), { days: CONSENT_DURATION_DAYS });
};

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const loadedServices = useRef(new Set());

  // Lecture initiale
  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      persistConsent(stored); // prolonge / migre
      setConsent(stored);
    }
    setReady(true);
    if (!stored) {
      const t = setTimeout(() => setBannerOpen(true), 900);
      return () => clearTimeout(t);
    }
    return undefined;
  }, []);

  // Application du consentement : chargement / blocage des services
  useEffect(() => {
    if (!ready) return;
    const prefs = consent?.prefs || DEFAULT_PREFS;

    SERVICES.forEach((service) => {
      const granted = Boolean(prefs[service.category]);
      const patterns = (service.cookies || []).map((c) => c.pattern || c.name);

      if (granted && service.enabled) {
        if (!loadedServices.current.has(service.id) && typeof service.load === 'function') {
          try { service.load(); } catch (e) { console.error(`[cookies] ${service.id}`, e); }
          loadedServices.current.add(service.id);
        }
      } else if (!granted) {
        if (loadedServices.current.has(service.id) && typeof service.revoke === 'function') {
          try { service.revoke(); } catch (e) { console.error(`[cookies] ${service.id}`, e); }
          loadedServices.current.delete(service.id);
        }
        deleteCookiesMatching(patterns);
      }
    });

    window.dispatchEvent(new CustomEvent('iac:consentchange', { detail: prefs }));
  }, [consent, ready]);

  const commit = useCallback((prefs) => {
    const record = {
      v: CONSENT_VERSION,
      id: consent?.id || randomId(),
      ts: new Date().toISOString(),
      prefs: sanitize(prefs),
    };
    persistConsent(record);
    setConsent(record);
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, [consent]);

  const acceptAll = useCallback(() => commit(ALL_GRANTED), [commit]);
  const rejectAll = useCallback(() => commit(DEFAULT_PREFS), [commit]);
  const savePreferences = useCallback((prefs) => commit(prefs), [commit]);

  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => {
    setPreferencesOpen(false);
    // Sans choix enregistré, on revient au bandeau.
    if (!consent) setBannerOpen(true);
  }, [consent]);

  // Retrait total du consentement : on efface tout et on redemande.
  const resetConsent = useCallback(() => {
    deleteCookie(CONSENT_COOKIE);
    setConsent(null);
    setPreferencesOpen(false);
    setBannerOpen(true);
  }, []);

  const isGranted = useCallback(
    (category) => Boolean((consent?.prefs || DEFAULT_PREFS)[category]),
    [consent],
  );

  const value = useMemo(() => ({
    ready,
    consent,
    prefs: consent?.prefs || DEFAULT_PREFS,
    hasConsented: Boolean(consent),
    bannerOpen,
    preferencesOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
    resetConsent,
    isGranted,
  }), [ready, consent, bannerOpen, preferencesOpen, acceptAll, rejectAll,
    savePreferences, openPreferences, closePreferences, resetConsent, isGranted]);

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

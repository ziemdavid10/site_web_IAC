import { createContext, useContext } from 'react';

// Contexte du consentement cookies (alimenté par <CookieConsentProvider>)
export const CookieConsentContext = createContext(null);

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent doit être utilisé dans <CookieConsentProvider>.');
  return ctx;
};

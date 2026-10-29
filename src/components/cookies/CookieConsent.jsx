import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './CookieConsent.scss';

const STORAGE_KEY = 'iac_cookie_consent';

const defaultPrefs = {
  essential: true,
  analytics: false,
  functional: false,
  marketing: false,
};

const cookieCategories = [
  {
    key: 'essential',
    label: 'Essentiels',
    icon: 'lock',
    desc: 'Nécessaires au fonctionnement du site. Toujours actifs.',
    required: true,
  },
  {
    key: 'analytics',
    label: 'Analytiques',
    icon: 'analytics',
    desc: 'Nous aident à améliorer notre site en analysant les visites.',
    required: false,
  },
  {
    key: 'functional',
    label: 'Fonctionnels',
    icon: 'tune',
    desc: 'Mémorisent vos préférences pour une meilleure expérience.',
    required: false,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    icon: 'campaign',
    desc: 'Permettent de vous proposer des contenus pertinents.',
    required: false,
  },
];

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const saveAndClose = (savedPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedPrefs));
    setVisible(false);
  };

  const acceptAll = () => {
    const all = { essential: true, analytics: true, functional: true, marketing: true };
    setPrefs(all);
    saveAndClose(all);
  };

  const rejectAll = () => {
    saveAndClose(defaultPrefs);
  };

  const saveCustom = () => {
    saveAndClose(prefs);
  };

  const toggle = (key) => {
    if (key === 'essential') return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-consent"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          role="dialog"
          aria-label="Gestion des cookies"
        >
          <div className="cookie-consent__inner">

            {/* ── HEADER ── */}
            <div className="cookie-consent__header">
              <div className="cookie-consent__title">
                <span className="material-symbols-rounded">cookie</span>
                <div>
                  <h3>Gestion des cookies</h3>
                  <p>
                    Nous utilisons des cookies pour améliorer votre expérience.{' '}
                    <Link to="/politique-cookies" onClick={() => setVisible(false)}>
                      En savoir plus
                    </Link>
                  </p>
                </div>
              </div>
              <button
                className="cookie-consent__close"
                onClick={rejectAll}
                aria-label="Fermer"
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>

            {/* ── DÉTAILS ── */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  className="cookie-consent__details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {cookieCategories.map((cat) => (
                    <div key={cat.key} className="cookie-cat">
                      <div className="cookie-cat__info">
                        <span className="material-symbols-rounded">{cat.icon}</span>
                        <div>
                          <strong>{cat.label}</strong>
                          <p>{cat.desc}</p>
                        </div>
                      </div>
                      <button
                        className={`cookie-toggle ${prefs[cat.key] ? 'on' : 'off'} ${cat.required ? 'disabled' : ''}`}
                        onClick={() => toggle(cat.key)}
                        aria-pressed={prefs[cat.key]}
                        disabled={cat.required}
                        aria-label={`${cat.required ? 'Toujours actif' : prefs[cat.key] ? 'Désactiver' : 'Activer'} ${cat.label}`}
                      >
                        <span className="cookie-toggle__thumb" />
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── ACTIONS ── */}
            <div className="cookie-consent__actions">
              <button
                className="btn-details"
                onClick={() => setShowDetails((v) => !v)}
              >
                <span className="material-symbols-rounded">
                  {showDetails ? 'expand_less' : 'tune'}
                </span>
                {showDetails ? 'Réduire' : 'Personnaliser'}
              </button>

              <div className="cookie-consent__btns">
                {showDetails && (
                  <button className="btn-save" onClick={saveCustom}>
                    Enregistrer mes choix
                  </button>
                )}
                <button className="btn-reject" onClick={rejectAll}>
                  Refuser
                </button>
                <button className="btn-accept" onClick={acceptAll}>
                  <span className="material-symbols-rounded">check_circle</span>
                  Tout accepter
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

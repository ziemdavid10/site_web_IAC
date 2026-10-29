import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCookie, LuX, LuChevronDown, LuShieldCheck, LuSettings2 } from 'react-icons/lu';
import { useCookieConsent } from '../../context/cookieConsent';
import { CATEGORIES, servicesByCategory } from '../../config/cookieConfig';
import './CookieConsent.scss';

// ── Interrupteur accessible ──────────────────────────────────────────────────
const Switch = ({ checked, disabled, onChange, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    className={`cc-switch ${checked ? 'is-on' : ''} ${disabled ? 'is-locked' : ''}`}
    onClick={() => !disabled && onChange(!checked)}
  >
    <span className="cc-switch__thumb" />
  </button>
);

// ── Ligne de catégorie (modale) ──────────────────────────────────────────────
const CategoryRow = ({ category, checked, onToggle }) => {
  const [open, setOpen] = useState(false);
  const services = servicesByCategory(category.key);
  const Icon = category.icon;
  const panelId = `cc-cat-${category.key}`;

  return (
    <li className="cc-cat" style={{ '--cat-color': category.color }}>
      <div className="cc-cat__row">
        <span className="cc-cat__icon"><Icon aria-hidden /></span>
        <div className="cc-cat__text">
          <div className="cc-cat__title">
            <strong>{category.label}</strong>
            {category.required && <span className="cc-badge">Toujours actif</span>}
          </div>
          <p>{category.description}</p>
          <button
            type="button"
            className={`cc-cat__more ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {services.length > 0
              ? `${services.length} service${services.length > 1 ? 's' : ''} concerné${services.length > 1 ? 's' : ''}`
              : 'Aucun service actif'}
            <LuChevronDown aria-hidden />
          </button>
        </div>
        <Switch
          checked={checked}
          disabled={category.required}
          onChange={onToggle}
          label={`${category.label} : ${checked ? 'activés' : 'désactivés'}`}
        />
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="cc-cat__panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {services.length === 0 ? (
              <p className="cc-empty">
                Aucun cookie de cette catégorie n'est déposé actuellement. Si un service est ajouté,
                il apparaîtra ici et votre accord vous sera demandé.
              </p>
            ) : (
              <ul className="cc-services">
                {services.map((s) => (
                  <li key={s.id}>
                    <div className="cc-services__head">
                      <strong>{s.name}</strong>
                      <span>{s.provider}</span>
                    </div>
                    <p>{s.purpose}</p>
                    <div className="cc-services__cookies">
                      {s.cookies.map((c) => (
                        <code key={c.name}>{c.name} · {c.duration}</code>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

// ── Modale de préférences ────────────────────────────────────────────────────
const PreferencesModal = () => {
  const { prefs, savePreferences, acceptAll, rejectAll, closePreferences } = useCookieConsent();
  const [draft, setDraft] = useState(prefs);
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => { setDraft(prefs); }, [prefs]);

  // Focus, verrouillage du scroll, Échap et piège à focus
  useEffect(() => {
    previousFocus.current = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') closePreferences();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
      previousFocus.current?.focus?.();
    };
  }, [closePreferences]);

  return (
    <motion.div
      className="cc-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) closePreferences(); }}
    >
      <motion.div
        ref={dialogRef}
        className="cc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-modal-title"
        tabIndex={-1}
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
      >
        <header className="cc-modal__header">
          <span className="cc-modal__logo"><LuShieldCheck aria-hidden /></span>
          <div>
            <h2 id="cc-modal-title">Préférences de cookies</h2>
            <p>
              Choisissez les cookies que vous acceptez. Vous pouvez modifier ces choix à tout moment
              depuis le pied de page. <Link to="/politique-cookies" onClick={closePreferences}>Politique de cookies</Link>
            </p>
          </div>
          <button type="button" className="cc-icon-btn" onClick={closePreferences} aria-label="Fermer">
            <LuX aria-hidden />
          </button>
        </header>

        <ul className="cc-modal__body">
          {CATEGORIES.map((cat) => (
            <CategoryRow
              key={cat.key}
              category={cat}
              checked={Boolean(draft[cat.key])}
              onToggle={(val) => setDraft((d) => ({ ...d, [cat.key]: val }))}
            />
          ))}
        </ul>

        <footer className="cc-modal__footer">
          <button type="button" className="cc-btn cc-btn--ghost" onClick={rejectAll}>Tout refuser</button>
          <div className="cc-modal__footer-main">
            <button type="button" className="cc-btn cc-btn--outline" onClick={() => savePreferences(draft)}>
              Enregistrer mes choix
            </button>
            <button type="button" className="cc-btn cc-btn--primary" onClick={acceptAll}>Tout accepter</button>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
};

// ── Bandeau + bouton flottant ────────────────────────────────────────────────
const CookieConsent = () => {
  const {
    ready, hasConsented, bannerOpen, preferencesOpen,
    acceptAll, rejectAll, openPreferences,
  } = useCookieConsent();

  return (
    <>
      <AnimatePresence>
        {bannerOpen && !preferencesOpen && (
          <motion.section
            className="cc-banner"
            role="region"
            aria-label="Consentement aux cookies"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="cc-banner__icon"><LuCookie aria-hidden /></div>
            <div className="cc-banner__text">
              <h2>Votre vie privée compte</h2>
              <p>
                Nous utilisons des cookies essentiels au fonctionnement du site et, avec votre accord,
                des cookies de mesure d'audience et de marketing. Votre choix est conservé 6 mois.{' '}
                <Link to="/politique-cookies">En savoir plus</Link>
              </p>
            </div>
            <div className="cc-banner__actions">
              <button type="button" className="cc-btn cc-btn--link" onClick={openPreferences}>
                <LuSettings2 aria-hidden /> Personnaliser
              </button>
              <button type="button" className="cc-btn cc-btn--outline" onClick={rejectAll}>Tout refuser</button>
              <button type="button" className="cc-btn cc-btn--primary" onClick={acceptAll}>Tout accepter</button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>{preferencesOpen && <PreferencesModal />}</AnimatePresence>

      <AnimatePresence>
        {ready && hasConsented && !bannerOpen && !preferencesOpen && (
          <motion.button
            type="button"
            className="cc-fab"
            onClick={openPreferences}
            aria-label="Gérer mes préférences de cookies"
            title="Gérer mes cookies"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <LuCookie aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;

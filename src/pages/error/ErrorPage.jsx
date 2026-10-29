import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  LuHouse, LuArrowLeft, LuRefreshCw, LuCompass, LuTriangleAlert, LuMail,
  LuArrowUpRight,
} from 'react-icons/lu';
import './ErrorPage.scss';

const VARIANTS = {
  404: {
    eyebrow: 'Erreur 404',
    title: 'Cette page est introuvable',
    message:
      "Le lien est peut-être erroné, ou la page a été déplacée. Les ressources ci-dessous vous aideront à retrouver votre chemin dans l'écosystème IA du Cameroun.",
  },
  500: {
    eyebrow: 'Erreur inattendue',
    title: "Un problème est survenu",
    message:
      "Cette partie du site n'a pas pu s'afficher correctement. Rechargez la page ; si le problème persiste, signalez-le à notre équipe.",
  },
};

const suggestions = [
  { to: '/presentation', label: 'Présentation de l\'IAC', hint: 'Notre vision et nos missions' },
  { to: '/services', label: 'Formations & services', hint: 'Programmes pour tous les profils' },
  { to: '/jcia/2025', label: 'JCIA 2025', hint: 'Le rapport de la 2e édition' },
  { to: '/actualites', label: 'Actualités', hint: 'Événements et faits marquants' },
];

const Digit = ({ children }) => <span className="error-page__digit">{children}</span>;

const ErrorPage = ({ code = 404, error, onRetry }) => {
  const { pathname } = useLocation();
  const v = VARIANTS[code] || VARIANTS[500];
  const is404 = code === 404;

  return (
    <main className="error-page" aria-labelledby="error-title">
      <div className="error-page__bg" aria-hidden />

      <motion.div
        className="error-page__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="error-page__code" aria-hidden>
          {is404 ? (
            <>
              <Digit>4</Digit>
              <div className="error-page__orb">
                <span className="ring ring--1" />
                <span className="ring ring--2" />
                <span className="core"><LuCompass /></span>
              </div>
              <Digit>4</Digit>
            </>
          ) : (
            <div className="error-page__orb error-page__orb--alert">
              <span className="ring ring--1" />
              <span className="ring ring--2" />
              <span className="core"><LuTriangleAlert /></span>
            </div>
          )}
        </div>

        <span className="error-page__eyebrow">{v.eyebrow}</span>
        <h1 id="error-title">{v.title}</h1>
        <p className="error-page__message">{v.message}</p>

        {is404 && (
          <p className="error-page__path">
            Adresse demandée : <code>{decodeURIComponent(pathname)}</code>
          </p>
        )}

        <div className="error-page__actions">
          {is404 ? (
            <>
              <Link to="/" className="error-btn error-btn--primary"><LuHouse aria-hidden /> Retour à l'accueil</Link>
              <button type="button" className="error-btn error-btn--ghost" onClick={() => window.history.back()}>
                <LuArrowLeft aria-hidden /> Page précédente
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="error-btn error-btn--primary"
                onClick={onRetry || (() => window.location.reload())}
              >
                <LuRefreshCw aria-hidden /> Recharger la page
              </button>
              <Link to="/" className="error-btn error-btn--ghost" onClick={onRetry}>
                <LuHouse aria-hidden /> Accueil
              </Link>
            </>
          )}
        </div>

        {is404 ? (
          <nav className="error-page__suggestions" aria-label="Pages suggérées">
            {suggestions.map((s) => (
              <Link key={s.to} to={s.to}>
                <span>
                  <strong>{s.label}</strong>
                  <em>{s.hint}</em>
                </span>
                <LuArrowUpRight aria-hidden />
              </Link>
            ))}
          </nav>
        ) : (
          <a
            className="error-page__report"
            href={`mailto:contact@iacameroun.com?subject=${encodeURIComponent('Erreur sur le site IAC')}&body=${encodeURIComponent(`Page : ${window.location.href}\nErreur : ${error?.message || 'inconnue'}`)}`}
          >
            <LuMail aria-hidden /> Signaler le problème
          </a>
        )}

        {import.meta.env.DEV && error && (
          <pre className="error-page__debug">{String(error.stack || error)}</pre>
        )}
      </motion.div>
    </main>
  );
};

export default ErrorPage;

import { NavLink, Link } from 'react-router-dom';
import { LuCookie } from 'react-icons/lu';
import {
  FaFacebook, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe,
} from 'react-icons/fa';
import { useCookieConsent } from '../../context/cookieConsent';
import { BRAND, ORG } from '../../config/site';
import './Footer.scss';

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Notre Vision', to: '/presentation' },
  { label: 'Formations', to: '/services' },
  { label: 'Écosystème IA', to: '/ecosysteme' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Carrières', to: '/carrieres' },
  { label: 'Membres & partenaires', to: '/membres' },
  { label: 'JCIA 2025', to: '/jcia/2025' },
  { label: 'JCIA 2023', to: '/jcia/2023' },
];

const legalLinks = [
  { label: 'Politique de confidentialité', to: '/confidentialite' },
  { label: 'Politique de cookies', to: '/politique-cookies' },
  { label: "Conditions d'utilisation", to: '/conditions-utilisation' },
  { label: 'Remboursement', to: '/remboursement' },
];

const socials = [
  { href: ORG.socials.facebook, label: 'Facebook', icon: FaFacebook },
  { href: ORG.socials.linkedin, label: 'LinkedIn', icon: FaLinkedin },
];

const keyPartners = ['PNUD', 'Expertise France', 'UE', 'GAIN', 'MINPOSTEL'];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logos">
            <Link to="/" aria-label={`${ORG.name} — Accueil`}>
              <img src="/Logo 1.png" alt={ORG.name} className="footer__logo" width="606" height="375" loading="lazy" />
            </Link>
            <span className="footer__logos-sep" aria-hidden />
            <picture>
              <source type="image/webp" srcSet={`${ORG.institute.logo} 1x, ${ORG.institute.logo2x} 2x`} />
              <img
                src={ORG.institute.logoFallback}
                alt={`${ORG.institute.short} — ${ORG.institute.name}`}
                className="footer__logo footer__logo--caipi"
                width="480"
                height="211"
                loading="lazy"
              />
            </picture>
          </div>
          <p className="footer__institute">{ORG.institute.short} · {ORG.institute.name}</p>
          <p>
            Premier hub national dédié à l'Intelligence Artificielle au Cameroun.
            Membre du réseau mondial GAIN. Lauréat IAChallenge 2022 — Bordeaux.
          </p>
          <div className="social-links">
            {socials.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (nouvel onglet)`}>
                <Icon aria-hidden />
              </a>
            ))}
            <a href={`mailto:${ORG.email}`} aria-label="Nous écrire par e-mail"><FaEnvelope aria-hidden /></a>
          </div>
        </div>

        <nav className="footer__links" aria-label="Plan du site">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><NavLink to={l.to} end>{l.label}</NavLink></li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h4>Contactez-nous</h4>
          <address>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" aria-hidden />
              <span>Rue de l'aéroport, Immeuble Lucas Mill,<br />Face Cami-Toyota Coron, Yaoundé, Cameroun</span>
            </div>
            <a className="contact-item" href={ORG.phoneHref}>
              <FaPhoneAlt className="icon" aria-hidden />
              <span>{ORG.phone}</span>
            </a>
            <a className="contact-item" href={`mailto:${ORG.email}`}>
              <FaEnvelope className="icon" aria-hidden />
              <span>{ORG.email}</span>
            </a>
            <Link className="contact-item" to="/">
              <FaGlobe className="icon" aria-hidden />
              <span>{ORG.website}</span>
            </Link>
          </address>

          <div className="footer__partners-logos">
            <h4>Partenaires Clés</h4>
            <ul className="mini-partners">
              {keyPartners.map((p) => <li key={p} className="mini-partner">{p}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} {ORG.name} — <span className="nowrap">{BRAND}</span>. Tous droits réservés.</p>
        <nav className="footer__legal" aria-label="Informations légales">
          {legalLinks.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
          <button type="button" className="footer__cookies-btn" onClick={openPreferences}>
            <LuCookie aria-hidden /> Gérer les cookies
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

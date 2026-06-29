import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.scss';

const navLinks = [
  { label: 'Accueil', to: 'home' },
  { label: 'Notre Vision', to: 'about' },
  { label: 'Formations', to: 'services' },
  { label: 'Écosystème IA', to: 'ecosystem' },
  { label: 'Agenda', to: 'agenda' },
  { label: 'Actualités', to: 'news' },
  { label: 'Carrières', to: 'careers' },
  { label: 'Partenaires', to: 'partners' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/Logo 1.png" alt="IAC Logo" className="footer__logo" />
          <p>
            Premier hub national dédié à l'Intelligence Artificielle au Cameroun.
            Membre du réseau mondial GAIN. Lauréat IAChallenge 2022 — Bordeaux.
          </p>
          <div className="footer__badges">
            <span>🏆 IAChallenge 2022</span>
            <span>🌍 Membre GAIN</span>
            <span>🇨🇲 ONG Reconnue</span>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter/X"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="mailto:contact@iacameroun.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((l, i) => (
              <li key={i}><a href={`#${l.to}`}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contactez-nous</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Rue de l'aéroport, Immeuble Lucas Mill,<br />Cami-Toyota Coron, Yaoundé, Cameroun</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>+237 699 089 937</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>contact@iacameroun.com</span>
          </div>
          <div className="contact-item">
            <FaGlobe className="icon" />
            <span>www.iacameroun.com</span>
          </div>

          <div className="footer__partners-logos">
            <h4>Partenaires Clés</h4>
            <div className="mini-partners">
              {['PNUD', 'Expertise France', 'UE', 'GAIN', 'MINPOSTEL'].map((p, i) => (
                <span key={i} className="mini-partner">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} Intelligence Artificielle Cameroun (IAC). Tous droits réservés.</p>
        <div className="footer__legal">
          <a href="#">Mentions Légales</a>
          <a href="#">Politique de Confidentialité</a>
          <a href="#">Plan du Site</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

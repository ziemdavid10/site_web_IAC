import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/public/Logo 1.png" alt="IAC Logo" className="footer__logo" />
          <p>
            Ambassadeurs de l'IA au Cameroun. Bâtir un écosystème éthique, 
            souverain et innovant pour le développement de l'Afrique.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#missions">Missions</a></li>
            <li><a href="#ecosystem">Écosystème</a></li>
            <li><a href="#agenda">Agenda</a></li>
            <li><a href="#opportunites">Opportunités</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contactez-nous</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Rue de l'aéroport, immeuble Lucas Mill, Cami-Toyota Coron, Yaoundé.</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>+237 699 089 937</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>contact@iacameroun.com</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} Intelligence Artificielle Cameroun (IAC). Tous droits réservés.</p>
        <div className="footer__legal">
          <a href="#">Mentions Légales</a>
          <a href="#">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
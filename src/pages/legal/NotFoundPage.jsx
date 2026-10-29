import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <div className="not-found">
    <div className="not-found__bg" />

    <motion.div
      className="not-found__content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="not-found__code">
        <span>4</span>
        <div className="not-found__globe">
          <div className="ring ring--1" />
          <div className="ring ring--2" />
          <div className="globe-core">
            <img src="/Logo 1.png" alt="IAC" />
          </div>
        </div>
        <span>4</span>
      </div>

      <h1>Page introuvable</h1>
      <p>
        La page que vous recherchez n'existe pas ou a été déplacée.
        Revenez à l'accueil pour explorer l'écosystème IA du Cameroun.
      </p>

      <div className="not-found__actions">
        <Link to="/" className="btn-home">
          <span className="material-symbols-rounded">home</span>
          Retour à l'accueil
        </Link>
        <Link to="/jcia" className="btn-jcia">
          <span className="material-symbols-rounded">smart_display</span>
          Découvrir les JCIA
        </Link>
      </div>

      <div className="not-found__links">
        <Link to="/presentation">Notre Vision</Link>
        <Link to="/services">Formations</Link>
        <Link to="/actualites">Actualités</Link>
        <Link to="/carrieres">Carrières</Link>
      </div>
    </motion.div>
  </div>
);

export default NotFoundPage;

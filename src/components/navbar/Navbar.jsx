import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const navLinks = [
  { name: 'Présentation', to: '/presentation' },
  { name: 'Services', to: '/services' },
  { name: 'Écosystème', to: '/ecosysteme' },
  { name: 'Actualités', to: '/actualites' },
  { name: 'Carrières', to: '/carrieres' },
  { name: 'JCIA', to: '/jcia' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const menuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    opened: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 },
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="logo-area" onClick={() => navigate('/')}>
          <img src="/Logo 1.png" alt="IAC Logo" className="main-logo" />
          {/* <div className="logo-text">
            <span className="brand-name">IAC</span>
            <span className="brand-sub">Intelligence Artificielle Cameroun</span>
          </div> */}
        </div>

        <div className="nav-content-desktop">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-membership"
            onClick={() => navigate('/membres')}
          >
            Devenir Membre
          </motion.button>
        </div>

        <div
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="mobile-drawer"
            >
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => isActive ? 'active' : ''}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants} className="mobile-btn-container">
                  <NavLink
                    to="/membres"
                    className="btn-membership-mobile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Devenir Membre
                  </NavLink>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

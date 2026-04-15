import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Désactiver le scroll du corps quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Présentation', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Écosystème', to: 'ecosystem' },
    { name: 'Actualités', to: 'news' },
    { name: 'Carrières', to: 'careers' },
  ];

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    opened: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* LOGO SECTION */}
        <div className="logo-area" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/Logo 1.png" alt="IAC Logo" className="main-logo" />
          <div className="logo-text">
            <span className="brand-name">IAC</span>
            <span className="brand-sub">Intelligence Artificielle Cameroun</span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="nav-content-desktop">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link to={link.to} smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 210, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-membership"
          >
            <Link to="membership" smooth={true} duration={500} offset={-70}>
              Devenir Membre
            </Link>
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </div>
      </div>

      {/* MOBILE DRAWER & OVERLAY */}
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
                    <Link 
                      to={link.to} 
                      smooth={true} 
                      duration={500} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants} className="mobile-btn-container">
                  <Link 
                    to="membership" 
                    className="btn-membership-mobile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Devenir Membre
                  </Link>
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
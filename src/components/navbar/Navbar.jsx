import { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LuChevronDown, LuArrowUpRight, LuTrophy, LuSprout } from 'react-icons/lu';
import { JCIA_OFFICIAL_URL, NEXT_JCIA } from '../../config/site';
import './Navbar.scss';

const navLinks = [
  { name: 'Présentation', to: '/presentation' },
  { name: 'Services', to: '/services' },
  { name: 'Écosystème', to: '/ecosysteme' },
  { name: 'Actualités', to: '/actualites' },
  { name: 'Carrières', to: '/carrieres' },
  {
    name: 'JCIA',
    base: '/jcia',
    children: [
      {
        name: 'JCIA 2025',
        to: '/jcia/2025',
        desc: '2e édition · Rapport officiel',
        icon: LuTrophy,
      },
      {
        name: 'JCIA 2023',
        to: '/jcia/2023',
        desc: '1re édition · Édition fondatrice',
        icon: LuSprout,
      },
    ],
  },
];

// ── Menu déroulant (desktop) ────────────────────────────────────────────────
const DesktopDropdown = ({ link, isActive }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => { if (!wrapRef.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        wrapRef.current?.querySelector('.nav-dropdown__trigger')?.focus();
      }
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Ouverture au survol uniquement pour les dispositifs à pointeur fin
  const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hoverOpenedAt = useRef(0);
  const onEnter = () => {
    if (!canHover()) return;
    clearTimeout(closeTimer.current);
    if (!open) hoverOpenedAt.current = Date.now();
    setOpen(true);
  };
  // Un clic juste après l'ouverture au survol ne doit pas refermer le menu
  const onTriggerClick = () => {
    if (canHover() && Date.now() - hoverOpenedAt.current < 500) { setOpen(true); return; }
    setOpen((v) => !v);
  };
  const onLeave = () => { if (canHover()) closeTimer.current = setTimeout(() => setOpen(false), 160); };

  const onTriggerKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => wrapRef.current?.querySelector('.nav-dropdown__item')?.focus());
    }
  };

  const onMenuKey = (e) => {
    const items = [...wrapRef.current.querySelectorAll('.nav-dropdown__item, .nav-dropdown__external')];
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
  };

  return (
    <li
      className={`nav-item nav-dropdown ${open ? 'is-open' : ''}`}
      ref={wrapRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        className={`nav-dropdown__trigger ${isActive ? 'active' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKey}
      >
        {link.name}
        <LuChevronDown className="nav-dropdown__chevron" aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            className="nav-dropdown__panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            onKeyDown={onMenuKey}
          >
            <span className="nav-dropdown__label">Rapports des éditions</span>
            <ul>
              {link.children.map((child) => {
                const Icon = child.icon;
                return (
                  <li key={child.to}>
                    <NavLink
                      to={child.to}
                      className={({ isActive: a }) => `nav-dropdown__item ${a ? 'is-current' : ''}`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="nav-dropdown__icon"><Icon aria-hidden /></span>
                      <span className="nav-dropdown__text">
                        <strong>{child.name}</strong>
                        <em>{child.desc}</em>
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <a
              className="nav-dropdown__external"
              href={JCIA_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              JCIA {NEXT_JCIA.year} · Site officiel <LuArrowUpRight aria-hidden />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

// ── Accordéon (mobile) ──────────────────────────────────────────────────────
const MobileGroup = ({ link, isActive, onNavigate, variants }) => {
  const [open, setOpen] = useState(isActive);
  const panelId = useId();

  return (
    <motion.li variants={variants} className="mobile-group">
      <button
        type="button"
        className={`mobile-group__trigger ${isActive ? 'active' : ''} ${open ? 'is-open' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {link.name}
        <LuChevronDown aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={panelId}
            className="mobile-group__panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {link.children.map((child) => {
              const Icon = child.icon;
              return (
                <li key={child.to}>
                  <NavLink to={child.to} onClick={onNavigate} className={({ isActive: a }) => (a ? 'active' : '')}>
                    <Icon aria-hidden />
                    <span>
                      {child.name}
                      <em>{child.desc}</em>
                    </span>
                  </NavLink>
                </li>
              );
            })}
            <li>
              <a href={JCIA_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="mobile-group__external">
                JCIA {NEXT_JCIA.year} · Site officiel <LuArrowUpRight aria-hidden />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const isGroupActive = (link) => Boolean(link.base && pathname.startsWith(link.base));

  const menuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    opened: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.06, delayChildren: 0.15 } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 },
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`} aria-label="Navigation principale">
      <div className="navbar-container">
        <NavLink to="/" className="logo-area" aria-label="IAC — Accueil">
          <img src="/Logo 1.png" alt="Intelligence Artificielle Cameroun" className="main-logo" />
        </NavLink>

        <div className="nav-content-desktop">
          <ul className="nav-menu">
            {navLinks.map((link) => (link.children ? (
              <DesktopDropdown key={link.name} link={link} isActive={isGroupActive(link)} />
            ) : (
              <li key={link.name} className="nav-item">
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {link.name}
                </NavLink>
              </li>
            )))}
          </ul>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-membership"
            onClick={() => navigate('/membres')}
          >
            Devenir Membre
          </motion.button>
        </div>

        <button
          type="button"
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span /><span /><span />
        </button>
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
                {navLinks.map((link) => (link.children ? (
                  <MobileGroup
                    key={link.name}
                    link={link}
                    isActive={isGroupActive(link)}
                    variants={linkVariants}
                    onNavigate={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <motion.li key={link.name} variants={linkVariants}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                )))}
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

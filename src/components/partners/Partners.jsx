import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Partners.scss';

const partners = [
  {
    name: 'PNUD',
    full: 'Programme des Nations Unies pour le Développement',
    logo: '/logoIAC/undp-logo-blue.4f32e17f.svg',
    category: 'International',
    logoType: 'svg',
  },
  {
    name: 'Union Européenne',
    full: 'Délégation de l\'Union Européenne au Cameroun',
    logo: '/logoIAC/logo-eu--fr.svg',
    category: 'International',
    logoType: 'svg',
  },
  {
    name: 'Expertise France',
    full: 'Agence française d\'expertise technique internationale',
    logo: '/logoIAC/logo-expertise-france-fond-transparent270-haut.jpg',
    category: 'International',
    logoType: 'img',
  },
  {
    name: 'GAIN',
    full: 'Global AI Network — Riyad, Arabie Saoudite',
    logo: '/logoIAC/gais-show.svg',
    category: 'International',
    logoType: 'svg',
  },
  {
    name: 'MINPOSTEL',
    full: 'Ministère des Postes et Télécommunications',
    logo: '/logoIAC/MINPOSTEL.png',
    category: 'Gouvernement',
    logoType: 'img',
  },
  {
    name: 'Université de Douala',
    full: 'Université de Douala',
    logo: '/logoIAC/UnicDouala.jpg',
    category: 'Académique',
    logoType: 'img',
  },
  {
    name: 'IRIC',
    full: 'Institut des Relations Internationales du Cameroun',
    logo: '/logoIAC/IRIC.png',
    category: 'Académique',
    logoType: 'img',
  },
  {
    name: 'Univ. Catholique',
    full: 'Université Catholique d\'Afrique Centrale (UCAC-ICY)',
    logo: '/logoIAC/logo-UCAC-ICY.png',
    category: 'Académique',
    logoType: 'img',
  },
  {
    name: 'Advanced-IT Group',
    full: 'Advanced-IT Group',
    logo: '/logoIAC/Advanced-IT-Group.png',
    category: 'Entreprise',
    logoType: 'img',
  },
  {
    name: 'Satguru Travel',
    full: 'Satguru Travel & Tours Services',
    logo: '/logoIAC/Satguru.gif',
    category: 'Entreprise',
    logoType: 'img',
  },
  {
    name: 'Canal 2',
    full: 'Canal 2 International',
    logo: '/logoIAC/canal2.png',
    category: 'Médias',
    logoType: 'img',
  },
  {
    name: 'CRTV',
    full: 'Cameroon Radio Television',
    logo: '/logoIAC/logo_CRTV.svg',
    category: 'Médias',
    logoType: 'svg',
  },
];

// Partenaires sans logo — affichage texte uniquement
const textOnlyPartners = [
  { name: 'ASMAC', full: 'Association des Managers du Cameroun', category: 'Académique' },
  { name: 'Salem High Tech', full: 'Institut Professionnel Salem High Tech', category: 'Formation' },
  { name: 'CONIA', full: 'Conseil National de l\'IA', category: 'Gouvernement' },
  { name: 'Zindi Africa', full: 'Plateforme IA africaine', category: 'International' },
];

const categoryColors = {
  International: '#00d2ff',
  Gouvernement: '#312783',
  Académique: '#8b5cf6',
  Entreprise: '#f59e0b',
  Formation: '#10b981',
  Médias: '#ef4444',
};

const stats = [
  { value: '12+', label: 'Partenaires avec logo' },
  { value: '6', label: 'Catégories' },
  { value: '4', label: 'Continents' },
  { value: '2022', label: 'Depuis' },
];

const Partners = () => {
  const sliderRef = useRef(null);

  return (
    <section className="partners-section" id="partners">

      {/* ── HEADER ── */}
      <motion.div
        className="partners-section__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="partners-tag">Ils nous font confiance</span>
        <h2 className="section-title">Nos Partenaires</h2>
        <p>
          Un réseau solide d'institutions nationales et internationales,
          toutes engagées pour le développement de l'IA en Afrique.
        </p>
      </motion.div>

      {/* ── STATS BAR ── */}
      <motion.div
        className="partners-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((s, i) => (
          <div className="partners-stats__item" key={i}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── LOGO CARDS GRID ── */}
      <div className="partners-grid">
        {partners.map((p, i) => (
          <motion.div
            key={i}
            className="partner-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -8, boxShadow: '0 24px 50px rgba(0,0,0,0.12)' }}
            style={{ '--cat-color': categoryColors[p.category] || '#312783' }}
          >
            <div className="partner-card__logo-wrap">
              <img
                src={p.logo}
                alt={p.name}
                className="partner-card__logo"
                loading="lazy"
              />
            </div>
            <div className="partner-card__body">
              <span
                className="partner-card__cat"
                style={{
                  background: `${categoryColors[p.category]}18`,
                  color: categoryColors[p.category],
                }}
              >
                {p.category}
              </span>
              <strong>{p.name}</strong>
              <p>{p.full}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── AUTRES PARTENAIRES (texte) ── */}
      <motion.div
        className="partners-others"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="partners-others__label">Et aussi</p>
        <div className="partners-others__pills">
          {textOnlyPartners.map((p, i) => (
            <span
              key={i}
              className="partners-others__pill"
              style={{
                borderColor: `${categoryColors[p.category]}50`,
                color: categoryColors[p.category],
              }}
            >
              {p.name}
              <em>{p.full}</em>
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── INFINITE LOGO SLIDER ── */}
      <div className="partners-slider-wrap" ref={sliderRef}>
        <p className="partners-slider-label">
          <span /> Partenaires officiels <span />
        </p>
        <div className="partners-slider">
          <div className="partners-track">
            {[...partners, ...partners].map((p, i) => (
              <div className="slider-logo-item" key={i}>
                <img src={p.logo} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Partners;

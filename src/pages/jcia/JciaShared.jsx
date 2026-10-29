import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import {
  LuQuote, LuArrowUpRight, LuArrowRight, LuCalendarClock, LuDownload,
} from 'react-icons/lu';
import { JCIA_OFFICIAL_URL, NEXT_JCIA } from '../../config/site';
import { fadeUp } from '../../utils/motion';


const EDITIONS = [
  { to: '/jcia/2025', label: 'JCIA 2025', sub: '2e édition' },
  { to: '/jcia/2023', label: 'JCIA 2023', sub: '1re édition' },
];

// ── Sélecteur d'édition ─────────────────────────────────────────────────────
export const EditionSwitch = () => (
  <nav className="jcia-switch" aria-label="Éditions des JCIA">
    {EDITIONS.map((e) => (
      <NavLink key={e.to} to={e.to} className={({ isActive }) => `jcia-switch__item ${isActive ? 'is-active' : ''}`}>
        <strong>{e.label}</strong>
        <span>{e.sub}</span>
      </NavLink>
    ))}
  </nav>
);

// ── Hero ────────────────────────────────────────────────────────────────────
export const JciaHero = ({ hero, children }) => (
  <section className="jcia-hero">
    <div className="jcia-hero__bg" style={{ backgroundImage: `url("${hero.image}")` }} aria-hidden />
    <div className="jcia-hero__overlay" aria-hidden />

    <motion.div className="jcia-hero__content" variants={fadeUp} initial="hidden" animate="show">
      <EditionSwitch />
      <span className="jcia-hero__edition">{hero.edition}</span>
      <h1>
        <span className="jcia-hero__year">JCIA {hero.year}</span>
        <span className="jcia-hero__name">Journées Camerounaises de l'Intelligence Artificielle</span>
      </h1>
      <p className="jcia-hero__theme">
        <LuQuote aria-hidden />
        <span>{hero.theme}</span>
      </p>
      <ul className="jcia-hero__meta">
        {hero.meta.map(({ icon: Icon, text }) => (
          <li key={text}><Icon aria-hidden /> {text}</li>
        ))}
      </ul>
      {children}
    </motion.div>
  </section>
);

// ── En-tête de section ──────────────────────────────────────────────────────
export const SectionHeader = ({ icon: Icon, tag, title, text, align = 'center', light = false }) => (
  <motion.header
    className={`jcia-section-header jcia-section-header--${align} ${light ? 'is-light' : ''}`}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
  >
    <span className="jcia-tag">{Icon && <Icon aria-hidden />} {tag}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </motion.header>
);

// ── Compteur animé ──────────────────────────────────────────────────────────
const CountUp = ({ value, display, prefix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setN(value); return undefined; }
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  const done = n === value;
  const text = done && display ? display : n.toLocaleString('fr-FR');
  return <strong ref={ref}>{prefix}{text}</strong>;
};

export const StatGrid = ({ stats, columns = 4 }) => (
  <div className="jcia-stats__grid" style={{ '--cols': columns }}>
    {stats.map(({ icon: Icon, value, display, prefix, label }, i) => (
      <motion.div
        key={label}
        className="jcia-stat"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
      >
        <span className="jcia-stat__icon"><Icon aria-hidden /></span>
        <CountUp value={value} display={display} prefix={prefix} />
        <span className="jcia-stat__label">{label}</span>
      </motion.div>
    ))}
  </div>
);

// ── Mur de logos ────────────────────────────────────────────────────────────
export const PartnersWall = ({ partners }) => (
  <ul className="jcia-partners__grid">
    {partners.map((p, i) => (
      <motion.li
        key={p.name}
        className="jcia-partner"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04 }}
      >
        <img src={p.logo} alt={p.name} loading="lazy" />
        <span>{p.name}</span>
      </motion.li>
    ))}
  </ul>
);

// ── Bandeau final : prochaine édition + autre rapport ───────────────────────
export const NextEditionCta = ({ title, text, other, report }) => (
  <section className="jcia-cta">
    <motion.div className="jcia-cta__inner" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="jcia-cta__text">
        <span className="jcia-cta__kicker"><LuCalendarClock aria-hidden /> Prochaine édition · {NEXT_JCIA.dates} · {NEXT_JCIA.city}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="jcia-cta__actions">
        <a className="jcia-btn jcia-btn--accent" href={JCIA_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
          Découvrir les JCIA {NEXT_JCIA.year} <LuArrowUpRight aria-hidden />
        </a>
        {report && <ReportLink report={report} />}
        {other && (
          <Link className="jcia-btn jcia-btn--ghost" to={other.to}>
            {other.label} <LuArrowRight aria-hidden />
          </Link>
        )}
      </div>
    </motion.div>
  </section>
);

// ── Téléchargement du rapport PDF ───────────────────────────────────────────
export const ReportLink = ({ report, variant = 'ghost' }) => (
  <a className={`jcia-btn jcia-btn--${variant} jcia-btn--report`} href={report.href} download>
    <LuDownload aria-hidden />
    <span>
      {report.label}
      <small>{report.meta}</small>
    </span>
  </a>
);

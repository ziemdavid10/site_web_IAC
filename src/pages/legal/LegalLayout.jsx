import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  LuShieldCheck, LuCookie, LuFileText, LuReceipt, LuHouse, LuCalendarDays, LuListChecks,
  LuChevronDown,
} from 'react-icons/lu';
import { LEGAL_LAST_UPDATE } from '../../config/site';
import './LegalShared.scss';

const LEGAL_PAGES = [
  { to: '/confidentialite', label: 'Confidentialité', icon: LuShieldCheck },
  { to: '/politique-cookies', label: 'Cookies', icon: LuCookie },
  { to: '/conditions-utilisation', label: "Conditions d'utilisation", icon: LuFileText },
  { to: '/remboursement', label: 'Remboursement', icon: LuReceipt },
];

// Gabarit commun des pages légales : hero, sommaire collant, sections, navigation.
const LegalLayout = ({ tag, tagIcon: TagIcon, title, intro, meta = [], sections, before }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(sections[0]?.id);
  const [tocOpen, setTocOpen] = useState(false);

  // Met en évidence la section en cours de lecture
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-200px 0px -55% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const metaItems = [{ icon: LuCalendarDays, text: `Dernière mise à jour : ${LEGAL_LAST_UPDATE}` }, ...meta];

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <motion.div
          className="legal-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="legal-hero__tag">{TagIcon && <TagIcon aria-hidden />} {tag}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="legal-hero__meta">
            {metaItems.map(({ icon: Icon, text }) => (
              <span key={text}><Icon aria-hidden /> {text}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="legal-shell">
        <aside className="legal-toc" aria-label="Sommaire">
          <button
            type="button"
            className={`legal-toc__toggle ${tocOpen ? 'is-open' : ''}`}
            aria-expanded={tocOpen}
            onClick={() => setTocOpen((v) => !v)}
          >
            <LuListChecks aria-hidden /> Sommaire
            <LuChevronDown className="legal-toc__chev" aria-hidden />
          </button>
          <ol className={tocOpen ? 'is-open' : ''}>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? 'is-active' : ''}
                  aria-current={active === s.id ? 'location' : undefined}
                  onClick={() => setTocOpen(false)}
                >
                  <span className="legal-toc__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="legal-body">
          {before}
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="legal-section" aria-labelledby={`${s.id}-title`}>
                <div className="legal-section__title">
                  {Icon && <span className="legal-section__icon"><Icon aria-hidden /></span>}
                  <h2 id={`${s.id}-title`}>{s.title}</h2>
                </div>
                {s.content}
              </section>
            );
          })}
        </div>
      </div>

      <nav className="legal-footer-nav" aria-label="Autres documents légaux">
        {LEGAL_PAGES.filter((p) => p.to !== pathname).map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to}><Icon aria-hidden /> {label}</Link>
        ))}
        <Link to="/"><LuHouse aria-hidden /> Accueil</Link>
      </nav>
    </main>
  );
};

export default LegalLayout;

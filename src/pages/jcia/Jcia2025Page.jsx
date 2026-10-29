import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuChartColumn, LuTarget, LuCalendarRange, LuMapPin, LuSparkles, LuTrophy,
  LuLayers, LuLightbulb, LuRoute, LuHandshake, LuChevronDown, LuArrowDown, LuClock,
} from 'react-icons/lu';
import {
  JciaHero, SectionHeader, StatGrid, PartnersWall, NextEditionCta, ReportLink,
} from './JciaShared';
import { fadeUp } from '../../utils/motion';
import {
  hero, report, keyStats, summary, pillars, objectives, days, highlights, awards, themes,
  recommendations, roadmap, partners, conclusion,
} from './data/jcia2025';
import './Jcia.scss';

// ── Programme : onglets accessibles ─────────────────────────────────────────
const Program = () => {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const day = days[active];

  const onKey = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % days.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + days.length) % days.length;
    if (next !== null) { e.preventDefault(); setActive(next); tabsRef.current[next]?.focus(); }
  };

  return (
    <div className="jcia-program__wrap">
      <div className="jcia-day-tabs" role="tablist" aria-label="Journées du programme">
        {days.map((d, i) => {
          const Icon = d.icon;
          return (
            <button
              key={d.num}
              ref={(el) => { tabsRef.current[i] = el; }}
              type="button"
              role="tab"
              id={`day-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`day-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              className={`jcia-day-tab ${active === i ? 'is-active' : ''}`}
              style={{ '--day-color': d.color }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="jcia-day-tab__icon"><Icon aria-hidden /></span>
              <span className="jcia-day-tab__text">
                <strong>Jour {d.num}</strong>
                <em>{d.date}</em>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          id={`day-panel-${active}`}
          aria-labelledby={`day-tab-${active}`}
          className="jcia-day-panel"
          style={{ '--day-color': day.color }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <header className="jcia-day-panel__head">
            <div>
              <span className="jcia-day-panel__focus">{day.focus}</span>
              <h3>Jour {day.num} — {day.date}</h3>
            </div>
            <span className="jcia-day-panel__place"><LuMapPin aria-hidden /> {day.place}</span>
          </header>
          <ol className="jcia-timeline">
            {day.schedule.map(([time, text]) => (
              <li key={time + text.slice(0, 12)}>
                <time><LuClock aria-hidden /> {time}</time>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ── Recommandations : accordéon ─────────────────────────────────────────────
const Recommendations = () => {
  const [open, setOpen] = useState(() => new Set([0]));
  const allOpen = open.size === recommendations.length;

  const toggle = (i) => setOpen((prev) => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });

  return (
    <>
      <div className="jcia-recs__toolbar">
        <button
          type="button"
          className="jcia-btn jcia-btn--soft"
          onClick={() => setOpen(allOpen ? new Set() : new Set(recommendations.map((_, i) => i)))}
        >
          {allOpen ? 'Tout replier' : 'Tout déplier'}
        </button>
      </div>
      <ol className="jcia-recs__grid">
        {recommendations.map(({ icon: Icon, title, text }, i) => {
          const isOpen = open.has(i);
          return (
            <li key={title} className={`jcia-rec ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="jcia-rec__head"
                aria-expanded={isOpen}
                aria-controls={`rec-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="jcia-rec__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="jcia-rec__icon"><Icon aria-hidden /></span>
                <span className="jcia-rec__title">{title}</span>
                <LuChevronDown className="jcia-rec__chev" aria-hidden />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`rec-${i}`}
                    className="jcia-rec__body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </>
  );
};

const Jcia2025Page = () => (
  <main className="jcia-page">
    <JciaHero hero={hero}>
      <div className="jcia-hero__actions">
        <a href="#programme" className="jcia-btn jcia-btn--accent">Voir le programme <LuArrowDown aria-hidden /></a>
        <a href="#recommandations" className="jcia-btn jcia-btn--ghost">Les 12 recommandations</a>
        <ReportLink report={report} />
      </div>
    </JciaHero>

    {/* ── CHIFFRES CLÉS ── */}
    <section className="jcia-stats" aria-label="Chiffres clés">
      <StatGrid stats={keyStats} />
    </section>

    {/* ── SYNTHÈSE ── */}
    <section className="jcia-section">
      <div className="jcia-split">
        <div>
          <SectionHeader icon={LuChartColumn} tag="Synthèse exécutive" title="Un changement d'échelle" align="left" />
          {summary.map((p) => <p key={p.slice(0, 20)} className="jcia-lead">{p}</p>)}
        </div>
        <div className="jcia-pillars">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              className="jcia-pillar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="jcia-pillar__icon"><Icon aria-hidden /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ── OBJECTIFS ── */}
    <section className="jcia-section jcia-section--dark">
      <SectionHeader icon={LuTarget} tag="Objectifs" title="Cinq ambitions pour la 2e édition" light />
      <ol className="jcia-objectives">
        {objectives.map((o, i) => (
          <motion.li
            key={o.slice(0, 20)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <span>{String(i + 1).padStart(2, '0')}</span>
            <p>{o}</p>
          </motion.li>
        ))}
      </ol>
    </section>

    {/* ── PROGRAMME ── */}
    <section className="jcia-section jcia-section--alt" id="programme">
      <SectionHeader
        icon={LuCalendarRange}
        tag="Programme"
        title="Trois journées, trois lieux"
        text="Chaque journée avait une fonction précise : ouvrir le débat stratégique, former et exposer les solutions, puis recommander et connecter."
      />
      <Program />
    </section>

    {/* ── TEMPS FORTS ── */}
    <section className="jcia-section">
      <SectionHeader icon={LuSparkles} tag="Temps forts" title="Les moments marquants de l'édition" />
      <div className="jcia-cards jcia-cards--3">
        {highlights.map(({ icon: Icon, title, text }, i) => (
          <motion.article
            key={title}
            className="jcia-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="jcia-card__icon"><Icon aria-hidden /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>

    {/* ── AWARDS ── */}
    <section className="jcia-section jcia-section--awards">
      <SectionHeader
        icon={LuTrophy}
        tag="Cameroon Artificial Intelligence Awards"
        title="Les lauréats CAIA 2025"
        text="Sept catégories et plus de 5 000 votants pour mettre à l'honneur les meilleurs talents de l'IA au Cameroun."
        light
      />
      <ul className="jcia-awards">
        {awards.map(({ icon: Icon, cat, winner, podium }, i) => (
          <motion.li
            key={cat}
            className={`jcia-award ${podium ? `jcia-award--podium-${podium}` : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="jcia-award__icon"><Icon aria-hidden /></span>
            <span className="jcia-award__cat">{cat}</span>
            <strong className="jcia-award__winner">{winner}</strong>
          </motion.li>
        ))}
      </ul>
    </section>

    {/* ── CONTENUS ── */}
    <section className="jcia-section">
      <SectionHeader
        icon={LuLayers}
        tag="Contenus"
        title="Les grands thèmes débattus"
        text="Contenus scientifiques, économiques et institutionnels portés par les panels, conférences et masterclasses."
      />
      <div className="jcia-themes">
        {themes.map(({ icon: Icon, title, text }) => (
          <motion.article key={title} className="jcia-theme" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Icon aria-hidden />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    {/* ── RECOMMANDATIONS ── */}
    <section className="jcia-section jcia-section--alt" id="recommandations">
      <SectionHeader
        icon={LuLightbulb}
        tag="Recommandations"
        title="12 recommandations stratégiques"
        text="Une consolidation fidèle à l'esprit des échanges, orientée décision, impact et passage à l'action."
      />
      <Recommendations />
    </section>

    {/* ── FEUILLE DE ROUTE ── */}
    <section className="jcia-section">
      <SectionHeader icon={LuRoute} tag="Feuille de route" title="Après les JCIA 2025" />
      <ol className="jcia-roadmap">
        {roadmap.map(({ icon: Icon, horizon, action, result }, i) => (
          <motion.li
            key={horizon}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="jcia-roadmap__dot"><Icon aria-hidden /></span>
            <span className="jcia-roadmap__horizon">{horizon}</span>
            <strong>{action}</strong>
            <p>{result}</p>
          </motion.li>
        ))}
      </ol>
    </section>

    {/* ── PARTENAIRES ── */}
    <section className="jcia-section jcia-section--alt">
      <SectionHeader
        icon={LuHandshake}
        tag="Partenaires"
        title="Institutions et partenaires associés"
        text="Couverture médiatique assurée notamment par la CRTV et Canal 2."
      />
      <PartnersWall partners={partners} />
    </section>

    <NextEditionCta
      report={report}
      title="L'enjeu est désormais de bâtir"
      text={conclusion}
      other={{ to: '/jcia/2023', label: 'Revoir la 1re édition' }}
    />
  </main>
);

export default Jcia2025Page;


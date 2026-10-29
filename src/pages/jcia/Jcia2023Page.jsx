import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuFlag, LuCalendarDays, LuMapPin, LuArrowDown, LuMaximize2, LuSparkles, LuBookOpen,
  LuLayoutGrid, LuHandshake,
} from 'react-icons/lu';
import {
  JciaHero, SectionHeader, StatGrid, PartnersWall, NextEditionCta, ReportLink,
} from './JciaShared';
import { fadeUp } from '../../utils/motion';
import {
  hero, report, poster, keyFacts, sponsorship, supporters, foundingStory, outcomes, categories,
  activities, partnersLogos, conclusion,
} from './data/jcia2023';
import './Jcia.scss';

// ── Explorateur du rapport Année 1 ──────────────────────────────────────────
const ActivityExplorer = () => {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(
    () => categories.reduce((acc, c) => ({ ...acc, [c.key]: activities.filter((a) => a.cat === c.key).length }), {}),
    [],
  );
  const list = filter === 'all' ? activities : activities.filter((a) => a.cat === filter);

  const filters = [{ key: 'all', label: 'Tout', icon: LuLayoutGrid, count: activities.length },
    ...categories.map((c) => ({ ...c, count: counts[c.key] }))];

  return (
    <>
      <div className="jcia-filters" role="group" aria-label="Filtrer les activités">
        {filters.map(({ key, label, icon: Icon, count }) => (
          <button
            key={key}
            type="button"
            className={`jcia-filter ${filter === key ? 'is-active' : ''}`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            <Icon aria-hidden /> {label} <span>{count}</span>
          </button>
        ))}
      </div>

      <p className="jcia-sr-status" aria-live="polite">{list.length} activité{list.length > 1 ? 's' : ''} affichée{list.length > 1 ? 's' : ''}</p>

      <motion.ul layout className="jcia-activities">
        <AnimatePresence mode="popLayout">
          {list.map((a) => {
            const Icon = a.icon;
            return (
              <motion.li
                layout
                key={a.title}
                className="jcia-activity"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div className="jcia-activity__media">
                  {a.image
                    ? <img src={a.image} alt="" loading="lazy" />
                    : <span className="jcia-activity__placeholder">{Icon && <Icon aria-hidden />}</span>}
                  <span className="jcia-activity__type">{a.type}</span>
                </div>
                <div className="jcia-activity__body">
                  <h3>{a.title}</h3>
                  <ul className="jcia-activity__meta">
                    <li><LuCalendarDays aria-hidden /> {a.date}</li>
                    <li><LuMapPin aria-hidden /> {a.place}</li>
                  </ul>
                  <p>{a.text}</p>
                  {a.stat && <span className="jcia-activity__stat">{a.stat}</span>}
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </>
  );
};

const Jcia2023Page = () => (
  <main className="jcia-page">
    <JciaHero hero={hero}>
      <div className="jcia-hero__actions">
        <a href="#edition" className="jcia-btn jcia-btn--accent">L'édition fondatrice <LuArrowDown aria-hidden /></a>
        <a href="#rapport" className="jcia-btn jcia-btn--ghost">Le rapport Année 1</a>
        <ReportLink report={report} />
      </div>
    </JciaHero>

    <section className="jcia-stats" aria-label="Chiffres clés">
      <StatGrid stats={keyFacts} />
    </section>

    {/* ── ÉDITION FONDATRICE ── */}
    <section className="jcia-section" id="edition">
      <div className="jcia-split jcia-split--poster">
        <motion.figure className="jcia-poster" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <a href={poster} target="_blank" rel="noopener noreferrer" aria-label="Agrandir l'affiche officielle des JCIA 2023 (nouvel onglet)">
            <img src={poster} alt="Affiche officielle de la première édition des JCIA, 19 et 20 décembre 2023, IRIC et ENSPY, Yaoundé" loading="lazy" />
            <span className="jcia-poster__zoom"><LuMaximize2 aria-hidden /></span>
          </a>
          <figcaption>Affiche officielle — JCIA 2023</figcaption>
        </motion.figure>

        <div>
          <SectionHeader icon={LuFlag} tag="Édition fondatrice" title="Là où tout a commencé" align="left" />
          {foundingStory.map((p) => <p key={p.slice(0, 20)} className="jcia-lead">{p}</p>)}

          <dl className="jcia-sponsors">
            {sponsorship.map((s) => (
              <div key={s.role}>
                <dt>{s.role}</dt>
                <dd>{s.names.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    {/* ── RETOMBÉES ── */}
    <section className="jcia-section jcia-section--dark">
      <SectionHeader icon={LuSparkles} tag="Retombées" title="Ce que la 1re édition a déclenché" light />
      <ol className="jcia-outcomes">
        {outcomes.map(({ icon: Icon, date, title, text }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="jcia-outcomes__icon"><Icon aria-hidden /></span>
            <time>{date}</time>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.li>
        ))}
      </ol>
    </section>

    {/* ── RAPPORT ANNÉE 1 ── */}
    <section className="jcia-section jcia-section--alt" id="rapport">
      <SectionHeader
        icon={LuBookOpen}
        tag="Rapport Année 1"
        title="Une année d'actions dans le sillage des JCIA"
        text="Conférences, ateliers, participations nationales et internationales, médias et partenariats : les temps forts du premier rapport d'activités de l'IAC."
      />
      <ActivityExplorer />
    </section>

    {/* ── SOUTIENS ── */}
    <section className="jcia-section">
      <SectionHeader
        icon={LuHandshake}
        tag="Soutiens"
        title="Ils ont accompagné la première édition"
        text="Institutions, entreprises, médias et partenaires académiques mobilisés autour des JCIA 2023 et de l'IAC."
      />
      <ul className="jcia-chips">
        {supporters.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <PartnersWall partners={partnersLogos} />
    </section>

    <NextEditionCta
      report={report}
      title="Des fondations à l'écosystème"
      text={conclusion}
      other={{ to: '/jcia/2025', label: 'Lire le rapport JCIA 2025' }}
    />
  </main>
);

export default Jcia2023Page;

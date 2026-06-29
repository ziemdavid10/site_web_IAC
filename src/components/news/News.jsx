import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import cameraIcon from '../../assets/icons/photo.png';
import newsIcon from '../../assets/icons/news.png';
import handshakeIcon from '../../assets/icons/handshake.png';
import globeIcon from '../../assets/icons/globe.png';
import graduationIcon from '../../assets/icons/graduation.png';
import tvIcon from '../../assets/icons/tv.png';
import publicIcon from '../../assets/icons/public.png';
import euroIcon from '../../assets/icons/euro.png';

import './News.scss';



const mediaGallery = [
  { img: '/Nouveau_média/canal2-iac.jpg.jpeg', title: 'Canal 2 à l\'IAC', category: 'Médias' },
  { img: '/Nouveau_média/interview-fred-ngaba-crtv.jpg.jpeg', title: 'Interview Dr Fred NGABA — CRTV', category: 'Médias' },
  { img: '/Nouveau_média/conference-ia.jpg.jpeg', title: 'Conférence sur l\'IA', category: 'Événements' },
  { img: '/Nouveau_média/conference-universite-catholique.jpg.jpeg', title: 'Conférence à l\'Université Catholique', category: 'Événements' },
  { img: '/Nouveau_média/dastudy.jpg.jpeg', title: 'Présentation Dastudy', category: 'Innovation' },
  { img: '/Nouveau_média/iac-union-europeenne.jpg.jpeg', title: 'IAC & Union Européenne', category: 'Partenariats' },
  { img: '/Nouveau_média/visite-pnud-iac.jpg.jpeg', title: 'Visite du PNUD à l\'IAC', category: 'Partenariats' },
  { img: '/Nouveau_média/expertise-france-iac.jpg.jpeg', title: 'Mission Expertise France — IAC', category: 'Partenariats' },
  { img: '/Nouveau_média/iac-universite-douala.jpg.jpeg', title: 'IAC & Université de Douala', category: 'Académique' },
  { img: '/Nouveau_média/iac-iric.jpg.jpeg', title: 'IAC à l\'IRIC', category: 'Académique' },
  { img: '/Nouveau_média/iac-salem-hightech.jpg.jpeg', title: 'IAC & Salem High Tech', category: 'Académique' },
  { img: '/Nouveau_média/ransome-bawack-asmac.jpg.jpeg', title: 'Prof. Ransome BAWACK à l\'ASMAC', category: 'Académique' },
  { img: '/Nouveau_média/gain-riyad.jpg.jpeg', title: 'Assemblée GAIN — Riyad', category: 'International' },
  { img: '/Nouveau_média/gain-riyad-2.jpg.jpeg', title: 'Assemblée GAIN — Riyad (2)', category: 'International' },
  { img: '/Nouveau_média/journees-africaines-ie.jpg.jpeg', title: '7e Journées Africaines de l\'IE', category: 'International' },
  { img: '/Nouveau_média/evaluation-ia-cameroun.jpg.jpeg', title: 'Évaluation préparation IA — Cameroun', category: 'Gouvernance' },
  { img: '/Nouveau_média/iac-advanced-it.jpg.jpeg', title: 'Partenariat IAC & Advanced-IT Group', category: 'Partenariats' },
  { img: '/Nouveau_média/guillaume-soto-iac.jpg.jpeg', title: 'M. Guillaume SOTO à l\'IAC', category: 'Partenariats' },
  { img: '/Nouveau_média/visite-satguru-iac.jpg.jpeg', title: 'Visite Satguru Travel à l\'IAC', category: 'Partenariats' },
  { img: '/Nouveau_média/brainstorming-iac.jpg.jpeg', title: 'Session de brainstorming IAC', category: 'Interne' },
  { img: '/Nouveau_média/ia-etudiant.jpg.jpeg', title: 'L\'IA et l\'Étudiant', category: 'Événements' },
  { img: '/Nouveau_média/ia-donnees.jpg.jpeg', title: 'IA & Données', category: 'Événements' },
  { img: '/Nouveau_média/ia-industrie-medias.jpg.jpeg', title: 'IA & Industrie des Médias', category: 'Événements' },
  { img: '/Nouveau_média/universite-douala-ia.jpg.jpeg', title: 'Université de Douala & IA', category: 'Académique' },
  { img: '/Nouveau_média/cameroun-connecte.jpg.jpeg', title: 'Le Cameroun se connecte', category: 'Gouvernance' },
  { img: '/Nouveau_média/iac-conia.jpg.jpeg', title: 'IAC & CONIA', category: 'Gouvernance' },
];

const categories = ['Tous', 'Médias', 'Événements', 'Partenariats', 'Académique', 'International', 'Gouvernance', 'Innovation', 'Interne'];

const newsHighlights = [
  {
    icon: tvIcon,
    title: 'Passage sur Canal 2 & CRTV',
    desc: 'Le Dr Fred NGABA et les membres de l\'IAC ont été interviewés par les grandes chaînes nationales pour présenter la vision de l\'IA au Cameroun.',
    date: '2024',
    category: 'Médias',
  },
  {
    icon: globeIcon,
    title: 'Assemblée GAIN à Riyad',
    desc: 'L\'IAC représente le Cameroun à l\'Assemblée Générale du Global AI Network (GAIN) à Riyad, Arabie Saoudite, renforçant les liens avec l\'écosystème IA mondial.',
    date: '2024',
    category: 'International',
  },
  {
    icon: euroIcon,
    title: 'Partenariat avec l\'Union Européenne',
    desc: 'Signature d\'un accord de coopération avec l\'Union Européenne pour le développement de l\'IA éthique et responsable en Afrique centrale.',
    date: '2024',
    category: 'Partenariats',
  },
  {
    icon: publicIcon,
    title: 'Évaluation nationale IA',
    desc: 'Participation à la réunion d\'évaluation de la préparation du Cameroun à l\'adoption de l\'IA, en présence des ministères et institutions publiques.',
    date: '2024',
    category: 'Gouvernance',
  },
  {
    icon: handshakeIcon,
    title: 'Visite du PNUD',
    desc: 'Une délégation du Programme des Nations Unies pour le Développement visite les locaux de l\'IAC pour explorer des synergies sur l\'innovation locale.',
    date: '2024',
    category: 'Partenariats',
  },
  {
    icon: graduationIcon,
    title: 'Conférences universitaires',
    desc: 'L\'IAC intervient dans les grandes universités camerounaises (Université de Douala, Université Catholique, IRIC) pour sensibiliser les étudiants à l\'IA.',
    date: '2024',
    category: 'Académique',
  },
];

const News = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [lightbox, setLightbox] = useState(null);
  const [activeTab, setActiveTab] = useState('gallery');

  const filtered = activeFilter === 'Tous'
    ? mediaGallery
    : mediaGallery.filter(m => m.category === activeFilter);

  return (
    <section className="news-section" id="news">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="news__tag">Actualités & Médias</span>
        <h2>L'IAC en Action</h2>
        <p>Retrouvez nos dernières activités, partenariats et présences médiatiques.</p>

        <div className="news-tabs">
          <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>
            <img src={cameraIcon} alt=""  width={17} height={17} /> Galerie Photo
          </button>
          <button className={activeTab === 'highlights' ? 'active' : ''} onClick={() => setActiveTab('highlights')}>
            <img src={newsIcon} alt="" width={17} height={17} /> Faits Marquants
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeTab === 'gallery' && (
          <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="gallery-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={activeFilter === cat ? 'active' : ''}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div className="photo-grid" layout>
              <AnimatePresence>
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.img}
                    className="photo-card"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onClick={() => setLightbox(item)}
                  >
                    <img src={item.img} alt={item.title} loading="lazy" />
                    <div className="photo-card__overlay">
                      <span className="photo-card__cat">{item.category}</span>
                      <p>{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'highlights' && (
          <motion.div
            key="highlights"
            className="news-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {newsHighlights.map((item, i) => (
              <motion.div
                className="news-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="news-card__icon"><img src={item.icon} alt="" width={40} height={40} /></div>
                <div className="news-content">
                  <span className="news-cat">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="news-date">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
              <img src={lightbox.img} alt={lightbox.title} />
              <div className="lightbox__info">
                <span>{lightbox.category}</span>
                <p>{lightbox.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default News;

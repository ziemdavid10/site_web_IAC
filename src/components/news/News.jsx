import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './News.scss';

const newsData = {
  interne: [
    { title: "Visite d'Expertise France", desc: "Accueil de Monsieur Jean Paul SALEILLE pour discuter de collaborations techniques.", date: "Récent" },
    { title: "Partenariat PNUD", desc: "Visite de travail d'une équipe du PNUD dans nos locaux pour l'innovation locale.", date: "Récent" }
  ],
  national: [
    { title: "Initiatives Éducatives", desc: "Organisation régulière de formations et d'ateliers à travers le pays pour les jeunes et professionnels." },
    { title: "Support aux Startups", desc: "Conseils techniques et accès aux réseaux pour les entreprises locales émergentes en IA." },
    { title: "Politiques & Régulations", desc: "Participation à la création d'un cadre éthique et réglementaire pour l'IA au niveau national." }
  ],
  international: [
    { title: "Ambassadeurs de l'IA", desc: "Représentation du Cameroun sur la scène internationale suite au prix de Bordeaux." },
    { title: "Collaborations Mondiales", desc: "Échanges de ressources et de connaissances avec des organisations internationales." }
  ]
};

const News = () => {
  const [activeTab, setActiveTab] = useState('interne');

  return (
    <section className="news-section" id="news">
      <div className="section-header">
        <h2>Dernières Actualités</h2>
        <div className="tabs">
          {['interne', 'national', 'international'].map(tab => (
            <button 
              key={tab}
              className={activeTab === tab ? 'active' : ''} 
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="news-grid">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="news-container"
          >
            {newsData[activeTab].map((item, index) => (
              <div className="news-card" key={index}>
                <div className="news-decoration"></div>
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.date && <span className="news-date">{item.date}</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default News;
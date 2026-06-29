import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Vision from './components/mission/Mission';
import Services from './components/service/Service';
import Ecosystem from './components/ecosystem/Ecosystem';
import ScrollProgress from './components/ScrollProgress';
import Agenda from './components/agenda/Agenda';
import News from './components/news/News';
import Careers from './components/careers/Careers';
import Membership from './components/membership/Membership';
import PartnerForm from './components/partnerForm/PartnerForm';
import Partners from './components/partners/Partners';
import Cursor from './components/cursor/Cursor';
import Footer from './components/footer/Footer';
import PhotoSlider from './components/parallax/PhotoSlider';
import JciaPage from './pages/jcia/JciaPage';

import './App.scss';

const parallaxSections = [
  {
    images: [
      '/Nouveau_média/brainstorming-iac.jpg.jpeg',
      '/Nouveau_média/conference-ia.jpg.jpeg',
      '/Nouveau_média/ia-etudiant.jpg.jpeg',
    ],
    tag: 'Innovation & Collaboration',
    quote: "L'IA n'est pas une menace pour l'Afrique, c'est sa plus grande opportunité.",
    author: 'Dr. Fred NGABA, Fondateur IAC',
  },
  {
    images: [
      '/Nouveau_média/gain-riyad.jpg.jpeg',
      '/Nouveau_média/gain-riyad-2.jpg.jpeg',
      '/Nouveau_média/journees-africaines-ie.jpg.jpeg',
    ],
    tag: 'Rayonnement International',
    quote: "Le Cameroun prend sa place dans l'écosystème mondial de l'Intelligence Artificielle.",
    author: 'Assemblée GAIN — Riyad, Arabie Saoudite',
  },
  {
    images: [
      '/Nouveau_média/conference-universite-catholique.jpg.jpeg',
      '/Nouveau_média/iac-iric.jpg.jpeg',
      '/Nouveau_média/iac-salem-hightech.jpg.jpeg',
      '/Nouveau_média/ransome-bawack-asmac.jpg.jpeg',
    ],
    tag: 'Partage du Savoir',
    quote: "Former, sensibiliser et accompagner : les trois piliers de notre mission nationale.",
    author: 'Intelligence Artificielle Cameroun',
  },
  {
    images: [
      '/Nouveau_média/iac-union-europeenne.jpg.jpeg',
      '/Nouveau_média/visite-pnud-iac.jpg.jpeg',
      '/Nouveau_média/expertise-france-iac.jpg.jpeg',
      '/Nouveau_média/iac-advanced-it.jpg.jpeg',
    ],
    tag: 'Partenariats Stratégiques',
    quote: "Des alliances solides pour un développement technologique souverain et durable.",
    author: 'IAC & Partenaires Internationaux',
  },
];

function App() {
  const [showJcia, setShowJcia] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowJcia(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('openJcia', handler);
    return () => window.removeEventListener('openJcia', handler);
  }, []);

  const handleBack = () => {
    setShowJcia(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showJcia) return <JciaPage onBack={handleBack} />;
  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />

      <main>
        <Element name="home">
          <Hero />
        </Element>

        <Element name="about">
          <Vision />
        </Element>

        <PhotoSlider {...parallaxSections[0]} />

        <Element name="services">
          <Services />
        </Element>

        <PhotoSlider {...parallaxSections[1]} />

        <Element name="ecosystem">
          <Ecosystem />
        </Element>

        <PhotoSlider {...parallaxSections[2]} />

        <Element name="agenda">
          <Agenda />
        </Element>

        <Element name="news">
          <News />
        </Element>

        <PhotoSlider {...parallaxSections[3]} />

        <Element name="careers">
          <Careers />
        </Element>

        <Element name="membership">
          <Membership />
        </Element>

        <Element name="partner">
          <PartnerForm />
        </Element>

        <Element name="partners">
          <Partners />
        </Element>
      </main>

      <Footer />
      <Cursor />
    </div>
  );
}

export default App;

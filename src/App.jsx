// import './App.scss';
// import React from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';

// // Importation des composants créés précédemment
// import Navbar from './components/navbar/Navbar';
// import Hero from './components/hero/Hero';
// import Vision from './components/mission/Mission';
// import Services from './components/service/Service';
// import Ecosystem from './components/ecosystem/Ecosystem';
// import Agenda from './components/agenda/Agenda';
// import News from './components/news/News';
// import Careers from './components/careers/Careers';
// import Membership from './components/membership/Membership';
// import PartnerForm from './components/partnerForm/PartnerForm';

// // import Missions from './components/mission/Mission';
// // import Opportunities from './components/opportunities/Opportunities';
// import Footer from './components/footer/Footer';

// const App = () => {
//   // Barre de progression de lecture pour un aspect "Tech" pro
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <div className="app-wrapper">
//       {/* Barre de progression subtile en haut de page */}
//       <motion.div className="progress-bar" style={{ scaleX }} />

//       <Navbar />

//       <main>
//         <section id="accueil">
//           <Hero />
//         </section>

//         <section id="mission" className="section-padding">
//           <Vision />
//         </section>

//         <section id="services" className="section-padding bg-light">
//           <Services />
//         </section>

//         <section id="ecosystem" className="section-padding bg-light">
//           <Ecosystem />
//         </section>

//         <section id="careers" className="section-padding">
//           <Careers />
//         </section>

//         <section id="membership" className="section-padding">
//           <Membership />
//         </section>

//         <section id="partner" className="section-padding">
//           <PartnerForm />
//         </section>

//         <section id="news" className="section-padding">
//           <News />
//         </section>

//         <section id="agenda" className="section-padding">
//           <Agenda />
//         </section>

//       </main>

//       <Hero />  
//       <Ecosystem />
//       <Agenda />
//       <News />
//       <Careers />
//       <Membership />
//       <PartnerForm />
//       <Footer />
//     </div>
//   );
// };

// export default App;



import React from 'react';
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

import './App.scss';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      {/* Barre de navigation fixe */}
      <Navbar />

      <main>
        {/* Section d'accueil / Hero */}
        <Element name="home">
          <Hero />
        </Element>

        {/* Historique, Vision et Missions */}
        <Element name="about">
          <Vision />
        </Element>

        {/* Services & Formations (Rapides, Intensives, Techniques) */}
        <Element name="services">
          <Services />
        </Element>

        {/* Acteurs de l'IA (Alain Bomba, David Kenfack, etc.) */}
        <Element name="ecosystem">
          <Ecosystem />
        </Element>

        {/* Calendrier 2024 et Événements */}
        <Element name="agenda">
          <Agenda />
        </Element>

        {/* Visites officielles et Initiatives */}
        <Element name="news">
          <News />
        </Element>

        {/* Offres de stages et Appels à projets */}
        <Element name="careers">
          <Careers />
        </Element>

        {/* Adhésion (10 000 FCFA) */}
        <Element name="membership">
          <Membership />
        </Element>

        {/* Formulaire Entreprise */}
        <Element name="partner">
          <PartnerForm />
        </Element>

        {/* Section Partenaires */}
        <Element name="partners">
          <Partners />
        </Element>
      </main>

      {/* Pied de page avec Logos partenaires */}
      <Footer />
      
      {/* Curseur personnalisé */}
      <Cursor />
    </div>
  );
}

export default App;
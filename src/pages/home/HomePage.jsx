import { Element } from 'react-scroll';
import Hero from '../../components/hero/Hero';
import PhotoSlider from '../../components/parallax/PhotoSlider';
import Partners from '../../components/partners/Partners';

const parallaxSections = [
  {
    images: [
      '/Nouveau_média/brainstorming-iac.jpg.jpeg',
      '/Nouveau_média/conference-ia.jpg.jpeg',
      '/Nouveau_média/ia-etudiant.jpg.jpeg',
    ],
    tag: 'Innovation & Collaboration',
    quote: "L'IA n'est pas une menace pour l'Afrique, c'est sa plus grande opportunité.",
    author: 'M. Boris Landry KOUEKAM, Fondateur IAC',
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
];

const HomePage = () => (
  <main>
    <Element name="home">
      <Hero />
    </Element>
    <PhotoSlider {...parallaxSections[0]} />
    <PhotoSlider {...parallaxSections[1]} />
    <Element name="partners">
      <Partners />
    </Element>
  </main>
);

export default HomePage;

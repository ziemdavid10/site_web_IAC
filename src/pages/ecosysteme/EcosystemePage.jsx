import Ecosystem from '../../components/ecosystem/Ecosystem';
import PhotoSlider from '../../components/parallax/PhotoSlider';

const parallax = {
  images: [
    '/Nouveau_média/iac-union-europeenne.jpg.jpeg',
    '/Nouveau_média/visite-pnud-iac.jpg.jpeg',
    '/Nouveau_média/expertise-france-iac.jpg.jpeg',
    '/Nouveau_média/iac-advanced-it.jpg.jpeg',
  ],
  tag: 'Partenariats Stratégiques',
  quote: "Des alliances solides pour un développement technologique souverain et durable.",
  author: 'IAC & Partenaires Internationaux',
};

const EcosystemePage = () => (
  <main>
    <Ecosystem />
    <PhotoSlider {...parallax} />
  </main>
);

export default EcosystemePage;

import Vision from '../../components/mission/Mission';
import PhotoSlider from '../../components/parallax/PhotoSlider';

const parallax = {
  images: [
    '/Nouveau_média/conference-universite-catholique.jpg.jpeg',
    '/Nouveau_média/iac-iric.jpg.jpeg',
    '/Nouveau_média/iac-salem-hightech.jpg.jpeg',
  ],
  tag: 'Partage du Savoir',
  quote: "Former, sensibiliser et accompagner : les trois piliers de notre mission nationale.",
  author: 'Intelligence Artificielle Cameroun',
};

const PresentationPage = () => (
  <main>
    <Vision />
    <PhotoSlider {...parallax} />
  </main>
);

export default PresentationPage;

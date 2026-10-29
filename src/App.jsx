import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import JciaCountdownBanner from './components/navbar/JciaCountdownBanner';
import Footer from './components/footer/Footer';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/cursor/Cursor';
import CookieConsent from './components/cookies/CookieConsent';

import HomePage from './pages/home/HomePage';
import PresentationPage from './pages/presentation/PresentationPage';
import ServicesPage from './pages/services/ServicesPage';
import EcosystemePage from './pages/ecosysteme/EcosystemePage';
import ActualitesPage from './pages/actualites/ActualitesPage';
import CarrieresPage from './pages/carrieres/CarrieresPage';
import MembresPage from './pages/membres/MembresPage';
import JciaRoute from './pages/jcia/JciaRoute';
import NotFoundPage from './pages/legal/NotFoundPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import RefundPage from './pages/legal/RefundPage';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <JciaCountdownBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ecosysteme" element={<EcosystemePage />} />
        <Route path="/actualites" element={<ActualitesPage />} />
        <Route path="/carrieres" element={<CarrieresPage />} />
        <Route path="/membres" element={<MembresPage />} />
        <Route path="/jcia" element={<JciaRoute />} />
        <Route path="/confidentialite" element={<PrivacyPage />} />
        <Route path="/conditions-utilisation" element={<TermsPage />} />
        <Route path="/politique-cookies" element={<CookiePolicyPage />} />
        <Route path="/remboursement" element={<RefundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
      <Cursor />
    </BrowserRouter>
  );
}

export default App;

import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import JciaCountdownBanner from './components/navbar/JciaCountdownBanner';
import Footer from './components/footer/Footer';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/cursor/Cursor';
import CookieConsent from './components/cookies/CookieConsent';
import ScrollToTop from './components/routing/ScrollToTop';
import ErrorBoundary from './components/routing/ErrorBoundary';
import PageLoader from './components/routing/PageLoader';
import PageMeta from './components/seo/PageMeta';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { routes, redirects } from './router/routes';
import ErrorPage from './pages/error/ErrorPage';

// La clé liée à l'URL réinitialise l'ErrorBoundary quand on change de page.
const AppRoutes = () => {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary key={pathname}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.map(({ path, component: Page, title, description }) => (
            <Route
              key={path}
              path={path}
              element={(
                <>
                  <PageMeta title={title} description={description} path={path} />
                  <Page />
                </>
              )}
            />
          ))}
          {redirects.map(({ from, to }) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route
            path="*"
            element={(
              <>
                <PageMeta title="Page introuvable" noindex />
                <ErrorPage code={404} />
              </>
            )}
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CookieConsentProvider>
        <a href="#contenu" className="skip-link">Aller au contenu</a>
        <ScrollToTop />
        <ScrollProgress />
        <JciaCountdownBanner />
        <Navbar />
        <div id="contenu" tabIndex={-1}>
          <AppRoutes />
        </div>
        <Footer />
        <CookieConsent />
        <Cursor />
      </CookieConsentProvider>
    </BrowserRouter>
  );
}

export default App;

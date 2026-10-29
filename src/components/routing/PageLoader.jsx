// Affiché pendant le chargement d'une page (code splitting)
const PageLoader = () => (
  <div className="page-loader" role="status" aria-live="polite">
    <span className="page-loader__ring" aria-hidden />
    <span className="sr-only">Chargement de la page…</span>
  </div>
);

export default PageLoader;

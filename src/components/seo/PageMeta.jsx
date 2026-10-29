import usePageMeta from '../../hooks/usePageMeta';

// Composant déclaratif : <PageMeta title="…" description="…" path="/…" />
const PageMeta = (props) => {
  usePageMeta(props);
  return null;
};

export default PageMeta;

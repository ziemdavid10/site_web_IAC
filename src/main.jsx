import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/dm-sans'; // Police auto-hébergée (aucun appel à Google Fonts)
import './styles/main.scss';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Chemin absolu obligatoire : avec './', les routes imbriquées
  // (/jcia/2025, /jcia/2023, URL inconnues…) chargeraient les fichiers
  // JS/CSS depuis /jcia/assets/… et afficheraient une page blanche.
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // Bibliothèques séparées du code du site : elles restent en cache
        // dans le navigateur d'une mise à jour du site à l'autre.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          // Bibliothèques indépendantes : paquets dédiés
          if (id.includes('framer-motion')) return 'vendor-motion';
          if (id.includes('react-icons')) return 'vendor-icons';
          if (id.includes('@emailjs')) return 'vendor-emailjs';
          // React et toutes ses dépendances ensemble (évite les imports circulaires)
          return 'vendor-react';
        },
      },
    },
  },
})

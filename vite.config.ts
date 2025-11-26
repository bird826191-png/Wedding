import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Wedding/', // Ensures relative paths for assets on GitHub Pages
  build: {
    outDir: 'dist',
  },
});
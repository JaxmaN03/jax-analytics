import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: '/',
  build: {
    rolldownOptions: {
      input: Object.fromEntries(['index', 'services', 'portfolio', 'about', 'contact'].map((page) => [page, fileURLToPath(new URL(`./${page}.html`, import.meta.url))])),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});

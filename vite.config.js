import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative base paths so assets resolve correctly on GitHub Pages
  server: {
    port: 3000,
    open: true
  }
});

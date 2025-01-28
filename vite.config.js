import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/React-Movie-App/',  // Set this to match your GitHub repository name
  plugins: [react()],
});

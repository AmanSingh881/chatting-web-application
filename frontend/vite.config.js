import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures assets load from the root
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/data/ydsQuestionBank')) {
            return 'yds-questions';
          }
          if (id.includes('src/data/scientificReadings')) {
            return 'scientific-readings';
          }
          if (id.includes('src/data/grammar/')) {
            return 'grammar-data';
          }
          if (id.includes('src/data/vocabulary')) {
            return 'vocabulary-data';
          }
        },
      },
    },
  },
});

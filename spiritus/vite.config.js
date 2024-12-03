import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path for resolving aliases

export default defineConfig({
  plugins: [react()],
  server: {port:5173},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps @ to the src directory
    },
  },
});

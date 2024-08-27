import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteTsconfigPaths(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 3500,
        manualChunks: {
          'react-stuff': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});

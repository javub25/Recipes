import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@api',
        replacement: path.resolve(path.join(__dirname, '/src/api')),
      },
      {
        find: '@features',
        replacement: path.resolve(path.join(__dirname, '/src/features')),
      },
      {
        find: '@tests',
        replacement: path.resolve(path.join(__dirname, '/src/tests')),
      },
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname, '/src/assets/img')),
      },
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages')),
      },
    ]
  }
});
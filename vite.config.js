import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Planetario-VR-/', // Necesario para GitHub Pages
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}) 
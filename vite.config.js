import { defineConfig } from 'vite'

export default defineConfig({
<<<<<<< HEAD
=======
  base: '/Planetario-VR-/', // Necesario para GitHub Pages
>>>>>>> 25d8136 (Limpieza final de referencias a submódulos rotos para GitHub Pages)
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
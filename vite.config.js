import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'appLocal/dist', // Generar build en appLocal/dist
    emptyOutDir: true, // Limpiar la carpeta antes de cada build
  },
})


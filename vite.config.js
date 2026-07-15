import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuracao minima do Vite para reproduzir a pagina estatica original.
export default defineConfig({
  plugins: [react()],
})

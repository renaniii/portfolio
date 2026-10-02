import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Mantém o bundle moderno, mas reduz o alvo de sintaxe para alcançar
// navegadores e WebViews mais antigos sem enfraquecer a CSP atual.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2017',
  },
})

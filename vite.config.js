import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base makes GitHub Pages (repo subpaths) work without knowing the repo name.
  base: './',
})

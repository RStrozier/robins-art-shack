import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:  "/robins-art-shack/",
  plugins: [react()],
})
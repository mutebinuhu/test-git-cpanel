import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://testgit.laverde.ae',
  base:'https://admin.laverde.ae',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@kamari/ignite-lab-design-system": path.resolve(__dirname, "./src")
    }
  },
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8000
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    // 👇 This is the missing part for React Router
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: '/',
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
  ? '/typescript_luxury_hotel/' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"),
  //   },
  // },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://freyja-1d2y.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

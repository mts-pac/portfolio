import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio',
  plugins: [
    vue(),
    eslintPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://todosvc.bmaster.kro.kr/",
        changeOrigin: true,
        secure: false,//https일 경우 일시적으로 보안 비활성?
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})

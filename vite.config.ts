import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
console.log(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      //import.meta.url : file:///C:/Users/jllt1/Desktop/vue-samples/vite.config.ts
      //new URL('./src', import.meta.url)其中有个属性：pathname: "/C:/Users/jllt1/Desktop/vue-samples/src"
      '@': fileURLToPath(new URL('./src', import.meta.url)) //C:\Users\jllt1\Desktop\vue-samples\src
    }
  }
})

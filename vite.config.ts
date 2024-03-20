import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
//针对Element自动按需加载插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// console.log(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // ElementPlus({}),
  ],
  resolve: {
    alias: {
      //import.meta.url : file:///C:/Users/jllt1/Desktop/vue-samples/vite.config.ts
      //new URL('./src', import.meta.url)其中有个属性：pathname: "/C:/Users/jllt1/Desktop/vue-samples/src"
      '@': fileURLToPath(new URL('./src', import.meta.url)) //C:\Users\jllt1\Desktop\vue-samples\src
    }
  },
  server: {
    // 设置反向代理，跨域
    proxy: {
      '^/api': {
        // 后台地址
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api1/, '')
      },
      '/api2': {
        // 后台地址
        target: 'http://127.0.0.1:3001/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api2/, '')
      }
    }
  }
})

import './assets/css/reset.css'
import './assets/css/base.css'
import './assets/fonts/iconfont.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import globalComponents from './components/globalComponents'

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(globalComponents)

app.mount('#app')
//全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info)
}

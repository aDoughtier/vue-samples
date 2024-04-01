import Icon from './Icon/index.vue';
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('ZxIcon', Icon);
    // 可以继续添加其他组件...
  }
}
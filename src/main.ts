import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import 'vant/lib/index.css' // global style
import './utils/rem' // 实际不导入,仅仅运行内部代码

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')

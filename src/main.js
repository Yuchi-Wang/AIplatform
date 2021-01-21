import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局组件
import '@/components/Common'
// 引入自定义配置的elementUI
import 'element-ui/lib/theme-chalk/index.css'
import CustomElement from '@/components/ElementUI'
Vue.use(CustomElement)

// 引入自定指令
import './directive/enlargeBgimg'
//  初始化CSS
import '@/assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

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
// 国际化
import i18n from './lang'
Vue.use(CustomElement, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

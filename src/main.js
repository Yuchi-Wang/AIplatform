import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局组件
import '@/components/Common'
// 引入自定义配置的elementUI
import '@/components/ElementUI'

//  初始化CSS
import '@/assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

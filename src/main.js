import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局组件
import '../src/components/common'
import '../src/components/ElementUI'
import 'element-ui/lib/theme-chalk/index.css'

//  初始化CSS
import '../src/assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

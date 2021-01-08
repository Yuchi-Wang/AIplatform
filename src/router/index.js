import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/homeIndex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sdkProductinfo',
    name: 'SdkProductInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import('../views/product/sdkProductInfo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/user/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import('../views/user/register.vue')
  },
  {
    path: '/forgetpwd',
    name: 'forgetPwd',
    component: () =>
      import('../views/user/forgetPwd.vue')
  },
  {
    path: '/serviceagreement',
    name: 'serviceAgreement',
    component: () =>
      import('../views/user/serviceAgreement.vue')
  },
  {
    path: '/privacypolicy',
    name: 'privacyPolicy',
    component: () =>
      import('../views/user/privacyPolicy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

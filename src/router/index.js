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
  },
  {
    path: '/abaoProduct',
    name: 'abaoProduct',
    component: () =>
      import('../views/product/abaoProduct.vue')
  },
  {
    path: '/promptProductIntro',
    name: 'promptProductIntro',
    component: () =>
      import('../views/product/promptProductIntro.vue')
  },
  {
    path: '/babyVoiceProductIntro',
    name: 'babyVoiceProductIntro',
    component: () =>
      import('../views/product/babyVoiceProductIntro.vue')
  },
  {
    path: '/solution',
    name: 'solution',
    component: () =>
      import('../views/product/solution.vue')
  },
  {
    path: '/businessCoperation',
    name: 'businessCoperation',
    component: () =>
      import('../views/about/businessCoperation.vue')
  },
  {
    path: '/companyInfo',
    name: 'companyInfo',
    component: () =>
      import('../views/about/companyInfo.vue')
  },
  {
    path: '/technicalSupport',
    name: 'technicalSupport',
    component: () =>
      import('../views/about/technicalSupport.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

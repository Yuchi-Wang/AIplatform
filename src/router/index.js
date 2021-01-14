import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout/layout'
import fileLayout from '@/components/layout/fileLayout'
const _import = file => () => import('@/views/' + file + '.vue')

Vue.use(VueRouter)

// 登录
const login = {
  path: '/login',
  component: _import('user/login'),
  name: 'login',
  hidden: true
}

// 注册
const register = {
  path: '/register',
  component: _import('user/register'),
  name: 'register',
  hidden: true
}

// 主页
const Home = {
  path: '',
  component: Layout,
  hidden: true,
  children: [
    {
      path: '',
      name: 'Home',
      component: _import('home/homeIndex')
    }
  ]
}

// 忘记密码
const forgetPwd = {
  path: '/forgetpwd',
  component: _import('user/forgetPwd'),
  name: 'forgetPwd',
  hidden: true
}

// 解决方案
const solution = {
  path: '/solution',
  component: Layout,
  hidden: true,
  children: [
    {
      path: '/solution',
      name: 'Solution',
      component: _import('product/solution')
    }
  ]
}

// 产品模块
const product = {
  path: '/product',
  component: Layout,
  hidden: true,
  redirect: '/product/sdkProductinfo',
  children: [
    {
      path: 'sdkProductinfo',
      name: 'SdkProductInfo',
      component: _import('product/sdkProductInfo')
    },
    {
      path: 'abaoProduct',
      name: 'abaoProduct',
      component: _import('product/abaoProduct')
    },
    {
      path: 'promptProductIntro',
      name: 'promptProductIntro',
      component: _import('product/promptProductIntro')
    },
    {
      path: 'babyVoiceProductIntro',
      name: 'babyVoiceProductIntro',
      component: _import('product/babyVoiceProductIntro')
    }
  ]
}

// 关于我们
const about = {
  path: '/about',
  component: Layout,
  hidden: true,
  redirect: '/about/companyInfo',
  children: [
    {
      path: 'companyInfo',
      name: 'companyInfo',
      component: _import('about/companyInfo')
    },
    {
      path: 'businessCoperation',
      name: 'businessCoperation',
      component: _import('about/businessCoperation')
    },
    {
      path: 'technicalSupport',
      name: 'technicalSupport',
      component: _import('about/technicalSupport')
    }
  ]
}

// 用户模块
const user = {
  path: '/user',
  component: Layout,
  hidden: true,
  redirect: '/user/serviceagreement',
  children: [
    {
      path: 'serviceagreement',
      name: 'serviceagreement',
      component: _import('user/serviceAgreement')
    },
    {
      path: 'privacyPolicy',
      name: 'privacyPolicy',
      component: _import('user/privacyPolicy')
    }
  ]
}

// 这里是文档板块
// 导读
const ReadingGuide = {
  path: '/file',
  component: fileLayout,
  hidden: false,
  redirect: '/file/platformInfo',
  name: 'ReadingGuide',
  meta: {
    title: '导读'
  },
  children: [
    {
      path: 'platformInfo',
      name: 'platformInfo',
      component: _import('file/platformInfo'),
      meta: {
        title: '简介'
      }
    },
    {
      path: 'quickGuide',
      name: 'quickGuide',
      component: _import('file/quickGuide'),
      meta: {
        title: '快速指引'
      }
    },
    {
      path: 'authentication',
      name: 'authentication',
      component: _import('file/authentication'),
      meta: {
        title: '鉴权认证机制'
      }
    }
  ]
}

// 婴儿哭泣识别
const babyVoiceTechDoucment = {
  path: '/file',
  component: fileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/babyVoiceTechDoucment',
  name: 'babyVoiceTechDoucment',
  meta: {
    title: '婴儿哭泣识别  '
  },
  children: [
    {
      path: 'babyVoiceTechDoucment',
      name: 'babyVoiceTechDoucment',
      component: _import('file/babyVoiceTechDoucment'),
      meta: {
        title: '婴儿哭泣识别'
      }
    }
  ]
}
// 成龙阿宝
const clabTechDoucment = {
  path: '/file',
  component: fileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/clabTechDoucment',
  name: 'clabTechDoucment',
  meta: {
    title: '成龙阿宝  '
  },
  children: [
    {
      path: 'clabTechDoucment',
      name: 'clabTechDoucment',
      component: _import('file/clabTechDoucment'),
      meta: {
        title: '成龙阿宝'
      }
    }
  ]
}
// prompt
const promptTechDoucment = {
  path: '/file',
  component: fileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/promptTechDoucment',
  name: 'promptTechDoucment',
  meta: {
    title: 'prompt'
  },
  children: [
    {
      path: 'promptTechDoucment',
      name: 'promptTechDoucment',
      component: _import('file/promptTechDoucment'),
      meta: {
        title: 'prompt'
      }
    }
  ]
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const constRouter = [
  login,
  Home,
  solution,
  register,
  forgetPwd,
  product,
  about,
  user,
  ReadingGuide,
  babyVoiceTechDoucment,
  clabTechDoucment,
  promptTechDoucment
]

const createRouter = () =>
  new VueRouter({
    routes: constRouter
  })
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

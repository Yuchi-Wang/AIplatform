import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/DefaultLayout'
import FileLayout from '@/components/Layout/FileLayout'
import ConsoleLayout from '@/components/Layout/ConsoleLayout'
import i18n from '../lang'
const _resolve = file => resolve => require([`@/views/${file}.vue`], resolve)

Vue.use(VueRouter)

// 登录
const login = {
  path: '/login',
  component: _resolve('user/login'),
  name: 'login',
  hidden: true
}

// 注册
const register = {
  path: '/register',
  component: _resolve('user/register'),
  name: 'register',
  hidden: true
}

// 忘记密码
const forgetPwd = {
  path: '/forgetpwd',
  component: _resolve('user/forgetPwd'),
  name: 'forgetPwd',
  hidden: true
}

// 主页
const Home = {
  path: '/',
  component: Layout,
  singleMenu: true,
  meta: {
    title: i18n.t('route.home')
  },
  children: [
    {
      path: '',
      name: 'Home',
      component: _resolve('home/default')
    }
  ]
}

// 解决方案
const solution = {
  path: '/solution',
  component: Layout,
  singleMenu: true,
  meta: {
    title: i18n.t('route.solution')
  },
  children: [
    {
      path: '/solution',
      name: 'Solution',
      component: _resolve('product/solution')
    }
  ]
}

// 产品模块
const product = {
  path: '/product',
  component: Layout,
  singleMenu: false,
  redirect: '/product/abaoProduct',
  meta: {
    title: i18n.t('route.product')
  },
  children: [
    {
      path: 'abaoProduct',
      name: 'abaoProduct',
      component: _resolve('product/abaoProduct'),
      meta: {
        title: i18n.t('route.abao')
      }
    },
    {
      path: 'promptProductIntro',
      name: 'promptProductIntro',
      component: _resolve('product/promptProductIntro'),
      meta: {
        title: 'prompt'
      }
    },
    {
      path: 'babyVoiceProductIntro',
      name: 'babyVoiceProductIntro',
      component: _resolve('product/babyVoiceProductIntro'),
      meta: {
        title: i18n.t('route.cryrecognition')
      }
    }
  ]
}

// sdk产品
const sdkProductinfo = {
  path: '/sdkProductinfo',
  component: Layout,
  singleMenu: true,
  meta: {
    title: 'SDK'
  },
  children: [
    {
      path: '/sdkProductinfo',
      name: 'sdkProductinfo',
      component: _resolve('product/sdkProductInfo')
    }
  ]
}
// 顶部菜单控制台
const navConsole = {
  path: '/console',
  redirect: '/console/accountManage',
  component: Layout,
  singleMenu: true,
  meta: {
    title: i18n.t('route.console')
  },
  children: [
    {
      path: 'accountManage',
      name: 'console'
    }
  ]
}

//  顶部菜单文档
const navFile = {
  path: '/file',
  redirect: '/file/platformInfo',
  singleMenu: true,
  component: Layout,
  meta: {
    title: i18n.t('route.document')
  },
  children: [
    {
      path: 'platformInfo',
      name: 'file'
    }
  ]
}

// 关于我们
const about = {
  path: '/about',
  component: Layout,
  singleMenu: false,
  redirect: '/about/companyInfo',
  meta: {
    title: i18n.t('route.about')
  },
  children: [
    {
      path: 'companyInfo',
      name: 'companyInfo',
      component: _resolve('about/companyInfo'),
      meta: {
        title: i18n.t('about.companyProfile')
      }
    },
    {
      path: 'businessCoperation',
      name: 'businessCoperation',
      component: _resolve('about/businessCoperation'),
      meta: {
        title: i18n.t('about.businessCooperation')
      }
    },
    {
      path: 'technicalSupport',
      name: 'technicalSupport',
      component: _resolve('about/technicalSupport'),
      meta: {
        title: i18n.t('about.technicalSupport')
      }
    }
  ]
}

// 用户模块
const user = {
  path: '/user',
  component: Layout,
  hidden: true,
  redirect: '/user/privacyPolicy',
  children: [
    {
      path: 'serviceagreement',
      name: 'serviceagreement',
      component: _resolve('user/serviceAgreement')
    },
    {
      path: 'privacyPolicy',
      name: 'privacyPolicy',
      component: _resolve('user/privacyPolicy')
    }
  ]
}

// 这里是文档板块
const ReadingGuide = {
  path: '/file',
  component: FileLayout,
  hidden: false,
  redirect: '/file/platformInfo',
  name: 'ReadingGuide',
  meta: {
    title: i18n.t('route.guide')
  },
  children: [
    {
      path: 'platformInfo',
      name: 'platformInfo',
      component: _resolve('file/platformInfo'),
      meta: {
        title: i18n.t('route.briefIntroduction')
      }
    },
    {
      path: 'quickGuide',
      name: 'quickGuide',
      component: _resolve('file/quickGuide'),
      meta: {
        title: i18n.t('route.quickGuide')
      }
    },
    {
      path: 'authentication',
      name: 'authentication',
      component: _resolve('file/authentication'),
      meta: {
        title: i18n.t('route.authentication')
      }
    }
  ]
}

// 婴儿哭泣识别
const babyVoiceTechDoucment = {
  path: '/file/babyVoiceTechDoucment',
  component: FileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/babyVoiceTechDoucment',
  meta: {
    title: i18n.t('route.babyCrying')
  },
  children: [
    {
      path: '',
      name: 'babyVoiceTechDoucment',
      component: _resolve('file/babyVoiceTechDoucment'),
      meta: {
        title: i18n.t('route.babyCrying')
      }
    }
  ]
}
// 成龙阿宝
const clabTechDoucment = {
  path: '/file/clabTechDoucment',
  component: FileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/clabTechDoucment',
  meta: {
    title: i18n.t('route.abao')
  },
  children: [
    {
      path: '',
      name: 'clabTechDoucment',
      component: _resolve('file/clabTechDoucment'),
      meta: {
        title: i18n.t('route.abao')
      }
    }
  ]
}
// prompt
const promptTechDoucment = {
  path: '/file/promptTechDoucment',
  component: FileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/promptTechDoucment',
  meta: {
    title: 'prompt'
  },
  children: [
    {
      path: '',
      name: 'promptTechDoucment',
      component: _resolve('file/promptTechDoucment'),
      meta: {
        title: 'prompt'
      }
    }
  ]
}

// 控制台模块
const account = {
  path: '/console',
  component: ConsoleLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/console/accountManage',
  meta: {
    title: i18n.t('route.accountManage')
  },
  children: [
    {
      path: 'accountManage',
      name: 'accountManage',
      component: _resolve('console/accountManage'),
      meta: {
        title: i18n.t('route.accountManage')
      }
    }
  ]
}

// 应用管理
const appManage = {
  path: '/console/appManage',
  component: ConsoleLayout,
  hidden: false,
  redirect: '/console/appManage/apiManage',
  name: 'appManage',
  meta: {
    title: i18n.t('route.appManage')
  },
  children: [
    {
      path: 'apiManage',
      name: 'apiManage',
      component: _resolve('console/apiManage'),
      meta: {
        title: 'api'
      }
    },
    {
      path: 'promptConsoleList',
      name: 'promptConsoleList',
      component: _resolve('console/promptConsoleList'),
      meta: {
        title: 'prompt'
      }
    },
    {
      path: 'clabConsoleList',
      name: 'clabConsoleList',
      component: _resolve('console/clabConsoleList'),
      meta: {
        title: i18n.t('route.abao')
      }
    },
    {
      path: 'babyVocieConsoleList',
      name: 'babyVocieConsoleList',
      component: _resolve('console/babyVocieConsoleList'),
      meta: {
        title: i18n.t('route.cryrecognition')
      }
    }
  ]
}

// SDk资源库
const sdkDiction = {
  path: '/console',
  component: ConsoleLayout,
  hidden: false,
  redirect: '/console/sdkDiction',
  name: 'SDK',
  meta: {
    title: 'SDK'
  },
  children: [
    {
      path: 'sdkDiction',
      name: 'sdkDiction',
      component: _resolve('console/sdkDiction'),
      meta: {
        title: i18n.t('route.resouce')
      }
    }
  ]
}

const noticeList = {
  path: '/console/noticeManage',
  component: ConsoleLayout,
  hidden: false,
  redirect: '/console/noticeManage/noticeList',
  name: 'noticeManage',
  meta: {
    title: i18n.t('route.noticeManage')
  },
  children: [
    {
      path: 'noticeList',
      name: 'noticeList',
      component: _resolve('console/noticeList'),
      meta: {
        title: i18n.t('route.noticeList')
      }
    },
    {
      path: 'noticeDetail',
      name: 'noticeDetail',
      hidden: true,
      component: _resolve('console/noticeDetail'),
      meta: {
        title: i18n.t('route.noticeDetail')
      }
    }
  ]
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 总路由
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
  promptTechDoucment,
  account,
  appManage,
  sdkDiction,
  noticeList,
  sdkProductinfo,
  navConsole,
  navFile
]

// 文档模块路由
export const fileRouter = [
  ReadingGuide,
  babyVoiceTechDoucment,
  clabTechDoucment,
  promptTechDoucment
]

// 控制台路由
export const consoleRouter = [
  account,
  appManage,
  sdkDiction,
  noticeList
]

// 顶部菜单路由
export const navRouter = [
  Home,
  solution,
  product,
  sdkProductinfo,
  navFile,
  about,
  navConsole
]

const createRouter = () =>
  new VueRouter({
    routes: constRouter,
    scrollBehavior() {
    // 路由跳转定位在顶部
      return { x: 0, y: 0 }
    }
  })
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/DefaultLayout'
import FileLayout from '@/components/Layout/FileLayout'
import ConsoleLayout from '@/components/Layout/ConsoleLayout'
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
  component: FileLayout,
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
  path: '/file/babyVoiceTechDoucment',
  component: FileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/babyVoiceTechDoucment',
  name: 'babyVoiceTechDoucment',
  meta: {
    title: '婴儿哭泣识别'
  },
  children: [
    {
      path: '',
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
  path: '/file/clabTechDoucment',
  component: FileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/clabTechDoucment',
  name: 'clabTechDoucment',
  meta: {
    title: '成龙阿宝'
  },
  children: [
    {
      path: '',
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
  path: '/file/promptTechDoucment',
  component: FileLayout,
  hidden: false,
  singleMenu: true,
  redirect: '/file/promptTechDoucment',
  name: 'promptTechDoucment',
  meta: {
    title: 'prompt'
  },
  children: [
    {
      path: '',
      name: 'promptTechDoucment',
      component: _import('file/promptTechDoucment'),
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
  name: 'accountManage',
  meta: {
    title: '账号管理'
  },
  children: [
    {
      path: 'accountManage',
      name: 'accountManage',
      component: _import('console/accountManage'),
      meta: {
        title: '账号管理'
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
  name: 'ReadingGuide',
  meta: {
    title: '应用管理'
  },
  children: [
    {
      path: 'apiManage',
      name: 'apiManage',
      component: _import('console/apiManage'),
      meta: {
        title: 'api'
      }
    },
    {
      path: 'promptConsoleList',
      name: 'promptConsoleList',
      component: _import('console/promptConsoleList'),
      meta: {
        title: 'prompt'
      }
    },
    {
      path: 'clabConsoleList',
      name: 'clabConsoleList',
      component: _import('console/clabConsoleList'),
      meta: {
        title: '诚龙阿宝'
      }
    },
    {
      path: 'babyVocieConsoleList',
      name: 'babyVocieConsoleList',
      component: _import('console/babyVocieConsoleList'),
      meta: {
        title: '婴语识别'
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
      component: _import('console/sdkDiction'),
      meta: {
        title: 'SDK资源库'
      }
    }
  ]
}

const noticeList = {
  path: '/console/noticeManage',
  component: ConsoleLayout,
  hidden: false,
  redirect: '/console/noticeManage/noticeList',
  name: 'noticeList',
  meta: {
    title: '通知管理'
  },
  children: [
    {
      path: 'noticeList',
      name: 'noticeList',
      component: _import('console/noticeList'),
      meta: {
        title: '通知列表'
      }
    },
    {
      path: 'noticeDetail',
      name: 'noticeDetail',
      hidden: true,
      component: _import('console/noticeDetail'),
      meta: {
        title: '通知详情'
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
  noticeList
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

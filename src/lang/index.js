import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementTWLocale from 'element-ui/lib/locale/lang/zh-TW'
import enLocale from './en'
import zhLocale from './zh-CN'
import twLocale from './zh-TW'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  tw: {
    ...twLocale,
    ...elementTWLocale
  }
}

const i18n = new VueI18n({
  locale: sessionStorage.getItem('lang') || 'zh',
  messages
})

export default i18n

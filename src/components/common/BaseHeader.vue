<template>
  <header
    class="baseHeader"
    :style="{'background': menuType === 'defaultType' ? '#000' : '#fff'}"
  >
    <div>
      <img
        :src="menuType === 'defaultType'? defaultLogo : consoleLogo"
        class="logo"
        @click="goIndex"
      >
      <el-menu
        class="nav-menu"
        mode="horizontal"
        :default-active="$route.path"
        :background-color="menuType === 'defaultType'? '#000' : '#fff'"
        :text-color="menuType === 'defaultType'? '#fff' : '#000'"
        active-text-color="#4575FF"
        @select="selectMenuItem"
      >
        <template v-for="item in navRouter">
          <el-menu-item v-if="item.singleMenu" :key="item.name" :index="item.path">
            {{ item.meta && item.meta.title }}
          </el-menu-item>
          <!-- 包含子菜单的菜单 -->
          <el-submenu
            v-else
            :key="item.name"
            :index="item.name || item.path"
            :show-timeout="0"
            :hide-timeout="0"
          >
            <template slot="title">
              {{ item.meta && item.meta.title }}
            </template>
            <template v-for="child in item.children">
              <el-menu-item
                :key="child.path + 'index'"
                :index="
                  child.redirect ? child.redirect : item.path + '/' + child.path
                "
                :routes="[child]"
              >
                {{ child.meta && child.meta.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ lang }}
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in langList"
            :key="item.id"
            :command="item"
          >
            {{ item.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { navRouter } from '@/router'
export default {
  name: 'BaseHeader',
  props: {
    menuType: {
      type: String,
      required: true
    }
  },
  data: () => ({
    navRouter,
    defaultLogo: require('@/assets/img/common/logo.png'),
    consoleLogo: require('@/assets/img/common/console-logo.png'),
    langList: [
      {
        id: 1,
        vaule: 'zh',
        text: '简体中文'
      },
      {
        id: 2,
        vaule: 'en',
        text: 'English'
      },
      {
        id: 3,
        vaule: 'tw',
        text: '繁體中文'
      }
    ],
    lang: sessionStorage.getItem('langText') || '简体中文'
  }),
  methods: {
    goIndex() {
      this.$router.push('/')
    },
    selectMenuItem(path) {
      this.$router.push({ path: path })
    },
    handleCommand(command) {
      this.$i18n.locale = command.vaule
      this.lang = command.text
      sessionStorage.setItem('lang', command.vaule)
      sessionStorage.setItem('langText', command.text)
      location.reload()
    }
  }
}
</script>
<style lang="scss">
.baseHeader {
  width: 100%;
  height: 61.49px;
  position: fixed;
  top: 0;
  z-index: 999;
  opacity: .9;
  > div {
    width: 1200px;
    margin: auto;
    height: 61.49px;
    position: relative;
    .logo {
      width: 240px;
      position: absolute;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
    }
    .nav-menu {
      border-bottom: none;
      width: 750px;
      margin-left: 375px;
      height: 61.49px;
      > li {
        height: 61.49px;
        line-height: 61.49px;
        background: transparent!important;
        width: 14.28%;
        text-align: center;
        /deep/ .el-submenu__title{
          height: 61.49px;
          line-height: 61.49px;
          &:hover {
            background: #4575FF!important;
            color: #fff!important;
          }
        }
      }
    }
    /deep/.el-dropdown {
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
    }
  }
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background: #4575FF!important;
  color: #fff!important;
}

// 兼容火狐／deep／失效问题
.baseHeader .el-dropdown {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}
</style>

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
    consoleLogo: require('@/assets/img/common/console-logo.png')
  }),
  methods: {
    goIndex() {
      this.$router.push('/')
    },
    selectMenuItem(path) {
      this.$router.push({ path: path })
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
      margin-left: 450px;
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
  }
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background: #4575FF!important;
  color: #fff!important;
}
</style>

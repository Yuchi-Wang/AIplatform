<template>
  <div class="app-wrapper">
    <BaseHeader :menu-type="menuType" />
    <div class="main thin-scroll">
      <Sidebar :menu-router="consoleRouter" />
      <section class="content-container">
        <div class="content-wrapper">
          <div class="content-header">
            <h3>
              <span>{{ $t('route.console') }}</span> > {{ headerTitle }}
            </h3>
          </div>
          <div class="content-box">
            <transition name="el-fade-in" mode="out-in">
              <keep-alive>
                <router-view />
              </keep-alive>
            </transition>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from '../CommonSidebar'
import { consoleRouter } from '@/router'
export default {
  components: { Sidebar },
  data() {
    return {
      mapWidth: null,
      consoleRouter,
      menuType: 'ConsoleHeader'
    }
  },
  computed: {
    headerTitle() {
      return this.$route.meta.title
    }
  }
}
</script>
<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  font-size: 13px;
  height: 100%;
  background: #F0F5FF;
  /deep/.baseHeader {
    box-shadow: 0 3px 10px 0 rgba(198,198,198,0.50);
    .el-menu {
      .el-menu-item {
        &:nth-of-type(7) {
          color: rgb(69, 117, 255)!important;
          border-bottom-color: rgb(69, 117, 255)!important;
          &:hover {
            color:#fff!important;
          }
        }
      }
    }
    .el-dropdown {
      color: #000
    }
    .el-menu--horizontal {
      /deep/ .el-submenu__icon-arrow {
        color: #000!important;
      }
    }
  }
  .main {
    position: absolute;
    top: 61.49px;
    bottom: 0px;
    min-width: 600px;
    transition: top 0.6s;
    overflow-y: auto;
    width: 100%;
    .content-container {
      transition: margin-left 0.28s ease-out;
      margin-left: 220px;
      height: 100%;
      box-sizing: border-box;
      .content-header {
        margin: 0 10px;
        h3 {
          height: 40px;
          font-size: 14px;
          color: #000000;
          line-height: 40px;
          background: #fff;
          margin-top: 15px;
          padding-left: 25px;
          span {
            color: #344DFF;
          }
        }
      }
      .content-box {
        margin: 10px;
        max-width: 1710px;
        background: #fff;
        border-radius: 4px;
      }
    }
    .sidebar-container {
      overflow: auto;
      transition: width 0.28s ease-out;
      width: 220px;
      height: 100%;
      position: fixed;
      top: 61.49px;
      bottom: 0;
      left: 0;
      z-index: 1001;
    }
  }
}
// .baseHeader {
//   /deep/ .el-menu--horizontal {
//   /deep/ .el-menu--popup-bottom-start {
//     background: rgba(0, 0, 0, 0.6)!important;
//   }
//   /deep/ .el-submenu__icon-arrow {
//     color: #fff!important;
//   }
// }
// }
</style>

<template>
  <div class="app-wrapper">
    <BaseHeader />
    <div class="main thin-scroll">
      <Sidebar :menu-router="consoleRouter" />
      <section class="content-container">
        <div class="content-wrapper">
          <div class="content-header">
            <h3>
              <span>控制台</span> > {{ header }}
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
      consoleRouter
    }
  },
  computed: {
    header() {
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
        h3 {
          height: 40px;
          font-size: 14px;
          font-weight: 600;
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
</style>

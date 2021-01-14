<template>
  <div class="app-wrapper">
    <BaseHeader />
    <div class="main thin-scroll">
      <Sidebar />
      <section class="content-container">
        <div class="content-wrapper">
          <div class="content-header">
            <h3>{{ header }}</h3>
          </div>
          <transition name="el-fade-in" mode="out-in">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar'
export default {
  components: { Sidebar },
  data() {
    return {
      mapWidth: null
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
  background: #fff;
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
      padding: 25px 0 0 40px;
      height: 100%;
      box-sizing: border-box;
      width: 1200px;
      .content-header {
        h3 {
          font-size: 23px;
          font-weight: 600;
          color: #000000;
          line-height: 33px;
          padding-bottom: 10px;
          border-bottom: 1px solid #E0E0E0;
          margin-bottom: 33px;
        }
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

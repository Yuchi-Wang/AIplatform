<template>
  <div class="app-wrapper">
    <BaseHeader :menu-type="defaultType" />
    <div class="main thin-scroll">
      <transition name="el-fade-in" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapWidth: null,
      defaultType: 'defaultType'
    }
  }
}
</script>
<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
   /deep/.baseHeader {
     box-shadow: none;
    .el-menu--horizontal {
      /deep/ .el-submenu__icon-arrow {
        color: #fff!important;
      }
    }
  }
}
</style>

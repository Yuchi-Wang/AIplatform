<template>
  <div class="app-wrapper">
    <BaseHeader :menu-type="defaultType" />
    <el-backtop :bottom="50">
      <i class="back-top" />
    </el-backtop>
    <div class="main thin-scroll">
      <router-view />
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
  min-height: 100%;
   /deep/.baseHeader {
     box-shadow: none;
    .el-menu--horizontal {
      /deep/ .el-submenu__icon-arrow {
        color: #fff!important;
      }
    }
  }
  .el-backtop {
    width: 60px;
    height: 60px;
    box-shadow: none;
    background: transparent;
  }
  .back-top {
    display: inline-block;
    width: 60px;
    height:60px;
    background: url('../../../assets/img/common/back-top.svg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
</style>

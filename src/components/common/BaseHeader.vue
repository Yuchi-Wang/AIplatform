<template>
  <header class="baseHeader">
    <div>
      <img src="../../assets/img/common/logo.png" class="logo">
      <el-menu
        class="nav-menu"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="1">解决方案</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">解决方案</template>
          <el-menu-item index="2-1">方案1</el-menu-item>
          <el-menu-item index="2-2">方案2</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="3">产品简介</el-menu-item>
        <el-menu-item index="4">SDK</el-menu-item>
        <el-menu-item index="5">开发文档</el-menu-item>
        <el-menu-item index="6">关于我们</el-menu-item>
        <el-menu-item index="7">控制台</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  data: () => ({})
}
</script>
<style scoped lang="scss">
.baseHeader {
  width: 100%;
  height: 61.49px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  > div {
    width: 1200px;
    margin: auto;
    height: 61.49px;
    position: relative;
    .logo {
      width: 180px;
      position: absolute;
      top: 50%;
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
        width: 14.28%;
        text-align: center;
        /deep/ .el-submenu__title{
          height: 61.49px;
          line-height: 61.49px;
        }
      }
    }
  }
}
</style>

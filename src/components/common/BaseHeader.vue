<template>
  <header class="baseHeader">
    <div>
      <img src="../../assets/img/common/logo.png" class="logo">
      <el-menu
        class="nav-menu"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#4575FF"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">解决方案</el-menu-item>
        <el-menu-item index="3">产品简介</el-menu-item>
        <el-menu-item index="4">SDK</el-menu-item>
        <el-menu-item index="5">开发文档</el-menu-item>
        <el-submenu index="6">
          <template slot="title">关于我们</template>
          <el-menu-item index="6-1">公司简介</el-menu-item>
          <el-menu-item index="6-2">技术支持</el-menu-item>
          <el-menu-item index="6-2">商务合作</el-menu-item>
        </el-submenu>
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
        background: transparent！;
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
.el-menu--horizontal {
  /deep/ .el-menu--popup-bottom-start {
 background: rgba(0, 0, 0, 0.6)!important;
}
}
</style>

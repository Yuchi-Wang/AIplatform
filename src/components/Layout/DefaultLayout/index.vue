<template>
  <div class="app-wrapper">
    <BaseHeader />
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
      mapWidth: null
    }
  }
}
</script>
<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .main {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: top 0.6s;
    overflow-y: auto;
    width: 100%;
  }
}
</style>

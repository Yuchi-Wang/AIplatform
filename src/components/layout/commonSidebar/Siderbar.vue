<template>
  <div class="sidebar-container thin-scroll">
    <el-menu
      mode="vertical"
      :default-active="$route.path"
      :collapse="false"
      background-color="#060c23"
      text-color="#FFF"
      unique-opened
      @select="selectMenuItem"
    >
      <template v-for="item in menuRouter">
        <div :key="item.name">
          <el-submenu
            v-if="!item.singleMenu"
            :key="item.name"
            :index="item.name || item.path"
          >
            <template slot="title" style="vertical-align:-3em">
              <span>{{ item.meta && item.meta.title }}</span>
            </template>
            <template v-for="child in item.children">
              <el-menu-item
                v-if="!child.hidden"
                :key="child.path + 'index'"
                class="nav-menu-lv2"
                :index="
                  child.redirect ? child.redirect : item.path + '/' + child.path
                "
                :routes="[child]"
              >
                {{ child.meta && child.meta.title }}
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item
            v-else
            :index="item.redirect"
            :class="{ 'submenu-title-noDropdown': !isNest }"
          >
            <span>{{ item.meta && item.meta.title }}</span>
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    menuRouter: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isNest: true
    }
  },
  methods: {
    selectMenuItem(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/sidebar.scss';
.nav-icon {
  margin-right: 16px;
  width: 16px;
  height: 16px;
  color: #fff;
  vertical-align: middle;
}
.nav-menu-lv2 {
  background-color: #081135!important;
  padding-left: 52px !important;
}
</style>

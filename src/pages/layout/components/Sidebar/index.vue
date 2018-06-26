<template>
  <el-scrollbar wrapCalss="scrollbar-wrap">
    <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409eff"
        class="el-menu-vertical-demo">
      <!-- <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigation 1</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Navigation 2</span>
        </template>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Navigation 2</span>
        </template>
        <el-menu-item index="1-1">item 1-1</el-menu-item>
        <el-menu-item index="1-2">item 1-2</el-menu-item>
      </el-submenu> -->
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import { SidebarItem } from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

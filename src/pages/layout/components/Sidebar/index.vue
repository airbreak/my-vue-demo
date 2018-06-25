<template>
 <el-menu
 mode="vertical"
 :show-timeout="200"
 :default-active="$route.path"
 :collapse="isColllapse"
 background-color="#304156"
 text-color="#bfcbd9"
 active-text-color="#409eff"
 class="el-menu-vertical-demo"
 @open="handeOpen"
 @close="handeClose"
 >
  <el-submenu index="1">
    <i class="el-icon-menu"></i>
    <span slot="title">Navigation 1</span>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Navigation 2></span>
    </template>
  </el-submenu>
  <el-menu-item-group>
    <span slot="title">Group</span>
    <el-menu-item index="1-1">item 1-1</el-menu-item>
    <el-menu-item index="1-2">item 1-2</el-menu-item>
  </el-menu-item-group>
 </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handOpen(key,keyPath) {
      console.log(key,keyPath)
    },
    handleClose(key,keyPath) {
      console.log(key,keyPath)
    }
  }
}
</script>

<style scoped>
</style>

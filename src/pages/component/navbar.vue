<template>
  <div>
    <el-menu :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect">
     <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">运营</el-menu-item>
      <el-menu-item index="3">司管</el-menu-item>
      <el-menu-item index="4">风控</el-menu-item>
      <el-menu-item index="5">客服</el-menu-item>
    </el-menu>
    <iframe src="www.baidu.com"></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue"
import Sidebar from "./components/Sidebar/index.vue"
export default {
  name: 'layout',
  components :{
    AppMain,
    Sidebar
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
 .app-wrapper
    position: relative
    height: 100%
    width: 100%
</style>

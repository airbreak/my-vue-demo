<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar/index.vue'
import ResizeMixin from './mixin/ResizeHandler'
import Navbar from './components/Navbar'
export default {
  name: 'layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    device () {
      return this.$store.state.app.device
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('CloseSideBar', {withoutAnimation: false})
    },
    toggleClick () {
      this.$store.dispatch('ToggleSideBar')
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/styles/mixin.scss';
  .app-wrapper {
      position: relative;
      height: 100%;
      width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>

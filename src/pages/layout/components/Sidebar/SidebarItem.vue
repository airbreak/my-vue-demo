<template>
  <div class="menu-wrapper">
      <template v-for="item in routes" v-if="!item.hidden && item.children">
          <!-- <router-link v-if=hasOneShowingChildren(item.children) &&>

          </router-link> -->
          <el-submenu :index="item.name || item.path" :key="item.name">
            <template slot="title">
              <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
              <span v-if="item.meta && item.meta.title" slot="title">{{item.meta.title}}</span>
            </template>
            <template v-for="child in item.children" v-if="!child.hidden">
              <sidebar-item :is-net="true"
                class="nest-menu"
                v-if="child.children && child.children.length > 0"
                :routes="[child]"
                :key="child.path">
              </sidebar-item>
              <router-link v-else :to="item.path + '/' + child.path" :key="child.name">
                <el-menu-item>
                  <svg-icon v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                  <span v-if="child.meta && child.meta.title" slot="title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
      </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes:{
      type: Array
    },
    isNest: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    }
  },
  methods : {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
</style>

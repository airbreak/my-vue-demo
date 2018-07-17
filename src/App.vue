<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      transitionName:''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
}
</script>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
  a {
    color: red;
  }
}
</style>

<template>
  <div>
    详情id:{{id}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      id: 0
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
</style>

<template>
  <svg :class="svgClass">

  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {

  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>

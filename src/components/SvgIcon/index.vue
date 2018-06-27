<template>
  <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
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
    iconName() {
      return `#${this.iconClass}`
      // return '#icon-' + this.iconClass
    },
    svgClass() {
      if(this.className){
        return 'svg-icon' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 25px;
  height: 25px;
  vertical-align: -0.15;
  fill: currentColor;
  overflow: hidden
}
</style>

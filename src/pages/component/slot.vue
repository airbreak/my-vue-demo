<template>
  <div>
    <!-- <test-slot>
      <div slot="header-title">
        <svg-icon icon-class="arrow-back"></svg-icon>
        <span>网约车新格局诞生</span>
      </div>
    </test-slot> -->
    <test-slot>
      <div slot="header-title">
        <span>用户信息</span>
        <img class="avatar" src="http://7xqnxu.com1.z0.glb.clouddn.com/16288.jpg">
      </div>
    </test-slot>
  </div>
</template>

<script>
import testSlot from '@/components/slot'
export default {
  data () {
    return {

    }
  },
  components: {
    testSlot
  }
}
</script>

<style scoped lang="scss">
  .avatar{
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
</style>

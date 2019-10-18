<template>
  <div>
      <div>请先跳转到也么</div>
      <div style="font-size:20px;" @click="brother(index)">兄弟组件调用</div>
  </div>
</template>

<script>
import Utils from '../../utils/fnUtil';
export default {
  name: '',
  data() { 
    return {
      arr: ['推荐有奖', '推荐返佣', '推荐有奖1', '推荐有奖2'],
      selectedIndex: -1
    }
  },
  methods: {
    brother (index) {
      Utils.$emit('getMyLocation','msg');
    }
 }
}
</script>

<style lang="scss" scoped>
.txt {
  color: #000;
  font-size: 16px;
  margin-right: 10px;
  &.selected {
    color: red;
  }
}
</style>
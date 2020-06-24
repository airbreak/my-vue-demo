<template>
  <div>
      <label v-for="(item, index) in arr"
        :key="item"
        class="txt"
        :class="{'selected':selectedIndex === index}"
        @click="change(index)">
          {{item}}
      </label>
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
    change (index) {
      debugger
      this.selectedIndex = index
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
<template>
  <div style="margin-top:100px;">
    <div class="item">
      <div class="left">
        <div class="d1">元借款元借款元借款元借款元借款元借款元借款</div>
        <div class="d2">2018年6月23日 18:09</div>
      </div>
      <span class="right">已逾期5天，请及时还款</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="scss" scoped>
.item {
  font-size: 12px;
  height: 1.46rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  &:first-child {
    margin-top: 0.2rem;
  }
  .left {
    margin-left: 0.3rem;
    text-align: left;
    .d1 {
      font-size: 0.32rem;
      font-weight: 400;
      color: #141E34;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .d2 {
      font-size: 0.26rem;
      font-weight: 400;
      color: #9CA3B0;
      margin-top: 0.1rem;
      line-height: 0.37rem;
    }
  }
  .right {
    font-size: 0.28rem;
    font-weight: 400;
    color: #6D798F;
    position: relative;
    margin-right: 0.57rem;
    white-space: nowrap;
    flex: 1;
    &.green {
      color: #1CB855;
    }
    &.red {
      color: #FF5555;
    }
    &:after {
      content: "";
      width: 0.2rem;
      height: 0.2rem;
      background: url("https://cdn-daikuan.360jie.com.cn/pic/45d129128b9881f48cc2870b13b05110.png?max_age=36000000") no-repeat;
      background-size: 100% auto;
      position: absolute;
      top: 50%;
      right: -0.32rem;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
  }
}
</style>
<template>
  <div>
    <div class="loading-box" :class="{active:showLoading}">
      <img src="/static/loading.svg"/>
      <span>加载中……</span>
    </div>
    <el-button @click="loadData()">{{btnTxt}}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnTxt: '加载',
      showLoading: false
    }
  },
  methods: {
    loadData () {
      this.showLoading = !this.showLoading
      this.btnTxt = this.showLoading ? '停止加载' : '加载'
    }
  }
}
</script>

<style scoped lang="scss">
  .loading-box{
    padding: 20px 10px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    background-color: rgba(0,0,0,.7);
    border-radius: 10px;
    &.active{
      display: flex;
      img {
        animation: rotate 1s steps(12) infinite;
      }
    }
    img {
      height: 30px;
      width: 30px;
      margin-bottom: 3px;
    }
    span{
      font-size: 12px;
      color: #fff;
    }
  }

  @keyframes rotate {
    100%{
      transform: rotate(360deg);
    }
  }
</style>

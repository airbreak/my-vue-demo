<template>
  <div>
    <div class="panel-body-nav-bar">
      <div class="panel-body-nav-bar-main">
        <div class="panel-body-nav-bar-content">
            <div class="nav-bar-item"
                :class="{selected:searchOrderType=='list'}"
                @click="switchSearchOrderType('list')">选择订单</div>
            <div class="nav-bar-item"
                :class="{selected:searchOrderType=='input'}"
                @click="switchSearchOrderType('input')">输入订单</div>
        </div>
    </div>
    </div>
    <div class="panel-body-nav-content">
        <div class="panel-body-nav-content-item" v-show="searchOrderType=='list'">
            1
        </div>
        <div class="panel-body-nav-content-item" v-show="searchOrderType=='input'">
            2
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchOrderType:'list'
    }
  },
  methods: {
    switchSearchOrderType (val){
      this.searchOrderType = val
    }
  }
}
</script>

<style scoped>
.panel-body-nav-bar{
        height: 40px;
        border-bottom: 1px solid #e4e7ed;
        margin-top: 20px;
    }
    .panel-body-nav-bar-main{
        margin-bottom: -1px;
        height: 100%;
        margin-left: 15px;
    }
    .panel-body-nav-bar-content{
        border: 1px solid #e4e7ed;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        display: flex;
        height: 100%;
        float: left;
    }
    .panel-body-nav-bar-content .nav-bar-item{
        width: 90px;
        text-align: center;
        cursor: pointer;
        color: #303133;
        border-left: 1px solid #e4e7ed;
        border-bottom:1px solid transparent;
        transition: color .5s ease-in;
        height: 100%;
        line-height: 40px;
    }
    .panel-body-nav-bar-content .nav-bar-item:first-child{
        border-left: none;
    }
    .panel-body-nav-bar-content .nav-bar-item.selected{
        color: #409eff;
        border-bottom:1px solid #fff;
    }
</style>

<template>
  <div>
    <!-- tabs -->
    <div class="panel-body-nav-bar">
      <div class="panel-body-nav-bar-main">
        <!-- <div class="panel-body-nav-bar-scroll"> -->
          <div class="panel-body-nav-bar-content">
              <div class="nav-bar-item"
                  :class="{selected:searchOrderType=='list'}"
                  @click="switchSearchOrderType('list')">选择订单</div>
              <div class="nav-bar-item"
                  :class="{selected:searchOrderType=='input'}"
                  @click="switchSearchOrderType('input')">输入订单</div>
          </div>
        <!-- </div> -->
      </div>
    </div>
    <!-- 每个tab对应的内容 -->
    <div class="panel-body-nav-content">
        <div class="panel-body-nav-content-item" v-show="searchOrderType=='list'">
            1
        </div>
        <div class="panel-body-nav-content-item" v-show="searchOrderType=='input'">
            2
        </div>
    </div>
    <div>
      <div class="panel-body-nav-bar" style="height:40px;">
        <div class="panel-body-nav-bar-content">
            <div class="nav-bar-item"
                :class="{selected:searchOrderType=='list'}"
                @click="switchSearchOrderType('list')">选择订单</div>
            <div class="nav-bar-item"
                :class="{selected:searchOrderType=='input'}"
                @click="switchSearchOrderType('input')">输入订单</div>
        </div>
      </div>
      <!-- 每个tab对应的内容 -->
      <div class="panel-body-nav-content">
          <div class="panel-body-nav-content-item" v-show="searchOrderType=='list'">
              1
          </div>
          <div class="panel-body-nav-content-item" v-show="searchOrderType=='input'">
              2
          </div>
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
      border-bottom: 1px solid #e4e7ed;
      margin:20px 0 20px;
    }
    .panel-body-nav-bar-main{
        margin-bottom: -1px;
        height: 100%;
        margin-left: 15px;
        overflow: hidden;
    }
    /* .panel-body-nav-bar-scroll{
      overflow: hidden;
    } */
    .panel-body-nav-bar-content{
        border: 1px solid #e4e7ed;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        box-sizing:border-box;
        white-space: nowrap;
        height: 100%;
        float: left;
        display: flex;
    }
    .panel-body-nav-bar-content .nav-bar-item{
        padding: 0 20px;
        height: 40px;
        box-sizing: border-box;
        line-height: 40px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid transparent;
        border-left: 1px solid #e4e7ed;
    }
    .panel-body-nav-bar-content .nav-bar-item:first-child{
        border-left: none;
    }
    .panel-body-nav-bar-content .nav-bar-item.selected{
        color: #409eff;
        border-bottom-color:#fff;
    }
</style>

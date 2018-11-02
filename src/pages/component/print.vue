<template>
  <div>
    <div id="printjs-form">
      <div class="page-box">
        <div class="normal-box">
          <div class="basic-info">
            <div class="item">
              <span class="key">名字：</span>
              <span class="val">钱学森</span>
            </div>
            <div class="item">
              <span class="key">学号：</span>
              <span class="val">201811038323</span>
            </div>
          </div>
          <div class="code">
            DJIO023MKLD-ESZ563SFZ
          </div>
        </div>
      </div>
      <div class="page-box">
        <div class="normal-box">
          <div class="basic-info">
            <div class="item">
              <span class="key">名字：</span>
              <span class="val">邓稼先</span>
            </div>
            <div class="item">
              <span class="key">学号：</span>
              <span class="val">201811038328</span>
            </div>
          </div>
          <div class="code">
            WJIO023MKLD-ESZ56389Z
          </div>
        </div>
      </div>
            <div class="page-box">
        <div class="normal-box">
          <div class="basic-info">
            <div class="item">
              <span class="key">名字：</span>
              <span class="val">程开甲</span>
            </div>
            <div class="item">
              <span class="key">学号：</span>
              <span class="val">201811038328</span>
            </div>
          </div>
          <div class="code">
            WJIO023MKLD-ESZ56389Z
          </div>
        </div>
      </div>
            <div class="page-box">
        <div class="normal-box">
          <div class="basic-info">
            <div class="item">
              <span class="key">名字：</span>
              <span class="val">郭永怀</span>
            </div>
            <div class="item">
              <span class="key">学号：</span>
              <span class="val">201811038328</span>
            </div>
          </div>
          <div class="code">
            WJIO023MKLD-ESZ56389Z
          </div>
        </div>
      </div>
    </div>
    <button @click="print()">打印</button>
  </div>
</template>

<script>
import 'print-js'
export default {
  data () {
    return {

    }
  },
  methods: {
    print () {
      printJS({
        printable: 'printjs-form',
        type: 'html',
        // 继承原来的所有样式
        targetStyles: ['*']
      })
    }
  }
}
</script>

<style scoped lang="scss">
 .page-box {
    height: 297mm;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .basic-info {
    width: 440px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: rgba(0,0,0,0.7);
    margin-bottom: 20px;
    .item{
      .key {
        color: rgba(0, 0, 0, .9);
      }
      .val{
        color: rgba(0, 0, 0, .5);
      }
    }
  }
  .code {
    text-align: center;
  }
</style>

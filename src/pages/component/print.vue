<!-- eslint-disable -->
<template>
  <div>
    <div class="print-box">
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
      alert()
      // printJS ({
      //   printable: 'printjs-form',
      //   type: 'html',
      //   // 继承原来的所有样式
      //   targetStyles: ['*']
      // })
      // print(
      //   document.getElementById('printjs-form'), {
      //     type: 'html',
      //     // 继承原来的所有样式
      //     targetStyles: ['*']
      //   })
    }
  }
}
</script>
<style scoped lang="scss">
  .print-box {
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
  }
  #printjs-form{
    // height: 0;
    // overflow: hidden;
  }
 .page-box {
    // height: 297mm;
    page-break-after:always;
    margin-top: 50%;
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
  button {
    margin-top: 40px;
    position: fixed;
    top:400px;
    left:500px;
    height: 40px;
    width:70px;
    z-index:99999;
  }
</style>

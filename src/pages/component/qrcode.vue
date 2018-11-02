<template>
  <div class="main-box">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input type="text" v-model="codeText"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button @click="getCode()">生成二维码</el-button>
      </el-col>
    </el-row>
    <div class="qrcode-box">
      <div id="qrcode" ref="qrcode"></div>
    </div>
    <input :value="info.name" id="input"/>
    <span>名字: {{info.nameShow}}</span>
    <button @click="updateVal()"></button>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  data () {
    return {
      codeText: '',
      info: {
        name: 'jimmy',
        nameShow: 'jimmy'
      }
    }
  },
  mounted () {
    this.intQRcode()
    this.initInfo()
  },
  methods: {
    intQRcode () {
      this.qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100
      })
    },
    getCode () {
      this.qrcode.makeCode(this.codeText)
    },
    initInfo () {
      debugger
      // var that = this
      Object.defineProperty(this.info, 'name', {
        get: function () {
          console.log('取值:')
        },
        set: function (newVal) {
          debugger
          console.log('赋值:' + newVal)
          this.nameShow = newVal
          return newVal
        }
      })
    },
    updateVal () {
      this.info['name'] = document.getElementById('input').value
    }
  }
}
</script>

<style scoped lang="scss">
.main-box {
  padding: 30px;
  #qrcode {
    margin-top: 10px;
    background-color: #fff;
  }
  .input-box{
    width: 300px;
  }
}
</style>

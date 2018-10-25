<template>
  <div id="qrcode">

  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.intQRcode()
  },
  methods: {
    intQRcode () {
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100,
        text: 'https://www.baidu.com'
      })
      console.log(qrcode)
    }
  }
}
</script>

<style scoped>
</style>

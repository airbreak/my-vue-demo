<template>
  <div>
    <div class="main-box2">
      <div class="bg-img"></div>
      <div class="word"> CHINA</div>
    </div>
    <div class="main-box">
      <h1>Gentle Adaboost算法详解</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.main-box {
  height:100vh;
  color: #fff;
  background-image: linear-gradient(180deg,#fff 50%,#000 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #fff;
    mix-blend-mode: difference;
    font-size: 5vw;
  }
}
.main-box2 {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .bg-img {
    height: 180px;
    width: 520px;
    background-image: url('/static/china.jpg');
    background-position:center;
  }
  .word {
    height: 180px;
    width: 520px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10vw;
    mix-blend-mode: lighten;
    background-color: #fff;
  }
}
</style>

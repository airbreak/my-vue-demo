<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  div{
    background-color: radial-gradient(#eeeeee, #444444);
    position:absolute;
    height: 100px;
    width: 400px;
    top:50%;
    left:50%;
    transform: translate(50%,50%);
    display: flex;
    justify-content: space-between;
    align-content: center;
    span{
      background-color: rgba(0,0,0,1);
      border-radius: 4px;
      flex: 1;
      &:nth-child(1) {
        animation: change 1s 2.5s infinite ease-in;
      }
      &:nth-child(2) {
        animation: change 1s 1.5s infinite ease-in;
      }
      &:nth-child(3) {
        animation: change 1s 0.5s infinite ease-in;
      }
      &:nth-child(4) {
        animation: change 1s 1.5s infinite ease-in;
      }
      &:nth-child(5) {
        animation: change 1s 2.5s infinite ease-in;
      }
    }
  }

  @keyframes change {
    0% {
      height: 100%;
      opacity: 1;
    }
    100%{
      height: 0%;
      opacity: 0.1
    }
  }
</style>

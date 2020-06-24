<template>
  <div class="bg-container">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
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
$timer: 5s;
.bg-container{
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: calc(100vh - 50px);
  padding: .1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .loader{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    font-size: 40px;
    width: 7em;
    height: 5em;
    span{
      width: 1em;
      background-color:rgba(255,255,255,1);
      animation: sort $timer infinite;
      height: calc(var(--n) * 1em);
      border-radius: .1em;
      &:nth-child(1){
        --n: 1;
        $spanIndex: 1;
      }
      &:nth-child(2){
        --n: 2;
        $spanIndex: 2;
      }
      &:nth-child(3){
        --n: 3;
        $spanIndex: 3;
      }
      &:nth-child(4){
        --n: 4;
        $spanIndex: 4;
      }
      &:nth-child(5){
        --n: 5;
        $spanIndex: 5;
      }
    }
    &::before, &::after{
      content: '';
      position: absolute;
      width: 1em;
      height: 1em;
      background-color: #fff;
      border-radius: 50%;
      bottom: 1em;
      animation: climbing $timer infinite;
      visibility: hidden;
    }
    &::before{
      left: 0;
      --derection: 1;
    }
    &::after{
      left: 6em;
      animation-delay: $timer / 2;
      --derection: -1;
    }

    @keyframes climbing {
      0% {
        bottom: 1em;
        visibility: visible;
        left: calc(3em - 2 * 1.5em * var(--derection));

      }
      7% {
        bottom: calc(2em + 0.3em);
      }
      10% {
        left: calc(3em - 1 * 1.5em * var(--derection));
        bottom: 2em;
      }
      17% {
        bottom: calc(3em + 0.3em);
      }
      20% {
        bottom: 3em;
        left: calc(3em - 0 * 1.5em * var(--derection));
      }
      27% {
        bottom: calc(4em + 0.3em);
      }
      30% {
        bottom: 4em;
        left: calc(3em + 1  * 1.5em * var(--derection));
      }
      37% {
          bottom: calc(5em + 0.3em);
      }
      40% {
        bottom: 5em;
        left: calc(3em + 2  * 1.5em * var(--derection));
      }
      50% {
        bottom: 1em;
        left: calc(3em + 2 * 1.5em * var(--derection));
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }

    }

    @keyframes sort {
      0%, 40%, 100% {
        height: calc(var(--n) * 1em);
      }
      50%, 90% {
        height: calc(5em - (var(--n) - 1 ) * 1em);
      }
    }
  }
}
</style>

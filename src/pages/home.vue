<template>
  <div class="link-box">
    <router-link to="notheme" tag="a" active-class="selected">
      默认地图样式
    </router-link>
    <router-link to="personalitytheme" tag="a" active-class="selected">
      个性化地图样式
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>
<style>
  .link-box{
    margin-top:20px;
  }
  .link-box a{
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
  }
  .link-box a:hover{
    text-decoration: underline;
    color: red;
  }
</style>

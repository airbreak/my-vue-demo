<!--Created by jiangjianming@bmkp.cn on 2018/4/19.-->
<!--这个是一个注释-->
<template>
    <div class="wrapper-box">
      <div>name:{{name}}</div>
      <div>age:{{age}}</div>
    </div>
</template>

<script>
    export default {
        props: {
          name: String,
          age: Number
        },
        name: "test-info"
    };
</script>

<style lang="sass" scoped>
  .wrapper-box
    div
      color: red
</style>

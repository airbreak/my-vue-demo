<!--Created by jiangjianming@bmkp.cn on 2018/4/19.-->
<!--这个是一个注释-->
<template>
    <div class="wrapper-box">
      <div class="none-slot">
        <slot></slot>
      </div>
      <div class="test-two title-box">
        <slot name="user-title"></slot>
      </div>
      <div class="test-one title-box">
        <slot name="header-title"></slot>
      </div>
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

<style lang="scss" scoped>
.title-box{
  display: flex;
  justify-content: space-between;
  align-items: center;    
  background-color: rgba(0,0,0,.3);
  &.test-one{
    color: #ccc
  }
  &.test-two{
    color:rgb(25, 137, 250)
  }
}
</style>

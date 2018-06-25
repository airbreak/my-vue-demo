<template>
  <div class="link-box">
    <router-link v-for="item in menuList" :to="item.url" tag="a" active-class="selected">
      {{item.name}}
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        menuList: []
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.initMenuList()
      })
    },
    methods: {
      initMenuList () {
        this.menuList = [
          { name: '计算属性',url: 'computed'},
          { name: 'debounce搜索',url: 'debounceSearch'},
          { name: 'mockjs试用',url: 'mockjs'},
          { name: '上传图片',url: 'upload'},
          { name: '加载更多',url: 'loadmore'},
          { name: '购物(非模块化的vuex)',url: 'goods'},
          { name: '用户信息(模块化的vuex)',url: 'userInfo'},
        ]
      }
    }
  }
</script>
<style>
  .link-box{
    margin-top:20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .link-box a{
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
    color: #333;
  }
  .link-box a:hover{
    text-decoration: underline;
    color: red;
  }
</style>

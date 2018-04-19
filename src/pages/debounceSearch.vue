<!--Created by jiangjianming@bmkp.cn on 2018/4/18.-->
<!--这个是一个注释-->
<template>
    <div class="wrapper-box">
        <div>
          <span>输入搜索内容</span>
          <el-input placeholder="搜索内容，并以？结束" :clearable="true" v-model.number="keywords"></el-input>
        </div>
        <div>
          <span>结果:</span>
          <div>{{result}}</div>
        </div>
    </div>
</template>

<script>
import { Utils } from './../assets/js/utils'
const  utils = new Utils()
export default {
  name: "debounce-search",
  data() {
    return{
      keywords: '',
      result:''
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.doSearchFn = this.doSearch()
    })
  },
  watch: {
    keywords (newVal,oldVal) {
      this.result = '等待输入结束……'
      this.doSearchFn()
    }
  },
  methods:{
    doSearch (){
     return utils.debounce(() =>{
        let reg = /.*(？|\?)/
        console.log( reg.test(this.keywords))
        if ( !reg.test(this.keywords)) {
          this.result = '亲，搜索问题要以问号结尾哦. ;-)'
          return
        }
        this.result = 'Thinking...'
        window.setTimeout(()=>{
          this.result = '哈哈，搜索到了。这个是惊天的秘密 ---' +this.keywords
        },1000)

      },500)
    },

    getData () {
      console.log(123)
    }

  }
}
</script>

<style lang="sass" scoped>

</style>

<!--Created by jiangjianming@bmkp.cn on 2018/4/18.-->
<!--这个是一个注释-->
<template>
    <div class="wrapper-box">
        <div>
          <span>输入搜索内容</span>
          <el-input placeholder="搜索内容，并以？结束" v-model="keywords"></el-input>
        </div>
        <div>
          <span>结果:</span>
          <div>{{result}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "debounce-search",
  data() {
    return{
      keywords: '',
      result:''
    }
  },
  watch: {
    keywords (newVal,oldVal) {
      this.result = '等待输入结束……'
      this.doSearch()
    }
  },
  methods:{
    doSearch (){
      return this.debounce(()=>{
        if (this.keywords.indexOf('?') === -1) {
          this.result = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.result = 'Thinking...'
        window.setTimeout(()=>{
          this.result = '哈哈，搜索到了。这个是惊天的秘密 ---' +this.keywords
        },1000)
      },500)
    },
    /**
     * 当调用动作触发一段时间后，才会执行该动作，若在这段时间间隔内又调用此动作则将重新计算时间间隔
     * @param {*} action
     * @param {*} delay
     */
    debounce(action, delay) {
      var timer = null;
      return function() {
        var self = this,
          args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
          action.apply(self, args)
        }, delay);
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

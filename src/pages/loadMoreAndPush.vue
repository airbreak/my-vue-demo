<!--Created by jiangjianming@bmkp.cn on 2018/5/31.-->
<template>
  <div class="wrapper-box" v-loading="listLoading">
    <div id="news-box">
        <div v-for="item in list" :key="item.id">
          <p>{{item.title}}</p>
        </div>
      <div class="loader"  :class="{active:loadingMoreFlag}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
  import {getNewsByPage} from '../api/news'
  import {MyScroll} from '../utils/myScroll'
  import Utils from '../utils/utils'
  const myScroll = new MyScroll()
  const  utils = new Utils()
  export default {
    data() {
      return {
        listLoading: true,
        list: [],
        currentPageIndex: 1,
        allLoadedEnd: false,
        loadingMoreFlag: false
      }
    },
    mounted () {
      this.$nextTick(()=>{
        getNewsByPage(1).then(response => {
          this.listLoading = false
          this.list = response.list
        })
        this.scrollListener = utils.throttle(this.doCheck.bind(this),200)
        document.addEventListener('scroll', this.scrollListener)
      })
    },
    methods: {
      doCheck () {
        if(this.allLoadedEnd || this.loadingMoreFlag){
          return
        }
        let scrollTop = myScroll.getScrollTop()
        let visibleHeight = myScroll.getVisibleHeight()
        let scrollHeight = myScroll.getScrollHeight()
        let downTrigger = visibleHeight +scrollTop + 55 >= scrollHeight
        if(downTrigger) {
          // directive.vm.$get(this.loadDownFn)
          this.loadDownFn()
        }
      },
      loadDownFn (){
        this.loadingMoreFlag = true
        this.currentPageIndex ++
        getNewsByPage(this.currentPageIndex).then(response => {
          window.setTimeout(()=>{
            this.loadingMoreFlag = false
            if(response.list) {
              if(response.list.length>0) {
                this.list.push(...response.list)
                this.allLoadedEnd = false
              }else {
                this.allLoadedEnd = true
              }
            }
          },2000)
        })
      }
    }
  }
</script>
<style scoped lang="sass">
  .wrapper-box
    height: 200px
  #news-box
    div
      height: 100px
  .loader
    height: 30px
    display: flex
    justify-content: center
    span
      display: inline-block
      width: 15px
      height: 15px
      border-radius: 100%
      margin-left: 5px
    &.active
      span
        animation: loading 0.8s linear infinite alternate
        &:nth-child(1)
        animation-delay: -1s
        -webkit-animation-delay: -1s
        background-color: rgba(230, 162, 60, 0.7)
        &:nth-child(2)
          animation-delay: -0.6s
          -webkit-animation-delay: -0.8s
          background-color: rgba(64, 158, 255, 0.8)
        &:nth-child(3)
          animation-delay: -0.2s
          -webkit-animation-delay: -2.2666s
          background-color: rgba(103,194,58,0.8)
        &:nth-child(4)
          animation-delay: -0.8s
          -webkit-animation-delay: -0.8s
          background-color: rgba(245, 103, 115, 0.8)
        &:nth-child(5)
          animation-delay: 0s
          -webkit-animation-delay: -1s
          background-color: rgba(230, 162, 60, 0.7)
  @keyframes loading
    from
      transform: scale(0, 0)
    to
      transform: scale(1, 1)
</style>


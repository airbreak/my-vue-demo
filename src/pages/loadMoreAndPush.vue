<!--Created by jiangjianming@bmkp.cn on 2018/5/31.-->
<template>
    <div class="wrapper-box" v-loading="listLoading">
      <div id="news-box">
        <div v-for="item in list">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
</template>
<script>
  import {getNewsByPage} from '../api/news'
  import {MyScroll} from '../utils/myScroll'
  import { Utils } from '../utils/utils'
  const myScroll = new MyScroll()
  const  utils = new Utils()
  export default {
    data() {
      return {
        listLoading: true,
        list: [],
        currentPageIndex: 1,
        allLoadedEnd: false
      }
    },
    mounted () {
      this.$nextTick(()=>{
        getNewsByPage(1).then(response => {
          this.listLoading = false
          this.list = response.data
        })
        this.scrollListener = utils.throttle(this.doCheck.bind(this),200)
        let element = document.body
        element.addEventListener('scroll', this.scrollListener)
      })
    },
    methods: {
      doCheck () {
        let element = this.element
        this.scrollTop = myScroll.getScrollTop(element)
        let downTrigger = myScroll.getVisibleHeight(element) + this.scrollTop + 5 >= myScroll.getScrollHeight(element)
        if(downTrigger && !this.allLoadedEnd && !this.listLoading) {
          directive.vm.$get(this.loadDownFn)
        }
      },
      loadDownFn (){
        this.listLoading = true
        getNewsByPage(this.currentPageIndex).then(response => {
          this.listLoading = false
          this.currentPageIndex ++
          if(response.data) {
            if(response.data.length>0) {
              this.list.push(...response.data)
              this.allLoadedEnd = false
            }else {
              this.allLoadedEnd = true
            }
          }
        })
      }
    }
  }
</script>


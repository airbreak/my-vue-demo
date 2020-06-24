/* eslint-disable */
/**
 * Created by jiangjianming@bmkp.cn on 2018/6/8.
 */
class MyScroll {
  constructor () {}
  /*
  * 获取滚动位置信息
  * @param element
  * @return {*}
  * */
  getScrollTop (element) {
    if(element){
      return element.scrollTop
    }else{
      return document.documentElement.scrollTop
    }
  }

  /*
  * 获取可视区域高度
  * @param element
  * @return {number}
  * */
  getVisibleHeight (element) {
    if(element){
      return element.clientHeight
    } else {
      return document.documentElement.clientHeight
    }
  }

  /*
  * 获得滚动区域高度信息
  * @param element
  * @return {number}
  * */
  getScrollHeight (element) {
    if(element) {
      return element.scrollHeight
    }else {
      return document.documentElement.scrollHeight
    }
  }
}
export {MyScroll}

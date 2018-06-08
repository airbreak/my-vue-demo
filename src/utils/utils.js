/**
 * Created by jimmy on 18/2/8.
 */
class Utils {

  static getInstance() {
    if (!Utils.mInstance) {
      Utils.mInstance = new Utils();
    }
    return Utils.mInstance;
  }

  constructor() {
    "use strict";
    //默认时间格式化
    this._prototypeExtent();
  }

  copyDeepth(config, myConfig) {
    //浅copy
    var newobj = config.constructor === Array ? [] : {};
    for (var i in config) {
      newobj[i] = config[i];
    }

    var val;
    for (var key in myConfig) {
      val = myConfig[key];
      if (val != null) {
        newobj[key] = val;
      }
    }
    return newobj;
  }

  _prototypeExtent() {
    Date.prototype.format = function (format) {
      var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
      }
      if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
      return format;
    };

    //拓展string的方法，去除两端空格
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '');
    };

    //长度截取
    String.prototype.substrLongStr = function (len) {
      if (!len) {
        len = 20;
      }
      var str = this;
      if (this.length > len) {
        str = str.substr(0, parseInt(len - 1));
      }
      return str;
    };
    Array.prototype.unique = function() {
      var res = [], hash = {};
      for(var i=0; i<this.length; i++)  {
      // for(var i=0, elem; (elem = this[i].walker_phone) != null; i++)  {
        let elem = this[i].walker_phone;
        if (elem && !hash[elem]) {
          res.push(this[i]);
          hash[elem] = true;
        }
      }
      return res;
    }
  }

  /*
   * 根据坐标范围，过滤marker点
   */
  filterMarkersByRegion(location,markers) {
    let lngStart = location.lngStart
    let lngEnd = location.lngEnd
    let latStart = location.latStart
    let latEnd = location.latEnd
    let resultArr = [];
    for(let i = 0;i<markers.length; i++) {
      let item = markers[i]
      let flag1 = item.longtitude >= lngStart && item.longtitude <= lngEnd
      let flag2 = item.latitude >= latStart && item.latitude <= latEnd
      if (flag1 && flag2){
        resultArr.push(item)
      }
    }
    return resultArr
  }

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

  throttle(action, delay){
    var timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function() {
        action();
      }, delay);
    }
  }

  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}
export  { Utils }

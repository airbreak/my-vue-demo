<template>
  <div class="wrapper-box">
    <el-form ref="form" label-width="120px" :model="forData">
      <el-form-item label="国家:">
        <el-input v-model="forData.country"></el-input>
      </el-form-item>
      <el-form-item label="省份:">
        <el-input v-model="forData.province"></el-input>
      </el-form-item>
      <el-form-item label="城市:">
        <el-input v-model="forData.city"></el-input>
      </el-form-item>
      <el-form-item label="地址:">
        {{ location }}
      </el-form-item>
      <el-form-item label="年龄:" prop="age" :rules="rules.age">
        <el-input v-model.number="forData.age"
                  type="tel"
                  auto-complete="off"
                  prefix-icon="el-icon-star-off"
                  suffix-icon="el-icon-star-off"></el-input>
      </el-form-item>
      <el-form-item>
       <el-button type="primary" @click="getLocation">获取地址</el-button>
       <el-button type="primary" @click="go">go下一页</el-button>
      </el-form-item>
    </el-form>
    <el-cascader
      :options="options2"
      @active-item-change="handleItemChange"
      @change="change"
      :props="props"
    ></el-cascader>
      <!-- <div class="block">
        <span class="demonstration">默认 click 触发子菜单</span>
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: 'slide-right',
      forData: {
        country: '中国',
        province: '湖北',
        city: '武汉',
        age: 18
      },
      rules: {
        age: [
          {required: true, message: '必填', trigger: 'blur'},
          {type: 'number', message: 'age must be a number'}
          // { pattern: /^(\\d|[1-9]\\d|100)$/, message: '0-100'}
        ]
      },
      options2: [{
        label: '江苏',
        cities: []
      }, {
        label: '浙江',
        cities: []
      }],
      props: {
        value: 'label',
        children: 'cities'
      },
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      selectedOptions: []
    }
  },
  created () {
    console.log('created')
  },
  computed: {
    location: {
      get () {
        return this.forData.country + ' ' + this.forData.province + ' ' + this.forData.city + '年龄 :' + this.forData.age
      }
      // set(newValue){
      //   var names = newValue.split(' ')
      //   this.firstName = names[0]
      //   this.lastName = names[name.length -1]
      // }
    }
  },
  methods: {
    getLocation () {
      this.$message(this.location)
      this.transitionName = this.transitionName !== 'slide-right' ? 'slide-right' : ''
    },
    go () {
      // this.$router.push({path: '/shopping'})
      // alert(this.selectedOptions)
      console.log(this.props)
    },
    handleItemChange (val) {
      console.log(val.length)
      console.log('active item:', val)
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [{
            label: '南京',
            cities: []
          }, {
            label: '苏州',
            cities: []
          }]
        } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
          this.options2[1].cities = [{
            label: '杭州',
            cities: []
          }]
        }
      }, 300)
    },
    handleChange (value) {
      console.log(value)
    },
    change (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="sass">
  .wrapper-box
      margin-top: 20px
      width: 80%
</style>

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
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        transitionName: 'slide-right',
        forData:{
          country: '中国',
          province: '湖北',
          city: '武汉',
          age: 18,
        },
        rules:{
          age:[
                { required: true, message: '必填',trigger: 'blur'},
                { type: 'number', message: 'age must be a number'}
                // { pattern: /^(\\d|[1-9]\\d|100)$/, message: '0-100'}
              ]
        }
      }
    },
    computed: {
      location:{
        get() {
          return this.forData.country + ' '+ this.forData.province + ' ' + this.forData.city + '年龄 :' + this.forData.age
        },
        // set(newValue){
        //   var names = newValue.split(' ')
        //   this.firstName = names[0]
        //   this.lastName = names[name.length -1]
        // }
      }
    },
    methods:{
      getLocation(){
        this.$message(this.location);
        this.transitionName = this.transitionName != 'slide-right' ? 'slide-right':''
      }
    }
  }
</script>
<style lang="sass">
  .wrapper-box
      margin-top: 20px
      width: 80%
</style>

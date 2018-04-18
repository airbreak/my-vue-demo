<template>
  <div class="wrapper-box">
    <el-form ref="form" label-width="120px">
      <el-form-item label="国家:">
        <el-input v-model="country"></el-input>
      </el-form-item>
      <el-form-item label="省份:">
        <el-input v-model="province"></el-input>
      </el-form-item>
      <el-form-item label="城市:">
        <el-input v-model="city"></el-input>
      </el-form-item>
      <el-form-item label="地址:">
        {{ location }}
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
        country:'中国',
        province: '湖北',
        city: '武汉'
      }
    },
    computed: {
      location:{
        get() {
          return this.country + ' '+ this.province + ' ' + this.city
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
      }
    }
  }
</script>
<style lang="sass">
  .wrapper-box
      margin-top: 20px
      width: 80%
</style>

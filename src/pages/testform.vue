<!--Created by jiangjianming@bmkp.cn on 2018/4/19.-->
<!--这个是一个注释-->
<template>
    <div class="wrapper-box">
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px">
        <el-form-item
          label="age"
          prop="age"
          :rules="rules.age"
        >
          <el-input v-model.number="numberValidateForm.age"></el-input>
        </el-form-item>
      </el-form>
      <testform :name="a" :age="12"></testform>
      <el-button @click="changeInfo"></el-button>
    </div>
</template>

<script>
  import testform from '../components/testInfo'
  export default {
    data() {
      return {
        a:'haah',
        age:'123',
        numberValidateForm: {
          age: ''
        },
        rules:{
          age:[
            { required: true, message: 'age is required'},
            { type: 'number', message: 'age must be a number'},
            { pattern: /^(\\d|[1-9]\\d|100)$/, message: '0-100'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeInfo() {
        this.a = '你好'
        this.age = '你好'
      }
    },
    components: {
      testform
    }
  }
</script>

<style lang="sass" scoped>

</style>

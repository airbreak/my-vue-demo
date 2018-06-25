<template>
  <div v-loading="listLoading">
    <el-form :model="formData"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="account">
        <el-input v-model="formData.account" auto-complete="false"></el-input>
      </el-form-item>
       <el-form-item label="密码" prop="pass">
        <el-input v-model="formData.pass" auto-complete="false"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm2')">登录</el-button>
        <el-button @click="reset('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button @click="showCart">前往查看个人信息</el-button>
    </div>
  </div>
</template>

<script>
import { login } from '../api/login'
export default {
  data() {
    return {
      listLoading: true,
      formData: {
        account: '',
        pass: ''
      },
      rules2: {
        account: [
          {require: true, message:'请输入账号', trigger:'blur'},
          {min: 3, max:10, message: '长度在3 - 10个字符', trigger: 'blur'}
        ],
        pass: [
          {require: true, message:'请输入密码', trigger:'blur'},
          {min: 3, max:10, message: '长度在3 - 10个字符', trigger: 'blur'}
        ]
      }
    }
  },

  mounted() {

  },
  methods: {
    login (formName) {
      this.$refs[formName].vlidate((valid)=>{
        if(valid) {
          login(formData).then(()=>{

          })
        } else {
          console.log('error submit')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
</style>

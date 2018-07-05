<template>
  <div>
    <el-form
      :model="formData"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="account">
        <el-input v-model="formData.account" auto-complete="false"></el-input>
      </el-form-item>
       <el-form-item label="密码" prop="pass">
        <el-input v-model="formData.pass" auto-complete="false" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm2')">登录</el-button>
        <el-button @click="reset('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
    <div>
    </div>
  </div>
</template>

<script>
import { doLogin } from '../api/login'
export default {
  data() {
    return {
      loading: true,
      formData: {
        account: '',
        pass: ''
      },
      rules2: {
        account: [
          {required: true, message:'请输入账号', trigger:'blur'},
          {min: 3, max:10, message: '长度在3 - 10个字符', trigger: 'blur'}
        ],
        pass: [
          {required: true, message:'请输入密码', trigger:'blur'},
          {min: 3, max:10, message: '长度在3 - 10个字符', trigger: 'blur'}
        ]
      }
    }
  },

  mounted() {

  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid)=>{
        if(valid) {
          this.loading = true
          this.$store.dispatch('LOGIN', this.formData).then(()=>{
            this.loading = false
            this.$router.push({path:'/'})
          }).catch(()=>{
            this.loading = false
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

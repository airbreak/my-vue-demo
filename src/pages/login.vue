<template>
  <div v-loading="listLoading">
    <el-form :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="account">
        <el-input v-model="ruleForm2.account" auto-complete="false">
      </el-form-item>
       <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm2.pass" auto-complete="false">
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
import { getGoodsList } from '../../api/goods'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      listLoading: true,
      ruleForm2: {
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
    login (info) {

    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    {{code}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      formData: {
        account: 'admin',
        pass: '123456'
      }
    }
  },

  mounted () {
    // this.$route.params.code
    this.code = this.$route.params.code
    this.$store.dispatch('LOGIN', this.formData).then(() => {
    })
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LOGIN', this.formData).then(() => {
            this.loading = false
            this.$router.push({path: '/computed'})
          }).catch(() => {
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

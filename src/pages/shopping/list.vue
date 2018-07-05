<template>
  <div v-loading="isLoading">
    <el-table
    :data="allProducts"
    style="width:100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="存货" prop="inventory"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button :disabled="scope.row.inventory<=0" @click="addToCart(scope.row)">加入</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-button @click="showCart">前往查看</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },

  computed:{
    ...mapGetters({
      allProducts: 'allProducts',
      isLoading: 'isLoading'
    })
  },

  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('getAllProducts')
      this.$store.dispatch('getAllCartProducts')
    })
  },
  methods:{
    ...mapActions([
      'addProductToCart'
    ]),
    addToCart (row) {
      this.addProductToCart({product:row})
      this.$message({
        message: '成功添加到购物车！',
        type: 'success'
      });
    },
    showCart () {
      this.$router.push('cart')
    }
  }
}
</script>

<style scoped>
</style>

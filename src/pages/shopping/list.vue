<template>
  <div v-loading="listLoading">
    <el-table
    :data="list"
    style="width:100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)">加入</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-button @click="showCart">前往查看</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getGoodsList, getQuestionsList } from '../../api/goods'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      listLoading: true,
      list: []
    }
  },

  computed: {
    ...mapGetters([
      'goods'
    ]),
  },
  mounted() {
    this.$nextTick(() => {
      axios.all([getGoodsList(), getQuestionsList()])
        .then((res) => {
          this.listLoading = false
          this.list = res[0].data
        })
      // this.getLocalGoods()
    })
  },
  methods:{
    ...mapMutations({
      // getLocalGoods: 'GET_GOODS',
      addGoods: 'ADD_GOODS'
    }),
    ...mapActions([
      'goodsAsync'
    ]),
    addToCart (row) {
      row.count = 1
      this.addGoods(row)
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

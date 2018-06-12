<template>
  <div>
    <el-table
    :data="list"
    style="width:100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)">加入购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getGoodsList } from "../api/goods";
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      getGoodsList().then((res) => {
        this.list = res.data
      })
    })
  },
  methods:{
    addToCart (row) {

    }
  }
}
</script>

<style scoped>
</style>

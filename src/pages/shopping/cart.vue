<template>
  <div>
    <el-table
    :data="goods"
    style="width:100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="operation-cell">
            <el-button @click="add(scope.row)">+</el-button>
            <el-input v-model="scope.row.quantity" class="quantity-input"></el-input>
            <el-button :disabled="scope.row.quantity<=1" @click="decrease(scope.row)">-</el-button>
            <el-button icon="el-icon-delete" title="移除" @click="deleteItem(scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div>共{{goods.length}}件商品</div>
    <div>总价￥{{total}}</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      totalCounts: 0
    }
  },
  computed: {
    ...mapGetters({
      goods: 'cartProducts',
      checkoutStatus: 'checkoutStatus',
      total: 'cartTotalPrice'
    })
  },
  mounted () {
    this.$nextTick(() => {
      // this.$store.dispatch('getAllCartProducts')  // 等同于 将 getAllCartProducts ...mapActions到当前的环境中
      this.getAllCartProducts()
    })
  },
  methods: {
    ...mapActions([
      'getAllCartProducts',
      'addProductToCart',
      'decreaseProductFromCart',
      'deleteProductFromCart'
    ]),
    add (row) {
      this.addProductToCart({product: row, isCheckInventory: false})
    },
    decrease (row) {
      this.decreaseProductFromCart(row)
    },
    deleteItem (row) {
      this.$confirm('是否移除购物车', '确定移除', {
        confirmButtonText: '确定',
        cancleButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteProductFromCart(row.id)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.operation-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  .quantity-input {
    margin: 0 10px;
    width: 80px;
    input {
      text-align: center !important;
    }
  }
}
</style>

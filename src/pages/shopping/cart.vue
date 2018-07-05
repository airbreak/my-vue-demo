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
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div>共{{goods.length}}件商品</div>
    <div>总价￥{{total}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      totalCounts: 0
    }
  },
  computed:{
    ...mapGetters({
      goods:'cartProducts',
      checkoutStatus: 'checkoutStatus',
      total: 'cartTotalPrice'
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('getAllCartProducts')
    })
  },
  methods: {
    ...mapActions([
      'addProductToCart',
      'decreaseProductFromCart'
    ]),
    add (row) {
      this.addProductToCart({product:row, isCheckInventory:false});
    },
    decrease (row) {
      this.decreaseProductFromCart(row);
    },
    calcTotalDataInfo () {
      this.totalCounts = 0
      this.totalAccount = 0
      let len = this.goods.length;
      for(let i = 0; i < len; i++){
        if(this.goods[i].status){
          let tempCounts =   Number(this.goods[i].count)
          this.totalCounts +=tempCounts
          this.totalAccount += tempCounts * this.goods[i].price
        }
      }
      this.totalAccount = this.totalAccount.toFixed(2);
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

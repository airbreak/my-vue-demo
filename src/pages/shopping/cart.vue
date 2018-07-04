<template>
  <div>
    <el-table
    :data="goods"
    style="width:100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="add(scope.row)">+</el-button>
          <el-input v-model="scope.row.count"></el-input>
          <el-button @click="reduce(scope.row)">-</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>共{{totalCounts}}件商品</div>
    <div>总价￥{{totalAccount}}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      totalCounts: 0,
      totalAccount: 0
    }
  },
  computed:{
    ...mapState([
      'goods'
    ]),
  },
  watch:{
    goods: {
      handler: function (params) {
        this.calcTotalDataInfo();
      },
      deep:true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getGoods()
      this.calcTotalDataInfo()
    })
  },
  methods: {
    ...mapMutations({
      getGoods: 'GET_GOODS',
      addGoods:'ADD_GOODS',
      reduceGoods:'REDUCE_GOODS',
    }),
    add (row) {
      let good = {...row}
      good.count = 1
      this.addGoods(good);
    },
    reduce (row) {
      let good = {...row}
      good.count = 1
      this.reduceGoods(good);
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

<style scoped>
</style>

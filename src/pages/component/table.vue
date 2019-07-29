<template>
  <div>
    <el-table
      :data="tableData6"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </el-table-column>
    </el-table>
    <div class="table-all-box">
      <div class="cover">

      </div>
      <el-table
        :data="tableData7"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
        @selection-change="handleSelectionChange"
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="sequence"
          label="项目"
          width="180">
        </el-table-column>
        <el-table-column
          prop="orderid"
          label="订单号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          label="数值 1（元）">
        </el-table-column>
        <el-table-column
          prop="amount2"
          label="数值 2（元）">
        </el-table-column>
        <el-table-column
          prop="amount3"
          label="数值 3（元）">
        </el-table-column>
      </el-table>
    </div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

  </div>
</template>
<style>
.table-all-box {
  position: relative;
}
.cover {
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1000;
  background-color: #fff;
  top: 3px;
  left: 3px;
}
</style>

<script>
  export default {
    data() {
      return {
        tableData6: [{
          orderid: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          orderid: '12987122',
          name: '王小哎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          orderid: '12987124',
          name: '王小龙',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          orderid: '12987124',
          name: '王小寄',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          orderid: '12987124',
          name: '王小颇',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        tableData7: [{
          orderid: '12987122',
          name: '小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          orderid: '12987122',
          name: '小s虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          orderid: '12987124',
          name: '王小龙',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          orderid: '12987124',
          name: '王小龙sfd',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          orderid: '12987125',
          name: '王小颇',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        spanArr: [],
        selectedPaasenger: '',
        tableData: 
        [
          {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [{
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }]
          }, {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    mounted () {
      this.resetRowspan()
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      resetRowspan() {
        this.spanArr = [];//在data里面定义
        this.position = 0; //在data里面定义
        this.tableData7.forEach((item,index) => {
          if( index === 0){
            this.spanArr.push(1);
            item.sequence= index + 1;//设置序号
          }else{
            if(this.tableData7[index].orderid === this.tableData7[index-1].orderid ){
              this.spanArr[this.position] += 1;//连续有几行项目名名称相同
              this.spanArr.push(0); // 名称相同后往数组里面加一项0
              console.log(this.spanArr)
              //当项目名称相同时，设置当前序号和前一个相同
              this.tableData7[index].sequence = this.tableData7[index-1].sequence;
            }else{
              this.spanArr.push(1);
              this.position = index;
              //当项目名称不同时，将当前序号设置为前一个序号+1
              this.tableData7[index].sequence = this.tableData7[index-1].sequence+1;
            }
          }
        })
      },


      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // if(columnIndex === ){  //序号列也进行合并(第一列)
        //   //this.spanArr这个数组里面存的是table里面连续的有几条数据相同
        //   //例如:[1,1,2,0,2,0]
        //   //1  代表的没有连续的相同的
        //   //2  代表连续的两个相同
        //   //0  代表是和上一条内容相同
        //   const _row = this.spanArr[rowIndex];
        //   const _col = _row>0 ? 1 : 0;
        //   return {
        //     rowspan: _row, //行
        //     colspan: _col  //列
        //   }

        // }
        if(columnIndex === 0 || columnIndex === 1 || columnIndex === 2){ //项目列也进行合并(第二列)
          const _row = this.spanArr[rowIndex];
          const _col = _row>0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      },
      handleSelectionChange (val) {
        console.log(val)
      },
      selectPassenger (val) {
        debugger
      }
    }
  };
</script>
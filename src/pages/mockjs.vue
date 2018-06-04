<!--Created by jiangjianming@bmkp.cn on 2018/5/14.-->
<template>
    <div class="wrapper-box">
        <el-table
          :data="dataArr"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id"
            width="180">
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <span :style="{color: scope.row.nameColor}">{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="性别"
            width="180">
            <template slot-scope="scope">
              <span>{{scope.row.isMale ? '男':'女'}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="city"
            label="城市">
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: "mock-test",
  data () {
    return {
      dataArr :[]
    }
  },
  mounted (){
    this.$nextTick(()=>{
        let data = Mock.mock({
          'list|50-100': [{
            'id|+1': 88,
            'name': '@cname',
            'age|18-28': 0,
            'city':'@city(false)',
            'avatar': '',
            'nameColor': '@color',
            'isMale|1': true,
          }]
        })
      this.dataArr = data.list
      Mock.mock('http://test.com', function(options) {
        console.log(options);
        let aaa = Mock.mock({
          "user|1-3": [{
            'name': '@cname',
            'id|+1': 88
          }]
        })
        console.log(aaa)
      })
    })
  },
  methods:{
  }
}
</script>

<style lang="sass" scoped>
.wrapper-box
  width: 50%
  margin: 10px auto

</style>

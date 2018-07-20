<template>
  <div class="block">
    <p>使用scoped slot</p>
    <el-tree
    :data="data5"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false">
    <span class="custom-tree-node" slot-scope="{ node, data}">
      <span>{{ node.lable }}</span>
      <span>
        <el-button
          type="text"
          size="mini"
          @click="() =>append(data)">
          Append
        </el-button>
        <el-button
        type="text"
        size="mini"
        @click="()=>remove(node, data)">
          Delete
        </el-button>
      </span>
    </span>

    </el-tree>
  </div>
</template>

<script>
let id = 1000
export default {
  data() {
    const tempData = [{
        id: 1,
        label: '一级1',
        children: [{
            id: 10,
            label: '一级1-1'
          },{
            id: 11,
            lable: '一级1-2'
          }
        ]
      },{
        id: 2,
        label: '一级2'
      },{
        id: 3,
        label: '一级3'
      },{
        id: 4,
        label: '一级4'
      }]
    return {
     data5: JSON.stringify(tempData)
    }
  },
  methods: {
    append(data) {
      const newChild = { id: id ++,lable:'test', children:[]}
      if(!data.children){
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIdex(d => d.id === data.id)
      children.splice(index,1)
    }
  }
}
</script>

<style scoped>
</style>

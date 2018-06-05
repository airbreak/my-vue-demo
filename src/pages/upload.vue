<!--Created by jiangjianming@bmkp.cn on 2018/5/31.-->
<template>
    <div class="wrapper-box" v-loading="listLoading">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :limit="1"
        :disabled="imgUpload.disabled"
        :multiple="imgUpload.multiple"
        :on-preview="handlePictureCardPreview"
        :file-list="imgUpload.list"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="imgUpload.dialogVisible">
        <img width="100%" :src="imgUpload.dialogImageUrl" alt="">
      </el-dialog>
    </div>
</template>
<script>
  import {getUserDetail} from '../api/upload'

  export default {
    data() {
      return {
        listLoading:true,
        imgUpload: {
          multiple: false,
          dialogImageUrl: '',
          dialogVisible: false,
          list:[],
          disabled: false
        }
      };
    },
    mounted () {
      this.$nextTick(()=>{
        getUserDetail().then(response => {
          this.listLoading = false
          let url = response.data.avatar
          this.imgUpload.dialogImageUrl = url
          this.imgUpload.list = [{name:'图片',url: url}]
        })
      })
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.imgUpload.disabled = false
      },
      handlePictureCardPreview(file) {
        this.imgUpload.dialogImageUrl = file.url;
        this.imgUpload.dialogVisible = true;
      }
    }
  }
</script>


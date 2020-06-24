<!--Created by jiangjianming@bmkp.cn on 2018/5/31.-->
<template>
    <div class="wrapper-box" v-loading="listLoading">
      <el-upload
        :action="imgUpload.action"
        ref="upload"
        list-type="picture-card"
        name="file"
        :limit="1"
        :disabled="imgUpload.disabled"
        :multiple="imgUpload.multiple"
        :on-preview="handlePictureCardPreview"
        :file-list="imgUpload.list"
        :auto-upload="imgUpload.auto"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传服务器</el-button>
      <el-dialog :visible.sync="imgUpload.dialogVisible">
        <img width="100%" :src="imgUpload.dialogImageUrl" alt="">
      </el-dialog>
    </div>
</template>
<script>
import { deteleOne } from '@/api/upload'
export default {
  data () {
    return {
      listLoading: false,
      imgUpload: {
        action: 'http://phpupload.cn/upload.php',
        multiple: false,
        dialogImageUrl: '',
        dialogVisible: false,
        list: [],
        disabled: false,
        auto: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // getUserDetail().then(response => {
      //   this.listLoading = false
      //   let url = response.data.avatar
      //   this.imgUpload.dialogImageUrl = url
      //   this.imgUpload.list = [{name: '图片', url: url}]
      // })
    })
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
      this.imgUpload.disabled = false
    },
    handlePictureCardPreview (file) {
      this.imgUpload.dialogImageUrl = file.url
      this.imgUpload.dialogVisible = true
    },
    submitUpload () {
      // this.$refs.upload.submit();
      deteleOne().then(response => {
        console.log(response)
      })
    }
  }
}
</script>

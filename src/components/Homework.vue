<template>
    <div class="container">
        <div class="newHomework">
            <span>未提交</span>
            <el-collapse v-model="mostActiveName">
                <el-collapse-item title="需求工程：需求分析报告" name="1"></el-collapse-item>
                <el-collapse-item title="计算机网络：第四章作业" name="2"></el-collapse-item>
                <el-collapse-item title="数据结构：实验2源码与报告" name="3"></el-collapse-item>
                <el-collapse-item title="JAVA EE与中间件技术：实验3源码与报告" name="4"></el-collapse-item>
            </el-collapse>
        </div>
        <div class="pastHomework">
            <span>已提交</span>
            <el-collapse v-model="newActiveName">
                <el-collapse-item title="需求工程：期中作业" name="1"></el-collapse-item>
                <el-collapse-item title="计算机网络：第三章作业" name="2"></el-collapse-item>
                <el-collapse-item title="算法设计与分析：第2次作业" name="3"></el-collapse-item>
                <el-collapse-item title="操作系统：第1次作业" name="4"></el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mostActiveName: '',
      newActiveName: ''
    }
  }
}
</script>

<style lang="less" scoped>
.newHomework, .pastHomework{
  padding: 4px 10px 4px 20px;
  overflow: hidden;
  box-shadow: 1px 1px 5px #999;
  border-radius: 10px;
}
.newHomework span{
  color: red;
  display: block;
  font-weight: 550;
  margin: 15px 10px;
}
.pastHomework span{
  display: block;
  font-weight: 550;
  margin: 15px 10px;
}
.newHomework{
  margin-top: 10px;
}
.pastHomework{
  margin-top: 50px;
}
</style>

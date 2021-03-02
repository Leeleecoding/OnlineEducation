<template>
    <div class="container">
        <div class="new">
            <el-button type="primary" icon="el-icon-edit" round>发表</el-button>
        </div>
        <div class="mostDiscuss">
            <span>最热讨论</span>
            <el-collapse>
                <el-collapse-item>
                  <template #title>Session对象和Application对象的区别？<i class="header-icon el-icon-question"></i></template>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>转发和重载有什么相同点和不同点？<i class="header-icon el-icon-question"></i></template>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>Servlet的工作原理？<i class="header-icon el-icon-question"></i></template>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>JSP开发过程中常用注解有哪些？<i class="header-icon el-icon-question"></i></template>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="newDiscuss">
            <span>最新讨论</span>
            <el-collapse v-model="activeName">
                <el-collapse-item title="什么是MVC ？" name="1"></el-collapse-item>
                <el-collapse-item title="过滤器的使用问题" name="2"></el-collapse-item>
                <el-collapse-item title="JDBC无法连接数据库" name="3"></el-collapse-item>
                <el-collapse-item title="SSM如何整合使用" name="4"></el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: ''
    }
  }
}
</script>

<style lang="less" scoped>
.mostDiscuss, .newDiscuss{
  padding: 4px 10px 4px 20px;
  overflow: hidden;
  box-shadow: 1px 1px 5px #999;
  border-radius: 10px;
}
.mostDiscuss span{
  display: block;
  font-weight: 550;
  margin: 15px 10px;
}
.newDiscuss span{
  display: block;
  font-weight: 550;
  margin: 15px 10px;
}
.mostDiscuss{
  margin: 20px 0;
}
.newDiscuss{
  margin-top: 50px;
}
</style>

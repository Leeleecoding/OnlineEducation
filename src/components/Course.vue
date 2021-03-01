<template>
  <el-container class="home-container">
    <el-aside width="220px" class="el-aside">
      <span class="courseName">课程名称</span>
      <!-- 侧边栏菜单 -->
      <el-menu
        background-color="white"
        text-color="#111"
        active-text-color="#027db4"
        :unique-opened="true"
        :default-active="courseTabPath"
      >
        <el-submenu :index="item.classID" v-for="item in courseList" :key="item.classID">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.className}}</span>
          </template>
          <el-menu-item-group>
            <template slot="title">课程代码：{{item.classID}}</template>
            <!-- 小黑板 -->
            <el-menu-item
              :index="item.classID + '-blackboard'"
              @click="blackboardClick(item.classID)"
            >
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>小黑板</span>
              </template>
            </el-menu-item>
          <!-- 课程直播 -->
            <el-menu-item
              :index="item.classID + '-livebroadcast'"
              @click="livebroadcastClick(item.classID)"
            >
              <template slot="title">
                <i class="el-icon-video-play"></i>
                <span>课程直播</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main class="el-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      courseList: [
        {
          classID: 'CS285',
          className: '计算方法'
        },
        {
          classID: 'CS171',
          className: '计算机网络'
        },
        {
          classID: 'EE150',
          className: '操作系统'
        },
        {
          classID: 'EE130',
          className: '数字图像处理'
        },
        {
          classID: 'BIO1011',
          className: 'JAVA EE与中间件技术'
        },
        {
          classID: 'EE130P',
          className: '需求工程'
        },
        {
          classID: 'EE150L',
          className: '数据结构'
        },
        {
          classID: 'GESS1014',
          className: '算法设计与分析'
        }, {
          classID: 'GESS1025',
          className: '汽车交通与安全'
        }],
      courseTabPath: ''
    }
  },
  created () {
    // this.getMenuList()
    this.getNavState()
  },
  methods: {
    async getMenuList () {
      const { data: res } = await this.$http.get('courseList')
      // console.log('get courseList', res)
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.courseList = res.data
    },
    blackboardClick (id) {
      this.setNavState(id + '-blackboard')
      if (this.$route.path !== ('/blackboard/' + id)) this.$router.push('/blackboard/' + id)
    },
    livebroadcastClick (id) {
      this.setNavState(id + '-livebroadcast')
      if (this.$route.path !== ('/livebroadcast/' + id)) this.$router.push('/livebroadcast')
    },
    setNavState (state) {
      window.sessionStorage.setItem('courseTabState', state)
    },
    getNavState () {
      const path = window.sessionStorage.getItem('courseTabState')
      this.courseTabPath = path
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.courseName {
  margin-top: 15px;
  display: block;
  text-align: center;
  font-size: 20px;
}
.el-header {
  background-color: #027db4;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 200px;
    }
  }
}
.el-aside {
  background-color: white;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: white;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg-icon {
    width: 60px;
    color: red;
  }
  > span {
    font-size: 13px;
  }
}
.nav-bar {
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-left: 100px;
}
</style>

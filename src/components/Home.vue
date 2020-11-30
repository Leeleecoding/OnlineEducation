<template>
    <div class="container" style="background-color: #eee;">
        <div class="page">
            <div class="blank-bar"></div>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="userInfo">
                        <div class="userInfo-top"></div>
                        <div class="userInfo-name">
                            <div class="avatar-box">
                                <img src="../assets/img/avatar.jpg" alt />
                            </div>
                            <div @click="goClass">江小博</div>
                            <div style="font-size:13px">欢迎来到网络课堂!</div>
                        </div>
                        <div class="userInfo-school">
                            <div class="key">学校</div>
                            <div class="value">江苏大学</div>
                        </div>
                        <div class="userInfo-grade">
                            <div class="key">年级</div>
                            <div class="value">2018级</div>
                        </div>
                        <div class="userInfo-major">
                            <div class="key">专业</div>
                            <div class="value">软件工程</div>
                        </div>
                        <div class="userInfo-id">
                          <div class="key">学号</div>
                          <div class="value">3180608001</div>
                        </div>
                        <div class="user-logout">
                          <el-button type="danger" plain @click="logout()">退出</el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="13">
                    <Timetable></Timetable>
                </el-col>
                <el-col :span="6">
                    <Notice></Notice>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'element-ui'
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    goClass () {
      MessageBox.alert('《Java程序设计》将在五分钟后上课，请尽快进入课堂', '上课提醒', {
        confirmButtonText: '跳转进入',
        callback: action => {
          if (action) {
            this.$router.push('/livebroadcast')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.color {
  background-color: #999;
  height: 90px;
  margin: 5px 10px;
}
.page {
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  .blank-bar {
    height: 20px;
  }
  .userInfo {
    margin-left: 30px;
    height:500px;
    box-shadow: 2px 1px 5px #999;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    .key {
      color: #999;
      padding-top: 10px;
    }
    .value {
      padding-top: 5px;
    }
    .userInfo-top {
      // flex:1;
      height: 60px;
      background-color: #015478;
      border-radius: 20px 20px 0 0;
    }
    .userInfo-name {
        // flex:1.5;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 15px;
        .avatar-box {
            height: 90px;
            width: 90px;
            border: 1px solid #eee;
            border-radius: 50%;
            // box-shadow: 0 0 10px;
            position: relative;
            left: 50%;
            transform: translate(-50%, 0%);
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
        }
        div {
          text-align: center;
          line-height: 25px;
        }
    }
    .userInfo-name,
    .userInfo-school,
    .userInfo-grade,
    .userInfo-major {
      border-bottom: solid 1px #eee;
    }
    .userInfo-school,
    .userInfo-grade,
    .userInfo-major,
    .userInfo-id {
      height: 55px;
    }
    .userInfo-school,
    .userInfo-grade,
    .userInfo-major,
    .userInfo-id {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
    }
    .user-logout{
    position: relative;
    top: 40px;
    left: 30%;
    }
  }
}
</style>

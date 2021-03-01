/* eslint-disable */
<template>
  <div class="container" style="background-color: #eee;height: 100%">
    <div class="page">
      <div class="blank-bar"></div>
      <el-row :gutter="20">
        <!-- UserInfo Card -->
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
          </div>
        </el-col>

        <el-col :span="13">
          <div class="title">基本设置：</div>
          <div class="title">特色功能：</div>
          <el-card>
            专注模式
            <el-switch
              v-model="attention.attentionMode"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="float:right"
            ></el-switch>
          </el-card>
          <el-card>
            上课提醒
            <el-switch
              v-model="remind.class"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="float:right"
            ></el-switch>
          </el-card>
          <el-card>
            新公告提醒
            <el-switch
              v-model="remind.notice"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="float:right"
            ></el-switch>
          </el-card>
          <el-card>
            截止日期预警
            <el-switch
              v-model="remind.ddl"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="float:right"
            ></el-switch>
          </el-card>
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
  data () {
    return {
      attention: {
        attentionMode: '',
        phoneData: '',
        webData: '',
        cameraData: ''
      },
      remind: {
        class: '',
        file: '',
        notice: '',
        ddl: ''
      }
    }
  },
  methods: {
    goClass () {
      MessageBox.alert(
        '《JAVA EE与中间件技术》将在五分钟后上课，请尽快进入课堂',
        '上课提醒',
        {
          confirmButtonText: '跳转进入',
          callback: action => {
            if (action) {
              this.$router.push('/livebroadcast')
            }
          }
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  margin: 20px 15px 10px 22px;
  color: #999;
  font-size: 13px;
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
    height:400px;
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
  }
}
</style>

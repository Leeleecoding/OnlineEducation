<template>
  <div class="container">
    <el-row :gutter="30">
      <el-col :span="24">
        <!-- 课前视频 -->
        <div class="video">
          <div class="head">课前视频({{id}})</div>
          <div class="blank" style="height: 20px"></div>
          <div class="grid">
            <div class="video-card" v-for="item in previewList" :key="item"  @click="goBeforeVideo">
              <div class="img-box">
                <div class="img-mask">
                  <img src="../assets/img/JSP简介.png" alt />
                </div>
              </div>
              <div class="title">Chapter1-1 JSP简介</div>
              <div class="info">
                <div class="time">
                  <i class="el-icon-time"></i>2天前发布
                </div>
                <div class="remark">
                  <i class="el-icon-chat-dot-round"></i>讨论：30
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 直播回放 -->
        <div class="video">
          <div class="head">直播回放</div>
          <div class="blank" style="height: 20px"></div>
          <div class="grid">
            <div class="video-card" v-for="item in previewList" :key="item" @click="goAfterVideo">
              <div class="img-box">
                <div class="img-mask">
                <img src="../assets/img/JSP四大域对象.png" alt />
                </div>
              </div>
              <div class="title">Chapter2-3 JSP四大域对象</div>
              <div class="info">
                <div class="time">
                  <i class="el-icon-time"></i>8h前发布
                </div>
                <div class="remark">
                  <i class="el-icon-chat-dot-round"></i>讨论：9
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 课件 -->
        <div class="video">
          <div class="head">课程资源</div>
          <div class="blank" style="height: 20px"></div>
          <div class="grid">
            <div class="video-card" v-for="item in previewList" :key="item" @click="goSource">
              <div class="img-box">
                <div class="img-mask">
                <img src="../assets/img/jsp.png" alt />
                </div>
              </div>
              <div class="title">JSP参考书籍</div>
              <div class="info">
                <div class="time">
                  <i class="el-icon-time"></i>8h前发布
                </div>
                <div class="remark">
                  <i class="el-icon-chat-dot-round"></i>讨论：12
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created () {
    if (window.sessionStorage.getItem('blackboardPage')) this.id = window.sessionStorage.getItem('blackboardPage')
  },
  watch: {
    $route () {
      window.sessionStorage.setItem('blackboardPage', this.$route.params.id)
      this.id = this.$route.params.id
    }
  },
  methods: {
    goAfterVideo () {
      this.$router.push('/afterVideo')
    },
    goBeforeVideo () {
      this.$router.push('/beforeVideo')
    },
    goSource () {

    }
  },
  data () {
    return {
      previewList: [1, 2, 3, 4, 5, 6, 7],
      id: ''
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  margin-top: 10px;
  .head {
    font-size: 18px;
    border-bottom: 1px solid #999;
    padding-bottom: 2px;
  }
  .grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
.video-card {
  padding-top: 10px;
  .img-box {
    width: 160px;
    height: 100px;
    border-radius: 7px;
    .img-mask {
      height:100%;
      width:100%;
    }
    .img-mask:hover{
      background-color: black;
      opacity: 0.2;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
  }
  .img-box:hover{
    cursor: pointer;
  }
  .title {
    font-size: 13px;
    padding: 2px 4px;
    cursor: pointer;
  }
  .title:hover{
    color:#027db4;
  }
  .info {
    display: flex;
    .time,
    .remark {
      flex: 1;
      font-size: 10px;
      color: #777;
    }
  }
}
</style>

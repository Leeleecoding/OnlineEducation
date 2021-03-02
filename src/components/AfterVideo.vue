<template>
  <div class="home-container">
    <div class="left-container" id="leftContainer">
      <video id="video" width="100%" height="100%" preload controls loop>
        <source
          src="../assets/video/JSP四大域对象.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <!-- 右侧工具栏 -->
    <div class="right-container" id="rightContainer">
      <div class="comment-box">
        <div class="head">发言记录</div>
        <div v-for="comment in commentList" :key="comment.time" :index="comment.time" class="row" @click="jump">
          <!-- <div class="row"> -->
          <div class="title">{{comment.name}} {{comment.time}}</div>
          <div class="content">{{comment.content}}</div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// var pdf = require('pdfobject')
export default {
  data () {
    return {
      commentList: [
        {
          name: '李煦阳',
          time: '11:50:00',
          content: '老师能再讲一下嘛？'
        },
        {
          name: '江小博',
          time: '11:50:03',
          content: '老师能讲慢点吗？前面没看见。'
        },
        {
          name: '彭欣悦',
          time: '11:50:16',
          content: '麻烦老师再讲一下可以吗？'
        },
        {
          name: '彭欣悦',
          time: '11:51:08',
          content: '谢谢老师'
        },
        {
          name: '老师-沈老师',
          time: '11:51:18',
          content:
            '大家集中精力仔细听，我重讲一下前面的。'
        },
        {
          name: '老师-沈老师',
          time: '11:51:48',
          content:
            '后面我讲慢点，有什么问题可以随时提。'
        },
        {
          name: '李煦阳',
          time: '11:52:00',
          content: '好的'
        },
        {
          name: '江小博',
          time: '11:52:03',
          content: '谢谢老师'
        },
        {
          name: '江小博',
          time: '11:52:12',
          content: '谢老师'
        },
        {
          name: '彭欣悦',
          time: '11:52:16',
          content: '谢谢老师'
        },
        {
          name: '王晶伊',
          time: '11:52:01',
          content: '谢谢老师'
        }
      ]
    }
  },
  methods: {
    jump () {
      var video = document.getElementById('video')
      video.currentTime = Math.random() * 29
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  .left-container {
    width: 80%;
    height: 100%;
    float: left;
  }
  .right-container {
    width: 20%;
    height: 100%;
    float: right;
    position: fixed;
    right: 0;
    border-left: 1px solid #eee;
    box-shadow: 11px 11px 21px #ddd;
    .comment-box {
      width: 100%;
      height: 100%;
      overflow: auto;
      cursor: pointer;
      //   padding:30px 10px 10px 10px;
      .head {
        //   background-color: #409eff;
        //   color:white;
        height: 30px;
        font-size: 14px;
        text-align: center;
        padding-top: 10px;
        border-bottom: 1px solid #eee;
        box-shadow: 1px 1px 1px #fff;
        margin-bottom: 10px;
      }
      .title {
        color: #409eff;
        padding: 0 10px;
      }
      .content {
        margin: 5px 0 10px 0;
        font-size: 15px;
        // width:100%;
        padding: 0 10px;
      }
      .content:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

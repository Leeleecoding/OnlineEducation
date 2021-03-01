<template>
  <div class="container">
    <div class="title">
      <span>课程预习视频: JSP简介</span>
    </div>
    <div class="video">
      <video id="video" width="100%" height="100%" preload controls loop>
        <source src="../assets/video/JSP简介.mp4" type="video/mp4"/>
      </video>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.container {
    height: 100%;
    position: relative;
    width: 100%;
}
.title {
    width: 100%;
    height: 5%;
    position: relative;
    overflow: hidden;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
.title span{
  display: block;
  margin-top: 10px;
}
.video {
    width: 100%;
    height: 95%;
    position: relative;
    overflow: hidden;
}
video {
    display: block;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

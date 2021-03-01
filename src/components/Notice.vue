<template>
<div>
    <div class="noticeInfo-container">
        <div class="noticeInfo-title">
            {{noticeInfo.head}}
        </div>
        <div class="noticeInfo-row" v-for="item in noticeInfo.list" :key="item.info">
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.time}}</div>
            <div class="content">{{item.info}}</div>
        </div>
        <div class="noticeInfo-footer">
            查看更多
        </div>
    </div>
    <div class="deadlineInfo-container">
        <div class="deadlineInfo-title">
            {{deadlineInfo.head}}
        </div>
        <div class="deadlineInfo-row" v-for="item in deadlineInfo.list" :key="item.info">
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.time}}</div>
            <div class="content">{{item.info}}</div>
        </div>
        <div class="deadlineInfo-footer">
            查看更多
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      noticeInfo: {
        head: '通知',
        list: [
          {
            title: '需求工程',
            time: '3小时前',
            info: '林老师发布了作业：需求分析报告',
            id: '1'
          },
          {
            title: '计算机网络',
            time: '10小时前',
            info: '丁老师发布了作业：第四章练习',
            id: '2'
          },
          {
            title: '算法设计与分析',
            time: '三天前',
            info: '黄老师发布了预习视频',
            id: '3'
          }
        ]
      },
      deadlineInfo: {
        head: 'Deadline',
        list: [
          {
            title: '需求工程',
            time: '需要提交：期中作业',
            info: '截止日期：11月28日 23:59',
            id: '4'
          },
          {
            title: '数据结构',
            time: '需要提交：实验2',
            info: '截止日期：11月18日 23:59',
            id: '5'
          },
          {
            title: '计算机网络',
            time: '需要提交：第三章作业',
            info: '截止日期：11月12日 23:59',
            id: '6'
          }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.noticeInfo-container,.deadlineInfo-container{
    border: 1px solid #eee;
    box-shadow:  2px 1px 5px #999;
    margin-bottom: 10px;
    .noticeInfo-title,.deadlineInfo-title{
        color:#015478;
        font-size:22px;
        padding: 10px 0 10px 10px;
        font-weight: 600;
    }
    .noticeInfo-row,.deadlineInfo-row {
        border-top: 1px solid #eee;
        cursor: pointer;
        .title{
            color:#999;
            font-size: 17px;
            padding: 5px 0 5px 10px;
        }
        .time{
            font-size: 12px;
            padding: 0px 0 5px 10px;
        }
        .content{
            font-size: 14px;
            padding: 0px 0 5px 10px;
        }
        .content:hover, .time:hover {
            color: #027db4;
        }
    }
    .noticeInfo-footer,.deadlineInfo-footer{
        border-top: 1px solid #eee;
        text-align: center;
        color:#999;
        font-size: 13px;
        padding: 5px 0;
        cursor: pointer;
    }
    .noticeInfo-footer:hover,.deadlineInfo-footer:hover {
            color: #027db4;
    }
}
</style>

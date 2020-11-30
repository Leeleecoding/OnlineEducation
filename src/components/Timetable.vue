<template>
    <div class="class-table">
        <div class="table-wrapper">
            <div class="tabel-container">
                <table>
                    <thead>
                        <tr>
                            <th style="border-radius:20px 0 0 0">时间</th>
                            <th>周一</th>
                            <th>周二</th>
                            <th>周三</th>
                            <th>周四</th>
                            <th>周五</th>
                            <th>周六</th>
                            <th style="border-radius:0 20px 0 0">周日</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">
                            <td>
                                <p class="period">{{ lesson }}</p>
                            </td>
                            <td v-for="(course, courseIndex) in classTableData.courses"
                            :class="classTableData.courses[courseIndex][lessonIndex]?'active':''" :key="courseIndex">
                                {{classTableData.courses[courseIndex][lessonIndex] || ' '}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      classTableData: {
        lessons: [
          '08:00-08:45',
          '08:55-09:40',
          '10:30-11:15',
          '11:15-12:10',
          '14:00-14:45',
          '14:55-15:40',
          '16:00-16:45',
          '16:55-17:40',
          '19:00-19:45',
          '19:55-20:40',
          '20:50-21:35'
        ],
        courses: [
          ['计算方法（计算机楼109）', '计算方法（计算机楼109）', '计算机网络（计算机楼106）', '计算机网络（计算机楼106）', '算法设计与分析（计算机楼110）', '算法设计与分析（计算机楼110）', '', '', 'JAVA EE上机实验（计算机楼306）', 'JAVA EE上机实验（计算机楼306）', ''],
          ['操作系统（计算机楼109）', '操作系统（计算机楼109）', 'JAVA EE与中间件技术（计算机楼106）', 'JAVA EE与中间件技术（计算机楼106）', '操作系统上机实验（计算机楼306）', '操作系统上机实验（计算机楼306）', '', '', '汽车交通与安全（三山楼109）', '汽车交通与安全（三山楼109）', ''],
          ['数字图像处理（计算机楼109）', '数字图像处理（计算机楼109）', '计算机网络（计算机楼106）', '计算机网络（计算机楼106）', '', '', '', '', '', '计算机网络上机实验（计算机楼305）', '计算机网络上机实验（计算机楼305）'],
          ['需求工程：软件建模与分析（计算机楼109）', '需求工程：软件建模与分析（计算机楼109）', '数据结构（三山楼305）', '数据结构（三山楼305）', '', '', '', '', '', '', ''],
          ['操作系统（计算机楼106）', '操作系统（计算机楼106）', '', '', 'JAVA EE与中间件技术（计算机楼106）', 'JAVA EE与中间件技术（计算机楼106）', '', '', '', '', ''],
          ['', '', '创业计划（讲堂群103）', '创业计划（讲堂群103）', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '']
        ]
      }

    }
  },
  created () {},
  methods: {
    /**
        * 数字转中文
        * @param {Number} num 需转数字
        * @param {String} identifier 标识符
        * @returns {String} 转换后的中文
        */
    digital2Chinese (num, identifier) {
      const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num]
    }
  }
}
</script>

<style lang="less" scoped>
.class-table {
    .table-wrapper {
        width: 100%;
        // height: 100%;
        overflow: auto;
    }
    .active {
        color: white !important;
        background-color: #388FB4;
        font-size:12px !important;
        cursor: pointer;
    }
    .tabel-container {
        margin: 0 10px;

        table {
            table-layout: fixed;
            width: 100%;

            thead {
                background-color: #015478;
                th {
                    color: #fff;
                    font-weight: 400;
                    font-size:16px;
                }
            }
            tbody {
                background-color: #eaf2ff;
                td {
                    color: #677998;
                }
            }
            th,
            td {
                width: 60px;
                padding: 10px 2px;
                font-size: 14px;
                text-align: center;
            }

            tr td:first-child {
                color: #333;
                .period {
                    font-size: 13px;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>

<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="top-content01">
        暗网节点监控情况
        <div class="data01">
          <div><b>16.74 </b>万(Tor)</div>
          <div><b>4,529 </b>(I2P)</div>
          <div><b>4,156 </b>(ZeroNet)</div>
        </div>
        新增
        <div class="data01">
          <div><b style="color:rgb(26, 149, 105)">52 </b>(Tor)</div>
          <div><b style="color:rgb(26, 149, 105)">34 </b>(I2P)</div>
          <div><b style="color:rgb(26, 149, 105)">12 </b>(ZeroNet)</div>
        </div>
      </div>
      <!-- <div class="top-content02">交易市场用户身份证ID</div> -->
      <!-- <div class="page-header-content">
        <div class="avatar">
          <a-avatar size="large" :src="currentUser.avatar"/>
        </div>
        <div class="content">
          <div class="content-title">
            {{ timeFix }}，{{ user.name }}<span class="welcome-text">，{{ welcome }}</span>
          </div>
          <div>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</div>
        </div>
      </div> -->
    </template>
    <template v-slot:extraContent>
      <div class="extra-content">
        <div class="top-content02">
          <div class="top-subcontent top-sub01">
            交易市场用户身份证ID
            <div><b>23.08</b>万</div>
            新增
            <div style="color:rgb(26, 149, 105)"><b>26</b></div>
          </div>
          <div class="top-subcontent top-sub01">
            增比特币钱包地址
            <div><b>1.53</b>万</div>
            新增
            <div style="color:rgb(26, 149, 105)"><b>11</b></div>
          </div>
          <div class="top-subcontent top-sub01">
            可溯源中继节点数
            <div><b>5.43</b>万(Tor)</div>
            新增
            <div style="color:rgb(26, 149, 105)"><b>6</b></div>
          </div>
          <div class="top-subcontent">
            SSH信息
            <div><b>3.62</b>万(Tor)</div>
            新增
            <div style="color:rgb(26, 149, 105)"><b>16</b></div>
          </div>
        </div>
        <!-- <div class="stat-item">
          <a-statistic title="项目数" :value="56" />
          <a-statistic title="项目数" :value="56" />
        </div>
        <div class="stat-item">
          <a-statistic title="团队内排名" :value="8" suffix="/ 24" />
          <a-statistic title="团队内排名" :value="8" suffix="/ 24" />
        </div>
        <div class="stat-item">
          <a-statistic title="项目访问" :value="2223" />
          <a-statistic title="项目访问" :value="2223" />
        </div> -->
      </div>
    </template>

    <div>
      <a-row :gutter="24">
        <a-col
          style="padding: 0 12px"
          :xl="8"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24">
          <a-card title="站点分类" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <ve-ring
              :data="chartData"
            >
            </ve-ring>
            <!-- <div class="item-group">
              <a>操作一</a>
              <a>操作二</a>
              <a>操作三</a>
              <a>操作四</a>
              <a>操作五</a>
              <a>操作六</a>
              <a-button size="small" type="primary" ghost icon="plus">添加</a-button>
            </div> -->
          </a-card>
          <a-card
            title="XX 指数"
            style="margin-bottom: 24px"
            :loading="radarLoading"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <div style="min-height: 400px;">
              <!-- :scale="scale" :axis1Opts="axis1Opts" :axis2Opts="axis2Opts"  -->
              <radar :data="radarData"/>
            </div>
          </a-card>
          <a-card :loading="loading" title="团队" :bordered="false">
            <div class="members">
              <a-row>
                <a-col :span="12" v-for="(item, index) in teams" :key="index">
                  <a>
                    <a-avatar size="small" :src="item.avatar"/>
                    <span class="member">{{ item.name }}</span>
                  </a>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            title="溯源情况概况"
            style="margin-bottom: 24px"
            :loading="radarLoading"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <div class="middle-container">
              <div class="middle-box01">
                暗网域名总数
                <div><b style="color:rgb(26, 149, 105)">57,639 </b>(存活)/176085(新增)</div>
                <div style="text-align:center">
                  <table cellpadding="4">
                    <tr>
                      <th>站点名称 </th>
                      <th>存活数</th>
                      <th>总数</th>
                    </tr>
                    <tr>
                      <td>Tor</td>
                      <td>51,663</td>
                      <td>167,399</td>
                    </tr>
                    <tr>
                      <td>I2P</td>
                      <td>3,820</td>
                      <td>4,529</td>
                    </tr>
                    <tr>
                      <td>zero</td>
                      <td>2,156</td>
                      <td>4,156</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="middle-box02">
                收录暗网网页数
                <div><b style="color:rgb(26, 149, 105)">3,458,673</b></div>
                <div style="text-align:center">
                  <table cellpadding="4">
                    <tr>
                      <th>名称 </th>
                      <th>总数</th>
                    </tr>
                    <tr>
                      <td>提取邮件地址数</td>
                      <td>6,437,371</td>
                    </tr>
                    <tr>
                      <td>bitcoin_addresses</td>
                      <td>847,410</td>
                    </tr>
                    <tr>
                      <td>开放端口</td>
                      <td>61,211</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="middle-box03">
                暗网交易市场商品数
                <div><b style="color:rgb(26, 149, 105)">86,159</b></div><br><br>
                暗网覆盖交易市场数
                <div><b style="color:rgb(26, 149, 105)">954</b></div>
              </div>
              <div class="middle-box04">
                商品类别
                <div style="text-align:center">
                  <table cellpadding="4">
                    <tr>
                      <th>名称</th>
                      <th>数量</th>
                    </tr>
                    <tr>
                      <td>数据</td>
                      <td>38,741</td>
                    </tr>
                    <tr>
                      <td>教程</td>
                      <td>9,716</td>
                    </tr>
                    <tr>
                      <td>服务</td>
                      <td>6,549</td>
                    </tr>
                    <tr>
                      <td>cvv</td>
                      <td>5,372</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!-- <div style="min-height: 400px;"> -->
            <!-- :scale="scale" :axis1Opts="axis1Opts" :axis2Opts="axis2Opts"  -->
            <!-- <radar :data="radarData"/> -->
            <!-- </div> -->
          </a-card>
          <!-- <a-card
            class="project-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="进行中的项目"
            :body-style="{ padding: 0 }">
            <a slot="extra">全部项目</a>
            <div>
              <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">
                <a-card :bordered="false" :body-style="{ padding: 0 }">
                  <a-card-meta>
                    <div slot="title" class="card-title">
                      <a-avatar size="small" :src="item.cover"/>
                      <a>{{ item.title }}</a>
                    </div>
                    <div slot="description" class="card-description">
                      {{ item.description }}
                    </div>
                  </a-card-meta>
                  <div class="project-item">
                    <a href="/#/">科学搬砖组</a>
                    <span class="datetime">9小时前</span>
                  </div>
                </a-card>
              </a-card-grid>
            </div>
          </a-card> -->

          <a-card :loading="loading" title="最近三个月数量变化" :bordered="false">
            <ve-line
              :data="chartData"
            >
            </ve-line>
            <!-- <a-list>
              <a-list-item :key="index" v-for="(item, index) in activities">
                <a-list-item-meta>
                  <a-avatar slot="avatar" :src="item.user.avatar"/>
                  <div slot="title">
                    <span>{{ item.user.nickname }}</span>&nbsp;
                    在&nbsp;<a href="#">{{ item.project.name }}</a>&nbsp;
                    <span>{{ item.project.action }}</span>&nbsp;
                    <a href="#">{{ item.project.event }}</a>
                  </div>
                  <div slot="description">{{ item.time }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list> -->
          </a-card>
        </a-col>
      </a-row>
    </div>
  </page-header-wrapper>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapState } from 'vuex'
import { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import { Radar, ChartCard } from '@/components'

import { getRoleList, getServiceList } from '@/api/manage'

const DataSet = require('@antv/data-set')

export default {
  name: 'Workplace',
  components: {
    PageHeaderWrapper,
    Radar,
    ChartCard
  },
  data () {
    this.chartExtend = {
      legend: { show: false }, // 隐藏legend
      series: { center: ['50%', '50%'] }
    }
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {},

      projects: [],
      loading: true,
      radarLoading: true,
      activities: [],
      teams: [],
      chartData: {
        columns: ['类别', '站点比例'],
        rows: [
          { '类别': '技术', '站点比例': 50 },
          { '类别': '政治宗教', '站点比例': 10 },
          { '类别': '通讯', '站点比例': 9 },
          { '类别': '商业', '站点比例': 15 },
          { '类别': '社交', '站点比例': 5 },
          { '类别': '核心网站', '站点比例': 20 },
          { '类别': '赌博', '站点比例': 6 },
          { '类别': '托管', '站点比例': 7 },
          { '类别': '个人', '站点比例': 4 },
          { '类别': '成人', '站点比例': 3 },
          { '类别': '其他语言', '站点比例': 8 },
          { '类别': '其他', '站点比例': 6 }
        ]
      },
      chartSettings: {
        radius: ['60px', '80px'],
        label: {
          formatter: params => {
            if (params.dataIndex === 0) {
              return `{a| 通过率${params.percent}%}`
            } else {
              return `{b| 未过率${params.percent}%}`
            }
          },
          rich: {
            a: {
              color: '#438de7'
            },
            b: {
              color: '#7b7d86'
            }

          }
        },
      itemStyle: {
          color: seriesIndex => {
            if (seriesIndex.dataIndex === 0) {
              return {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#4a8eea' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#75b9f9' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#77c5f7' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#78d0f5' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            } else {
              return '#dbdbe3'
            }
          }
        }
      },
      // data
      axis1Opts: {
        dataKey: 'item',
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      },
      axis2Opts: {
        dataKey: 'score',
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          }
        }
      },
      scale: [{
        dataKey: 'score',
        min: 0,
        max: 80
      }],
      axisData: [
        { item: '引用', a: 70, b: 30, c: 40 },
        { item: '口碑', a: 60, b: 70, c: 40 },
        { item: '产量', a: 50, b: 60, c: 40 },
        { item: '贡献', a: 40, b: 50, c: 40 },
        { item: '热度', a: 60, b: 70, c: 40 },
        { item: '引用', a: 70, b: 50, c: 40 }
      ],
      radarData: []
    }
  },
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
      welcome: (state) => state.user.welcome
    }),
    currentUser () {
      return {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
      }
    },
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar

    getRoleList().then(res => {
      // console.log('workplace -> call getRoleList()', res)
    })

    getServiceList().then(res => {
      // console.log('workplace -> call getServiceList()', res)
    })
  },
  mounted () {
    this.getProjects()
    this.getActivity()
    this.getTeams()
    this.initRadar()
  },
  methods: {
    getProjects () {
      this.$http.get('/list/search/projects')
        .then(res => {
          this.projects = res.result && res.result.data
          this.loading = false
        })
    },
    getActivity () {
      this.$http.get('/workplace/activity')
        .then(res => {
          this.activities = res.result
        })
    },
    getTeams () {
      this.$http.get('/workplace/teams')
        .then(res => {
          this.teams = res.result
        })
    },
    initRadar () {
      this.radarLoading = true

      this.$http.get('/workplace/radar')
        .then(res => {
          const dv = new DataSet.View().source(res.result)
          dv.transform({
            type: 'fold',
            fields: ['个人', '团队', '部门'],
            key: 'user',
            value: 'score'
          })

          this.radarData = dv.rows
          this.radarLoading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./Workplace.less";

  .project-list {

    .card-title {
      font-size: 0;

      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }

    .card-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }

    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;

      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;

        &:hover {
          color: #1890ff;
        }
      }

      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }

    .ant-card-meta-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }

  .item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;

    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;

      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }

      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }

  .mobile {

    .project-list {

      .project-card-grid {
        width: 100%;
      }
    }

    .more-info {
      border: 0;
      padding-top: 16px;
      margin: 16px 0 16px;
    }

    .headerContent .title .welcome-text {
      display: none;
    }
  }

</style>

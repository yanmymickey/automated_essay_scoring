<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
        <div class="avatar">
          <a-avatar size="large" :src="currentUser.avatar"/>
        </div>
        <div class="content">
          <div class="content-title">
            <span class="welcome-text">Have a nice day.</span>
          </div>
          <div>大学生 | 学习专题：六级 雅思 </div>
        </div>
      </div>
    </template>
    <template v-slot:extraContent>
      <div class="extra-content">
        <div class="stat-item">
          <a-statistic title="积分" :value="56" />
        </div>
        <div class="stat-item">
          <a-statistic title="积分排名" :value="8" suffix="/ 24" />
        </div>
        <div class="stat-item">
          <a-statistic title="词汇量" :value="6223" />
        </div>
      </div>
    </template>

    <div :gutter="24">
      <a-row>
        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            class="project-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="今日长难句"
            :body-style="{ padding: 0 }">
            <a slot="extra">19 Apr</a>
            <a-list>
              <a-list-item >
                <a-list-item-meta>
                  <div slot="title" style="margin-left:2%;font-size:15px;">
                    <div style="border-bottom: 1px solid #e8e8e8;padding-bottom:10px">
                      One suggestion has been the use of mixtures of two different types of insecticide, with the idea that one of them should eliminate the individuals resistant to the other. <br>
                    </div>
                    <div style="border-bottom: 1px solid #e8e8e8;padding-bottom:10px;padding-top:10px;margin-bottom:10px">
                      <b>释义：</b>有一种设想是使用两种不同类型的混合杀虫剂，其想法是如果害虫对其中之一有抗药性，那么另一种就能杀死它。
                    </div>
                    <b>句子解析：</b>介词短语with the idea……the other作two types of insecticide的定语，对它作补充说明。that引导的从句作idea的同位语。resistant to the other是形容词短语作individuals定语。
                  </div>
                  <!-- <div slot="description">{{ item.time }}</div> -->
                </a-list-item-meta>
              </a-list-item>
            </a-list>
            <!-- <div>
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
            </div> -->
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row :gutter="24">
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            class="project-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="考试范文模板库"
            :body-style="{ padding: 0 }">
            <a slot="extra">全部考试范文模板库</a>
            <div>
              <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">
                <a-card :bordered="false" :body-style="{ padding: 0 }">
                  <a-card-meta>
                    <div slot="title" class="card-title">
                      <a-avatar size="small" :src="item.cover"/>
                      <a>{{ item.title }}</a>
                    </div>
                    <!-- <div slot="description" class="card-description">
                      {{ item.description }}
                    </div> -->
                  </a-card-meta>
                  <!-- <div class="project-item">
                    <a href="/#/">科学搬砖组</a>
                    <span class="datetime">9小时前</span>
                  </div> -->
                </a-card>
              </a-card-grid>
            </div>
          </a-card>

          <a-card :loading="loading" title="外刊精读推荐" :bordered="false">
            <a-list>
              <a-list-item :key="index" v-for="(item, index) in activities">
                <a-list-item-meta>
                  <a-avatar slot="avatar" :src="item.user.avatar"/>
                  <div slot="title">
                    <!-- 楼市调控：尊重市场供需规律 | 经济学人 -->
                    <!-- <span>{{ item.user.nickname }}</span>&nbsp;
                    在&nbsp; -->
                    <a href="#" style="color:black">{{ item.project.name }}</a>&nbsp;
                    <!-- <span>{{ item.project.action }}</span>&nbsp;
                    <a href="#">{{ item.project.event }}</a> -->
                  </div>
                  <div slot="description">{{ item.time }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-card>
        </a-col>
        <a-col
          style="padding: 0 12px"
          :xl="8"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24">
          <a-card title="常见英语作文类型" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <a>图表分析</a>
              <a>对比论述</a>
              <a>问题解决</a>
              <a>书信</a>
              <a>话题议论文</a>
              <a>开放作文</a>
              <!-- <a-button size="small" type="primary" ghost icon="plus">添加</a-button> -->
            </div>
          </a-card>
          <a-card
            title="个人能力多维度指数"
            style="margin-bottom: 24px"
            :loading="radarLoading"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <div style="min-height: 400px;">
              <radar :data="radarData"/>
            </div>
          </a-card>
          <!-- <a-card :loading="loading" title="团队" :bordered="false">
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
          </a-card> -->
        </a-col>
      </a-row>
    </div>
  </page-header-wrapper>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapState } from 'vuex'
import { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import { Radar } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
const DataSet = require('@antv/data-set')
export default {
  name: 'Workplace',
  components: {
    PageHeaderWrapper,
    Radar
  },
  data () {
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {},
      projects: [],
      loading: true,
      radarLoading: true,
      activities: [],
      teams: [],
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
        { item: '词汇', a: 70 },
        { item: '语法', a: 60 },
        { item: '内容逻辑性', a: 50 },
        { item: '语句连贯性', a: 40 },
        { item: '高级句式引用', a: 70 }
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
            fields: ['个人能力维度指数'],
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
  /deep/ .ant-page-header-heading-title{
      display: none;
  }

</style>

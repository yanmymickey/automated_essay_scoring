<template>
  <page-header-wrapper
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="handleTabChange"
  >
    <!-- <template v-slot:content>
      <div class="ant-pro-page-header-search">
        <a-input-search size="large" style="width: 80%; max-width: 522px;">
          <template v-slot:enterButton>
            搜索
          </template>
        </a-input-search>
      </div>
    </template> -->
    <router-view />
  </page-header-wrapper>
</template>

<script>
const getActiveKey = (path) => {
  switch (path) {
    case '/list/search/article':
      return '1'
    case '/list/search/project':
      return '2'
    case '/list/search/application':
      return '3'
    case '/list/search/FTPfingerprint':
      return '4'
    case '/list/search/FTPnavigation':
      return '5'
    case '/list/search/SMTPfingerprint':
      return '6'
    case '/list/search/SMTPnavigation':
      return '7'
    default:
      return '1'
  }
}
export default {
  name: 'SearchLayout',
  data () {
    return {
      tabList: [
        { key: '1', tab: 'SSH库' },
        { key: '2', tab: '钱包地址' },
        { key: '3', tab: '交易身份ID' },
        { key: '4', tab: 'FTP指纹' },
        { key: '5', tab: 'FTP导航信息' },
        { key: '6', tab: 'SMTP指纹' },
        { key: '7', tab: 'SMTP导航信息' }
      ],
      tabActiveKey: '1',
      search: true
    }
  },
  created () {
    this.tabActiveKey = getActiveKey(this.$route.path)

    this.$watch('$route', (val) => {
      this.tabActiveKey = getActiveKey(val.path)
    })
  },
  methods: {
    handleTabChange (key) {
      this.tabActiveKey = key
      switch (key) {
        case '1':
          this.$router.push('/list/search/article')
          break
        case '2':
          this.$router.push('/list/search/project')
          break
        case '3':
          this.$router.push('/list/search/application')
          break
        case '4':
          this.$router.push('/list/search/FTPfingerprint')
          break
        case '5':
          this.$router.push('/list/search/FTPnavigation')
          break
        case '6':
          this.$router.push('/list/search/SMTPfingerprint')
          break
        case '7':
          this.$router.push('/list/search/SMTPnavigation')
          break
        default:
          this.$router.push('/workplace')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-page-header-search {
  text-align: center;
  margin-bottom: 16px;
}
</style>

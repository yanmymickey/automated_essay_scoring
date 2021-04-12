<template>
  <div>
    <a-card :bordered="false" class="ant-pro-components-tag-select">
      <div class="ant-pro-page-header-search">
        <a-input-search size="large" style="width: 80%; max-width: 522px;">
          <template v-slot:enterButton>
            搜索
          </template>
        </a-input-search>
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 240 }"
      />
    </a-card>
  </div>
</template>

<script>
const columns = [
  {
    title: '#',
    dataIndex: 'key',
    width: 50
  },
  {
    title: 'FTPfingerprint',
    dataIndex: 'FTPfingerprint',
    width: 350
  },
  {
    title: '关联域名',
    dataIndex: 'name',
    width: 200
  },
  {
    title: '收录时间',
    dataIndex: 'time'
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    FTPfingerprint: `1b:42:1c:97:f8:cb:0c:6e:b5:b6:32:6c:34:b5:eb:0c`,
    name: 'shield3inlgzw2h3',
    time: `2020-04-05 01:01:${i}`
  })
}
export default {
  components: {},
  data () {
    return {
      data,
      columns
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.ant-pro-page-header-search {
  text-align: left;
  margin-bottom: 16px;
}

</style>

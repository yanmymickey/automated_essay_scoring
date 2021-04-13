<template>
  <page-header-wrapper
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="handleTabChange"
  >
    <template >
      <div class="ant-pro-page-header-search">
        <a-input-search size="large" style="width: 80%; max-width: 522px;">
          <template v-slot:enterButton>
            搜索
          </template>
        </a-input-search>
      </div>
    </template>
    <div>
      <a-card style="margin-top: 24px;" :bordered="false">
        <a-list
          size="large"
          rowKey="id"
          itemLayout="vertical"
          :dataSource="data"
        >
          <a-list-item :key="item.word" slot="renderItem" slot-scope="item">
            <h1>{{ item.word }}</h1>
            <span>{{ item.content }}</span>
          </a-list-item>
        </a-list>
      </a-card>
    </div>
  </page-header-wrapper>
</template>

<script>
export default {
  data () {
    return {
      tabList: [
        { key: '1', tab: '单词查找' },
        { key: '2', tab: '拼写纠正' }
      ],
      data: [
          { word: 'he', content: 'pron. 他；（泛指的）人；上帝' },
          { word: 'hell', content: 'n. 地狱；究竟（作加强语气词）；训斥；黑暗势力' },
          { word: 'help', content: 'vt. 帮助；促进；治疗；补救' },
          { word: 'hello', content: 'int. 喂；哈罗，你好，您好（表示问候， 惊奇或唤起注意时的用语' }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.ant-pro-page-header-search {
  text-align: center;
  margin-bottom: 16px;
}
</style>

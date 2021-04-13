<template>
  <div>
    <a-row :gutter="[16, 16]">
      <a-col :span="14">
        <a-input placeholder="请在此输入标题" allowClear @change="onChange" showCount id="write_header" />
        <a-textarea
          placeholder="请开始您的写作或粘贴待批改的文本"
          allowClear
          :rows="25"
          id="write_content"
          showCount
          :max-length="maxlength"
          @input="descInput"
          v-model="desc"
        />
        <a-row :gutter="[16, 16]">
          <a-col :span="1"></a-col>
          <a-col :span="5">
            <span>{{ remnant }}/{{ maxlength }}</span>
          </a-col>
          <a-col :span="2">
            <a-icon type="camera" :style="{ fontSize: '30px' }" />
          </a-col>
          <a-col :span="6" class="write_col">
            <span>写作类型: </span><span class="write_type"> {{ write_type }}</span>
            <a-dropdown>
              <a-icon type="up" />
              <a-menu slot="overlay" @click="onClick">
                <template v-for="(item, index) in write_type_list">
                  <a-menu-item :key="index"> {{ item }} </a-menu-item>
                </template>
              </a-menu>
            </a-dropdown>
          </a-col>
          <a-col :span="4">
            <a-button type="primary" size="large" @click="Mark" class="Mark">人工批改</a-button>
          </a-col>
          <a-col :span="4">
            <a-button type="primary" size="large" @click="Mark" class="AIMark">人工智能批改</a-button>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="10">
        <div v-if="isUpload">
          <p class="suggestion_header">修改建议</p>
          <a-descriptions layout="horizontal" bordered size="small" column="1" >
            <a-descriptions-item label="分数">
              {{ score }}
            </a-descriptions-item>
            <a-descriptions-item label="错误" :span="2">
              {{ wrong }}
            </a-descriptions-item>
            <a-descriptions-item label="评价" :span="3">
              {{ evaluate }}
            </a-descriptions-item>
          </a-descriptions>
          <a-collapse v-model="activeKey" class="suggestion">
            <a-collapse-panel v-for="item in suggestions" :key="item.world" :header="item.world">
              <p>{{ item.details }}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div id="layout-basic" v-else>
          <a-layout>
            <a-layout-header>Easy-Writing</a-layout-header>
            <a-layout-content class="tip1">人工智能识别多种错误类型</a-layout-content>
            <a-layout-content class="tip2">囊括拼写 | 语法 | 标点符号 | 语义 等</a-layout-content>
            <a-layout-content class="tip1">机器学习提供多种修改建议</a-layout-content>
            <a-layout-content class="tip2">包含词汇 | 对照翻译 | | 范文推荐阅读 | 权威例句推荐 等</a-layout-content>
          </a-layout>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'BaseForm',
  data () {
    return {
      evaluate: '文章字数疑似超过该考试字数要求;在高中级别下,有一定的词汇积累,能使用少量高级词汇,但还需要多积累,文章语句较为生硬,逻辑性有待加强,单词拼写基本正确,词汇基础扎实,存在较多语法错误',
      score: 80,
      wrong: 4,
      desc: null,
      maxlength: 10000,
      remnant: 0,
      write_type_list: ['通用', '小学', '初中', '高中', '四级', '六级', '考研', '雅思', '托福'],
      write_type: '通用',
      isUpload: false,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1'],
      suggestions: [
        { world: 'not', details: '词汇使用不当会对语义产生影响，建议将 not 修改为 no' },
        { world: 'for', details: '混淆介词，建议将 for 修改为 on' },
        { world: 'the', details: '限定词冗余可能影响语义或地道表达，建议删除 the' },
        { world: 'energizing', details: '非谓语动词不能单独做谓语，建议将 energizing 修改为 energize' }
      ]
    }
  },
  methods: {
    onChange (e) {
      console.log(e)
    },
    descInput () {
      this.remnant = this.desc.length
    },
    onClick ({ key }) {
      const i = key
      this.write_type = this.write_type_list[i]
    },
    Mark () {
      this.isUpload = true
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ #write_header {
  border: none;
  margin-bottom: 0px;
  border-radius: 0;
  box-shadow: 0;
  font-size: 40px;
  height: 60px;
}
/deep/ #write_content {
  resize: none;
  border: none;
  border-radius: 0;
}
/deep/ .ant-input:focus {
  box-shadow: none;
}
/deep/ span.ant-input-affix-wrapper.ant-input-affix-wrapper-textarea-with-clear-btn {
  border: none;
  border-radius: 0;
  box-shadow: 0;
}
/deep/ .ant-col-14 {
  border-style: solid;
  border-radius: 25px;
  background-color: #ffffff;
}
/deep/ .Mark {
  width: 100px;
  border-radius: 10px;
}
/deep/ .AIMark {
  width: 130px;
  border-radius: 10px;
}
.write_type {
  color: #f5222d;
  margin-left: 5px;
  margin-right: 5px;
}
.write_col {
  font-size: 18px;
}
#layout-basic {
  text-align: center;
}
#layout-basic .ant-layout-header,
#layout-basic .ant-layout-footer {
  margin-bottom: 30%;
  font-size: 40px;
  background: none;
}

#layout-basic .ant-layout-content {
  color: black;
}
#layout-basic /deep/ .tip1 {
  font-size: 20px;
  font-weight: 900;
  margin-top: 20px;
  margin-bottom: 20px;
}
#layout-basic /deep/ .tip2 {
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
}
/deep/ .suggestion {
  margin-top: 10px;
  height: 450px;
  border-radius: 25px;
  overflow-y: scroll;
}
.suggestion_header {
  margin-bottom: 10px;
  text-align: center;
  font-size: 40px;
}
/deep/ .ant-descriptions-view {
  border-radius: 10px;
}
</style>

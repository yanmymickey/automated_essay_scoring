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
          <a-col :span="12">
            <span>{{ remnant }}/{{ maxlength }}</span>
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
          <a-col :span="4"><a-button type="primary" size="large" @click="Mark">批改</a-button></a-col>
        </a-row>
      </a-col>
      <a-col :span="10">
        <div v-if="isUpload">
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
      desc: null,
      maxlength: 10000,
      remnant: 0,
      write_type_list: ['通用', '小学', '初中', '高中', '四级', '六级', '考研', '雅思', '托福'],
      write_type: '通用',
      isUpload: true,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1'],
      suggestions: [
          { world: 'not', details: '词汇使用不当会对语义产生影响，建议将 not 修改为 no' },
          { world: 'not', details: '词汇使用不当会对语义产生影响，建议将 not 修改为 no' },
          { world: 'not', details: '词汇使用不当会对语义产生影响，建议将 not 修改为 no' },
          { world: 'not', details: '词汇使用不当会对语义产生影响，建议将 not 修改为 no' }
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
/deep/ .ant-btn.ant-btn-primary.ant-btn-lg {
  width: 100px;
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
/deep/ .suggestion{
    height: 600px;
    margin-top: 25px;
    border-radius: 25px;
    overflow-y: scroll;
}
</style>

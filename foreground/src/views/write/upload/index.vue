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
          <a-col :span="4"><a-button type="primary" size="large" icon="">批改</a-button></a-col>
        </a-row>
      </a-col>
      <a-col :span="10"> <a-textarea placeholder="Basic usage" :rows="4" /> </a-col>
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
      write_type: '通用'
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
</style>

<template>
  <page-header-wrapper
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="(key) => {
      this.tabActiveKey = key
    }"
  >
    <a-list
      rowKey="id"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="dataSource"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template >
          <a-card :hoverable="true">
            <a-card-meta>
              <a slot="title">{{ item.title }}</a>
              <a-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large"/>
              <div class="meta-content" slot="description">{{ item.content }}</div>
            </a-card-meta>
            <template class="ant-card-actions" slot="actions">
              <a>read more></a>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </page-header-wrapper>
</template>

<script>

const dataSource = []
const content = [
    '长短句结合,在英语写作的过程中，考生切忌不能觉得自己英语水平高，就一直写长难句，这样往往起到适得其反的作用。写一个短小精辟的句子，相反，却可以起到画龙点睛的作用。而且如果我们把短句放在段首或者段末，也可以揭示主题：As a creature, I eat; as a man, I read.Although one action is to meet the primary need of my body and the other is tosatisfy the intellectual need of mind, they are in a way quite similar.因此，学会长短句结合，抑扬顿挫，文章结构才会更加完整。',
    '点明主题,一篇文章必须的有主题，否则会给人造成“群龙无首”之感，考生一定要写一个主题句，放在文章的开头或者结尾，让读者一目了然，这样文章才会得高分，隐藏主体句在简短的写作中要不得。To begin with, you must work hard at yourlessons and be fully prepared before the exam(主题句).Without sufficient preparation, you can hardly expect to answer all the questionscorrectly.',
    '分层次写作文的时候一定要条理清楚。阅卷老师看作文的时候文章，也必然要通过一些关键性的“标签”来判定你的文章是否结构清楚，条理自然。例如。1)first, second, third, last2)firstly, secondly, thirdly, finally3)the first, the second, the third, thelast4)in the first place, in the second place,in the third place, lastly5)to begin with, then, furthermore, finally6)to start with, next, in addition, finally7)first and foremost, besides, last but notleast8)most important of all, moreover, finally9)on the one hand, on the other hand10)for one thing, for another thing只有清晰的结构，文章说理有条理，才会获得阅卷老师的青睐。',
    '多用实词,在写作的时候，一定要注意多用实词，不要总是用虚词，写文章还是应该写一些实际的东这里所说的虚词就是指那些比较大的词。比如我们说一个很好的时候，不应该之说nice这样空洞的词，应该使用一些诸如generous, humorous,interesting, smart, gentle, warm-hearted, hospital 之类的形象词。再比如：走出房间，general的词是：walkout of the room但是小偷走出房间应该说：slip out of the room小姐走出房间应该说：sail out of the room小孩走出房间应该说：dance out of the room老人走出房间应该说：stagger out of the room所以多用实词，少用虚词，文章将会大放异彩!',
    '多使用连接词很多考生在考试的时候总是想写长句，但是又担心写错。这个时候就需要学会使用连接词1)可以在任何句子之间加and, 但最好是前后的句子又先后关系或者并列关系。比如说：I enjor music and he is fond of playingguitar.如果是二者并列的，我们可以用一个超级句式：Not only the fur coat is soft, but it isalso warm.其它的短语可以用：besides, furthermore, likewise, moreover',
    '转折，前后句子如果是呈相反的意思的时候，就需要在文章中使用转折类连接词。例如。The car was quite old, yet it was in excellent condition.The coat was thin, but it was warm.更多的短语：despite that, still, however, nevertheless,in spite of, despite, notwithstanding',
    '因果(so, so, so)The snow began to fall, so we went home.更多短语：then, therefore, consequently, accordingly,hence, as a result, for this reason, so that',
    '定语从句和同位语从句或者是插入语。The man whom you met yesterday is a friendof mine.I don’t enjoy that book you are reading.Mr liu, our oral English teacher, is easy-going.其实很简单，同位语--要解释的东西删除后不影响整个句子的构成;定语从句—借用之前的关键词并且用其重新组成一个句子插入其中，但是whom or that 关键词必须要紧跟在先行词之前。', ')排比文学作品中最吸引人的地方莫过于此，如果非要让你的文章更加精彩的话，希望考生引用一个个的排比句，一个个得对偶句，一个个的不定式，一个个地词，一个个的短语，如此表达将会使文章有排山倒海之势!Whether your tastes are modern ortraditional, sophisticated or simple, there is plenty in London for you.Nowadays, energy can be obtained throughvarious sources such as oil, coal, natural gas, solar heat, the wind and oceantides.We have got to study hard, to enlarge ourscope of knowledge, to realize our potentials and to pay for our life.英语写作需要考生在备考期间大量练习，只有多练习，在考试的时候才能保证有句子可写，不磕巴。写出优秀的文章。'
]
for (let i = 0; i < 8; i++) {
  dataSource.push({
    id: i,
    title: 'D15h35',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    content: content[i]
  })
}

export default {
  name: 'CardList',
  data () {
      this.tabList = [
      { key: 'tab1', tab: '语法强化' },
      { key: 'tab2', tab: '逻辑训练' },
      { key: 'tab3', tab: '经典词句' }
    ]
    return {
      tabActiveKey: 'tab1',
      extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      dataSource
    }
  },
  methods: {
    testFun () {
      this.$message.info('快速开始被点击！')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/components/index.less";

  .card-list {
    /deep/ .ant-card-body:hover {
      .ant-card-meta-title>a {
        color: @primary-color;
      }
    }

    /deep/ .ant-card-meta-title {
      margin-bottom: 12px;

      &>a {
        display: inline-block;
        max-width: 100%;
        color: rgba(0,0,0,.85);
      }
    }

    /deep/ .meta-content {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 64px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 1em;
    }
  }

  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }

  .ant-card-actions {
    background: #f7f9fa;

    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;

      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }

      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }

</style>

<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="unread" name="first">
      <el-input
        v-model="keyWords"
        :placeholder="toast"
        prefix-icon="el-icon-search"
        style="width:220px"
      />
      <el-button type="primary" round size="small">{{ $t('button.delete') }}</el-button>
      <Console :table-data="tableData" />
    </el-tab-pane>
    <el-tab-pane :label="haveRead" name="second">
      <el-input
        v-model="keyWords"
        :placeholder="toast"
        prefix-icon="el-icon-search"
        style="width:220px"
      />
      <el-button type="primary" round size="small">{{ $t('button.delete') }}</el-button>
      <Console :table-data="tableData" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Console from '@/components/Console/NoticeList'
export default {
  name: 'NoticeList',
  components: { Console },
  data() {
    return {
      activeName: 'first',
      keyWords: '',
      tableData: [{
        id: 1,
        date: '2016-05-03',
        name: '王小虎',
        content: this.$t('console.notice.content')
      },
      {
        id: 2,
        date: '2016-05-02',
        name: '王小虎',
        content: this.$t('console.notice.content')
      }, {
        id: 3,
        date: '2016-05-04',
        name: '王小虎',
        content: this.$t('console.notice.content')
      }, {
        id: 4,
        date: '2016-05-01',
        name: '王小虎',
        content: this.$t('console.notice.content')
      }, {
        id: 5,
        date: '2016-05-08',
        name: '王小虎',
        content: this.$t('console.notice.content')
      }, {
        id: 6,
        date: '2016-05-08',
        name: '王小虎',
        content: this.$t('console.notice.content')
      }]
    }
  },
  computed: {
    haveRead() {
      return this.$t('console.notice.haveRead')
    },
    unread() {
      return this.$t('console.notice.unread')
    },
    toast() {
      return this.$t('form.error.content')
    }
  },
  methods: {
    handleClick(tab, event) {}
  }
}
</script>

<style lang="scss" scoped>
.el-tabs {
  padding:  0 15px;
  .el-button {
    margin-left: 18px;
    background:#2F54EB;
    border: 1px solid #2F54EB;
    transition: all .3s;
    &:hover {
      background: #1d39c4;
      border: 1px solid #1d39c4;
    }
  }
}
</style>

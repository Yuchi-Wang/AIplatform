<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读" name="first">
      <el-input
        v-model="keyWords"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        style="width:220px"
      />
      <el-button type="primary" round size="small">删除</el-button>
      <Console :table-data="tableData" />
    </el-tab-pane>
    <el-tab-pane label="已读" name="second">
      <el-input
        v-model="keyWords"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        style="width:220px"
      />
      <el-button type="primary" round size="small">删除</el-button>
      <Console :table-data="tableData" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Console from '@/components/Console/NoticeList'
export default {
  name: 'NoticeList',
  components: { Console },
  data: () => ({
    activeName: 'first',
    keyWords: '',
    tableData: [{
      id: 1,
      date: '2016-05-03',
      name: '王小虎',
      content: '您的申请已通过'
    },
    {
      id: 2,
      date: '2016-05-02',
      name: '王小虎',
      content: '您的申请已通过'
    }, {
      id: 3,
      date: '2016-05-04',
      name: '王小虎',
      content: '您的申请已通过'
    }, {
      id: 4,
      date: '2016-05-01',
      name: '王小虎',
      content: '您的申请已通过'
    }, {
      id: 5,
      date: '2016-05-08',
      name: '王小虎',
      content: '您的申请已通过'
    }, {
      id: 6,
      date: '2016-05-08',
      name: '王小虎',
      content: '您的申请已通过'
    }]
  }),
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

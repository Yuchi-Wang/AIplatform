<template>
  <div class="notice-list">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      stripe
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />
      <el-table-column prop="content" label="内容" min-width="750" />
      <el-table-column label="日期" min-width="200">
        <template v-slot="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="操作" min-width="200">
        <template slot-scope="scope">
          <el-link :underline="false" style="margin-right:10px" type="primary" @click="checkNotice(scope.row)">查看</el-link>
          <el-link :underline="false" type="primary" @click="deleteNotice(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page.sync="pagination.currentPage"
      :page-size.sync="pagination.size"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      multipleSelection: [],
      pagination: {
        currentPage: 1,
        size: 10,
        total: 6
      }
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleSizeChange() {
      this.pagination.currentPage = 1
    },
    handleCurrentChange() {},
    deleteNotice(row) {},
    checkNotice(row) {
      this.$router.push({
        name: 'noticeDetail',
        query: { id: row.id }
      })
    }
  }
}
</script>
<style lang="scss">
.notice-list {
  /deep/ .el-pagination {
    margin: 20px 0!important;
    text-align: center;
  }
}
</style>

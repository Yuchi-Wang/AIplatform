<template>
  <div class="clab-console">
    <el-button type="primary" size="small">新建API Key</el-button>
    <div class="api-key">
      <h4>API Key</h4>
      <el-table :data="apiData" stripe border style="width: 100%" class="table-class">
        <el-table-column
          prop="name"
          label="api接口应用名称"
        />
        <el-table-column
          prop="keyName"
          label="API key"
        />
        <el-table-column
          prop="APISercret"
          label="API sercret"
        />
        <el-table-column label="状态">
          <template slot-scope="scope">
            {{ scope.row.status ? '启用': '禁用' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-link :underline="false" type="primary" @click="operation(scope.row)">查看</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="api-times">
      <h4>API 使用次数统计</h4>
      <el-table :data="apiTimes" stripe border style="width: 100%" class="table-class">
        <el-table-column prop="api" label="api" />
        <el-table-column prop="type" label="次数套餐类型" />
        <el-table-column prop="remainingDays" label="剩余天数" />
        <el-table-column prop="remainingTimes" label="剩余次数" />
      </el-table>
    </div>
    <div class="api-situation">
      <h4>使用情况汇总</h4>
      <el-select v-model="timeValue" placeholder="请选择">
        <el-option
          v-for="item in timeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="situation-range">最近使用时间范围</span>
      <el-table :data="situationData" stripe border style="width: 100%" class="table-class">
        <el-table-column prop="api" label="api" />
        <el-table-column prop="type" label="次数套餐类型" />
        <el-table-column prop="remainingDays" label="剩余天数" />
        <el-table-column prop="remainingTimes" label="剩余次数" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: [
        {
          name: '人脸识别接口',
          keyName: 'dj85_C93TOz7CYQSaArz…',
          APISercret: 'bwhj1m5-rYtoi8r-…',
          status: true
        },
        {
          name: '人脸识别接口',
          keyName: 'dj85_C93TOz7CYQSaArz…',
          APISercret: 'bwhj1m5-rYtoi8r-…',
          status: true
        }
      ],
      apiTimes: [
        {
          api: '人脸识别接口',
          type: '类型1',
          remainingDays: '5',
          remainingTimes: '5'
        }
      ],
      situationData: [],
      timeValue: '1',
      timeOptions: [
        {
          value: '1',
          label: '1小时'
        },
        {
          value: '2',
          label: '2小时'
        },
        {
          value: '3',
          label: '3小时'
        }
      ]
    }
  },
  methods: {
    operation(row) {}
  }
}
</script>

<style lang="scss" scoped>
.clab-console {
  padding: 19px;
  > .el-button {
    margin-bottom: 18px;
  }
  h4 {
    height: 18px;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    line-height: 18px;
    margin-bottom: 10px;
  }
  >div{
    margin-bottom: 32px;
  }
  .el-table {
    /deep/ thead th {
      padding: 0;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    /deep/ tbody td {
      padding: 0;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
     /deep/ .el-table__empty-block {
      height: 40px!important;
      min-height: 40px!important;
    }
    /deep/ .el-table__empty-text {
      height: 40px;
      line-height: 40px;
    }
  }
  .api-situation {
    .el-select {
      width: 150px;
      margin-bottom: 10px;
    }
    .situation-range {
      display: inline-block;
      margin-left: 7px;
      height: 15px;
      font-size: 11px;
      font-weight: 400;
      color: #000000;
      line-height: 15px;
    }
  }
}
</style>

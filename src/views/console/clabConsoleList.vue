<template>
  <div class="clab-console">
    <el-button type="primary" size="small" @click="createApiKey">{{ $t('console.app.apiKey') }}</el-button>
    <div class="api-key">
      <h4>API Key</h4>
      <el-table :data="apiData" stripe border style="width: 100%" class="table-class">
        <el-table-column
          prop="name"
          :label="applicationName"
        />
        <el-table-column
          prop="keyName"
          label="API key"
        />
        <el-table-column
          prop="APISercret"
          label="API sercret"
        />
        <el-table-column :label="status">
          <template slot-scope="scope">
            {{ scope.row.status ? enable: '禁用' }}
          </template>
        </el-table-column>
        <el-table-column :label="operating">
          <template slot-scope="scope">
            <el-link :underline="false" type="primary" @click="operation(scope.row)">{{ $t('console.app.view') }}</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="api-times">
      <h4>{{ $t('console.app.statistics') }}</h4>
      <el-table :data="apiTimes" stripe border style="width: 100%" class="table-class">
        <el-table-column prop="api" label="api" />
        <el-table-column prop="type" :label="packageType" />
        <el-table-column prop="remainingDays" :label="remainingDays" />
        <el-table-column prop="remainingTimes" :label="remainingTimes" />
      </el-table>
    </div>
    <div class="api-situation">
      <h4>{{ $t('console.app.usageSummary') }}</h4>
      <el-select v-model="timeValue" :placeholder="select">
        <el-option
          v-for="item in timeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="situation-range">{{ $t('console.app.timeLimit') }}</span>
      <el-table :data="situationData" stripe border style="width: 100%" class="table-class">
        <el-table-column prop="api" label="api" />
        <el-table-column prop="type" :label="packageType" />
        <el-table-column prop="remainingDays" :label="remainingDays" />
        <el-table-column prop="remainingTimes" :label="remainingTimes" />
      </el-table>
    </div>
    <!-- api弹窗 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="apiDialog"
      center
      class="api-dialog"
      width="450px"
    >
      <el-form :model="apiForm" label-width="120px">
        <el-form-item :label="appName">
          <el-select v-if="editDialog" v-model="apiForm.name" :placeholder="select">
            <el-option
              v-for="item in apiNameOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input
            v-else
            v-model="apiForm.name"
            :disabled="true"
          />
        </el-form-item>
        <el-form-item :label="appClass">
          <el-select v-if="editDialog" v-model="apiForm.className" :placeholder="select">
            <el-option
              v-for="item in apiClass"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input
            v-else
            v-model="apiForm.className"
            :disabled="true"
          />
        </el-form-item>
        <el-form-item :label="appPlatform">
          <el-select v-if="editDialog" v-model="apiForm.platform" :placeholder="select">
            <el-option
              v-for="item in apiPlatform"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input
            v-else
            v-model="apiForm.platform"
            :disabled="true"
          />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button
          v-if="editDialog"
          class="create-button"
          type="primary"
          @click="apiDialog = false"
        >{{ $t('button.create') }}
        </el-button>
        <el-button
          v-if="!editDialog"
          class="edit-button"
          @click="editApiKey"
        >{{ $t('button.edit') }}
        </el-button>
        <el-button
          v-if="!editDialog"
          type="danger"
          class="delete-button"
          @click="apiDialog = false"
        >{{ $t('button.delete') }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: [
        {
          id: 1,
          name: this.$t('console.app.apiKeyName'),
          keyName: 'dj85_C93TOz7CYQSaArz…',
          APISercret: 'bwhj1m5-rYtoi8r-…',
          status: true
        },
        {
          id: 2,
          name: this.$t('console.app.apiKeyName'),
          keyName: 'dj85_C93TOz7CYQSaArz…',
          APISercret: 'bwhj1m5-rYtoi8r-…',
          status: true
        }
      ],
      apiTimes: [
        {
          api: this.$t('console.app.apiKeyName'),
          type: this.$t('console.app.class'),
          remainingDays: '5',
          remainingTimes: '5'
        }
      ],
      situationData: [],
      timeValue: '1',
      timeOptions: [
        {
          value: '1',
          label: this.$t('console.app.oneHour')
        },
        {
          value: '2',
          label: this.$t('console.app.twoHours')
        },
        {
          value: '3',
          label: this.$t('console.app.threeHour')
        }
      ],
      detailId: 0,
      apiNameOption: [
        {
          value: '1',
          label: this.$t('console.app.name')
        }, {
          value: '2',
          label: this.$t('console.app.name')
        }
      ],
      apiClass: [
        {
          value: '1',
          label: this.$t('console.app.class')
        }, {
          value: '2',
          label: this.$t('console.app.class')
        }
      ],
      apiPlatform: [
        {
          value: '1',
          label: this.$t('console.app.platform')
        }, {
          value: '2',
          label: this.$t('console.app.platform')
        }
      ],
      apiForm: {
        name: '',
        className: '',
        platform: ''

      },
      apiDialog: false,
      dialogTitle: '',
      editDialog: true
    }
  },
  computed: {
    applicationName() {
      return this.$t('console.app.applicationName')
    },
    status() {
      return this.$t('console.app.status')
    },
    enable() {
      return this.$t('console.app.enable')
    },
    operating() {
      return this.$t('console.app.operating')
    },
    remainingDays() {
      return this.$t('console.app.remainingDays')
    },
    remainingTimes() {
      return this.$t('console.app.remainingTimes')
    },
    packageType() {
      return this.$t('console.app.packageType')
    },
    appName() {
      return this.$t('console.app.appName')
    },
    appClass() {
      return this.$t('console.app.appClass')
    },
    appPlatform() {
      return this.$t('console.app.appPlatform')
    },
    select() {
      return this.$t('select.name')
    }
  },
  methods: {
    operation(row) {
      this.id = row.id
      this.apiDialog = true
      this.editDialog = false
      this.dialogTitle = this.$t('button.view') + ' ' + 'API Key'
    },
    createApiKey() {
      this.apiDialog = true
      this.editDialog = true
      this.dialogTitle = this.$t('button.create') + ' ' + 'API Key'
    },
    editApiKey() {
      this.apiDialog = true
      this.editDialog = true
      this.dialogTitle = this.$t('button.edit') + ' ' + 'API Key'
    }
  }
}
</script>

<style lang="scss" scoped>
.clab-console {
  padding: 19px;
  > .el-button {
    margin-bottom: 18px;
    background:#2F54EB;
    border: 1px solid #2F54EB;
    transition: all .3s;
    &:hover {
      background: #1d39c4;
      border: 1px solid #1d39c4;
    }
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
  .api-dialog {
    .el-select,.el-input {
      width: 235px;
    }
    /deep/.el-dialog__body {
      padding-bottom: 0;
    }
    /deep/.el-dialog__footer {
      padding-top: 0;
      .el-button {
        width: 235px;
        margin-left: 60px;
      }
      .create-button {
        background: #2F54EB;
        border: 1px solid #2F54EB;
        &:hover {
          background: #1d39c4;
          border: 1px solid #1d39c4;
        }
      }
      .edit-button {
        color: #2F54EB;
        border: 1px solid #2F54EB;
      }
      .delete-button {
        margin-top: 18px;
      }
    }
  }
}
</style>

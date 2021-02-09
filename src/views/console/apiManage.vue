<template>
  <div class="sdk-diction">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="API" name="first">
        <el-row :gutter="20">
          <el-col v-for="item in sdkList" :key="item.id" :span="6">
            <div>
              <p>{{ item.text }}</p>
              <h5>{{ $t('console.api.doc') }}</h5>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'SdkDiction',
  data() {
    return {
      activeName: 'first',
      sdkList: [
        {
          id: 1,
          text: this.$t('console.api.content')
        },
        {
          id: 2,
          text: this.$t('console.api.content')
        },
        {
          id: 3,
          text: this.$t('console.api.content')
        },
        {
          id: 4,
          text: this.$t('console.api.content')
        },
        {
          id: 5,
          text: this.$t('console.api.content')
        },
        {
          id: 6,
          text: this.$t('console.api.content')
        },
        {
          id: 7,
          text: this.$t('console.api.content')
        },
        {
          id: 8,
          text: this.$t('console.api.content')
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
  .el-col {
    div {
      border-radius: 4px;
      border: 1px solid #E4E4E4;
      padding: 19px;
      margin-bottom: 15px;
      p {
      font-size: 12px;
      font-weight: 400;
      color: #7A7A7A;
      line-height: 15px;
      margin-bottom: 33px;
      }
      h5 {
        height: 15px;
        font-size: 11px;
        color: #2F54EB;
        line-height: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>


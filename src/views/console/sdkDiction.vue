<template>
  <div class="sdk-diction">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="API" name="first">
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="item in sdkList" :key="item.id" :label="item.id">
            <span>{{ item.title }}</span>
            <p>{{ item.text }}</p>
          </el-checkbox>
        </el-checkbox-group>
        <el-button type="primary">下载</el-button>
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
      checkList: [],
      sdkList: [
        {
          id: 1,
          title: '模糊匹配',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 2,
          title: '模糊匹配1',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 3,
          title: '模糊匹配2',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 4,
          title: '模糊匹配3',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 5,
          title: '模糊匹配4',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 6,
          title: '模糊匹配5',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 7,
          title: '模糊匹配6',
          text: '人脸81关键点，人脸106关键点'
        },
        {
          id: 8,
          title: '模糊匹配7',
          text: '人脸81关键点，人脸106关键点'
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
.sdk-diction {
  width: 100%;
  .el-tabs {
   .el-checkbox-group {
     .el-checkbox {
       width: 20%;
       padding-bottom: 25px;
       margin: 0 0 20px 0;
       span {
          color: #344DFF;
       }
       p {
         position: absolute;
         margin-top: 10px;
         color: #999!important;
         line-height: 15px;
       }
     }
   }
   .el-button {
      margin-top: 50px;
      background:#2F54EB;
      border: 1px solid #2F54EB;
      transition: all .3s;
      &:hover {
        background: #1d39c4;
        border: 1px solid #1d39c4;
      }
   }
  }
}
</style>


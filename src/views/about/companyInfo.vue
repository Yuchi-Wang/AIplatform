<template>
  <div class="company-info">
    <div class="banner">
      <div>
        <h3>{{ $t('about.companyProfile') }}</h3>
        <button @click="coperation">{{ $t('product.CooperationService') }}</button>
      </div>
    </div>
    <div class="main">
      <div class="app-scene">
        <h3>{{ $t('about.landingAbility') }}</h3>
        <div class="ability1">
          <p class="app-scene-dec">{{ $t('about.cooperativeDevelopment') }}</p>
        </div>
        <div class="ability2">
          <p class="app-scene-dec">{{ $t('about.aiTeam') }}</p>
        </div>
        <div class="ability3">
          <p class="app-scene-dec">{{ $t('about.financialProduct') }}</p>
        </div>
      </div>
    </div>
    <div class="dev">
      <h3>{{ $t('about.companyProfile') }}</h3>
      <div class="history">
        <div>
          <h4>{{ $t('about.developmentHistory') }}</h4>
          <div class="next" @click="nextYears">{{ nextYear }}</div>
          <div class="prev" @click="prevYears">{{ prevYear }}</div>
          <div class="history-item">
            <el-timeline :reverse="reverse" size="large">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
  data: () => ({
    reverse: true,
    activities: [],
    nextYear: '2021',
    prevYear: '2019'
  }),
  mounted() {
    this.activities = [
      {
        content: '2019'
      },
      {
        content: this.$t('about.historyContent')
      },
      {
        content: this.$t('about.historyContent')
      },
      {
        content: this.$t('about.historyContent')
      },
      {
        content: '2020'
      }
    ]
  },
  methods: {
    coperation() {
      this.$router.push('/about/businessCoperation')
    },
    prevYears() {
      if (this.prevYear === '2017') {
        this.nextYear = '2019'
        this.prevYear = '2017'
      } else {
        this.prevYear = Number(this.prevYear) - 1 + ''
        this.nextYear = Number(this.nextYear) - 1 + ''
      }
      this.activities = [
        {
          content: this.prevYear
        },
        {
          content: `${this.nextYear - 1} ${this.$t('about.historyContent')}`
        },
        {
          content: `${this.nextYear - 1} ${this.$t('about.historyContent')}`
        },
        {
          content: `${this.nextYear - 1} ${this.$t('about.historyContent')}`
        },
        {
          content: Number(this.nextYear) - 1 + ''
        }
      ]
    },
    nextYears() {
      if (this.nextYear === '2022') {
        this.nextYear = '2022'
        this.prevYear = '2021'
      } else {
        this.nextYear = Number(this.nextYear) + 1 + ''
        this.prevYear = Number(this.prevYear) + 1 + ''
      }
      this.activities = [
        {
          content: this.prevYear
        },
        {
          content: `${this.nextYear - 1} ${this.$t('about.historyContent')}`
        },
        {
          content: `${this.nextYear - 1} ${this.$t('about.historyContent')}`
        },
        {
          content: `${this.nextYear - 1} ${this.$t('about.historyContent')}`
        },
        {
          content: Number(this.nextYear) - 1 + ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.company-info {
  .banner {
    width: 100%;
    height: 445px;
    background: url('../../assets/img/about/companyInfo/banner.jpg') no-repeat;
    background-size: cover;
    > div {
      width: 1200px;
      margin: auto;
      padding-top: 130px;
      h3 {
        height: 42px;
        font-size: 30px;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 42px;
        margin-bottom: 83px;
        text-align: center;
      }
      button {
        display: block;
        margin: 36px auto 0;
        width: 240px;
        height: 44px;
        line-height: 44px;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid #FFFFFF;
        cursor: pointer;
        font-size: 16px;
        color: #FFFFFF;
        text-shadow: 0px 0px 14px #0F244F;
        &:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
  .main {
    width: 1200px;
    margin: auto;
    padding-top: 33px;
    > div {
        > h3 {
          position: relative;
          font-size: 28px;
          font-weight: 600;
          color: #303030;
          line-height: 30px;
          text-align: center;
          margin-bottom: 50px;
          &::before {
            content: '';
            position: absolute;
            width: 39px;
            height: 5px;
            background: #2F54EB;
            left: 50%;
            transform: translateX(-50%);
            bottom: -20px;
            border-radius: 4px;
        }
      }
    }
    .app-scene {
      padding-top: 25px;
      margin-bottom: 50px;
      > div {
       display: inline-block;
       position: relative;
       width: 32.222%;
       height: 300px;
       vertical-align: text-top;
       transition: all 0.3s ease-in-out;
       &:hover {
           background-size: 130%;
       }
       &:nth-of-type(1),&:nth-of-type(2) {
           margin-right: 20px;
       }
        .app-scene-dec {
          position: absolute;
          top: 50%;
          left: 50%;
          text-align: center;
          transform: translate(-50%,-50%);
          height: 21px;
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 21px;
        }
      }
      .ability1 {
        background: url('../../assets/img/about/companyInfo/ability1.jpg');
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: 50% 50%;
      }
      .ability2 {
        background: url('../../assets/img/about/companyInfo/ability2.jpg');
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: 50% 50%;
      }
      .ability3 {
        background: url('../../assets/img/about/companyInfo/ability3.jpg');
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: 50% 50%;
      }
    }
  }
  .dev {
    > h3 {
      position: relative;
      font-size: 28px;
      font-weight: 600;
      color: #303030;
      line-height: 30px;
      text-align: center;
      margin-bottom: 50px;
      &::before {
        content: '';
        position: absolute;
        width: 39px;
        height: 5px;
        background: #2F54EB;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        border-radius: 4px;
      }
    }
    .history {
      width: 100%;
      height: 472px;
      background:url('../../assets/img/about/companyInfo/history.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      > div {
        position: relative;
        width: 1000px;
        height: 472px;
        margin: auto;
          h4 {
          position: absolute;
          top: 165px;
          left: 110px;
          height: 43px;
          font-size: 31px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 43px;
        }
        .history-item {
          margin-left: 400px;
          padding-top: 105px;
          /deep/ .el-timeline-item__content {
            color: #fff;
          }
          .el-timeline-item {
            /deep/  .el-timeline-item__timestamp.is-bottom {
              margin-bottom: 30px;
            }
          }
        }
      }
      .next {
        position: absolute;
        width: 77px;
        height: 70px;
        left: 50%;
        cursor: pointer;
        transform: translate(-50%,0);
        line-height: 70px;
        text-align: center;
        color: #fff;
        background: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, rgba(14, 13, 66, 0.75) 100%);
        &::after {
          position: absolute;
          z-index: 99;
          display: inline-block;
          left: 35px;
          top: 15px;
          margin-top: -6px;
          content: "";
          display: inline-block;
          height: 10px;
          width: 10px;
          border-width: 2px 0 0 2px;
          border-color: #fff;
          border-style: solid;
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        }
      }
      .prev {
        position: absolute;
        width: 77px;
        height: 70px;
        left: 50%;
        bottom: 0;
        cursor: pointer;
        transform: translate(-50%,0);
        line-height: 70px;
        text-align: center;
        color: #fff;
        background: linear-gradient(360deg, rgba(14, 13, 66, 0.75) 0%, rgba(255, 255, 255, 0) 100%);
        &::after {
          position: absolute;
          z-index: 99;
          display: inline-block;
          left: 35px;
          bottom: 15px;
          margin-top: -6px;
          content: "";
          display: inline-block;
          height: 10px;
          width: 10px;
          border-width: 0 2px 2px 0;
          border-color: #fff;
          border-style: solid;
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        }
      }
    }
  }
}
</style>

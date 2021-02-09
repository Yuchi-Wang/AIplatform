<template>
  <div class="sdkProductinfo">
    <div class="banner">
      <div>
        <h3>{{ $t('sdkProduct.bannerTitle') }}</h3>
        <p>{{ $t('sdkProduct.bannerText') }}</p>
        <button @click="coperation">{{ $t('product.CooperationService') }}</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>{{ $t('product.function') }}</h3>
        <p>
          {{ $t('sdkProduct.ProductFunctionTxt') }}
        </p>
      </div>
      <div class="app-scenarios">
        <h3>{{ $t('product.scenarios') }}</h3>
        <div>
          <el-row>
            <el-col v-for="(item, index) in appScenarios" :key="item.id" :span="8">
              <div
                :style="{
                  'background-image'
                    :index === selectAppScenariosIndex ?
                      'url('+ item.hoverSrc +')'
                      :'url('+ item.src +')'
                }"
                @mouseover="selectApplication(index)"
                @mouseout="selectAppScenariosIndex = -1"
              >
                <h4>{{ item.title }}</h4>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <h3>{{ $t('sdkProduct.technicalSpecifications') }}</h3>
        <div class="technical-specifications">
          <p>{{ $t('sdkProduct.platform') }}</p>
          <p>{{ $t('sdkProduct.version') }}</p>
          <p>{{ $t('sdkProduct.cpu') }}</p>
          <p>{{ $t('sdkProduct.ram') }}</p>
          <p>{{ $t('sdkProduct.rom') }}</p>
          <p>{{ $t('sdkProduct.camera') }}</p>
          <p>{{ $t('sdkProduct.recommended') }}</p>
          <p>{{ $t('sdkProduct.format') }}</p>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'SdkProductInfo',
  data() {
    return {
      appScenarios: [
        {
          id: 1,
          src: require('@/assets/img/product/sdk/app-scenarios1.png'),
          hoverSrc: require('@/assets/img/product/sdk/app-scenarios1-hover.png'),
          title: this.$t('sdkProduct.marketingCustomers')
        },
        {
          id: 2, src: require('@/assets/img/product/sdk/app-scenarios2.png'),
          hoverSrc: require('@/assets/img/product/sdk/app-scenarios2-hover.png'),
          title: this.$t('sdkProduct.humanComputerInteraction')
        },
        {
          id: 3,
          src: require('@/assets/img/product/sdk/app-scenarios3.png'),
          hoverSrc: require('@/assets/img/product/sdk/app-scenarios3-hover.png'),
          title: this.$t('sdkProduct.riskManagement')
        }
      ],
      selectAppScenariosIndex: -1
    }
  },
  methods: {
    selectApplication(index) {
      this.selectAppScenariosIndex = index
    },
    coperation() {
      this.$router.push('/about/businessCoperation')
    }
  }
}
</script>

<style scoped lang="scss">
.sdkProductinfo {
  .banner {
    width: 100%;
    height: 439px;
    background: url('../../assets/img/product/sdk/banner.jpg') no-repeat;
    background-size: cover;
    background-position: 50% 50%;
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
        margin-bottom: 30px;
      }
      p {
        width: 770px;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 26px;
      }
      button {
        display: inline-block;
        margin-top: 36px;
        width: 240px;
        height: 44px;
        line-height: 44px;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid #FFFFFF;
        cursor: pointer;
        font-size: 16px;
        color: #FFFFFF;
        text-shadow: 0px 0px 14px #0F244F;
        transition: all .3s;
        &:hover {
           background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
  .main {
    width: 1200px;
    margin: auto;
    padding-top: 58px;
    > div {
      h3 {
        position: relative;
        font-size: 28px;
        font-weight: 600;
        color: #303030;
        line-height: 30px;
        text-align: center;
        margin-bottom: 40px;
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
    > p {
        font-size: 16px;
        font-weight: 400;
        color: #2E2E2E;
        line-height: 18px;
      }
      .technical-specifications {
        width: 878px;
        margin: 33px auto 30px;
        background: #F8F8F8;
        padding: 30px 105px 30px 30px;
        p {
        font-size: 16px;
        font-weight: 400;
        color: #303030;
        line-height: 24px;
        }
      }
    }
    .app-scenarios {
      margin: 79px 0;
      > div {
        .el-col {
          div{
            height: 220px;
            background-size: cover;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            position: relative;
            cursor: pointer;
            h4 {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              height: 40px;
              font-size: 28px;
              font-weight: 600;
              color: #FFFFFF;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>

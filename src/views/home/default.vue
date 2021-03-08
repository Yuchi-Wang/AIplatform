<template>
  <div class="home">
    <div class="banner">
      <el-carousel height="675px" class="banner-img">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <div class="banner-content" :style="{'background-image': 'url('+ item.src +')'}">
            <h3>{{ $t('homeBanner.text') }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-info">
      <div>
        <h3>{{ $t('product.introduction') }}</h3>
        <ul class="product-info-title">
          <li
            v-for="(item, index) in productInfoList"
            :key="item.id"
            :style="activeIndex === index ? productInfoBg : ''"
            @mouseover="selectProduct(index)"
          >
            {{ item.title }}
          </li>
        </ul>
        <ul class="product-info-detail">
          <li
            v-for="(item, index) in productInfoDetail"
            v-show="index === activeIndex"
            :key="item.id"
            :style="{'background-image': 'url('+ item.src +')'}"
          >
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="market-advantage">
      <div>
        <h3>{{ $t('product.advantage') }}</h3>
        <ul>
          <li v-for="item in productAdvantage" :key="item.id">
            <div
              v-enlarge-styleBackground
              class="img-box"
              :style="{'background-image': 'url('+ item.src +')'}"
            />
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="application-scenarios">
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
    <div class="cooperation">
      <div>
        <button @click="coperation">{{ $t('product.Cooperation') }}</button>
        <p>{{ $t('product.tel') }}021-2651625</p>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bannerList: [
        { id: 1, src: require('@/assets/img/home/banner.jpg') },
        { id: 2, src: require('@/assets/img/home/banner1.jpg') },
        { id: 3, src: require('@/assets/img/home/banner2.jpg') }
      ],
      productInfoList: [
        { id: 1, title: this.$t('defaultPage.productList.prompt') },
        { id: 2, title: this.$t('defaultPage.productList.abao') },
        { id: 3, title: this.$t('defaultPage.productList.cryrecognition') }
      ],
      productInfoBg: {
        backgroundImage: 'url(' + require('@/assets/img/home/product-info-title.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      },
      productInfoDetail: [
        {
          id: 1,
          src: require('@/assets/img/home/protuct-info-detail1.png'),
          title: this.$t('defaultPage.productList.prompt') + this.$t('product.introduction'),
          content: this.$t('defaultPage.promptIntroduction')
        },
        {
          id: 2, src: require('@/assets/img/home/protuct-info-detail2.png'),
          title: this.$t('defaultPage.productList.abao') + this.$t('product.introduction'),
          content: this.$t('defaultPage.abaoIntroduction')
        },
        {
          id: 3,
          src: require('@/assets/img/home/protuct-info-detail3.png'),
          title: this.$t('defaultPage.productList.cryrecognition') + this.$t('product.introduction'),
          content: this.$t('defaultPage.Cryrecognition')
        }
      ],
      productAdvantage: [
        {
          id: 1,
          src: require('@/assets/img/home/advantage1.png'),
          title: this.$t('defaultPage.MarketAdvantage.terminal.title'),
          content: this.$t('defaultPage.MarketAdvantage.terminal.text')
        },
        {
          id: 2,
          src: require('@/assets/img/home/advantage2.png'),
          title: this.$t('defaultPage.MarketAdvantage.algorithm.title'),
          content: this.$t('defaultPage.MarketAdvantage.terminal.text')
        },
        {
          id: 3,
          src: require('@/assets/img/home/advantage3.png'),
          title: this.$t('defaultPage.MarketAdvantage.security.title'),
          content: this.$t('defaultPage.MarketAdvantage.terminal.text')
        },
        {
          id: 4,
          src: require('@/assets/img/home/advantage4.png'),
          title: this.$t('defaultPage.MarketAdvantage.attack.title'),
          content: this.$t('defaultPage.MarketAdvantage.terminal.text')
        }
      ],
      appScenarios: [
        {
          id: 1,
          src: require('@/assets/img/home/medical.png'),
          hoverSrc: require('@/assets/img/home/medical-hover.png'),
          title: this.$t('defaultPage.medical')
        },
        {
          id: 2,
          src: require('@/assets/img/home/office.png'),
          hoverSrc: require('@/assets/img/home/office-hover.png'),
          title: this.$t('defaultPage.office')
        },
        {
          id: 3,
          src: require('@/assets/img/home/edu.png'),
          hoverSrc: require('@/assets/img/home/edu-hover.png'),
          title: this.$t('defaultPage.education')
        }
      ],
      activeIndex: 0,
      selectAppScenariosIndex: -1
    }
  },
  methods: {
    coperation() {
      this.$router.push('/about/businessCoperation')
    },
    selectProduct(index) {
      this.activeIndex = index
    },
    selectApplication(index) {
      this.selectAppScenariosIndex = index
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  .banner-img {
    .banner-content {
      width: 100%;
      height: 675px;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1200px;
      text-align: center;
      transform: translate(-50%, -50%);
      font-size: 80px;
      color: #FFFFFF;
      text-shadow: 0 16px 15px rgba(0,0,0,0.50)
      }
    }
  }
  .product-info {
    width: 100%;
    height: 625px;
    background: url('../../assets/img/home/default-productInfo.jpg') no-repeat;
    background-size: cover;
    padding-top: 58px;
    >div {
      width: 1200px;
      margin: auto;
      position: relative;
      h3 {
        position: relative;
        text-align: center;
        font-size: 28px;
        font-weight: 600;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 30px;
        &::before {
          content: '';
          position: absolute;
          width: 39px;
          height: 5px;
          background: #FAFAFA;
          left: 50%;
          transform: translateX(-50%);
          bottom: -20px;
          border-radius: 4px;
        }
      }
      .product-info-title {
        width: 353px;
        display: inline-block;
        position: absolute;
        top: 200px;
        li {
          height:70px;
          font-size: 18px;
          font-weight: 400;
          color: #d8d8d8;
          line-height: 70px;
          text-align: center;
          cursor: pointer;
        }
      }
      .product-info-detail {
        margin: 62px 0 0 353px;
        li {
          width: 740px;
          height: 442px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          > div {
            text-align: center;
            padding: 100px 80px 0 100px;
            h4 {
              height: 33px;
              font-size: 23px;
              font-weight: 600;
              margin-bottom: 48px;
              color: #FFFFFF;
              line-height: 33px;
              text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
            }
            p {
              font-size: 16px;
              font-weight: 500;
              color: #FFFFFF;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
  .market-advantage {
    width: 100%;
    > div {
      width: 1200px;
      margin: auto;
      padding-top: 58px;
      padding-bottom: 83px;
      h3 {
        position: relative;
        font-size: 28px;
        text-align: center;
        font-weight: 600;
        color: #000000;
        line-height: 30px;
        margin-bottom: 90px;
        &::before {
          content: '';
          position: absolute;
          width: 39px;
          height: 5px;
          background: #2F54EB;
          left: 50%;
          transform: translateX(-50%);
          bottom: -23px;
          border-radius: 4px;
        }
      }
      ul {
        li {
          display: inline-block;
          width: 25%;
          .img-box {
            width: 160px;
            height: 160px;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 50%;
            margin: auto;
          }
          h4 {
            margin-top: 35px;
            height: 29px;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            color: #333;
            line-height: 29px;
          }
          p {
            width: 231px;
            margin: 5px auto 10px;
            font-size: 16px;
            font-weight: 400;
            color: #929292;
            line-height: 29px;
            text-align: justify;
          }
        }
      }
    }
  }
  .application-scenarios {
    width: 100%;
    height: 647px;
    background: url('../../assets/img/home/default-productInfo.jpg') no-repeat;
    background-size: cover;
    padding-top: 58px;
    h3 {
      position: relative;
      font-size: 28px;
      text-align: center;
      font-weight: 600;
      color: #fff;
      line-height: 30px;
      margin-bottom: 90px;
      &::before {
        content: '';
        position: absolute;
        width: 39px;
        height: 5px;
        background: #fff;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        border-radius: 4px;
      }
    }
    > div {
      width: 1080px;
      margin: auto;
      .el-col {
        div{
          height: 390px;
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
  .cooperation {
    width: 100%;
    height: 508px;
    background: url('../../assets/img/home/cooperation.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
        button {
        display: inline-block;
        margin-bottom: 36px;
        width: 176px;
        height: 46px;
        line-height: 46px;
        background: #2F54EB;
        border-radius: 27px;
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        &:hover {
           background: #1d39c4;
        }
      }
      p {
        height: 25px;
        font-size: 18px;
        font-weight: 600;
        color: #000000;
        line-height: 25px;
      }
    }
  }
}
</style>

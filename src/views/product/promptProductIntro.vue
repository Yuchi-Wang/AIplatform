<template>
  <div class="prompt-product">
    <div class="banner">
      <div>
        <h3>prompt</h3>
        <p>
          {{ $t('productList.prompt.bannerText') }}
        </p>
        <button @click="coperation">{{ $t('product.CooperationService') }}</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>{{ $t('product.experience') }}</h3>
        <div class="prompt-experience">
          <img
            :src="prdductExperienceSrc ? prdductExperienceHover: prdductExperience"
            @mouseover="prdductExperienceSrc= true"
            @mouseout="prdductExperienceSrc= false"
          >
        </div>
      </div>
      <div class="product-characteristic">
        <h3>{{ $t('product.features') }}</h3>
        <ul>
          <li v-for="item in productCharacteristic" :key="item.id">
            <div>
              <div
                class="product-characteristic-bg"
                :style="{backgroundImage: 'url('+ item.src +')'}"
              />
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="app-scene">
        <h3>{{ $t('product.scenarios') }}</h3>
        <div v-enlarge-styleBackground class="customer-service">
          <p class="app-scene-dec">{{ $t('productList.prompt.intelligentCustomerService') }}</p>
        </div>
        <div class="robot-intelligence">
          <div v-enlarge-styleBackground class="robot-ai">
            <p class="app-scene-dec">{{ $t('productList.prompt.rootAI') }}</p>
          </div>
          <div v-enlarge-styleBackground class="intelligence-search">
            <p class="app-scene-dec">{{ $t('productList.prompt.intelligentSearch') }}</p>
          </div>
        </div>
        <div v-enlarge-styleBackground class="intelligence-transaction">
          <p class="app-scene-dec">{{ $t('productList.prompt.smartTrading') }}</p>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'PromptProductIntro',
  data() {
    return {
      prdductExperience: require('@/assets/img/product/prompt/experience.png'),
      prdductExperienceHover: require('@/assets/img/product/prompt/experience.gif'),
      prdductExperienceSrc: false,
      productCharacteristic: [
        { id: 1,
          src: require('@/assets/img/product/prompt/product-characteristic1.svg'),
          title: this.$t('productList.prompt.voiceInput')
        },
        { id: 2,
          src: require('@/assets/img/product/prompt/product-characteristic2.svg'),
          title: this.$t('productList.prompt.phoneticCorrection')
        },
        { id: 3,
          src: require('@/assets/img/product/prompt/product-characteristic3.svg'),
          title: this.$t('productList.prompt.textErrorCorrection')
        },
        { id: 4,
          src: require('@/assets/img/product/prompt/product-characteristic4.svg'),
          title: this.$t('productList.prompt.lexicalAnalysis')
        },
        { id: 5,
          src: require('@/assets/img/product/prompt/product-characteristic5.svg'),
          title: this.$t('productList.prompt.sensitiveWordRecognition')
        },
        { id: 6,
          src: require('@/assets/img/product/prompt/product-characteristic6.svg'),
          title: this.$t('productList.prompt.keywordExtraction')
        }
      ],
      textarea: ''
    }
  },
  methods: {
    coperation() {
      this.$router.push('/about/businessCoperation')
    }
  }
}
</script>

<style scoped lang="scss">
.prompt-product {
  background: #fff;
  .banner {
    width: 100%;
    height: 505px;
    background: url('../../assets/img/product/prompt/banner.jpg') no-repeat;
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
        margin-bottom: 30px;
      }
      p {
        width: 528px;
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
    padding-top: 58px;
    > div {
        > h3 {
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
      .prompt-experience {
        width: 1200px;
        margin: auto;
        img {
          width: 100%;
          cursor: pointer;
        }
      }
    }
    .product-characteristic {
      margin-top: 60px;
      padding-top: 40px;
      background: #FAFBFF;
      ul {
        width: 1200px;
        margin: auto;
        li {
          display: inline-block;
          width: 33.33%;
          text-align: center;
           cursor: pointer;
           > div {
              padding-top: 60px;
              border: 2px solid transparent;
              width: 248px;
              margin: auto;
              &:hover {
                background: #F2F5FF;
                border: 2px dotted #728DFF;
              }
           }
          .product-characteristic-bg {
            width: 75px;
            height: 75px;
            margin: 0 auto 21px;
            background-size: contain;
            background-position: 50% 50%;
            background-repeat: no-repeat;
          }
          p {
            height: 21px;
            margin-bottom: 67px;
            font-size: 15px;
            font-weight: 600;
            color: #000000;
            line-height: 21px;
          }
        }
      }
    }
    .app-scene {
      padding: 55px 0;
      width: 1200px;
      margin: auto;
      > div {
       display: inline-block;
       position: relative;
       width: 32.222%;
       height: 300px;
       vertical-align: text-top;
       &:nth-of-type(1),&:nth-of-type(2) {
           margin-right: 20px;
       }
        .app-scene-dec {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          height: 21px;
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 21px;
        }
      }
      .customer-service {
          background: url('../../assets/img/product/prompt/prompt-product-customer-service.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
      .intelligence-transaction {
          background: url('../../assets/img/product/prompt/prompt-product-transaction.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
      .robot-intelligence {
        .robot-ai {
          position: relative;
          width: 100%;
          height: 145px;
          background: url('../../assets/img/product/prompt/prompt-product-robot.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
        .intelligence-search {
          position: relative;
          width: 100%;
          height: 145px;
          background: url('../../assets/img/product/prompt/prompt-product-search.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
        }
      }
    }
  }
}
</style>

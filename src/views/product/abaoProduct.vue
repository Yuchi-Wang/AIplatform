<template>
  <div class="abao-product">
    <div class="banner">
      <div>
        <h3>{{ $t('productList.abao.bannerTitle') }}</h3>
        <p>
          {{ $t('productList.abao.bannerText') }}
        </p>
        <button @click="coperation">{{ $t('product.CooperationService') }}</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>{{ $t('product.scenarios') }}</h3>
        <div class="prompt-experience">
          <ul>
            <li>
              <h3>{{ $t('productList.abao.searchContent') }}</h3>
              <div>
                <el-input
                  v-model="textarea"
                  type="textarea"
                  :rows="8"
                  :placeholder="content"
                />
              </div>
            </li>
            <li>
              <h3>{{ $t('productList.abao.searchResult') }}</h3>
              <div />
            </li>
          </ul>
        </div>
      </div>
      <div class="product-characteristic">
        <h3>{{ $t('product.features') }}</h3>
        <ul>
          <li v-for="item in porduCtcharacteristic" :key="item.id">
            <img :src="item.src" :alt="item.title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
      <div class="app-scene">
        <h3>{{ $t('product.scenarios') }}</h3>
        <div v-enlarge-styleBackground class="quick-search-info">
          <p class="app-scene-dec">{{ $t('productList.abao.quickQueryFinancial') }}</p>
        </div>
        <div class="quick-info">
          <div v-enlarge-styleBackground class="quick-transaction">
            <p class="app-scene-dec">{{ $t('productList.abao.fastTrading') }}</p>
          </div>
          <div v-enlarge-styleBackground class="quick-pay">
            <p class="app-scene-dec">{{ $t('productList.abao.fastPayment') }}</p>
          </div>
        </div>
        <div class="quick-info">
          <div v-enlarge-styleBackground class="quick-order">
            <p class="app-scene-dec">{{ $t('productList.abao.quickOrder') }}</p>
          </div>
          <div v-enlarge-styleBackground class="quick-search">
            <p class="app-scene-dec">{{ $t('productList.abao.quickQuery') }}</p>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'AbaoProduct',
  data() {
    return {
      textarea: '',
      porduCtcharacteristic: [
        {
          id: 1,
          src: require('@/assets/img/product/abao/characteristic1.png'),
          title: this.$t('productList.abao.fastResponse'),
          content: this.$t('productList.abao.fastResponseContent')
        },
        {
          id: 2,
          src: require('@/assets/img/product/abao/characteristic2.png'),
          title: this.$t('productList.abao.financialVocabulary'),
          content: this.$t('productList.abao.financialVocabularyContent')
        },
        {
          id: 3,
          src: require('@/assets/img/product/abao/characteristic3.png'),
          title: this.$t('productList.abao.voiceInteraction'),
          content: this.$t('productList.abao.voiceInteractionContent')
        }
      ]
    }
  },
  computed: {
    content() {
      return this.$t('form.error.content')
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
.abao-product {
  .banner {
    width: 100%;
    height: 505px;
    background: url('../../assets/img/product/abao/product-abao-banner.jpg') no-repeat;
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
    width: 1200px;
    margin: auto;
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
        ul {
          li {
            display: inline-block;
            width: 49.166%;
            padding: 20px;
            background: #fff;
            vertical-align: text-top;
            &:first-child {
              margin-right: 20px;
            }
            h3 {
              font-size: 16px;
              color: #000;
              font-weight: 600;
              height: 20px;
              line-height: 20px;
              margin-bottom: 20px;
            }
            >div {
              background: #FFFFFF;
              box-shadow: 0px 0px 11px 0px rgba(183,183,183,0.5);
              border: 1px solid #FFFFFF;
              width: 100%;
              height: 185px;
               /deep/ .el-textarea {
                textarea {
                  resize:none;
                  border:none;
                  background: #fff;
                }
              }
            }
          }
        }
      }
    }
    .product-characteristic {
        padding-top: 70px;
        padding-bottom: 25px;
        ul {
          li {
            display: inline-block;
            width: 33.33%;
            text-align: center;
            vertical-align: text-bottom;
            h4 {
              margin: 18px auto 0;
              height: 29px;
              font-size: 18px;
              font-weight: 600;
              color: #000000;
              line-height: 21px;
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
    .app-scene {
      padding-top: 25px;
      margin-bottom: 50px;
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
          font-size: 19px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 21px;
        }
      }
      .quick-search-info {
          background: url('../../assets/img/product/abao/quick-search-info.jpg');
          background-repeat: no-repeat;
          background-position: 50% 50%;
      }
      .quick-info {
        > div {
          position: relative;
          width: 100%;
          height: 145px;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
        .quick-transaction {
          background: url('../../assets/img/product/abao/quick-transaction.jpg');
          background-position: 50% 50%;
        }
        .quick-pay {
          background: url('../../assets/img/product/abao/quick-pay.jpg');
          background-position: 50% 50%;
        }
        .quick-order {
          background: url('../../assets/img/product/abao/quick-order.jpg');
          background-position: 50% 50%;
        }
        .quick-search {
          background: url('../../assets/img/product/abao/quick-search.jpg');
          background-position: 50% 50%;
        }
      }
    }
  }
}
</style>

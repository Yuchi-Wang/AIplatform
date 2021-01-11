<template>
  <div class="abao-product">
    <BaseHeader />
    <div class="banner">
      <div>
        <h3>诚龙阿宝</h3>
        <p>
          阿宝作为胜龙主要产品形态之一，包含金融词库、语音模糊匹配、智能应答、等多模态产品组合，
          基于行业应用场景实践，搭载了诚龙AI算法，可用于金融业，电信业、教育业等各类复杂场景的综合应用。
        </p>
        <button>合作咨询</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>产品体验</h3>
        <div class="prompt-experience">
          <ul>
            <li>
              <h3>输入搜索内容</h3>
              <div />
            </li>
            <li>
              <h3>搜索结果</h3>
              <div />
            </li>
          </ul>
        </div>
      </div>
      <div class="product-characteristic">
        <h3>产品特点</h3>
        <ul>
          <li>
            <img src="../../assets/img/product/abao/characteristic1.png" alt="响应快">
            <h4>响应快</h4>
            <p>毫秒级响应。通过实时的语音转换，及时响应用户的操作。</p>
          </li>
          <li>
            <img src="../../assets/img/product/abao/characteristic2.png" alt="金融词汇">
            <h4>金融词汇</h4>
            <p>丰富的金融词库，满足用户搜索金融资讯。</p>
          </li>
          <li>
            <img src="../../assets/img/product/abao/characteristic3.png" alt="语音交互">
            <h4>语音交互</h4>
            <p>支持全程语音模式，线上查询、线上开户、线上交易，实现语音一体化操作。</p>
          </li>
        </ul>
      </div>
      <div class="app-scene">
        <h3>应用场景</h3>
        <div class="quick-search-info">
          <p class="app-scene-dec">快速查询金融产品资讯</p>
        </div>
        <div class="quick-info">
          <div class="quick-transaction">
            <p class="app-scene-dec">快速交易</p>
          </div>
          <div class="quick-pay">
            <p class="app-scene-dec">快速支付</p>
          </div>
        </div>
        <div class="quick-info">
          <div class="quick-order">
            <p class="app-scene-dec">快速下单</p>
          </div>
          <div class="quick-search">
            <p class="app-scene-dec">快速查询</p>
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
  data: () => ({}),
  mounted() {},
  methods: {}
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
          height: 26px;
          font-size: 19px;
          font-weight: 600;
          color: #303030;
          line-height: 26px;
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
            bottom: -11px;
            border-radius: 4px;
        }
      }
      .prompt-experience {
        ul {
          li {
            display: inline-block;
            width: 49.166%;
            padding: 20px;
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
            h4 {
              margin: 18px 0;
              height: 21px;
              font-size: 15px;
              font-weight: 600;
              color: #000000;
              line-height: 21px;
            }
            p {
              margin: auto;
              text-align: left;
              width: 260px;
              font-size: 15px;
              font-weight: 400;
              color: #97989A;
              line-height: 21px;
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
          height: 21px;
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 21px;
        }
      }
      .quick-search-info {
          background: url('../../assets/img/product/abao/quick-search-info.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
      .quick-info {
        > div {
          position: relative;
          width: 100%;
          height: 145px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
        .quick-transaction {
          background: url('../../assets/img/product/abao/quick-transaction.jpg');
        }
        .quick-pay {
          background: url('../../assets/img/product/abao/quick-pay.jpg');
        }
        .quick-order {
          background: url('../../assets/img/product/abao/quick-order.jpg');
        }
        .quick-search {
          background: url('../../assets/img/product/abao/quick-search.jpg');
        }
      }
    }
  }
}
</style>

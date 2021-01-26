<template>
  <div class="prompt-product">
    <div class="banner">
      <div>
        <h3>prompt</h3>
        <p>
          Prompt是一款基于人工智能技术，为各行各业的企业和开发者提供的针对文本智能化分析及处理的服务，意在帮助用户高效处理文本数据，
          实现数字化和智能化转型；应用范围包括：电商、交通、金融、游戏等行业。
        </p>
        <button @click="coperation">合作咨询</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>产品体验</h3>
        <div class="prompt-experience">
          <ul>
            <li>
              <h3>请输入关键字</h3>
              <div>
                <el-input
                  v-model="textarea"
                  type="textarea"
                  :rows="9"
                  placeholder="请输入内容"
                />
              </div>
            </li>
            <li>
              <h3>返回结果</h3>
              <div />
            </li>
          </ul>
        </div>
      </div>
      <div class="product-characteristic">
        <h3>产品体验</h3>
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
        <h3>应用场景</h3>
        <div v-enlarge-styleBackground class="customer-service">
          <p class="app-scene-dec">智能客服</p>
        </div>
        <div class="robot-intelligence">
          <div v-enlarge-styleBackground class="robot-ai">
            <p class="app-scene-dec">机器人AI</p>
          </div>
          <div v-enlarge-styleBackground class="intelligence-search">
            <p class="app-scene-dec">智能搜索</p>
          </div>
        </div>
        <div v-enlarge-styleBackground class="intelligence-transaction">
          <p class="app-scene-dec">智能交易</p>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'PromptProductIntro',
  data: () => ({
    productCharacteristic: [
      { id: 1,
        src: require('../../assets/img/product/prompt/product-characteristic1.svg'),
        title: '语音输入'
      },
      { id: 2,
        src: require('../../assets/img/product/prompt/product-characteristic2.svg'),
        title: '注音校正'
      },
      { id: 3,
        src: require('../../assets/img/product/prompt/product-characteristic3.svg'),
        title: '文本纠错'
      },
      { id: 4,
        src: require('../../assets/img/product/prompt/product-characteristic4.svg'),
        title: '词法分析'
      },
      { id: 5,
        src: require('../../assets/img/product/prompt/product-characteristic5.svg'),
        title: '敏感词识别'
      },
      { id: 6,
        src: require('../../assets/img/product/prompt/product-characteristic6.svg'),
        title: '关键词提取'
      }
    ],
    textarea: ''
  }),
  mounted() {},
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
        ul {
          li {
            display: inline-block;
            width: 49.166%;
            padding: 20px;
            background: #fff;
            box-shadow: 0 0 26px 0 rgba(206,206,206,0.50);
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
              background: #F9F9F9;
              width: 100%;
              height: 185px;
              /deep/ .el-textarea {
                textarea {
                  resize:none;
                  border:none;
                  background: #F9F9F9;
                }
              }
            }
          }
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

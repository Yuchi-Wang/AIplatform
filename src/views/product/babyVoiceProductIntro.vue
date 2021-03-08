<template>
  <div class="prompt-product">
    <div class="banner">
      <div>
        <h3>{{ $t('productList.babyVoice.bannerTitle') }}</h3>
        <p>
          {{ $t('productList.babyVoice.bannerText') }}
        </p>
        <button @click="coperation">{{ $t('product.CooperationService') }}</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>{{ $t('product.experience') }}</h3>
        <div class="prompt-experience">
          <h3>{{ $t('productList.babyVoice.result') }}</h3>
          <div class="dec">
            <p>{{ $t('productList.babyVoice.resultTitle') }}</p>
            <p>{{ $t('productList.babyVoice.resultContent') }}</p>
            <p>{{ $t('productList.babyVoice.resultContentList') }}</p>
          </div>
          <ul>
            <li>
              <div class="li-box">
                <div class="img-box" style="padding-top:16px">
                  <img src="@/assets/img/product/babyVoiceProduct/voice.png">
                </div>
                <div class="content">
                  <p>{{ $t('productList.babyVoice.recording') }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="li-box">
                <div class="img-box">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary">{{ $t('button.upload') }}<i class="el-icon-upload el-icon--right" /></el-button>
                  </el-upload>
                </div>
                <div class="content" style="margin-left:35px">
                  <p>{{ $t('productList.babyVoice.file') }}</p>
                  <p>{{ $t('productList.babyVoice.fileSize') }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-characteristic">
        <h3>{{ $t('product.features') }}</h3>
        <ul>
          <li v-for="item in productCharacteristic" :key="item.id">
            <div
              class="product-characteristic-bg"
              :style="{backgroundImage: 'url('+ item.src +')'}"
            />
            <h3>{{ item.title }}</h3>
            <p>{{ item.dec }}</p>
          </li>
        </ul>
      </div>
      <div class="app-scene">
        <h3>{{ $t('product.scenarios') }}</h3>
        <div v-enlarge-styleBackground class="boby-hunger">
          <p class="app-scene-dec">{{ $t('productList.babyVoice.scenarios.hungry') }}</p>
        </div>
        <div class="boby-info">
          <div v-enlarge-styleBackground class="boby-sleep">
            <p class="app-scene-dec">{{ $t('productList.babyVoice.scenarios.sleepy') }}</p>
          </div>
          <div v-enlarge-styleBackground class="boby-cry">
            <p class="app-scene-dec">{{ $t('productList.babyVoice.scenarios.crying') }}</p>
          </div>
        </div>
        <div class="boby-info">
          <div v-enlarge-styleBackground class="boby-ill">
            <p class="app-scene-dec">{{ $t('productList.babyVoice.scenarios.ill') }}</p>
          </div>
          <div v-enlarge-styleBackground class="boby-diarrhea">
            <p class="app-scene-dec">{{ $t('productList.babyVoice.scenarios.diarrhea') }}</p>
          </div>
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
      productCharacteristic: [
        { id: 1,
          src: require('@/assets/img/product/babyVoiceProduct/product-characteristic1.svg'),
          title: this.$t('productList.babyVoice.features.recognition'),
          dec: this.$t('productList.babyVoice.features.recognitionText')
        },
        { id: 2,
          src: require('@/assets/img/product/babyVoiceProduct/product-characteristic2.svg'),
          title: this.$t('productList.babyVoice.features.rate'),
          dec: this.$t('productList.babyVoice.features.rateContent')
        },
        { id: 3,
          src: require('@/assets/img/product/babyVoiceProduct/product-characteristic3.svg'),
          title: this.$t('productList.babyVoice.features.analysis'),
          dec: this.$t('productList.babyVoice.features.analysisContent')
        }
      ],
      fileList: []
    }
  },
  methods: {
    handleRemove() {},
    coperation() {
      this.$router.push('/about/businessCoperation')
    },
    handlePreview(file) {
      // console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name} ？`)
    }
  }
}
</script>

<style scoped lang="scss">
.prompt-product {
  .banner {
    width: 100%;
    height: 505px;
    background: url('../../assets/img/product/babyVoiceProduct/banner.jpg') no-repeat;
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
        width: 700px;
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
        background: #FFFFFF;
        box-shadow: 0px 0px 23px 0px rgba(182,182,182,0.5);
        padding: 72px 90px;
        h3 {
          height: 18px;
          font-size: 14px;
          font-weight: 600;
          color: #2F54EB;
          line-height: 18px;
          -webkit-text-stroke: 1px #979797;
          text-stroke: 1px #979797;
        }
        .dec {
          margin-top: 15px;
          margin-bottom: 18px;
          background: #F9F9F9;
          border-radius: 7px;
          padding: 11px 44px 38px 29px;
          p {
            font-size: 16px;
            font-weight: 400;
            color: #000000;
            line-height: 22px;
          }
        }
        ul {
          li {
            position: relative;
            display: inline-block;
            padding-left: 40px;
            width: 50%;
            vertical-align: text-top;
            &:first-child {
              &::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(calc(-50% + 18px));
                background: linear-gradient(to top, #B6B6B6,#B6B6B6 6.5px, transparent 6.5px, transparent);
                background-size: 100% 13px;
                width: 1px;
                height:90px;
              }
            }
            .li-box {
              padding-top: 27.5px;
              .img-box {
                position: absolute;
                top: 50%;
                transform: translateY(calc(-50% + 18px));
                width:75px;
                .el-button {
                  background:#2F54EB;
                  border: 1px solid #2F54EB;
                  transition: all .3s;
                  &:hover {
                    background: #1d39c4;
                    border: 1px solid #1d39c4;
                  }
                }
                p {
                  height: 15px;
                  font-size: 12px;
                  font-weight: 600;
                  color: #2F54EB;
                  line-height: 15px;
                  margin-top: 5px;
                }
              }
              .content {
                margin-left: 20px;
                p {
                  width: 212px;
                  margin-left: 60px;
                  font-size: 12px;
                  font-weight: 400;
                  color: #7B7B7B;
                  line-height: 18px;
                }
              }
            }
          }
        }
      }
    }
    .product-characteristic {
        margin-top: 70px;
        padding: 22px 0 10px 0;
        background: #FAFBFF;
        ul {
          width: 100%;
          li {
              display: inline-block;
              width: 33.33%;
              text-align: center;
              vertical-align: text-top;
              .product-characteristic-bg {
                width: 75px;
                height: 75px;
                margin: 0 auto 21px;
                background-size: contain;
                background-position: 50% 50%;
                background-repeat: no-repeat;
              }
              h3 {
                height: 29px;
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                color: #333;
                line-height: 29px;
              }
              p {
                width: 199px;
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
      padding-top: 55px;
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
      .boby-hunger {
          background: url('../../assets/img/product/babyVoiceProduct/hunger.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
      .boby-info {
        > div {
          position: relative;
          width: 100%;
          height: 145px;
        }
        .boby-sleep {
          background: url('../../assets/img/product/babyVoiceProduct/sleep.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
        .boby-cry {
          background: url('../../assets/img/product/babyVoiceProduct/cry.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
        .boby-ill {
          background: url('../../assets/img/product/babyVoiceProduct/fall-ill.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
        .boby-diarrhea {
          background: url('../../assets/img/product/babyVoiceProduct/diarrhea.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

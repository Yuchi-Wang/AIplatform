<template>
  <div class="prompt-product">
    <BaseHeader />
    <div class="banner">
      <div>
        <h3>婴语识别</h3>
        <p>
          婴语识别基于新生儿哭声侦测及辨识技术开发，协助新手爸妈于短时间内听懂哭声、了解宝宝的内心在想什么；利用婴儿哭声中的特定声学特征、
          随着婴儿的成长自动修正哭声模型，再结合机器学习与巨量资料分析技术；并且支持肚子饿、想睡觉、尿布湿、需要安抚等不同哭声模型。
        </p>
        <button>合作咨询</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>产品体验</h3>
        <div class="prompt-experience">
          <h3>分析结果</h3>
          <div class="dec">
            <p>根据宝宝的声音数据分析得到的结果：您的宝宝应该是肚子饿了。</p>
            <p>解决办法如下：</p>
            <p>1.这个时间段宝宝处于生长发育阶段，正常情况下，如果宝宝饿的非常快说明宝宝身体还是比较健康，家长可以给宝宝做一些营养特别丰富的食物。</p>
          </div>
          <ul>
            <li>
              <div class="li-box">
                <div class="img-box" style="padding-top:16px">
                  <img src="../../assets/img/product/babyVoiceProduct/voice.png" alt="">
                </div>
                <div class="content">
                  <p>请按住录音按钮，录制宝宝声音，时长范围3s～20s</p>
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
                    <el-button size="small" type="primary">上传<i class="el-icon-upload el-icon--right" /></el-button>
                  </el-upload>
                </div>
                <div class="content" style="margin-left:35px">
                  <p>上传的音频文件格式为：mp3、wav</p>
                  <p>文件容量小于1mb</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-characteristic">
        <h3>产品特点</h3>
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
        <h3>应用场景</h3>
        <div class="boby-hunger">
          <p class="app-scene-dec">宝宝饿了</p>
        </div>
        <div class="boby-info">
          <div class="boby-sleep">
            <p class="app-scene-dec">宝宝困了</p>
          </div>
          <div class="boby-cry">
            <p class="app-scene-dec">宝宝哭闹</p>
          </div>
        </div>
        <div class="boby-info">
          <div class="boby-ill">
            <p class="app-scene-dec">宝宝生病了</p>
          </div>
          <div class="boby-diarrhea">
            <p class="app-scene-dec">宝宝拉肚子</p>
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
  data: () => ({
    productCharacteristic: [
      { id: 1,
        src: require('../../assets/img/product/babyVoiceProduct/product-characteristic1.svg'),
        title: '识别种类多',
        dec: '识别的宝宝哭声类型多，比如宝宝饿了、困了、尿床、肚子疼'
      },
      { id: 2,
        src: require('../../assets/img/product/babyVoiceProduct/product-characteristic2.svg'),
        title: '高辨识率',
        dec: '录制宝宝声音后，可以实时准确识别出宝宝的声音'
      },
      { id: 3,
        src: require('../../assets/img/product/babyVoiceProduct/product-characteristic3.svg'),
        title: '智能分析',
        dec: '从病理和生理多角度分析宝宝哭的原因'
      }
    ],
    fileList: []
  }),
  mounted() {},
  methods: {
    handleRemove() {},
    handlePreview(file) {
      console.log(file)
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
          margin-bottom: 37px;
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
                height: 21px;
                margin-bottom: 18px;
                font-size: 15px;
                font-weight: 600;
                color: #000000;
                line-height: 21px;
              }
              p {
                width: 199px;
                margin: auto;
                text-align: left;
                font-size: 15px;
                font-weight: 400;
                color: #97989A;
                line-height: 21px;
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

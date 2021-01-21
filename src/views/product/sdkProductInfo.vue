<template>
  <div class="sdkProductinfo">
    <div class="banner">
      <div>
        <h3>智慧金融SDK</h3>
        <p>
          针对金融领域，进行声学模型以及语言模型的数据训练，提升准确率，可用于智能会议、智能质检分析等场景。 将文字信息转化为声音信息。
          合成音在音色、自然度等方面的表现均接近甚至超过了人声。可用于智能客服、智能外呼等方案。
        </p>
        <button @click="coperation">合作咨询</button>
      </div>
    </div>
    <div class="main">
      <div>
        <h3>产品功能</h3>
        <p>
          基于讯飞自主研发的机器翻译引擎，提供更优质的翻译接口。其中中英互译能力媲美大学英语六级水平，目前已逐步支持英日韩法西俄等多语种与中文的高品质互译。
        </p>
      </div>
      <div class="app-scenarios">
        <h3>应用场景</h3>
        <div>
          <div>
            <div class="medical">
              <h4 class="main-title">营销获客</h4>
            </div>
            <div class="medical office">
              <h4 class="main-title">人机交互</h4>
            </div>
            <div class="medical edu">
              <h4 class="main-title">风险控制</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>技术规格</h3>
        <div class="technical-specifications">
          <p>支持平台 Android</p>
          <p>版本：Android 4.0.4 及以上</p>
          <p>支持的 CPU：armabi-v7a 与 arm64-v8a，支持 NEON 指令集，最低配置参考：高通骁龙 435 及以上*</p>
          <p>RAM：300M 及以上 </p>
          <p>ROM：50M 及以上</p>
          <p>支持的摄像头：30万像素及以上</p>
          <p>图片推荐分辨率：640x480</p>
          <p>支持的图片格式：YUV、RGB</p>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'SdkProductInfo',
  data: () => ({}),
  mounted() {},
  methods: {
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
    background: url('../../assets/img/true.jpg') no-repeat;
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
    padding-top: 105px;
    > div {
      h3 {
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
        padding: 44px 105px 44px 44px;
        p {
        font-size: 21px;
        font-weight: 400;
        color: #303030;
        line-height: 29px;
        }
      }
    }
    .app-scenarios {
      margin: 79px 0;
       .medical {
        position: relative;
        width: 33.33%;
        display: inline-block;
        height: 450px;
        background: url('../../assets/img/home/medical.png') no-repeat;
        text-align: center;
        background-size: cover;
        .main-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 40px;
          font-size: 28px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 40px;
        }
      }
      .office {
        background: url('../../assets/img/home/office.png') no-repeat;
      }
      .edu {
        background: url('../../assets/img/home/edu.png') no-repeat;
      }
    }
  }
}
</style>

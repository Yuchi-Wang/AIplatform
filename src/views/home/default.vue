<template>
  <div class="home">
    <div class="banner">
      <el-carousel height="675px" class="banner-img">
        <el-carousel-item v-for="item in imgBox" :key="item.id">
          <img ref="bannerHeight" :src="item.src">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-info">
      <h3>产品介绍</h3>
    </div>
    <div class="market-advantage">
      <div>
        <h3>市场优势</h3>
        <ul>
          <li>
            <div class="img-box">
              <img src="../../assets/img/home/advantage1.png">
            </div>
            <h4>多终端适配</h4>
            <p>防御多种攻击方式，防攻击算法更新频率高</p>
          </li>
          <li>
            <div class="img-box">
              <img src="../../assets/img/home/advantage2.png">
            </div>
            <h4>算法技术领先</h4>
            <p>防御多种攻击方式，防攻击算法更新频率高</p>
          </li>
          <li>
            <div class="img-box">
              <img src="../../assets/img/home/advantage3.png">
            </div>
            <h4>支付级安全性</h4>
            <p>防御多种攻击方式，防攻击算法更新频率高</p>
          </li>
          <li>
            <div class="img-box">
              <img src="../../assets/img/home/advantage4.png">
            </div>
            <h4>防伪攻击</h4>
            <p>防御多种攻击方式，防攻击算法更新频率高</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="application-scenarios">
      <h3>应用场景</h3>
      <div>
        <div>
          <div class="medical">
            <h4 class="main-title">医疗</h4>
          </div>
          <div class="medical office">
            <h4 class="main-title">办公</h4>
          </div>
          <div class="medical edu">
            <h4 class="main-title">教育</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="cooperation">
      <div>
        <button @click="coperation">合作洽谈</button>
        <p>联系方式：021-2651625</p>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    imgBox: [
      { id: 1, src: require('@/assets/img/home/banner.jpg') },
      { id: 2, src: require('@/assets/img/home/banner.jpg') },
      { id: 3, src: require('@/assets/img/home/banner.jpg') }
    ],
    bannerHeight: 0,
    imgHeight: 0
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
.home {
  .banner-img {
    img {
      width: 100%;
    }
  }
  .product-info {
    width: 100%;
    height: 625px;
    background: url('../../assets/img/home/default-productInfo.jpg') no-repeat;
    background-size: cover;
    padding-top: 54px;
    h3 {
      position: relative;
      text-align: center;
      height: 29px;
      font-size: 21px;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 29px;
      &::before {
        content: '';
        position: absolute;
        width: 39px;
        height: 5px;
        background: #FAFAFA;
        left: 50%;
        transform: translateX(-50%);
        bottom: -23px;
        border-radius: 4px;
      }
    }
    .product-info-title {
      width: 353px;
    }
  }
  .market-advantage {
    width: 100%;
    > div {
      width: 1200px;
      margin: auto;
      padding-top: 35px;
      padding-bottom: 83px;
      h3 {
        position: relative;
        height: 29px;
        font-size: 21px;
        text-align: center;
        font-weight: 600;
        color: #000000;
        line-height: 29px;
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
            width: 173px;
            margin: auto;
            img {
              width: 100%;
            }
          }
          h4 {
            margin-top: 35px;
            height: 29px;
            font-size: 21px;
            font-weight: 600;
            text-align: center;
            color: #333333;
            line-height: 29px;
          }
          p {
            width: 231px;
            margin: 15px auto 0;
            font-size: 21px;
            font-weight: 400;
            color: #929292;
            line-height: 29px;
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
    padding-top: 42px;
    h3 {
      position: relative;
      height: 29px;
      font-size: 21px;
      text-align: center;
      font-weight: 600;
      color: #fff;
      line-height: 29px;
      margin-bottom: 90px;
      &::before {
        content: '';
        position: absolute;
        width: 39px;
        height: 5px;
        background: #fff;
        left: 50%;
        transform: translateX(-50%);
        bottom: -23px;
        border-radius: 4px;
      }
    }
    > div {
      width: 1200px;
      margin: auto;
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
  .cooperation {
    width: 100%;
    height: 508px;
    background: url('../../assets/img/home/cooperation.jpg') no-repeat;
    background-size: contain;
    position: relative;
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

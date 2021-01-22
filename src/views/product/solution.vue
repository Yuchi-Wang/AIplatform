<template>
  <div ref="solution" class="solution">
    <div class="banner">
      <div>
        <h3>语音识别解决方案</h3>
        <p>
          行业先进的语音识别技术，识别率可达98%（注：安徽电子产品监督检验所检测，报告编号151209010027）
        </p>
        <p>
          除中文普通话和英文外，支持12个语种，25种方言，提供四川话、广东话与普通话的混合识别
        </p>
        <button @click="coperation">合作咨询</button>
      </div>
    </div>
    <div class="quick-nav">
      <ul>
        <li v-for="(item, index) in quickNav" :key="item.id">
          <img v-if="activeIndex === index" src="../../assets/img/product/solution/posittion.svg">
          <span @click="jumpTo(item.position, index)">{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <div>
        <h3>方案原理</h3>
        <p>
          基于讯飞自主研发的机器翻译引擎，提供更优质的翻译接口。其中中英互译能力媲美大学英语六级水平，
          目前已逐步支持英日韩法西俄等多语种与中文的高品质互译。
        </p>
      </div>
      <div class="app-scene">
        <h3>应用场景</h3>
        <div v-enlarge-styleBackground class="oral-language">
          <div class="app-scene-dec">
            <p>口语交流学习</p>
            <h5>辅助日常社交沟通、阅读、外语学习等</h5>
          </div>
        </div>
        <div v-enlarge-styleBackground class="go-abroad">
          <div class="app-scene-dec">
            <p>出国旅游</p>
          </div>
        </div>
        <div v-enlarge-styleBackground class="translate">
          <div class="app-scene-dec">
            <p>文档资料翻译</p>
          </div>
        </div>
      </div>
      <div class="technology-advantage">
        <h3>技术优势</h3>
        <ul>
          <li v-for="item in technologyAdvantage" :key="item.id">
            <div
              v-enlarge-styleBackground
              class="product-characteristic-bg"
              :style="{backgroundImage: 'url('+ item.src +')'}"
            />
            <h4>{{ item.title }}</h4>
            <p>{{ item.dec }}</p>
          </li>
        </ul>
      </div>
      <div class="docking-process">
        <h3>对接流程</h3>
        <div class="steps">
          <div class="first">
            <span>1</span>
            <p>申请注册</p>
          </div>
          <div class="second">
            <span>2</span>
            <p>下载SDK</p>
          </div>
          <div class="third">
            <span>3</span>
            <p>对接</p>
          </div>
        </div>
        <button @click="checkFile">相关文档</button>
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
  name: 'Solution',
  data: () => ({
    technologyAdvantage: [
      { id: 1,
        src: require('../../assets/img/product/solution/technology-advantage1.png'),
        title: '技术先进',
        dec: '辅助日常社交沟通、阅读、外语学习等'
      },
      { id: 2,
        src: require('../../assets/img/product/solution/technology-advantage2.png'),
        title: '注音校正',
        dec: '中英互译水平达到大学英语六级水平，极速返回翻译结果，响应速度800ms以内。'
      },
      { id: 3,
        src: require('../../assets/img/product/solution/technology-advantage3.png'),
        title: '文本纠错',
        dec: '支持英语、日语、韩语、法语、西班牙语、俄语等10多种语种与中文的互译。'
      }
    ],
    quickNav: [
      { id: 1, title: '方案原理', position: '445' },
      { id: 2, title: '应用场景', position: '646' },
      { id: 3, title: '技术优势', position: '1060' },
      { id: 4, title: '对接流程', position: '1440' },
      { id: 5, title: '合作咨询', position: '1817' }
    ],
    scroll: '',
    activeIndex: 0
  }),
  computed: {
    // 为了清除选择器作用域过大问题
    queryDom() {
      const dom = this.$refs.solution
      return dom || document
    }
  },
  mounted() {
    this.menu()
    window.addEventListener('scroll', this.menu)
  },
  destroyed() {
    window.removeEventListener('scroll', this.menu)
  },
  methods: {
    coperation() {
      this.$router.push('/about/businessCoperation')
    },
    checkFile() {
      this.$router.push('/file/platformInfo')
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      if (this.scroll > 440) {
        this.queryDom.querySelectorAll('.quick-nav').forEach(itemDom => {
          itemDom.setAttribute(
            'style',
            'width:100%;position:fixed;top:61.49px;z-index:999'
          )
        })
      } else {
        this.queryDom.querySelectorAll('.quick-nav').forEach(itemDom => {
          itemDom.setAttribute(
            'style',
            'width:100%;position:position: relative'
          )
        })
      }
    },
    jumpTo(position, index) {
      this.activeIndex = index
      window.scrollTo({ top: position, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped lang="scss">
.solution {
  .banner {
    width: 100%;
    height: 505px;
    background: url('../../assets/img/product/solution/banner.jpg') no-repeat;
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
  .quick-nav {
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0px 5px 14px 0px rgba(227,227,227,0.5);
    ul {
      width: 1200px;
      margin: auto;
      li {
        height: 52px;
        line-height: 52px;
        display: inline-block;
        width: 20%;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        position: relative;
        img {
          vertical-align: middle;
          transform: translate(-5px, 2px)
        }
        span {
          display: inline-block;
          height: 52px;
          line-height: 52px;
          cursor: pointer;
        }
        &::before {
          content:"";
          width:25%;
          height:1px;
          background-color: #D8D8D8;
          position:absolute;
          top:26px;
          z-index:1;
          left: 0;
          }
        &::after {
            content:"";
            width:25%;
            height:1px;
            background-color: #D8D8D8;
            position:absolute;
            top:26px;
            z-index:1;
            right: 0;
          }
        &:nth-of-type(1) {
           &::before {
             display: none;
          }
        }
        &:nth-of-type(5) {
           &::after {
             display: none;
          }
        }
      }
    }
  }
  .main {
    width: 1200px;
    margin: auto;
    padding-top: 70px;
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
      > p {
        font-size: 16px;
        font-weight: 400;
        color: #2E2E2E;
        text-align: center;
        line-height: 18px;
      }
    }
    .app-scene {
      margin-top: 103px;
      margin-bottom: 50px;
      > div {
       display: inline-block;
       position: relative;
       width: 32.222%;
       height: 266px;
       vertical-align: text-top;
       &:nth-of-type(1),&:nth-of-type(2) {
           margin-right: 20px;
       }
        .app-scene-dec {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          p {
            height: 21px;
            font-size: 21px;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 21px;
            text-align: center;
          }
          h5 {
            width: 250px;
            margin-top: 26px;
            font-size: 14px;
            text-align: center;
            color: #FFFFFF;
            line-height: 19px;

          }
        }
      }
      .oral-language {
          background: url('../../assets/img/product/solution/app-scene1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
       .go-abroad {
          background: url('../../assets/img/product/solution/app-scene2.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
       .translate {
          background: url('../../assets/img/product/solution/app-scene3.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
      }
    }
    .technology-advantage {
      margin: 26px 0 56px 0;
      padding: 26px 0;
      width: 100%;
      background: #F8F8F8;
      li {
        display: inline-block;
        width: 33.33%;
        text-align: center;
        vertical-align: text-top;
        .product-characteristic-bg {
          width: 132px;
          height: 132px;
          margin: 0 auto 21px;
          border-radius: 50%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
        h4 {
          height: 21px;
          margin-bottom: 13px;
          font-size: 15px;
          font-weight: 600;
          color: #000000;
          line-height: 21px;
        }
        p {
          width: 265px;
          font-size: 12px;
          font-weight: 400;
          color: #666;
          line-height: 18px;
          margin: auto;
        }
      }
    }
    .docking-process {
        padding-bottom: 67px;
      .steps {
        width: 100%;
        > div {
          display: inline-block;
          width: 33.33%;
          text-align: center;
          span {
            position: relative;
            display: inline-block;
            width: 44px;
            height: 44px;
            line-height: 44px;
            border-radius: 50%;
            background: #2F54EB;
            color: #fff;
          }
          p {
            color:#1615FF;
            margin-top: 20px;
            margin-bottom: 55px;
          }
        }
        .second, .third {
          span {
            background: #E9E9FF;
            color: #1615FF;
          }
        }
        .first,.third,.second {
          position: relative;
          &::before {
            content:"";
            width:40%;
            height:1px;
            background-color:#1615FF;
            position:absolute;
            top: 22px;
            z-index:1;
            left:0;
          }
          &::after {
            content:"";
            width:40%;
            height:1px;
            background-color:#1615FF;
            position:absolute;
            top: 22px;
            z-index:1;
            right:0;
          }
        }
      }
      button {
        position: relative;
        display: block;
        width: 134px;
        height: 44px;
        margin: auto;
        text-align: center;
        background: #2F54EB;
        color: #fff;
        border-radius: 27px;
        cursor: pointer;
        transition: all .3s;
        &:hover {
           background: #1d39c4;
        }
        &::after {
          position: absolute;
          z-index: 99;
          display: inline-block;
          right: 20px;
          top: 50%;
          margin-top: -6px;
          content: "";
          display: inline-block;
          height: 10px;
          width: 10px;
          border-width: 2px 2px 0 0;
          border-color: #fff;
          border-style: solid;
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
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

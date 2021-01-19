<template>
  <div class="login">
    <div>
      <h3>胜龙AI开放平台</h3>
      <h4>AI&emsp;解决方案&emsp;科技未来</h4>
      <p>提供金融等各行业技术服务</p>
      <div class="login-form">
        <img src="../../assets/img/user/login-title.svg" class="login-title">
        <img src="../../assets/img/user/login-qrcode.svg" class="login-qrcode">
        <el-form ref="loginForm" :rules="rules" :model="loginForm" class="login-ruleForm">
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.account"
              maxlength="18"
              prop="account"
              placeholder="请输入手机号码/邮箱账号/用户名"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              maxlength="16"
              class="password-input"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item class="fogot-password">
            <el-link type="primary" :underline="false" @click="fogetPassword">忘记密码？</el-link>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-button" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="no-register">
          <span>您还没有注册？</span>
          <span class="mob-register register-color" @click="mobileRegistration">手机注册</span>
          <span class="register-color" @click="emailRegistration">邮箱注册</span>
        </p>
      </div>
      <footer>
        <p>
          <span>备案号</span>
          <span class="record-no">xxx xxxxxxxxxxx</span>
          <span>v.1.0</span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    loginForm: {
      account: '',
      password: ''
    },
    rules: {
      account: [
        { required: true, message: '请输入手机号码/邮箱账号或者用户名', trigger: 'blur' },
        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
      ]
    }
  }),
  mounted() {},
  methods: {
    submitForm(loginForm) {

    },
    fogetPassword() {
      this.$router.push({ name: 'forgetpwd' })
    },
    mobileRegistration() {
      this.$router.push({ name: 'register', query: { type: 'mobile' }})
    },
    emailRegistration() {
      this.$router.push({ name: 'register', query: { type: 'email' }})
    }
  }
}
</script>

<style lang="scss" scoped>
body, html {
 height: 100%;
 min-height: 100%;
}
.login {
  background: url('../../assets/img/user/user.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    padding-top: 107px;
    width: 1200px;
    position: relative;
    margin: auto;
    height: 100%;
    h3 {
      height: 46px;
      font-size: 33px;
      font-weight: 600;
      color: #FFFFFF;
      margin-bottom: 4px;
      line-height: 46px;
      text-shadow: 0px 0px 40px #000000;
      background: linear-gradient(180deg, #8DB2FF 0%, rgba(143, 195, 255, 0.95) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h4 {
      height: 61px;
      font-size: 44px;
      font-family: HiraKakuProN-W6, HiraKakuProN;
      margin-bottom: 27px;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 66px;
      text-shadow: 0px 0px 40px #000000;
      background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    > p {
      height: 35px;
      font-size: 25px;
      color: #FFFFFF;
      line-height: 35px;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    }
    .login-form {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 372px;
      background: #FFF;
      box-shadow: 0px 0px 9px 0px rgba(125,125,125,1);
      border-radius: 7px;
      border: 3px solid #EFF3FF;
      text-align: center;
      .login-title {
        width: 157px;
        margin-top: 47px;
      }
      .login-qrcode {
        position: absolute;
        top: -5px;
        right: -5px;
      }
      .login-ruleForm {
        padding: 34px 54px 0 54px;
        /deep/ .el-form-item {
          margin-bottom: 24px;
        }
        .password-input {
          margin-top: 6px;
        }
        .fogot-password {
          text-align: right;
            a {
              color: #4360FF;
            }
          }
        /deep/ .el-input {
          input {
            background: #F0F5FF;
            border-radius: 18px;
            border-color: #F0F5FF;
            color: #2E3362;
            &::-webkit-input-placeholder {
              color: #2E3362;
            }
            &::-moz-placeholder {
              color: #2E3362;
            }
            &:-moz-placeholder {
              color: #2E3362;
            }
            &:-ms-input-placeholder {
              color: #2E3362;
            }
          }
        }
        .login-button {
          width: 264px;
          background: #2F54EB;
          border-radius: 16px;
        }
      }
      .no-register {
        text-align: left;
        margin-left: 54px;
        height: 18px;
        font-size: 12px;
        font-weight: 600;
        color: #414141;
        line-height: 18px;
        margin-bottom: 40px;
        .mob-register {
          display: inline-block;
          margin: 0 12px;
        }
        .register-color {
          color: #2F54EB;
          cursor: pointer;
        }
      }
    }
    footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding-bottom: 18px;
      text-align: right;
      p {
        height: 18px;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 18px;
        span {
            display: inline-block;
        }
        .record-no {
          margin: 0 40px 0 14px;
        }
      }
    }
  }
}
</style>

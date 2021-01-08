<template>
  <div class="register">
    <h3>胜龙AI开放平台</h3>
    <h4>AI&emsp;解决方案&emsp;科技未来</h4>
    <p>提供金融等各行业技术服务</p>
    <div class="register-form">
      <img src="../../assets/img/user/login-title.svg" class="register-title">
      <img src="../../assets/img/user/login-qrcode.svg" class="register-qrcode">
      <el-form ref="registerForm" :rules="rules" :model="registerForm" class="register-ruleForm">
        <el-form-item prop="userName">
          <el-input
            v-model="registerForm.userName"
            maxlength="18"
            placeholder="请输入手机号码/邮箱账号/用户名"
          />
        </el-form-item>
        <el-form-item prop="verificationCode">
          <el-input
            v-model.number="registerForm.verificationCode"
            maxlength="6"
            class="verification-input"
            placeholder="请输入验证码"
          />
          <el-button class="verification-button" @click.prevent="getVerificationCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            maxlength="16"
            class="password-input"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="registerForm.confirmPassword"
            type="password"
            placeholder="请再次输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register-button" @click="submitForm('registerForm')">找回密码</el-button>
        </el-form-item>
      </el-form>
      <el-button class="login-button" @click="turnBack">返回登录</el-button>
    </div>
    <footer>
      <p>
        <span>备案号</span>
        <span class="record-no">xxx xxxxxxxxxxx</span>
        <span>v.1.0</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ForgetPwd',
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        userName: '',
        password: '',
        confirmPassword: '',
        verificationCode: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getVerificationCode() {},
    submitForm(registerForm) {},
    checkAgreement() {},
    checkPolicy() {},
    turnBack() {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
body, html {
  height: 100%;
 min-height: 100%;
 background: url('../../assets/img/user/user.jpg') no-repeat;
 background-size: cover;
}
.register {
  padding-top: 107px;
  width: 1200px;
  margin: auto;
  height: 100%;
  min-height: 100%;
  position: relative;
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
  .register-form {
      position: absolute;
      top: 107px;
      right: 0;
      width: 372px;
      background: #FFFFFF;
      box-shadow: 0px 0px 9px 0px rgba(125,125,125,1);
      border-radius: 7px;
      border: 3px solid #EFF3FF;
      text-align: center;
      .el-form-item {
        .verification-input {
          width: 170px;
        }
        .verification-button {
          background: #2F54EB;
          border-radius: 30px;
          margin-left: 9px;
          padding: 9px 12px;
          font-size: 12px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 18px;
        }
      }
      .register-title {
        width: 157px;
        margin-top: 47px;
      }
      .register-qrcode {
        position: absolute;
        top: -5px;
        right: -5px;
      }
      .register-ruleForm {
        padding: 20px 50px 0 50px;
        /deep/ .el-form-item {
          margin-bottom: 16px;
        }
        .password-input {
          margin-top: 6px;
        }
        .el-input {
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
        .register-button {
          width: 264px;
          height: 30px;
          line-height: 30px;
          background: #2F54EB;
          padding: 0!important;
          border-radius: 16px;
        }
      }
    .login-button {
      width: 264px;
      height: 30px;
      line-height: 30px;
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid #2F54EB;
      color: #2F54EB;
      padding: 0!important;
      margin-bottom: 40px;
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
</style>

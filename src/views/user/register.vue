<template>
  <div class="register">
    <div>
      <h3>胜龙AI开放平台</h3>
      <h4>AI&emsp;解决方案&emsp;科技未来</h4>
      <p>提供金融等各行业技术服务</p>
      <div class="register-form">
        <img src="@/assets/img/user/login-title.svg" class="register-title" @click="goIndex">
        <el-form ref="registerForm" :rules="rules" :model="registerForm" class="register-ruleForm">
          <el-form-item prop="userName" class="m-b-18">
            <el-input
              v-model="registerForm.userName"
              maxlength="18"
              :placeholder="userName"
            />
          </el-form-item>
          <el-form-item v-if="registerType === 'mobile'" prop="mobile" class="m-b-18">
            <el-input
              v-model.number="registerForm.mobile"
              maxlength="11"
              :placeholder="phone"
            />
          </el-form-item>
          <el-form-item v-if="registerType === 'email'" prop="email" class="m-b-18">
            <el-input
              v-model="registerForm.email"
              maxlength="50"
              :placeholder="email"
            />
          </el-form-item>
          <el-form-item prop="verificationCode" class="m-b-18">
            <el-input
              v-model.number="registerForm.verificationCode"
              maxlength="6"
              class="verification-input"
              :placeholder="vCode"
            />
            <el-button class="verification-button" @click.prevent="getVerificationCode">{{ $t('button.getVCode') }}</el-button>
          </el-form-item>
          <el-form-item prop="password" class="m-b-18">
            <el-input
              v-model="registerForm.password"
              maxlength="16"
              class="password-input"
              :placeholder="password"
              show-password
            />
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input
              v-model="registerForm.confirmPassword"
              type="password"
              :placeholder="passwordAgain"
              show-password
              class="m-b-5"
            />
          </el-form-item>
          <el-form-item class="policy">
            <el-checkbox v-model="checked">
              {{ $t('user.agree') }}
            </el-checkbox>
            <span class="policy-color" @click.prevent="checkAgreement">{{ $t('user.agreement') }}</span>
            <span>{{ $t('user.and') }}</span>
            <span class="policy-color" @click.prevent="checkPolicy">{{ $t('user.privacyPolicy') }}</span>
          </el-form-item>
          <el-form-item class="m-b-14">
            <el-button type="primary" class="register-button" @click="submitForm('registerForm')">{{ $t('button.register') }}</el-button>
          </el-form-item>
        </el-form>
        <el-button class="login-button" @click="turnBack">{{ $t('button.backTologin') }}</el-button>
      </div>
      <footer>
        <p>
          <span>{{ $t('footer.recordNumber') }}</span>
          <span class="record-no">xxx xxxxxxxxxxx</span>
          <span>v.1.0</span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('form.error.passwordAgain')))
      } else if (value !== this.registerForm.password) {
        callback(new Error(this.$t('form.error.passwordConfirm')))
      } else {
        callback()
      }
    }
    return {
      registerType: '',
      registerForm: {
        userName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        verificationCode: ''
      },
      rules: {
        userName: [
          { required: true, message: this.$t('form.error.userName'), trigger: 'blur' },
          { min: 6, max: 18, message: this.$t('form.error.userNameLength'), trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: this.$t('form.error.phone'), trigger: 'blur' },
          { min: 11, max: 11, message: this.$t('form.error.phoneConfirm'), trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t('form.error.email'), trigger: 'blur' },
          { type: 'email', message: this.$t('form.error.emailConfirm'), trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: this.$t('form.error.vCode'), trigger: 'blur' },
          { min: 6, max: 6, message: this.$t('form.error.vCodeConfirm'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('form.error.password'), trigger: 'blur' },
          { min: 6, max: 16, message: this.$t('form.error.passwordLength'), trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      },
      checked: false
    }
  },
  computed: {
    userName() {
      return this.$t('form.error.userName')
    },
    password() {
      return this.$t('form.error.password')
    },
    passwordAgain() {
      return this.$t('form.error.passwordAgain')
    },
    vCode() {
      return this.$t('form.error.vCode')
    },
    phone() {
      return this.$t('form.error.phone')
    },
    phoneConfirm() {
      return this.$t('form.error.phoneConfirm')
    },
    email() {
      return this.$t('form.error.email')
    }
  },
  mounted() {
    this.registerType = this.$route.query.type
  },
  methods: {
    getVerificationCode() {},
    submitForm(registerForm) {},
    checkAgreement() {
      this.$router.push('/user/serviceagreement')
    },
    checkPolicy() {
      this.$router.push('/user/privacyPolicy')
    },
    turnBack() {
      this.$router.replace({ name: 'login' })
    },
    goIndex() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
body, html {
  height: 100%;
  min-height: 100%;
}
.m-b-18 {
  margin-bottom: 18px!important;
}
.m-b-5 {
  margin-bottom: 5px!important;
}
.m-b-14 {
  margin-bottom: 14px!important;
}
.register {
  background: url('../../assets/img/user/user.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    padding-top: 13%;
    width: 1200px;
    position: relative;
    margin: auto;
    height: 100%;
    > p {
      height: 35px;
      font-size: 25px;
      color: #FFFFFF;
      line-height: 35px;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    }
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
  }
  .register-form {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
        border: 1px solid #2F54EB;
        transition: all .3s;
        border-radius: 30px;
        margin-left: 9px;
        padding: 9px 12px;
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 18px;
        &:hover {
          background: #1d39c4;
          border: 1px solid #1d39c4;
        }
      }
    }
    .policy {
      /deep/ .el-checkbox__label {
        height: 15px;
        font-size: 12px;
        font-weight: 400;
        color: #404040;
        line-height: 15px;
      }
      span {
        font-size: 12px;
      }
      .policy-color {
        color: #4666FF;
        cursor: pointer;
        font-size: 12px;
      }
    }
    .register-title {
      width: 157px;
      margin-top: 40px;
      cursor: pointer;
    }
    .register-ruleForm {
      padding: 20px 50px 0 50px;
      /deep/ .el-form-item {
         margin-bottom: 0;
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
      .register-button {
        width: 264px;
        height: 30px;
        line-height: 30px;
        background: #2F54EB;
        border: 1px solid #2F54EB;
        transition: all .3s;
        padding: 0!important;
        border-radius: 16px;
        &:hover {
          background: #1d39c4;
          border: 1px solid #1d39c4;
        }
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
      margin-bottom: 28px;
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

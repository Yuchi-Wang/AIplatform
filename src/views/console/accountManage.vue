<template>
  <div class="account-manage">
    <div class="account-bg">
      <img src="@/assets/img/console/account-icon.svg">
    </div>
    <div class="account-form">
      <el-form ref="ruleForm" :model="baseInfoForm" :rules="rules" label-width="150px">
        <el-form-item :label="myID" prop="userName">
          <el-input v-model="baseInfoForm.userName" />
        </el-form-item>
        <el-form-item :label="bindingMobileNumber">
          <el-input v-model.number="baseInfoForm.phone" disabled maxlength="11" />
          <el-link :underline="false" type="primary" class="m-l-10" @click="unbundlingPhone">{{ $t('form.unbindingMobileNumber') }}</el-link>
        </el-form-item>
        <el-form-item :label="bindingWechat" prop="wechatID">
          <el-input v-model="baseInfoForm.wechatID" disabled />
          <el-link :underline="false" type="primary" class="m-l-10" @click="unbundlingWechat">{{ $t('form.unbindingWechat') }}</el-link>
        </el-form-item>
        <el-form-item :label="password">
          <el-link :underline="false" type="primary" @click="pwdDialogVisible = true">{{ $t('form.editPassword') }}</el-link>
        </el-form-item>
        <el-form-item :label="companyName" prop="companyName">
          <el-input v-model="baseInfoForm.companyName" />
        </el-form-item>
        <el-form-item :label="name" prop="name">
          <el-input v-model="baseInfoForm.name" :disabled="editName" />
          <el-link v-if="editName" :underline="false" type="primary" class="m-l-10" @click="editName = false">{{ $t('form.editPassword') }}</el-link>
        </el-form-item>
        <el-form-item :label="location" prop="baseName">
          <el-input v-model="baseInfoForm.baseName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="submitForm('ruleForm')">{{ $t('form.submit') }}</el-button>
          <el-button>{{ $t('button.reset') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 修改密码弹窗 -->
    <el-dialog
      :visible.sync="pwdDialogVisible"
      width="372px"
      center
      class="edit-pwd-dialog"
    >
      <div slot="title" class="header-title">
        <h3>
          <img src="@/assets/img/console/password.svg">
          {{ $t('form.modifyPassword') }}
        </h3>
      </div>
      <el-form ref="changePwdForm" :model="changePwdForm" :rules="rules" class="change-form">
        <el-form-item prop="originalPwd">
          <el-input
            v-model="changePwdForm.originalPwd"
            :placeholder="originalPassword"
            maxlength="16"
            show-password
          />
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input
            v-model="changePwdForm.newPassword"
            :placeholder="newPassword"
            maxlength="16"
            show-password
          />
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="changePwdForm.confirmPassword"
            :placeholder="passwordAgain"
            maxlength="16"
            show-password
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" round @click="pwdDialogVisible = false">{{ $t('form.submit') }}</el-button>
        <el-button round @click="pwdDialogVisible = false">{{ $t('button.return') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AccountManage',
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('form.error.passwordAgain')))
      } else if (value !== this.changePwdForm.newPassword) {
        callback(new Error(this.$t('form.error.passwordConfirm')))
      } else {
        callback()
      }
    }
    return {
      baseInfoForm: {
        userName: '',
        phone: '',
        wechatID: '',
        name: '张伟',
        companyName: '',
        baseName: ''
      },
      changePwdForm: {
        originalPwd: '',
        newPassword: '',
        confirmPassword: ''
      },
      editName: true,
      pwdDialogVisible: false,
      rules: {
        userName: [
          { required: true, message: this.$t('form.error.userName'), trigger: 'blur' },
          { min: 1, max: 12, message: this.$t('form.error.contactPersonLength'), trigger: 'blur' }
        ],
        companyName: [
          { required: true, message: this.$t('form.error.companyName'), trigger: 'blur' },
          { min: 1, max: 50, message: this.$t('form.error.companyNameLength'), trigger: 'blur' }
        ],
        baseName: [
          { required: true, message: this.$t('form.error.baseName'), trigger: 'blur' },
          { min: 1, max: 20, message: this.$t('form.error.baseNameLength'), trigger: 'blur' }
        ],
        name: [
          { required: true, message: this.$t('form.error.name'), trigger: 'blur' },
          { min: 1, max: 12, message: this.$t('form.error.userName'), trigger: 'blur' }
        ],
        originalPwd: [
          { required: true, message: this.$t('placeholder.originalPassword'), trigger: 'blur' },
          { min: 6, max: 16, message: this.$t('form.error.passwordLength'), trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: this.$t('placeholder.newPassword'), trigger: 'blur' },
          { min: 6, max: 16, message: this.$t('form.error.passwordLength'), trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    myID() {
      return this.$t('form.myID')
    },
    name() {
      return this.$t('form.name')
    },
    bindingMobileNumber() {
      return this.$t('form.bindingMobileNumber')
    },
    unbindingMobileNumber() {
      return this.$t('form.unbindingMobileNumber')
    },
    bindingWechat() {
      return this.$t('form.bindingWechat')
    },
    unbindingWechat() {
      return this.$t('form.unbindingWechat')
    },
    companyName() {
      return this.$t('form.companyName')
    },
    password() {
      return this.$t('form.password')
    },
    originalPassword() {
      return this.$t('placeholder.originalPassword')
    },
    newPassword() {
      return this.$t('placeholder.newPassword')
    },
    passwordAgain() {
      return this.$t('placeholder.passwordAgain')
    },
    location() {
      return this.$t('form.location')
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    unbundlingPhone() {
      this.$confirm(this.$t('console.app.unbundlingPhoneRemain'), this.$t('console.app.warning'), {
        confirmButtonText: this.$t('button.submit'),
        cancelButtonText: this.$t('button.cancle'),
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: this.$t('console.app.successUnbundlingPhoneRemain')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: this.$t('console.app.cancleUnbundlingPhoneRemain')
        })
      })
    },
    unbundlingWechat() {
      this.$confirm(this.$t('console.app.unbundlingWechatRemain'), this.$t('console.app.warning'), {
        confirmButtonText: this.$t('button.submit'),
        cancelButtonText: this.$t('button.cancle'),
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: this.$t('console.app.successUnbundlingWechatRemain')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: this.$t('console.app.cancleUnbundlingWechatRemain')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.account-manage {
  height: 100%;
  min-height: 100%;
  position: relative;
  .account-bg {
    width: 90px;
    position: absolute;
    top: 0;
    bottom: 0;
    background: linear-gradient(128deg, #4600FF 0%, #6132FF 55%, #775BFF 100%);
    img {
      position: absolute;
      width: 83px;
      left: 45px;
      top: 40px;
    }
  }
  .account-form {
    padding: 25px;
    margin-left: 90px;
    .el-form {
      .el-input {
        width: 280px;
      }
      .m-l-10 {
        margin-left: 10px;
      }
      .submit-button {
        background:#2F54EB;
        border: 1px solid #2F54EB;
        transition: all .3s;
        &:hover {
          background: #1d39c4;
          border: 1px solid #1d39c4;
        }
      }
    }
  }
  .edit-pwd-dialog {
    .header-title {
      h3 {
        height: 35px;
        line-height: 35px;
        font-size: 18px;
        color: #000;
        line-height: 35px;
        vertical-align: middle;
        img {
          display: inline-block;
          margin-right: 1px;
          width: 15px;
        }
      }
    }
    /deep/.el-dialog__body {
      padding-bottom: 5px;
    }
    /deep/.el-dialog__footer {
      padding: 0 25px;
      .el-button {
        width: 100%;
        margin: 0 0 18px 0;
        &:nth-of-type(1) {
          background:#2F54EB;
          transition: all .3s;
          &:hover {
            background: #1d39c4;
          }
        }
      }
    }
    /deep/.el-input {
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
  }
}
</style>


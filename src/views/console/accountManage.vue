<template>
  <div class="account-manage">
    <div class="account-bg">
      <img src="@/assets/img/console/account-icon.svg">
    </div>
    <div class="account-form">
      <el-form ref="ruleForm" :model="baseInfoForm" :rules="rules" label-width="130px">
        <el-form-item label="我的ID：" prop="userName">
          <el-input v-model="baseInfoForm.userName" />
        </el-form-item>
        <el-form-item label="绑定手机号：">
          <el-input v-model.number="baseInfoForm.phone" disabled maxlength="11" />
          <el-link :underline="false" type="primary" class="m-l-10" @click="unbundlingPhone">解绑手机号</el-link>
        </el-form-item>
        <el-form-item label="绑定微信：" prop="wechatID">
          <el-input v-model="baseInfoForm.wechatID" disabled />
          <el-link :underline="false" type="primary" class="m-l-10" @click="unbundlingWechat">解绑微信</el-link>
        </el-form-item>
        <el-form-item label="登录密码：">
          <el-link :underline="false" type="primary" @click="pwdDialogVisible = true">设置新密码</el-link>
        </el-form-item>
        <el-form-item label="公司名称：" prop="companyName">
          <el-input v-model="baseInfoForm.companyName" />
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="baseInfoForm.name" :disabled="editName" />
          <el-link v-if="editName" :underline="false" type="primary" class="m-l-10" @click="editName = false">修改</el-link>
        </el-form-item>
        <el-form-item label="所在地：" prop="baseName">
          <el-input v-model="baseInfoForm.baseName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-button" @click="submitForm('ruleForm')">提交</el-button>
          <el-button>重置</el-button>
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
          修改密码
        </h3>
      </div>
      <el-form ref="changePwdForm" :model="changePwdForm" :rules="rules" class="change-form">
        <el-form-item prop="originalPwd">
          <el-input
            v-model="changePwdForm.originalPwd"
            placeholder="请输入原密码"
            maxlength="16"
            show-password
          />
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input
            v-model="changePwdForm.newPassword"
            placeholder="请输入新密码"
            maxlength="16"
            show-password
          />
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="changePwdForm.confirmPassword"
            placeholder="请再次输入密码"
            maxlength="16"
            show-password
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" round @click="pwdDialogVisible = false">确 认</el-button>
        <el-button round @click="pwdDialogVisible = false">返 回</el-button>
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
        callback(new Error('请再次输入密码'))
      } else if (value !== this.changePwdForm.newPassword) {
        callback(new Error('两次输入密码不一致!'))
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
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 12, message: '长度不超过12字符', trigger: 'blur' }
        ],
        companyName: [
          { required: true, message: '请输入公司名', trigger: 'blur' },
          { min: 1, max: 50, message: '长度不超过50字符', trigger: 'blur' }
        ],
        baseName: [
          { required: true, message: '请输入所在地', trigger: 'blur' },
          { min: 1, max: 20, message: '长度不超过20字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 12, message: '长度不超过12字符', trigger: 'blur' }
        ],
        originalPwd: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
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
      this.$confirm('此操作将解绑手机号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '解绑手机号成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑手机号'
        })
      })
    },
    unbundlingWechat() {
      this.$confirm('此操作将解绑微信, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '解绑微信成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑微信'
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


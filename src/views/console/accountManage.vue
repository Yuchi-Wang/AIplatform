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
        <el-form-item label="绑定手机号：" prop="phone">
          <el-input v-model.number="baseInfoForm.phone" disabled maxlength="11" />
          <el-link :underline="false" type="primary" class="m-l-10" @click="unbundlingPhone">解绑手机号</el-link>
        </el-form-item>
        <el-form-item label="绑定微信：" prop="wechatID">
          <el-input v-model="baseInfoForm.wechatID" disabled />
          <el-link :underline="false" type="primary" class="m-l-10" @click="unbundlingWechat">解绑微信</el-link>
        </el-form-item>
        <el-form-item label="登录密码：">
          <el-link :underline="false" type="primary">设置新密码</el-link>
        </el-form-item>
        <el-form-item label="公司名称：" prop="companyName">
          <el-input v-model="baseInfoForm.companyName" />
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="baseInfoForm.name" :disabled="true" />
          <el-link :underline="false" type="primary" class="m-l-10">修改</el-link>
        </el-form-item>
        <el-form-item label="所在地：" prop="baseName">
          <el-input v-model="baseInfoForm.baseName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountManage',
  data: () => ({
    baseInfoForm: {
      userName: '',
      phone: '',
      wechatID: '',
      name: '张伟',
      companyName: '',
      baseName: '',
      editName: true
    },
    rules: {
      userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 1, max: 12, message: '长度不超过12字符', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: '请输入联系电话', trigger: 'blur' },
        { min: 11, max: 11, message: '联系电话格式不正确', trigger: 'blur' }
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
      ]
    }
  }),
  methods: {
    submitForm(form) {},
    unbundlingPhone() {},
    unbundlingWechat() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
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
    }
  }
}
</style>


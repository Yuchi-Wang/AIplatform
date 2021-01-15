<template>
  <div class="account-manage">
    <div class="account-bg" />
    <div class="account-form">
      <el-form ref="ruleForm" :model="baseInfoForm" :rules="rules" label-width="130px">
        <el-form-item label="我的ID：" prop="userName">
          <el-input v-model="baseInfoForm.userName" />
        </el-form-item>
        <el-form-item label="绑定手机号：" prop="phone">
          <el-input v-model.number="baseInfoForm.phone" maxlength="11" />
        </el-form-item>
        <el-form-item label="绑定微信：" prop="wechatID">
          <el-input v-model="baseInfoForm.wechatID" />
        </el-form-item>
        <el-form-item label="登录密码：">
          <el-link :underline="false" type="primary">设置新密码</el-link>
        </el-form-item>
        <el-form-item label="公司名称：" prop="companyName">
          <el-input v-model="baseInfoForm.companyName" />
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="baseInfoForm.Name" />
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
      name: '',
      companyName: '',
      baseName: ''
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
    submitForm(form) {}
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
  }
  .account-form {
    padding: 25px;
    margin-left: 90px;
    .el-form {
      .el-input {
        width: 280px;
      }
    }
  }
}
</style>


<template>
  <div class="technical-support">
    <BaseHeader />
    <div class="banner" />
    <div class="main">
      <h3>技术支持</h3>
      <el-form ref="ruleForm" :model="supportForm" :rules="rules" label-width="180px">
        <el-form-item label="联系人" prop="userName">
          <el-input v-model="supportForm.userName" />
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="supportForm.email" />
        </el-form-item>
        <el-form-item label="应用场景和技术能力要求" prop="content">
          <el-input v-model="supportForm.content" type="textarea" />
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="supportForm.companyName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from '../../components/common/BaseFooter.vue'
export default {
  name: 'TechnicalSupport',
  components: { BaseFooter },
  data: () => ({
    supportForm: {
      userName: '',
      email: '',
      content: '',
      companyName: ''
    },
    rules: {
      userName: [
        { required: true, message: '请输入联系人', trigger: 'blur' },
        { min: 1, max: 12, message: '长度不超过12字符', trigger: 'blur' }
      ],
      email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ],
      content: [
        { required: true, message: '请输入内容', trigger: 'blur' },
        { min: 1, max: 300, message: '长度不超过300字符', trigger: 'blur' }
      ],
      companyName: [
        { required: true, message: '请输入内容', trigger: 'blur' },
        { min: 1, max: 50, message: '长度不超过50字符', trigger: 'blur' }
      ]
    }
  }),
  methods: {
    submitForm(form) {}
  }
}
</script>

<style scoped lang="scss">
.technical-support {
  .banner {
    width: 100%;
    height: 183px;
    background: url('../../assets/img/about/technicalSupport/banner.jpg') no-repeat;
    background-size: cover;
  }
  .main {
    width: 600px;
    margin:44px auto 105px;
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
        bottom: -23px;
        border-radius: 4px;
      }
    }
    .el-input,.el-textarea {
      width:  300px;
    }
    .el-form-item {
      .el-button {
        width: 300px;
        background:#2F54EB ;
      }
    }
  }
}
</style>


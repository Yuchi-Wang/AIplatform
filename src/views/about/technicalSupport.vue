<template>
  <div class="technical-support">
    <div class="banner" />
    <div class="main">
      <h3>{{ $t('about.technicalSupport') }}</h3>
      <el-form ref="ruleForm" :model="supportForm" :rules="rules" label-width="180px">
        <el-form-item :label="contactPerson" prop="userName">
          <el-input v-model="supportForm.userName" />
        </el-form-item>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="supportForm.email" />
        </el-form-item>
        <el-form-item :label="scenarios" prop="content">
          <el-input v-model="supportForm.content" type="textarea" />
        </el-form-item>
        <el-form-item :label="companyName" prop="companyName">
          <el-input v-model="supportForm.companyName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{ $t('form.submit') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'TechnicalSupport',
  data() {
    return {
      supportForm: {
        userName: '',
        email: '',
        content: '',
        companyName: ''
      },
      rules: {
        userName: [
          { required: true, message: this.$t('form.error.contactPerson'), trigger: 'blur' },
          { min: 1, max: 12, message: this.$t('form.error.contactPersonLength'), trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t('form.error.email'), trigger: 'blur' },
          { type: 'email', message: this.$t('form.error.emailConfirm'), trigger: ['blur', 'change'] }
        ],
        content: [
          { required: true, message: this.$t('form.error.content'), trigger: 'blur' },
          { min: 1, max: 300, message: this.$t('form.error.contentLength'), trigger: 'blur' }
        ],
        companyName: [
          { required: true, message: this.$t('form.error.companyName'), trigger: 'blur' },
          { min: 1, max: 50, message: this.$t('form.error.companyNameLength'), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    contactPerson() {
      return this.$t('form.contactPerson')
    },
    companyName() {
      return this.$t('form.companyName')
    },
    scenarios() {
      return this.$t('form.scenarios')
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
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
    margin:58px auto 105px;
    h3 {
      position: relative;
      font-size: 28px;
      font-weight: 600;
      color: #303030;
      line-height: 30px;
      text-align: center;
      margin-bottom: 40px;
      &::before {
        content: '';
        position: absolute;
        width: 39px;
        height: 5px;
        background: #2F54EB;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        border-radius: 4px;
      }
    }
    .el-input,.el-textarea {
      width:  300px;
    }
    .el-form-item {
      .el-button {
        width: 300px;
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
}
</style>


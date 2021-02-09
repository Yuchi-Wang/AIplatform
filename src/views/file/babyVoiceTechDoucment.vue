<template>
  <div class="bady-voice">
    <div>
      <h3> {{ $t('file.babyCrying.interfaceDescription') }}</h3>
      <p>{{ $t('file.babyCrying.interfaceDescriptionContent') }}</p>
    </div>
    <div>
      <h3>{{ $t('file.babyCrying.requestExplanation') }}</h3>
      <p
        style="background: #F9F9F9;height: 40px;line-height:40px;padding-left:12px;margin-bottom:10px"
      >{{ $t('file.babyCrying.requestExplanationDetail') }}</p>
      <p style="margin-bottom:35px">HTTP method {{ $t('product.use') }} GET</p>
      <h4>header：</h4>
      <el-table :header-cell-style="{background:'#f9f9f9'}" :data="headerData" border style="width: 100%">
        <el-table-column
          prop="Key"
          label="Key"
        />
        <el-table-column
          prop="value"
          label="value"
        />
      </el-table>
      <h4>body{{ $t('product.setting') }}：</h4>
      <h5>{{ $t('file.babyCrying.badySetting') }}</h5>
      <el-table :header-cell-style="{background:'#f9f9f9'}" :data="bodyData" border style="width: 100%">
        <el-table-column
          prop="Key"
          label="Key"
        />
        <el-table-column
          prop="value"
          label="value"
        />
        <el-table-column
          prop="type"
          label="format"
        />
      </el-table>
      <h5>HTTP method {{ $t('product.use') }} POST </h5>
      <p
        style="background: #F9F9F9;height: 40px;line-height:40px;padding-left:12px;margin-bottom:10px"
      >http://192.168.47.117/api/recognize</p>
      <h4 style="margin-top:47px">{{ $t('file.babyCrying.executiveIdentification') }}：</h4>
      <p
        style="background: #F9F9F9;height: 40px;line-height:40px;padding-left:12px;margin-bottom:10px"
      >http://192.168.47.117/api/recognize</p>
      <h4 style="margin:20px 0">{{ $t('file.babyCrying.recognitionScreen') }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: [{
        Key: 'Authorization',
        value: 'Bearer {token}'
      }],
      bodyData: [
        {
          Key: 'infant_id',
          value: '{ infant_id }',
          type: 'Text'
        },
        {
          Key: 'file',
          value: 'file',
          type: 'File'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bady-voice {
  > div {
    margin-bottom: 30px;
    .el-table {
      margin-bottom: 33px;
    }
    h3 {
      height: 29px;
      font-size: 21px;
      font-weight: 600;
      color: #000000;
      line-height: 29px;
      margin-bottom: 18px;
    }
    h4 {
      height: 18px;
      font-size: 14px;
      font-weight: 600;
      color: #000000;
      line-height: 18px;
      margin-bottom: 10px;
    }
    h5{
      height: 18px;
      font-size: 12px;
      font-weight: 400;
      color: #686868;
      line-height: 18px;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 400;
      color: #000000;
      line-height: 20px;
    }
  }
}
</style>

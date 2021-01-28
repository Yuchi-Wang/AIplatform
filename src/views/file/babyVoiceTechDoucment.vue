<template>
  <div class="bady-voice">
    <div>
      <h3>接口描述</h3>
      <p>支持对婴儿的情绪，包括生气、饿、尿床、痛苦的情绪变化哭声识别。</p>
    </div>
    <div>
      <h3>请求说明</h3>
      <p
        style="background: #F9F9F9;height: 40px;line-height:40px;padding-left:12px;margin-bottom:10px"
      >向授权服务地址http://140.125.46.88/api/company/{ Company_id }/token发送请求（推荐使用POST）</p>
      <p style="margin-bottom:35px">HTTP method使用GET</p>
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
      <h4>body设定：</h4>
      <h5>设定body，请选择form-data格式，之后新增两个栏位，内容如下</h5>
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
          label="格式"
        />
      </el-table>
      <h5>HTTP method 使用POST </h5>
      <p
        style="background: #F9F9F9;height: 40px;line-height:40px;padding-left:12px;margin-bottom:10px"
      >http://192.168.47.117/api/recognize</p>
      <h4 style="margin-top:47px">执行辨识：</h4>
      <p
        style="background: #F9F9F9;height: 40px;line-height:40px;padding-left:12px;margin-bottom:10px"
      >http://192.168.47.117/api/recognize</p>
      <h4 style="margin:20px 0">识别画面</h4>
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
          value: '音档',
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

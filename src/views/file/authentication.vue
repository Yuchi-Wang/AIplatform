<template>
  <div class="authentication">
    <div>
      <p>
        针对HTTP API调用者，AIP开放平台使用OAuth2.0授权调用开放API，调用API时必须在URL中带上access_token参数，
        获取Access Token的流程如下：
      </p>
    </div>
    <div>
      <p>获取Access Token</p>
      <p>请求URL数据格式</p>
    </div>
    <div>
      <p>向授权服务地址https://aip.baidubce.com/oauth/2.0/token发送请求（推荐使用POST），并在URL中带上以下参数： </p>
    </div>
    <div>
      <p>grant_type： 必须参数，固定为client_credentials；</p>
      <p> client_id： 必须参数，应用的API Key；</p>
      <p>client_secret：必须参数，应用的Secret Key；</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.authentication {
  > div {
    margin-bottom: 30px;
    p {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 400;
      color: #000;
      line-height: 20px;
    }
  }
}
</style>

<template>
  <div class="quick-guide">
    <div>
      <p>1.三步完成账号的基本注册与认证</p>
      <p>第一步：点击诚龙AI开放平台导航右侧的控制台，进入后，选择需要使用的AI服务项。若为未登录状态，将跳转至登录界面，请您使用账号登录</p>
      <p>第二步：首次使用，登录后将会进入开发者认证页面，请填写相关信息完成开发者认证。</p>
      <p>第三步：通过控制台左侧导航，选择产品服务，进入具体AI服务项的控制面板，进行相关业务操作。 </p>
    </div>
    <div>
      <p>2.获取密钥</p>
      <p>在您创建完毕应用后，平台将会分配给您此应用的相关凭证，主要为AppID、API Key、Secret Key。以上三个信息是您应用实际开发的主要凭证，每个应用之间各不相同，请您妥善保管。</p>
    </div>
    <div>
      <p>3.生成签名</p>
      <p>
        您需要使用创建应用所分配到的AppID、API Key及Secret Key，进行Access Token（用户身份验证和授权的凭证）的生成，方法详见 Access Token获取，
        我们为您准备了几种常见语言的请求示例代码。 温馨提示：Access Token的有效期为30天（以秒为单位），请您集成时注意在程序中定期请求新的token
      </p>
    </div>
    <div>
      <p>4.启动开发</p>
      <p>同时，我们也为您提供集成多项能力的解决方案，您可以查看文档了解具体使用方法。 </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quick-guide {
  >div {
    margin-bottom: 30px;
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


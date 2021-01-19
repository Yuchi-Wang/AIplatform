<template>
  <footer class="baseFooter">
    <div>
      <ul>
        <li>
          <p>联系我们：021-56352617</p>
        </li>
        <li>
          <p>商务合作：xxxxxx@xxx.com</p>
        </li>
        <li class="qr-code-box">
          <img src="@/assets/img/common/qrCode.png">
          <p>关注公众号</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>公网安备：1111111111号</p>
        </li>
        <li>
          <p>备案号：1111111111号</p>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  data: () => ({})
}
</script>
<style scoped lang="scss">
.baseFooter {
    width: 100%;
    background: #003284;
    padding: 42px 0;
    > div {
        width: 1200px;
        margin: auto;
        ul {
            display: inline-block;
            width: 50%;
            vertical-align: text-top;
          li {
            p {
              height: 18px;
              line-height: 18px;
              margin-bottom: 20px;
              font-weight: 400;
              color: #F0F5FF;
            }
          }
          .qr-code-box {
            width: 100px;
            p {
              margin-top: 10px;
              text-align: center;
            }
          }
        }
    }
}
</style>

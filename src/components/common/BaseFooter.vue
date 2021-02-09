<template>
  <footer class="baseFooter">
    <div>
      <ul>
        <li>
          <p>{{ $t('footer.contactUs') }}：021-56352617</p>
        </li>
        <li>
          <p>{{ $t('footer.businessCooperation') }}：xxxxxx@xxx.com</p>
        </li>
        <li class="qr-code-box">
          <img src="@/assets/img/common/qrCode.png">
          <p>{{ $t('footer.publicAccount') }}</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>{{ $t('footer.networkSecurity') }}：1111111111号</p>
        </li>
        <li>
          <p>{{ $t('footer.recordNumber') }}：1111111111号</p>
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
              width: 200px;
              margin-top: 10px;
              text-align: left;
            }
          }
        }
    }
}
</style>

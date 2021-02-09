<template>
  <div class="authentication">
    <div>
      <p>
        {{ $t('authentication.info') }}
      </p>
    </div>
    <div>
      <p>{{ $t('authentication.getAccessToken') }}</p>
      <p>{{ $t('authentication.url') }}</p>
    </div>
    <div>
      <p>{{ $t('authentication.param') }}</p>
    </div>
    <div>
      <p>grant_type：{{ $t('authentication.required') }} client_credentials；</p>
      <p> client_id： {{ $t('authentication.required') }}  Key；</p>
      <p>client_secret：{{ $t('authentication.required') }} Secret Key；</p>
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

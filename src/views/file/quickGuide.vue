<template>
  <div class="quick-guide">
    <div>
      <p>{{ $t('file.quickGuide.certification.certificationTitle') }}</p>
      <p>{{ $t('file.quickGuide.certification.first') }}</p>
      <p>{{ $t('file.quickGuide.certification.second') }}</p>
      <p>{{ $t('file.quickGuide.certification.third') }}</p>
    </div>
    <div>
      <p>2.{{ $t('file.quickGuide.getKey.title') }}</p>
      <p>{{ $t('file.quickGuide.getKey.content') }}</p>
    </div>
    <div>
      <p>3.{{ $t('file.quickGuide.signature.title') }}</p>
      <p>
        {{ $t('file.quickGuide.signature.content') }}
      </p>
    </div>
    <div>
      <p>4.{{ $t('file.quickGuide.dev.title') }}</p>
      <p>{{ $t('file.quickGuide.dev.content') }}</p>
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


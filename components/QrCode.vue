<style lang="scss">
.qr-wrap {
  width: 500px;
  height: 500px;

  .v-switcher {
    &__content__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      user-select: none;

      img {
        width: 200px;
        height: 200px;
        display: block;
        object-fit: cover;
      }

      p {
        color: $color-text-1;
        margin-top: 20px;
        margin-bottom: 50px;
      }
    }
  }
}
</style>

<template>
  <div class="qr-wrap">
    <VSwitcher :headers="['QQ', '微信']" align="center">
      <template slot="0">
        <img src="https://m1.calibur.tv/qq_mini_app.png" alt="">
        <p>使用手机QQ扫码访问</p>
      </template>
      <template slot="1">
        <img src="https://m1.calibur.tv/weixin_mini_app.jpg" alt="">
        <p>使用手机微信扫码访问</p>
      </template>
    </VSwitcher>
  </div>
</template>

<script>
import { VSwitcher } from '@calibur/sakura'

export default {
  name: 'QrCode',
  components: {
    VSwitcher
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

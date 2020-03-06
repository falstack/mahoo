<style lang="scss">
#desktop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  > .float-menu {
    z-index: 2;
  }

  > #canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  > .view {
    position: relative;
    z-index: 1;
  }

  .beian {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    color: $color-text-1;
    opacity: 0.5;
    font-size: 12px;
  }
}
</style>

<template>
  <div id="desktop">
    <canvas id="canvas" />
    <div class="view">
      <Curtain id="logo" :position="{ left: 15, top: 40 }">
        <Logo />
      </Curtain>
      <Curtain id="qr-code" :position="{ left: 255, top: 40 }">
        <QrCode />
      </Curtain>
      <Curtain id="create" :position="{ left: 820, top: 40 }">
        <Create />
      </Curtain>
    </div>
    <p class="beian">
      <a href="http://www.beian.miit.gov.cn/" target="_blank">互联网 ICP 备案：沪 ICP 备 17050785 号 - 1</a>
    </p>
    <FloatMenu class="float-menu" />
  </div>
</template>

<script>
import useSignMixin from '~/mixins/useSign'
import FloatMenu from '~/components/menu/index'
import Curtain from '~/assets/js/curtain'
import QrCode from '~/components/QrCode'
import Logo from '~/components/Logo'
import Create from '~/components/Create'

export default {
  name: 'PwaLayout',
  layout: 'empty',
  components: {
    Logo,
    QrCode,
    Create,
    Curtain,
    FloatMenu
  },
  mixins: [useSignMixin],
  mounted() {
    // eslint-disable-next-line
    import('~/assets/js/webGL')
  },
  methods: {
    handleClick() {}
  }
}
</script>

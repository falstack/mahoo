<style lang="scss">
#pwa {
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
    user-select: none;

    .logo {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      user-select: none;
    }

    .site {
      position: absolute;
      left: 70px;
      top: 30px;
      height: 20px;
      line-height: 20px;
      width: 105px;
      color: $color-text-1;
      font-size: 20px;
      white-space: nowrap;
      overflow: hidden;
      letter-spacing: 2px;
      animation: typing 500ms steps(10, end);
      user-select: none;
      opacity: 0.75;
    }

    @keyframes typing {
      from {
        width: 0;
      }
    }
  }

  .beian {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    color: $color-text-1;
    opacity: 0.5;
  }
}
</style>

<template>
  <div id="pwa">
    <canvas id="canvas" />
    <div class="view">
      <img class="logo" src="https://m1.calibur.tv/icon.png-sharejpg200" alt="logo" />
      <p class="site">calibur.tv</p>
      <Curtain id="test">
        <div style="width:500px;height:300px" />
      </Curtain>
      <Curtain id="test-2">
        <div style="width:200px;height:500px">
          <img src="https://m1.calibur.tv/icon.png" alt="" />
        </div>
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

export default {
  name: 'PwaLayout',
  layout: 'empty',
  components: {
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

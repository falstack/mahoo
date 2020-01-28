<style lang="scss">
#pwa {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  > .view {
    position: relative;
    z-index: 0;
  }

  > .float-menu {
    z-index: 1;
  }
}
</style>

<template>
  <div id="pwa">
    <div class="view">
      <Curtain id="test">
        <VTest color="yellowgreen" />
      </Curtain>
      <Curtain id="test-2">
        <VTest color="lightpink" />
      </Curtain>
    </div>
    <FloatMenu class="float-menu" />
  </div>
</template>

<script>
import useSignMixin from '~/mixins/useSign'
import FloatMenu from '~/components/menu/index'
import Curtain from '~/assets/js/curtain'
import VTest from '~/components/Test'

export default {
  name: 'PwaLayout',
  layout: 'empty',
  components: {
    Curtain,
    FloatMenu,
    VTest
  },
  mixins: [useSignMixin]
}
</script>

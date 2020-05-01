<style lang="scss">
#homepage {
  min-height: 100vh;
}
</style>

<template>
  <div id="homepage">
    <PageHeader :background="banner" />
    <PageBanner :background="banner" />
    <div class="v-layout">
      <MenuBar />
      <div class="v-layout__row">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components-new/PageHeader'
import PageBanner from '~/components-new/PageBanner'
import MenuBar from '~/components-new/MenuBar'
import Carousel from '~/components-new/Carousel'

export default {
  name: 'Homepage',
  components: {
    PageHeader,
    PageBanner,
    MenuBar,
    Carousel
  },
  props: {},
  data() {
    return {
      banner: 'http://pic.rmb.bdstatic.com/ae5eaf5df7b74c634904799cbe4164b3.jpeg'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

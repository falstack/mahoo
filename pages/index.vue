<style lang="scss">
#homepage {
  min-height: 100vh;

  .page-banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: $page-banner-hgt;
    padding-top: $page-header-hgt;
  }
}
</style>

<template>
  <div id="homepage">
    <PageHeader :background="banner" />
    <div class="page-banner" :style="{ backgroundImage: `url(${banner})` }">
      <div class="v-layout">
        2333
      </div>
    </div>
    <MenuBar />
  </div>
</template>

<script>
import PageHeader from '~/components-new/PageHeader'
import MenuBar from '~/components-new/MenuBar'

export default {
  name: 'Homepage',
  components: {
    PageHeader,
    MenuBar
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

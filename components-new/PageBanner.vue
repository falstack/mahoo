<style lang="scss">
#page-banner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: $page-banner-hgt;
  padding-top: $page-header-hgt;
}
</style>

<template>
  <section id="page-banner" :style="{ backgroundImage: `url(${background})` }">
    <div class="v-layout">
      2333
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    background: {
      required: true,
      type: String
    }
  },
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

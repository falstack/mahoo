<style lang="scss">
#about-site {
  position: fixed;
  z-index: 101;
  left: 0;
  top: 50%;
  margin-top: -36px;
  width: 28px;
  height: 72px;
  transition: all .3s;
  font-size: 12px;
  color: #505050;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: 0 6px 10px 0 #e7e7e7;
  border-radius: 0 2px 2px 0;
  padding: 8px 7px;
  line-height: 14px;

  &:hover {
    background-color: #f4f4f4;
    color: #505050;
  }
}
</style>

<template>
  <a id="about-site" href="/">
    关于网站
  </a>
</template>

<script>
export default {
  name: 'AboutSite',
  components: {},
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

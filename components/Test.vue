<template>
  <div class="v-test" :style="{ backgroundColor: color }" />
</template>

<script>
export default {
  name: 'VTest',
  components: {},
  props: {
    color: {
      type: String,
      required: true
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

<style lang="scss">
.v-test {
  width: 300px;
  height: 200px;
}
</style>

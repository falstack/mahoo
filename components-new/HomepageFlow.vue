<style lang="scss">
.homepage-flow {
  height: 100%;

  .flow-loader-state {
    height: 100%;
    color: #99a2aa;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    i,
    span {
      display: inline-block;
    }

    em {
      font-style: normal;
      color: $color-main;
    }

    &-loading {
      i {
        background-image: url(~assets/img/small-loading.gif);
        width: 24px;
        height: 24px;
      }

      span {
        height: 24px;
        line-height: 27px;
      }
    }

    &-error {
      i {
        background-image: url(~assets/img/state.png);
        background-repeat: no-repeat;
        background-position: center -471px;
        width: 20px;
        height: 20px;
      }
    }

    &-nothing {
      i {
        width: 300px;
        height: 300px;
        background: url(~assets/img/state.png) center -140px no-repeat
      }
    }
  }
}
</style>

<template>
  <FlowLoader
    :func="func"
    :type="type"
    :query="{ $axios, ...query }"
    :auto="auto"
    class="homepage-flow"
  >
    <template slot-scope="{ flow }">
      <slot :flow="flow" />
    </template>
    <template slot="loading">
      <i />
      <span>正在加载...</span>
    </template>
    <template slot="error">
      <i />
      <span>加载失败，<em>点击重试</em></span>
    </template>
    <template slot="nothing">
      <i />
    </template>
  </FlowLoader>
</template>

<script>
export default {
  name: 'HomepageFlow',
  components: {},
  props: {
    func: {
      required: true,
      type: String
    },
    type: {
      type: String,
      default: 'page'
    },
    auto: {
      type: Number,
      default: 1
    },
    query: {
      type: Object,
      default: () => {}
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

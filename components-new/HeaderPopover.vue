<style lang="scss">
.header-popover {
  .content {
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 5px);
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    border-radius: 0 0 4px 4px;
    transition: 0.3s;

    &:hover {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
    }
  }

  .trigger:hover + .content {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }
}
</style>

<template>
  <div class="header-popover">
    <div class="trigger">
      <slot name="trigger" />
    </div>
    <div class="content" :class="className">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPopover',
  components: {},
  props: {
    className: {
      type: String,
      default: ''
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

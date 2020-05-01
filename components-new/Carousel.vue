<style lang="scss">
#v-carousel {
  width: 440px;
  height: 220px;
}

.v-swipe {
  &__indicator {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: -webkit-linear-gradient(transparent,rgba(0,0,0,.5));
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    text-align: right;
    padding-bottom: 6px;
    padding-right: 20px;
    pointer-events: auto;

    &__item {
      width: 18px;
      height: 18px;
      background-image: url(~assets/img/icons.png);
      background-position: -855px -790px;
      background-color: transparent;
      transition: none;
      cursor: pointer;
      margin-left: 8px;

      &:hover {
        background-position: -919px -790px;
      }

      &.is-active {
        background-position: -855px -727px;
        width: 18px;
        height: 18px;
        background-color: transparent;
      }
    }
  }
}
</style>

<template>
  <VSwipe id="v-carousel" :length="3" @change="handleChange" @report="handleReport">
    <div slot="0" style="background-color: #6dc781">
      0
    </div>
    <div slot="1" style="background-color: #cc99cd">
      1
    </div>
    <div slot="2" style="background-color: #6a8bad">
      2
    </div>
  </VSwipe>
</template>

<script>
import { VSwipe } from '@calibur/sakura'

export default {
  name: 'VCarousel',
  components: {
    VSwipe
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleChange(index) {
      console.log('handleChange', index)
    },
    handleReport(index) {
      console.log('handleReport', index)
    }
  }
}
</script>

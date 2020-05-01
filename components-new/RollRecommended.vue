<style lang="scss">
#roll-recommended {
  width: 700px;
  height: 220px;
  margin-left: 20px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &:hover {
    .indicator {
      opacity: 1;
    }
  }

  .indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;

    button {
      cursor: pointer;
      font-size: 12px;
      color: #fff;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      background-image: url(~assets/img/icons2.png);
      border-width: 0;
      pointer-events: auto;
      width: 35px;
      height: 60px;

      &:hover,
      &:focus {
        outline-width: 0;
        border-width: 0;
      }
    }

    .btn-prev {
      border-radius: 0 4px 4px 0;
      padding: 13px 5px 13px 10px;
      background-position: 6px -1211px;
    }

    .btn-next {
      border-radius: 4px 0 0 4px;
      padding: 13px 10px 13px 5px;
      background-position: 25px -1262px;
    }
  }

  .v-switcher {
    height: 100%;

    &-header-wrap {
      display: none;
    }

    &-content {
      height: 220px;

      .r-item {
        height: 220px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

<template>
  <div id="roll-recommended">
    <VSwitcher ref="switcher" :headers="['', '', '']" @change="handleChangeRecommended">
      <div slot="0" class="r-item" style="background-color: rgba(21,174,103,.5)">
        三日
      </div>
      <div slot="1" class="r-item" style="background-color: rgba(195,123,177,.5)">
        一周
      </div>
      <div slot="2" class="r-item" style="background-color: rgba(125,205,244,.5)">
        昨日
      </div>
    </VSwitcher>
    <div class="indicator">
      <button class="btn-prev" @click="switchRecommended(false)">
        {{ leftText }}
      </button>
      <button class="btn-next" @click="switchRecommended(true)">
        {{ rightText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RollRecommended',
  components: {},
  props: {},
  data() {
    return {
      activeIndex: 0
    }
  },
  computed: {
    leftText() {
      const index = this.activeIndex
      if (index === 0) {
        return '昨日'
      } else if (index === 1) {
        return '三日'
      }
      return '一周'
    },
    rightText() {
      const index = this.activeIndex
      if (index === 0) {
        return '一周'
      } else if (index === 1) {
        return '昨日'
      }
      return '三日'
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleChangeRecommended(index) {
      this.activeIndex = index
    },
    getRandomColor() {
      const colors = [
        'rgba(21,174,103,.5)',
        'rgba(245,163,59,.5)',
        'rgba(255,230,135,.5)',
        'rgba(194,217,78,.5)',
        'rgba(195,123,177,.5)',
        'rgba(125,205,244,.5)'
      ]
      return colors[~~(Math.random() * colors.length)]
    },
    switchRecommended(isNext) {
      isNext ? this.$refs.switcher.next() : this.$refs.switcher.prev()
    }
  }
}
</script>

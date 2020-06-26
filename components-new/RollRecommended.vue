<style lang="scss">
#roll-recommended {
  height: 220px;
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

      .flow-loader {
        height: 220px;
        overflow: hidden;
      }
    }
  }

  .rec-rect-item {
    margin-right: 20px;
    margin-bottom: 20px;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
</style>

<template>
  <div id="roll-recommended">
    <VSwitcher ref="switcher" :headers="['', '', '']" @change="handleChangeRecommended">
      <HomepageFlow
        slot="0"
        func="getHotFlowData"
        :query="{
          day: 1
        }"
        @callback="handleLoaded"
      >
        <ul slot-scope="{ flow }">
          <RecommendRectItem
            v-for="item in flow"
            :key="item.id"
            :item="item"
          />
        </ul>
      </HomepageFlow>
      <HomepageFlow
        slot="1"
        func="getHotFlowData"
        :query="{
          day: 3
        }"
        @callback="handleLoaded"
      >
        <ul slot-scope="{ flow }">
          <RecommendRectItem
            v-for="item in flow"
            :key="item.id"
            :item="item"
          />
        </ul>
      </HomepageFlow>
      <HomepageFlow
        slot="2"
        func="getHotFlowData"
        :query="{
          day: 7
        }"
        @callback="handleLoaded"
      >
        <ul slot-scope="{ flow }">
          <RecommendRectItem
            v-for="item in flow"
            :key="item.id"
            :item="item"
          />
        </ul>
      </HomepageFlow>
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
import HomepageFlow from '~/components-new/HomepageFlow'
import RecommendRectItem from '~/components-new/RecommendRectItem'

export default {
  name: 'RollRecommended',
  components: {
    HomepageFlow,
    RecommendRectItem
  },
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
    switchRecommended(isNext) {
      isNext ? this.$refs.switcher.next() : this.$refs.switcher.prev()
    },
    handleLoaded() {}
  }
}
</script>

<style lang="scss">
.rec-rect-item {
  position: relative;
  display: block;
  width: 160px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  float: left;

  &:hover {
    .mask {
      background: rgba(0,0,0,.7);
      top: 0;
      height: 100%;

      .author,
      .play {
        opacity: 1;
      }
    }
  }

  .mask {
    position: absolute;
    left: 0;
    top: 68px;
    width: 100%;
    font-size: 12px;
    height: 40px;
    line-height: 20px;
    padding: 10px 5px;
    background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));

    .title {
      color: #fff;
      height: 40px;
      overflow: hidden;
      margin-bottom: 5px;
      @extend %breakWord
    }

    .author,
    .play {
      opacity: 0;
      color: #99a2aa;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      transition: all .6s;
    }
  }
}
</style>

<template>
  <li class="rec-rect-item">
    <a :href="href" :ping="ping" target="_blank">
      <img class="poster" :src="$resizeImage(item.data.poster, { width: 160, height: 100 })">
      <span class="mask">
        <p class="title" v-text="item.data.title" />
        <p class="author">UP主：{{ item.data.username }}</p>
        <p class="play">播放：{{ $utils.formatNumber(item.data.visit_count) }}</p>
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'RecommendRectItem',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    href() {
      return `https://www.bilibili.com/av${this.item.model_id}`
    },
    ping() {
      return `${process.env.API_URL_BROWSER}v1/flow/spider_report?type=click&id=${this.item.id}`
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

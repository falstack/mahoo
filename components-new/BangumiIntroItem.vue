<style lang="scss">
.bgm-intro-item {
  width: 214px;
  padding-right: 34px;
  margin-bottom: 36px;

  .poster {
    float: left;
    margin-right: 12px;

    img {
      width: 72px;
      height: 72px;
      display: block;
      border-radius: 4px;
    }
  }

  .intro {
    height: 72px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    a {
      font-size: 12px;
      transition: color .2s;
      @include multi-line(18px);

      &:hover {
        color: $color-main;
      }
    }

    span {
      display: inline-block;
      background-color: #b8c0cc;
      color: #fff;
      height: 18px;
      line-height: 18px;
      border-radius: 9px;
      padding: 0 4px;
      text-align: center;
      min-width: 28px;
      max-width: 89px;
      font-size: 12px;
    }
  }
}
</style>

<template>
  <li class="bgm-intro-item">
    <a class="poster" href="javascript:;">
      <img :src="$resizeImage(item.avatar, { width: 72 })" />
    </a>
    <p class="intro">
      <a href="javascript:;" class="title" v-text="item.name" />
      <span class="oneline">暂无</span>
    </p>
  </li>
</template>

<script>
export default {
  name: 'BangumiIntroItem',
  props: {
    item: {
      type: Object,
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

<style lang="scss">
.bili-video-item {
  position: relative;
  width: 160px;
  height: 148px;
  font-size: 12px;
  overflow: hidden;

  &:hover {
    .text {
      .mask {
        bottom: -20px;
      }
    }

    .title {
      color: $color-main !important;
    }
  }

  .poster {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    text-align: center;
    background: #f1f3f4 url(~assets/img/default-poster.png) 50% no-repeat;
    width: 160px;
    height: 100px;

    .cover {
      width: 100%;
      height: 100%;
    }

    .mask {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 10px;
      padding-top: 10px;

      > div {
        height: 12px;
        line-height: 12px;
        margin-right: 20px;
        color: #fff;
      }

      .duration {
        position: absolute;
        left: 6px;
        bottom: 2px;
        color: #fff;
      }
    }

    &:hover {
      .mask {
        opacity: 1;
      }
    }
  }

  .text {
    position: relative;
    padding-top: 8px;

    .title {
      color: #222;
      height: 40px;
      display: block;
      @include multi-line(20px);
    }

    .mask {
      position: absolute;
      height: 20px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      transition: bottom 0.3s;

      > div {
        float: left;
        width: 50%;
        height: 20px;
        line-height: 20px;
        color: #99a2aa;
      }

      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        background-image: url(~assets/img/icons.png);
      }

      .view-count {
        background-position: -282px -90px;
      }

      .danmu-count {
        background-position: -282px -218px;
      }
    }
  }
}
</style>

<template>
  <li class="bili-video-item">
    <a class="poster" target="_blank" :href="href">
      <img class="cover" :src="$resizeImage(item.data.poster, { width: 160, height: 100 })" />
      <div class="mask">
        <p class="duration" v-text="$utils.formatDuration(item.data.duration)" />
      </div>
    </a>
    <div class="text">
      <a class="title fade-link" target="_blank" :href="href" v-html="item.data.title" />
      <div class="mask">
        <div>
          <i class="view-count" />
          <span v-text="item.data.visit_count" />
        </div>
        <div>
          <i class="danmu-count" />
          <span v-text="item.data.danmu_count" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'BiliVideoItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    href() {
      return `https://www.bilibili.com/av${this.item.model_id}`
    }
  }
}
</script>

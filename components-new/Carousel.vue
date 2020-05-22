<style lang="scss">
#v-carousel {
  float: left;
  margin-right: 20px;

  .v-switcher {
    width: 440px;
    height: 220px;
    border-radius: 4px;
    overflow: hidden;

    .carousel-item {
      display: block;
      height: 220px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .title {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 35px;
      line-height: 35px;
      display: block;
      color: #fff;
      text-decoration: none;
      padding-left: 10px;
      width: 290px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
    }

    .more {
      display: block;
      position: absolute;
      right: 15px;
      bottom: 35px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.64);
      width: 50px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 4px;
      transition: all 0.2s linear;
      font-size: 12px;
      text-decoration: none;
      opacity: 0 !important;

      &:hover {
        text-shadow: 0 0 3px #fff;
      }

      &:after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 12px;
        margin: -2px 0 0 5px;
        vertical-align: middle;
        background: url(~assets/img/icons.png) -541px -218px;
      }
    }

    &:hover .more {
      opacity: 1;
    }

    &-header {
      height: 27px;
      width: 140px;
      float: right;

      &-before,
      &-after {
        position: static;
      }

      &-wrap {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 35px !important;
        border-bottom: none;
        background: -webkit-linear-gradient(transparent,rgba(0,0,0,.5));
        z-index: 1;
        overflow: visible;
        padding-right: 15px;
      }

      &-tabs {
        height: 27px;
        margin-top: 8px;
      }

      &-item {
        margin-left: 8px;
        width: 18px;
        height: 18px;
        background-position: -855px -790px;
        background-image: url(~assets/img/icons.png);
        border-bottom-width: 0;
        cursor: pointer;
        padding: 0;

        &:hover {
          background-position: -919px -790px;
        }

        &.is-active {
          background-position: -855px -727px;
        }
      }
    }
  }
}
</style>

<template>
  <div id="v-carousel">
    <VSwitcher
      :default-index="activeIndex"
      :headers="list"
      :swipe="true"
      :autoplay="5000"
      align="end"
      @change="handleChange"
    >
      <a
        v-for="(item, index) in list"
        :key="index"
        :slot="index"
        :href="convertUrl(item.link)"
        :ping="convertPing(item.id)"
        target="_blank"
        class="carousel-item"
      >
        <VImg :src="$resizeImage(item.image, { width: 440, height: 220 })" />
      </a>
      <a slot="header-before" class="title" target="_blank" :href="showUrl" v-text="showTitle" />
      <a slot="header-after" class="more" href="javascript:;">更多</a>
    </VSwitcher>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: 0,
      reports: []
    }
  },
  computed: {
    showTitle() {
      const item = this.list[this.activeIndex]
      return item ? item.title : ''
    },
    showUrl() {
      const item = this.list[this.activeIndex]
      return item ? this.convertUrl(item.link) : ''
    }
  },
  methods: {
    handleChange(index) {
      this.activeIndex = index
      if (this.reports.includes(index)) {
        return
      }
      this.reports.push(index)
      this.$axios.$post('v1/cm/report_banner', {
        type: 'visit',
        id: this.list[index].id
      })
    },
    convertUrl(url) {
      // TODO：from calibur
      return url
    },
    convertPing(id) {
      return `${process.env.API_URL_BROWSER}v1/cm/report_banner?type=click&id=${id}`
    }
  }
}
</script>

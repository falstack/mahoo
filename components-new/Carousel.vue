<style lang="scss">
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

    .title {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 35px;
      line-height: 35px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #fff;
      font-size: 15px;
      text-decoration: none;
      background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.5));
      padding-left: 10px;
      padding-right: 160px;
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
      opacity: 0;
      transition: all 0.2s linear;
      font-size: 12px;
      text-decoration: none;

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
  }

  &-header {
    &-wrap {
      box-sizing: border-box;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 27px !important;
      z-index: 1;
      width: 150px;
      padding-right: 20px;
      border-bottom: none;
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
</style>

<template>
  <VSwitcher :headers="headers" :swipe="true" :autoplay="2000" align="end">
    <a
      v-for="(item, index) in headers"
      :key="index"
      :slot="index"
      :style="{ backgroundColor: item.color }"
      class="carousel-item"
      href="javascript:;"
    >
      <a class="title" href="javascript:;">{{ item.title }}</a>
      <a class="more" href="javascript:;">更多</a>
    </a>
  </VSwitcher>
</template>

<script>
export default {
  name: 'VCarousel',
  props: {},
  data() {
    return {}
  },
  computed: {
    headers() {
      return [
        {
          text: '',
          title: '成名必备！',
          color: 'rgba(21,174,103,.5)'
        },
        {
          text: '',
          title: '花泽香菜，甜美来袭！',
          color: 'rgba(255,230,135,.5)'
        },
        {
          text: '',
          title: '鸡鸣紫陌曙光寒，水转皇州春色阑',
          color: 'rgba(195,123,177,.5)'
        },
        {
          text: '',
          title: '请查收您的追番清单!',
          color: 'rgba(125,205,244,.5)'
        },
        {
          text: '',
          title: '欢迎来到天生制造狂的世界',
          color: 'rgba(195,123,177,.5)'
        }
      ]
    }
  },
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

<style lang="scss">
$header-link-padding: 7px;

#page-header {
  position: relative;
  height: $page-header-hgt;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;

  .mask-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    .mask-bg {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      height: $page-banner-hgt;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      @include filter-blur();
    }
  }

  .mask-shim {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    height: $page-header-hgt;
    z-index: 1;
    overflow: hidden;
    background-color: #fff;
  }

  .text-wrap {
    position: relative;
    z-index: 2;

    .nav-link {
      display: block;
      padding: 0 $header-link-padding;
      height: $page-header-hgt;
      line-height: $page-header-hgt;
      color: #222;
    }

    .iconfont {
      color: $color-main;
      display: block;
      float: left;
      margin-right: 3px;
    }
  }

  .home-link {
    margin-left: -$header-link-padding;
  }

  &.with-bg {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;

    .mask-shim {
      background-color: hsla(0,0%,100%,.4);
    }

    .text-wrap {
      .nav-link:hover {
        background-color: hsla(0,0%,100%,.3);
      }
    }
  }
}
</style>

<template>
  <nav id="page-header" :class="{ 'with-bg': hasBg }">
    <div v-if="hasBg" class="mask-wrap">
      <div class="mask-bg" :style="{ backgroundImage: `url(${background})` }" />
    </div>
    <div class="mask-shim" />
    <div class="text-wrap v-layout">
      <ul class="v-layout__left">
        <li>
          <NuxtLink class="nav-link home-link" to="/">
            <i class="iconfont bili-bilibili-tv" />
            <span>主站</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/">
            <span>游戏中心</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/">
            <span>直播</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/">
            <span>会员购</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/">
            <span>漫画</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/">
            <span>赛事</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/">
            <i class="iconfont bili-Navbar_mobile" />
            <span>下载APP</span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="v-layout__right">
        user
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageHeader',
  components: {},
  props: {
    background: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    hasBg() {
      return !!this.background
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

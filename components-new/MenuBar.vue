<style lang="scss">
#menu-bar {
  padding-top: 5px;
  margin-bottom: 10px;

  .menu-item {
    position: relative;
    float: left;
  }

  .menu-link {
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #222;
    font-size: 12px;
    width: 48px;
    margin-right: 8px;

    .count-wrap {
      height: 14px;
      margin-top: 8px;
      margin-bottom: 2px;
    }

    .count {
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      transform: scale(.85);
      color: #fff;
      background-color: #ffafc9;
      border-radius: 3px;
      height: 12px;
      line-height: 14px;
      max-width: 28px;
      padding: 1px 3px;
      font-family: sans-serif,sans-serifsans-serif,Calibri,Arial,Helvetica;
      box-sizing: content-box;
    }

    &:hover + {
      .sub-menu {
        display: block;
      }
    }
  }

  .home-link {
    margin-right: 14px;
    width: auto;

    .icon {
      width: 24px;
      height: 24px;
      background: url(~assets/img/icons.png) -660px -1170px no-repeat;
    }
  }

  .sub-menu {
    position: absolute;
    left: 0;
    top: 100%;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    display: none;
    z-index: 9;

    &:hover {
      display: block;
    }

    li {
      position: relative;
      font-size: 12px;
      line-height: 20px;
      min-width: 120px;
      width: 100%;
      height: auto;
      overflow: hidden;
      text-align: left;
      transition: background-color .2s;

      &:hover {
        background-color: #e5e9ef;

        a {
          transform: translateX(5px);
        }

        span:after {
          opacity: 1;
          transform: translateX(17px);
        }
      }
    }

    a {
      position: relative;
      display: block;
      padding: 5px 15px 5px 25px;
      margin-right: 10px;
      background: url(~assets/img/icons2.png) no-repeat 12px -1614px;
      white-space: nowrap;
      transition: all .2s;
      overflow: hidden;
      transform: translateX(0);
      color: #222;
      line-height: 20px;
    }

    span {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: -4px;
        right: -2px;
        background: url(~assets/img/icons2.png) no-repeat 0 -1581px;
        width: 15px;
        height: 18px;
        display: block;
        transition: all .2s;
        opacity: 0;
        transform: translateX(100px);
      }
    }
  }
}
</style>

<template>
  <ul id="menu-bar" class="clearfix">
    <li class="menu-item">
      <NuxtLink class="home-link menu-link" to="/">
        <div class="icon" />
        <span>首页</span>
      </NuxtLink>
    </li>
    <li v-for="item in list" :key="item.id" class="menu-item">
      <NuxtLink class="menu-link" to="/">
        <div class="count-wrap">
          <span class="count">{{ item.count | convertCount }}</span>
        </div>
        <span v-text="item.name" />
      </NuxtLink>
      <ul class="sub-menu">
        <li v-for="sub in item.children" :key="sub.id" class="sub-item">
          <a
            target="_blank"
            :href="sub.href"
            :ping="`https://api.calibur.tv/v1/cm/report_menu_click?id=${sub.id}&type=${sub.type}`"
          >
            <span v-text="sub.name" />
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { getMenuCounter } from '~/api/homepageApi'

export default {
  name: 'MenuBar',
  filters: {
    convertCount(value) {
      if (!value) {
        return '- -'
      }
      if (value > 999) {
        return '999+'
      }
      return value
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: this.menu
    }
  },
  mounted() {
    this.getCounter()
  },
  methods: {
    getCounter() {
      getMenuCounter(this)
        .then((obj) => {
          Object.keys(obj).forEach((key) => {
            const index = this.list.findIndex(_ => _.id.toString() === key)
            this.list[index].count = +obj[key]
          })
        })
        .catch(() => {})
    }
  }
}
</script>

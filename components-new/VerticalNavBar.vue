<style lang="scss">
#vertical-nav-bar {
  position: fixed;
  z-index: 10;
  left: 50%;
  margin-left: 590px;
  transition: top .3s;

  @media screen and (max-width: 1400px) {
    margin-left: 500px;
  }

  .nav-list {
    position: relative;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding-top: 6px;

    li {
      float: none;
    }

    a {
      display: block;
      width: 48px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      transition: background-color .3s,color .3s;
      user-select: none;
      font-size: 12px;

      &.is-active,
      &:hover {
        background-color: #00a1d6;
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div id="vertical-nav-bar" :style="{ top }">
    <ul class="nav-list">
      <li v-for="(item, index) in menu" :key="item.type">
        <a :href="`#${item.type}`" :class="{ 'is-active': index === active }" v-text="item.label" />
      </li>
    </ul>
  </div>
</template>

<script>
import { throttle } from 'throttle-debounce'

export default {
  name: 'VerticalNavBar',
  components: {},
  props: {
    menu: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      atTop: true,
      offsetTop: 0,
      offsets: [],
      active: -1
    }
  },
  computed: {
    top() {
      return this.atTop ? '232px' : this.offsetTop
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.calcOffset()
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: throttle(300, function() {
      const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )

      this.atTop = scrollTop <= 220

      if (scrollTop <= 0) {
        this.active = -1
        return
      }

      const list = this.offsets.map(_ => Math.abs(_ - scrollTop))
      this.active = list.indexOf(Math.min(...list))
    }),
    calcOffset() {
      this.offsets = []
      const list = document.querySelectorAll('.anchor-module')
      ;[].forEach.call(list, (item) => {
        const rect = item.getBoundingClientRect()
        this.offsets.push(rect.top)
      })
      const rectHgt = this.$el.getBoundingClientRect().height
      const screenHgt = window.screen.height
      if (rectHgt >= screenHgt) {
        this.offsetTop = '0px'
      } else {
        this.offsetTop = `${(screenHgt - rectHgt) / 2 | 0}px`
      }
    }
  }
}
</script>

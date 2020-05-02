<style lang="scss">
#homepage {
  .v-layout__row {
    display: block;
    margin-bottom: 30px;
  }
}
</style>

<template>
  <div id="homepage">
    <PageHeader :background="banner" />
    <PageBanner :background="banner" />
    <div class="v-layout">
      <MenuBar />
      <div class="v-layout__row">
        <Carousel />
        <RollRecommended />
      </div>
      <a
        v-for="row in pageMenu"
        :id="row.type"
        :key="row.type"
        class="v-layout__row anchor-module"
      >
        <component
          :is="row.left.type"
          :slug="row.left.slug"
          class="v-layout__left"
        />
        <component
          :is="row.right.type"
          :slug="row.right.slug"
          class="v-layout__right"
        />
      </a>
    </div>
    <VerticalNavBar :menu="pageMenu.filter(_ => _.main)" />
    <AboutSite />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components-new/PageHeader'
import PageBanner from '~/components-new/PageBanner'
import PageFooter from '~/components-new/PageFooter'
import MenuBar from '~/components-new/MenuBar'
import Carousel from '~/components-new/Carousel'
import AboutSite from '~/components-new/AboutSite'
import VerticalNavBar from '~/components-new/VerticalNavBar'
import RollRecommended from '~/components-new/RollRecommended'
import BangumiSwitcher from '~/components-new/BangumiSwitcher'
import RankSwitcher from '~/components-new/RankSwitcher'

export default {
  name: 'Homepage',
  components: {
    PageHeader,
    PageBanner,
    PageFooter,
    MenuBar,
    Carousel,
    AboutSite,
    VerticalNavBar,
    RollRecommended,
    BangumiSwitcher,
    RankSwitcher
  },
  props: {},
  data() {
    return {
      banner: 'http://b-ssl.duitang.com/uploads/item/201801/26/20180126171546_RSGal.jpeg'
    }
  },
  computed: {
    pageMenu() {
      return [
        {
          type: 'douga',
          main: true,
          label: '动画',
          left: {
            slug: 0,
            type: 'main-flow-tab'
          },
          right: {
            slug: 1,
            type: 'RankSwitcher'
          }
        },
        {
          type: 'bangumi',
          main: true,
          label: '番剧',
          left: {
            slug: 2,
            type: 'BangumiSwitcher'
          },
          right: {
            slug: 3,
            type: 'rank-daily'
          }
        },
        {
          type: 'bangumi-about',
          main: false,
          left: {
            slug: 4,
            type: 'sub-flow-tab'
          },
          right: {
            slug: 5,
            type: 'recommended-swipe'
          }
        }
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

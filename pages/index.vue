<style lang="scss">
#homepage {
  .v-layout__row {
    display: block;
    cursor: default !important;
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
          :type="row.type"
          :name="row.name"
          :params="row.params"
          class="v-layout__left"
        />
        <component
          :is="row.right.type"
          :slug="row.right.slug"
          :type="row.type"
          :name="row.name"
          :params="row.params"
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
import MainFlowTab from '~/components-new/MainFlowTab'

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
    RankSwitcher,
    MainFlowTab
  },
  props: {},
  data() {
    return {
      banner: 'https://m1.calibur.tv/default-banner'
    }
  },
  computed: {
    pageMenu() {
      return [
        {
          type: 'douga',
          main: true,
          name: '动画',
          left: {
            slug: 0,
            type: 'MainFlowTab',
            params: {}
          },
          right: {
            slug: 1,
            type: 'RankSwitcher',
            params: {}
          }
        },
        {
          type: 'bangumi',
          main: true,
          name: '番剧',
          left: {
            slug: 2,
            type: 'BangumiSwitcher',
            params: {}
          },
          right: {
            slug: 3,
            type: 'RankDaily',
            params: {}
          }
        },
        {
          type: 'bangumi-about',
          main: false,
          left: {
            slug: 4,
            type: 'SubFlowTab',
            params: {}
          },
          right: {
            slug: 5,
            type: 'RecommendedSwipe',
            params: {}
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

<style lang="scss">
#homepage {
  .ssr-modules {
    margin-bottom: 20px;
  }

  .page-modules {
    .v-layout__row {
      display: block;
      cursor: default !important;
      margin-top: 10px;
      padding-top: 20px;
    }
  }
}
</style>

<template>
  <div id="homepage">
    <PageHeader :background="banner" />
    <PageBanner :background="banner" />
    <div class="v-layout">
      <MenuBar :menu="menu" />
      <div class="ssr-modules">
        <Carousel :list="carousel" />
        <RollRecommended />
      </div>
      <ClientOnly>
        <div class="page-modules">
          <a
            v-for="row in pageMenu"
            :id="row.type"
            :key="row.type"
            :class="{ 'anchor-module': row.main }"
            class="v-layout__row"
          >
            <component
              :is="row.left.type"
              :slug="row.left.slug"
              :type="row.type"
              :name="row.left.name"
              class="v-layout__left"
            />
            <component
              :is="row.right.type"
              :slug="row.right.slug"
              :type="row.type"
              :name="row.right.name"
              class="v-layout__right"
            />
          </a>
        </div>
      </ClientOnly>
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
import RecommendedSwipe from '~/components-new/RecommendedSwipe'
import RankDaily from '~/components-new/RankDaily'
import channel from '~/config/channel'
import { getCarousel, getMenuList } from '~/api/homepageApi'

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
    MainFlowTab,
    RecommendedSwipe,
    RankDaily
  },
  props: {},
  asyncData({ app, store, error }) {
    return Promise.all([
      getCarousel(app),
      getMenuList(app),
      store.dispatch('flow/initData', {
        func: 'getHotFlowData',
        type: 'page',
        query: {
          day: 1,
          $axios: app.$axios
        }
      })
    ])
      .then((data) => {
        return {
          carousel: data[0],
          menu: data[1]
        }
      })
      .catch(error)
  },
  data() {
    return {
      carousel: [],
      menu: [],
      banner: 'https://m1.calibur.tv/default-banner'
    }
  },
  computed: {
    pageMenu() {
      return channel
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

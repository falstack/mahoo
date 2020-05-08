<style lang="scss">
#homepage {
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
      <MenuBar />
      <div class="v-layout__row">
        <Carousel />
        <RollRecommended />
      </div>
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
            :name="row.name"
            class="v-layout__left"
          />
          <component
            :is="row.right.type"
            :slug="row.right.slug"
            :type="row.type"
            :name="row.name"
            class="v-layout__right"
          />
        </a>
      </div>
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
    RecommendedSwipe
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
            slug: 1,
            type: 'MainFlowTab'
          },
          right: {
            slug: 1,
            type: 'RankSwitcher'
          }
        },
        {
          type: 'bangumi',
          main: true,
          name: '番剧',
          left: {
            slug: 2,
            type: 'BangumiSwitcher'
          },
          right: {
            slug: 2,
            type: 'RecommendedSwipe'
          }
        },
        {
          type: 'bangumi-about',
          main: false,
          name: '番剧动态',
          left: {
            slug: 6,
            type: 'MainFlowTab'
          },
          right: {
            slug: 6,
            type: 'RankDaily'
          }
        },
        {
          type: 'manga',
          main: true,
          name: '漫画',
          left: {
            slug: 3,
            type: 'MainFlowTab'
          },
          right: {
            slug: 3,
            type: 'RankSwitcher'
          }
        },
        {
          type: 'game',
          main: true,
          name: '游戏',
          left: {
            slug: 2,
            type: 'MainFlowTab'
          },
          right: {
            slug: 2,
            type: 'RankSwitcher'
          }
        },
        {
          type: 'novel',
          main: true,
          name: '帖子',
          left: {
            slug: 4,
            type: 'MainFlowTab'
          },
          right: {
            slug: 4,
            type: 'RankDaily'
          }
        },
        {
          type: 'music',
          main: true,
          name: '音乐',
          left: {
            slug: 5,
            type: 'MainFlowTab'
          },
          right: {
            slug: 5,
            type: 'RankSwitcher'
          }
        },
        {
          type: 'dance',
          main: true,
          name: '舞蹈',
          left: {
            slug: 6,
            type: 'MainFlowTab'
          },
          right: {
            slug: 6,
            type: 'RankSwitcher'
          }
        }
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {
    if (process.env.NODE_ENV !== 'development') {
      alert('这个版本的 calibur 是一个娱乐向作品，仅供代码学习交流，请勿用作商用')
    }
  },
  methods: {}
}
</script>

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
      <MenuBar />
      <div class="ssr-modules">
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
          left: {
            slug: 1,
            name: '动画',
            type: 'MainFlowTab'
          },
          right: {
            slug: 1,
            name: '特别推荐',
            type: 'RecommendedSwipe'
          }
        },
        {
          type: 'bangumi',
          main: true,
          left: {
            slug: 2,
            name: '番剧',
            type: 'BangumiSwitcher'
          },
          right: {
            slug: 2,
            type: 'RankSwitcher'
          }
        },
        {
          type: 'bangumi-about',
          main: false,
          left: {
            slug: 6,
            name: '番剧动态',
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
          left: {
            slug: 3,
            name: '漫画',
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
          left: {
            slug: 2,
            name: '游戏',
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
          left: {
            slug: 4,
            name: '帖子',
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
          left: {
            slug: 5,
            name: '音乐',
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
          left: {
            slug: 6,
            name: '舞蹈',
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

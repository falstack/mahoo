<style lang="scss">
#homepage {
  min-height: 100vh;

  .v-layout__row {
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
        <Carousel class="fl" />
        <RollRecommended class="fr" />
      </div>
      <div v-for="row in pageMenu" :key="row.name" class="v-layout__row">
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
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components-new/PageHeader'
import PageBanner from '~/components-new/PageBanner'
import MenuBar from '~/components-new/MenuBar'
import Carousel from '~/components-new/Carousel'
import RollRecommended from '~/components-new/RollRecommended'
import BangumiSwitcher from '~/components-new/BangumiSwitcher'
import RankSwitcher from '~/components-new/RankSwitcher'

export default {
  name: 'Homepage',
  components: {
    PageHeader,
    PageBanner,
    MenuBar,
    Carousel,
    RollRecommended,
    BangumiSwitcher,
    RankSwitcher
  },
  props: {},
  data() {
    return {
      banner: 'http://pic.rmb.bdstatic.com/ae5eaf5df7b74c634904799cbe4164b3.jpeg'
    }
  },
  computed: {
    pageMenu() {
      return [
        {
          name: 'douga',
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
          name: 'bangumi',
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
          name: 'bangumi',
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

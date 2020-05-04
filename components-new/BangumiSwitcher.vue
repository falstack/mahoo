<style lang="scss">
#bangumi-switcher {
  padding-right: 20px;

  .v-switcher {
    &-content {
      height: 424px;
      padding-top: 26px;

      &-panel {
        height: 100%;
      }

      .flow-content {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
      }
    }

    &-header {
      &-wrap {
        overflow: visible;
      }

      &-item {
        width: 100%;
        font-size: 18px;
        line-height: 39px;
        height: 39px;
        color: #000;
        transition: 0.2s;
        border-bottom: 1px solid #e5e9ef;
        cursor: pointer;

        &:hover {
          color: $color-main;
        }

        &.is-active {
          color: $color-main;
          border-bottom-color: $color-main;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            left: 50%;
            margin-left: -3px;
            bottom: 0;
            width: 0;
            height: 0;
            border-bottom: 3px solid $color-main;
            border-top: 0;
            border-left: 3px dashed transparent;
            border-right: 3px dashed transparent;
          }
        }
      }
    }
  }

  .flow-loader {
    display: none;
  }

  .header-before {
    margin-top: 8px;

    i {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      float: left;
      margin-top: -10px;
      background-image: url(~assets/img/icons.png);
      background-position: -141px -140px;
    }

    a {
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
      margin-right: 20px;
      float: left;
      color: #222;
      transition: color 0.2s;
      text-decoration: none;

      &:hover {
        color: $color-main;
      }
    }
  }

  .header-after {
    display: block;
    border: 1px solid #f25d8e;
    width: 104px;
    height: 36px;
    line-height: 35px;
    text-align: center;
    color: #f25d8e;
    font-size: 14px;
    border-radius: 4px;
    transition: 0.1s;
    text-decoration: none;
    margin-left: 30px;

    &:hover {
      color: #fff;
      background-color: #f25d8e;

      i {
        background-position: -541px -218px;
      }
    }

    i {
      display: inline-block;
      background-position: -478px -281px;
      width: 6px;
      height: 12px;
      margin-left: 5px;
      background-image: url(~assets/img/icons.png);
    }
  }
}
</style>

<template>
  <div id="bangumi-switcher" v-lazyload="handleLazy">
    <VSwitcher
      :default-index="defaultIndex"
      :headers="headers"
      :header-height="36"
      align="around"
      @change="handleTabSwitch"
    >
      <div
        slot="header-before"
        class="header-before"
      >
        <i />
        <a href="javascript:;">番剧</a>
      </div>
      <a
        slot="header-after"
        class="header-after"
        href="javascript:;"
      >
        <span>新番时间表</span>
        <i />
      </a>
      <template v-for="(item, index) in list" :slot="index">
        <div v-if="list[index] && list[index].length" class="flow-content" :key="index">
          {{ list[index] }}
        </div>
        <div v-else :key="index" class="state-content">
          <template v-if="!resource || resource.loading">
            loading...
          </template>
          <template v-else-if="resource.error">
            error...
          </template>
          <template v-else>
            no-content...
          </template>
        </div>
      </template>
    </VSwitcher>
    <FlowLoader
      ref="loader"
      func="getBangumiRelease"
      type="page"
      :query="{ $axios }"
      :auto="0"
    />
  </div>
</template>

<script>
export default {
  name: 'BangumiSwitcher',
  computed: {
    defaultIndex() {
      const week = new Date().getDay()
      return (week || 7) - 1
    },
    resource() {
      return this.$store.getters['flow/getFlow']({
        func: 'getBangumiRelease',
        type: 'page'
      })
    },
    list() {
      return this.resource ? this.resource.result : [[], [], [], [], [], [], []]
    },
    headers() {
      return [
        {
          text: '一',
          'text-active': '周一'
        },
        {
          text: '二',
          'text-active': '周二'
        },
        {
          text: '三',
          'text-active': '周三'
        },
        {
          text: '四',
          'text-active': '周四'
        },
        {
          text: '五',
          'text-active': '周五'
        },
        {
          text: '六',
          'text-active': '周六'
        },
        {
          text: '日',
          'text-active': '周日'
        }
      ]
    }
  },
  methods: {
    handleLazy() {
      this.$refs.loader.initData()
    },
    handleTabSwitch() {
      if (this.resource && this.resource.error) {
        this.$refs.loader.initData()
      }
    }
  }
}
</script>

<style lang="scss">
.main-flow-tab {
  padding-right: 20px;

  .v-switcher {
    &-content {
      height: 355px;
      padding-top: 15px;
    }

    &-header {
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      &-item {
        position: relative;
        font-size: 12px;
        padding: 1px 0 2px;
        transition: 0.2s;
        transition-property: border, color;
        border-bottom: 1px solid transparent;
        line-height: 20px !important;
        height: 24px !important;
        cursor: pointer;
        color: #000;

        &:hover {
          color: $color-main;
        }

        &:not(:first-child) {
          margin-left: 12px;
        }

        &.is-active {
          border-bottom-color: $color-main;
          color: $color-main;

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

      &-before {
        i {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin-right: 10px;
          float: left;
          margin-top: -10px;
          background-image: url(~assets/img/icons.png);
        }

        span {
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

      &-after {
        .more {
          display: block;
          width: 52px;
          height: 22px;
          background-color: #fff;
          border: 1px solid #ccd0d7;
          color: #555;
          border-radius: 4px;
          text-align: center;
          margin: 0 0 0 10px;
          transition: all 0.2s;
          font-size: 12px;

          i {
            font-weight: bold;
            margin-top: 2px;
            margin-left: -4px;
            margin-right: -4px;
            transition: margin-left 0.2s;
            color: #999;
          }

          &:hover {
            background-color: #ccd0d7;

            i {
              margin-left: -1px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="main-flow-tab">
    <VSwitcher :headers="headers" :header-height="45" @change="switchContent">
      <template slot="header-before">
        <i :style="backgroundPosition" />
        <span v-text="name" />
      </template>
      <template slot="header-after">
        <a class="more" href="javascript:;">
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </a>
      </template>
      <template slot="0">
        flow loader 0
      </template>
      <template slot="1">
        flow loader 1
      </template>
    </VSwitcher>
  </div>
</template>

<script>
export default {
  name: 'MainFlowTab',
  components: {},
  props: {
    type: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {}
  },
  computed: {
    headers() {
      return ['有新动态', '最新投稿']
    },
    backgroundPosition() {
      let result = ''
      switch (this.type) {
        case 'douga':
          result = '-141px -908px'
      }
      return {
        backgroundPosition: result
      }
    }
  },
  methods: {
    switchContent(index) {

    }
  }
}
</script>

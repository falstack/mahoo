<style lang="scss">
$header-link-padding: 7px;

#page-header {
  position: relative;
  height: $page-header-hgt;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
  z-index: 99;

  .mask-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    .mask-bg {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      height: $page-banner-hgt;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      @include filter-blur();
    }
  }

  .mask-shim {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    height: $page-header-hgt;
    z-index: 1;
    overflow: hidden;
    background-color: #fff;
  }

  .text-wrap {
    position: relative;
    z-index: 2;

    .iconfont {
      color: $color-main;
      display: block;
      float: left;
      margin-right: 3px;
    }
  }

  .nav-link {
    display: block;
    padding: 0 $header-link-padding;
    height: $page-header-hgt;
    line-height: $page-header-hgt;
    color: #222;
    white-space: nowrap;
  }

  .v-layout__left {
    .home-link {
      margin-left: -$header-link-padding;
    }
  }

  .v-layout__right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: $page-header-hgt;

    .user-panel {
      position: relative;
      height: $page-header-hgt;
      padding: 4px 7px 0;

      &:hover {
        background-color: transparent;

        .user-popover {
          opacity: 1;
          visibility: visible;
        }

        .avatar {
          transform: scale(2) translateY(10px);
        }
      }

      .avatar {
        display: block;
        position: relative;
        transition: 0.3s;
        z-index: 1;

        .img {
          border: 1px solid $color-gray-1;
        }
      }

      .user-popover {
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%);
        background-color: #fff;
        width: 260px;
        height: 328px;
        padding: 25px 12px 12px;
        box-shadow: 0 2px 4px rgba(0,0,0,.16);
        border-radius: 0 0 4px 4px;
        transition: 0.3s;

        &:hover {
          opacity: 1;
          visibility: visible;
        }

        .nickname {
          margin: 10px 0;
          text-align: center;
          font-size: 16px;
          color: #666;
        }

        .field {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
          margin-left: -5px;
          margin-right: -5px;
          border-radius: 5px;

          &:hover {
            background-color: #f4f5f7;
          }

          .label {
            margin-left: 5px;
            cursor: default;
            color: $color-text-2;

            .iconfont {
              font-size: 16px;
              color: $color-icon-2;
            }
          }
        }

        .sign-out {
          display: block;
          width: 100%;
          height: 30px;
          line-height: 30px;
          background-color: #f4f5f7;
          text-align: center;
          font-size: 12px;
          border-radius: 5px;
          margin-top: 10px;

          &:hover {
            color: $color-main;
          }
        }
      }
    }

    .create-btn {
      display: block;
      width: 68px;
      height: 46px;
      line-height: $page-header-hgt;
      text-align: center;
      font-size: 14px;
      color: #fff;
      background-color: #f45a8d;
      border-radius: 0 0 6px 6px;
      padding-bottom: 4px;
      margin-left: 5px;

      &:hover {
        background-color: #fb7299;
      }
    }
  }

  &.with-bg {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;

    .mask-shim {
      background-color: hsla(0,0%,100%,.4);
    }

    .text-wrap {
      .nav-link:hover {
        background-color: hsla(0,0%,100%,.3);
      }
    }
  }
}
</style>

<template>
  <nav id="page-header" :class="{ 'with-bg': hasBg }">
    <div v-if="hasBg" class="mask-wrap">
      <div class="mask-bg" :style="{ backgroundImage: `url(${background})` }" />
    </div>
    <div class="mask-shim" />
    <div class="text-wrap v-layout">
      <ul class="v-layout__left">
        <li>
          <NLink class="nav-link home-link" to="/">
            <i class="iconfont bili-bilibili-tv" />
            <span>主站</span>
          </NLink>
        </li>
        <li>
          <NLink class="nav-link" to="/">
            <span>游戏中心</span>
          </NLink>
        </li>
        <li>
          <NLink class="nav-link" to="/">
            <span>直播</span>
          </NLink>
        </li>
        <li>
          <NLink class="nav-link" to="/">
            <span>会员购</span>
          </NLink>
        </li>
        <li>
          <NLink class="nav-link" to="/">
            <span>漫画</span>
          </NLink>
        </li>
        <li>
          <NLink class="nav-link" to="/">
            <span>赛事</span>
          </NLink>
        </li>
        <li>
          <NLink class="nav-link" to="/">
            <i class="iconfont bili-Navbar_mobile" />
            <span>下载APP</span>
          </NLink>
        </li>
      </ul>
      <ul class="v-layout__right">
        <template v-if="isAuth">
          <li class="user-panel icon-link">
            <NLink :to="$alias.user(user.slug)" class="avatar">
              <VImg
                :src="user.avatar"
                def="default-avatar"
                width="33"
                height="33"
                radius="50%"
                :alt="user.nickname"
              />
            </NLink>
            <div class="user-popover">
              <p class="nickname oneline" v-html="user.nickname" />
              <NLink :to="$alias.user(user.slug, 'setting')">
                <div class="field">
                  <div class="label">
                    <i class="iconfont ic-setup_fill" />
                    <span>设置</span>
                  </div>
                </div>
              </NLink>
              <button class="sign-out" @click="handleLogout">
                退出
              </button>
            </div>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>大会员</span>
            </NLink>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>消息</span>
            </NLink>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>动态</span>
            </NLink>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>稍后在看</span>
            </NLink>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>收藏</span>
            </NLink>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>历史</span>
            </NLink>
          </li>
          <li>
            <NLink class="nav-link" to="/">
              <span>创作中心</span>
            </NLink>
          </li>
        </template>
        <li v-else>
          <Button type="text" @click="handleSignIn">
            登录
          </Button>
        </li>
        <li>
          <Button class="create-btn">
            投稿
          </Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageHeader',
  components: {},
  props: {
    background: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    hasBg() {
      return !!this.background
    },
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSignIn() {
      this.$channel.$emit('sign-in')
    },
    handleLogout() {

    }
  }
}
</script>

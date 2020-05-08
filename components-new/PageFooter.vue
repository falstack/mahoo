<style lang="scss">
#page-footer {
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
  position: relative;
  background-color: #f6f9fa;
  padding: 30px;

  .links-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .links-item {
      flex: 2;
      padding-right: 40px;
      margin-right: 40px;
      border-right: 1px solid #eee;

      p {
        font-size: 16px;
        color: #999;
        display: block;
        height: 20px;
        margin-bottom: 20px;
      }

      ul {
        height: 96px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }

      a {
        display: inline-block;
        margin-bottom: 10px;
        color: #212121;
        transition: color 0.3s;
        font-size: 14px;

        &:hover {
          color: $color-main;
        }
      }
    }

    .icons-wrap {
      flex: 1;
    }
  }

  .icons-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .icons-item {
      position: relative;
      width: 70px;
      height: 75px;
      text-align: center;

      &:hover .qr {
        display: block;
      }
    }

    .qr {
      position: absolute;
      left: 50%;
      bottom: 110%;
      width: 117px;
      height: 117px;
      border: 1px solid #eee;
      transform: translateX(-50%);
      padding: 10px;
      background-color: #fff;
      display: none;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .iconfont {
      font-size: 30px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      color: #fff;
      border-radius: 50%;
      margin: 0 auto;
    }

    .ic-qq {
      background-color: $color-blue;
    }

    .ic-v-chat {
      background-color: $color-green;
    }

    .name {
      margin-top: 10px;
      color: #212121;
    }
  }
}
</style>

<template>
  <footer id="page-footer">
    <div class="v-layout">
      <div class="links-wrap">
        <div class="links-item">
          <p>calibur</p>
          <ul>
            <a target="_blank" href="//www.bilibili.com/blackboard/aboutUs.html">关于我们</a>
            <a target="_blank" href="//www.bilibili.com/blackboard/contact.html">联系我们</a>
            <a target="_blank" href="https://www.bilibili.com/protocal/licence.html">用户协议</a>
            <a target="_blank" href="//www.bilibili.com/blackboard/join.html">加入我们</a>
            <a target="_blank" href="//www.bilibili.com/blackboard/friends-links.html">友情链接</a>
            <a target="_blank" href="https://www.bilibili.com/blackboard/privacy-pc.html">隐私政策</a>
            <a target="_blank" href="//account.bilibili.com/account/official/home">bilibili认证</a>
            <a target="_blank" href="http://ir.bilibili.com">Investor Relations</a>
          </ul>
        </div>
        <div class="links-item">
          <p>传送门</p>
          <ul>
            <a target="_blank" href="//www.bilibili.com/blackboard/help.html">帮助中心</a>
            <a target="_blank" href="//www.bilibili.com/video/BV1Xx411c7cH/">高级弹幕</a>
            <a target="_blank" href="//www.bilibili.com/blackboard/topic_list.html">活动专题页</a>
            <a target="_blank" href="//www.bilibili.com/v/copyright/intro/">侵权申诉</a>
            <a target="_blank" href="//www.bilibili.com/blackboard/x/act_list/">活动中心</a>
            <a target="_blank" href="https://t.bilibili.com/topic/name/%E7%94%A8%E6%88%B7%E5%8F%8D%E9%A6%88%E8%AE%BA%E5%9D%9B/feed">用户反馈论坛</a>
            <a target="_blank" href="//space.bilibili.com/6823116#/album">壁纸站</a>
            <a target="_blank" href="//www.bilibili.com/basc">专车号服务中心</a>
            <a target="_blank" href="//www.bilibili.com/blackboard/activity-S1jfy69Jz.html">名人堂</a>
          </ul>
        </div>
        <ul class="icons-wrap">
          <li class="icons-item">
            <i class="iconfont ic-qq" />
            <p class="name">QQ</p>
            <div class="qr">
              <img src="https://m1.calibur.tv/qq_mini_app.png" alt="">
            </div>
          </li>
          <li class="icons-item">
            <i class="iconfont ic-v-chat" />
            <p class="name">微信</p>
            <div class="qr">
              <img src="https://m1.calibur.tv/weixin_mini_app.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

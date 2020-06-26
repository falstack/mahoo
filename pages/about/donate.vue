<style lang="scss">
#about-donate {
  .qr_box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 20px;

    img {
      object-fit: contain;
      vertical-align: top;
    }

    p {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
    }
  }

  .alipay {
    img {
      width: 200px;
      height: 200px;
    }

    p {
      top: 200px;
    }
  }

  .wechat {
    img {
      width: 185px;
      height: 185px;
    }

    p {
      top: 191px;
    }
  }
}
</style>

<template>
  <div id="about-donate">
    <PageHeader />
    <section class="v-layout">
      <br>
      <h1>捐赠</h1>
      <br>
      <p>其实我也不是想要你捐赠，只是最近一直咕咕咕，虽然还是想写 calibur 的</p>
      <p>也知道自己该写点什么，只是已经没有了曾经的勇气，拾不起未来，放不下过去。</p>
      <br>
      <p>今天也是，心里清楚我该做点什么，但又很犹豫，为了完成今天的任务，就写这么一个不重要的页面吧</p>
      <p>人活在世上，重要的就是传承，基因的传承也好，精神的传承也是。然而一个自我否定的人，总是踌躇满志而又徘徊惘然的。</p>
      <p>今天就到这里吧，三言两语道不尽，三言两语又已经竭尽，希望大家的人生都能够不枉一生。</p>
      <br>
      <p>PS：我不缺钱，只是随便写几行代码消解自己的负罪感...</p>
      <br>
      <div class="qr_box alipay">
        <img src="https://file.calibur.tv/alipay_qr_code.JPG" alt="">
        <p>支付宝</p>
      </div>
      <div class="qr_box wechat">
        <img src="https://file.calibur.tv/wechat_pay_qr_code.JPG" alt="">
        <p>微信支付</p>
      </div>
    </section>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components-new/PageHeader'
import PageFooter from '~/components-new/PageFooter'

export default {
  name: 'AboutDonate',
  components: {
    PageHeader,
    PageFooter
  },
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

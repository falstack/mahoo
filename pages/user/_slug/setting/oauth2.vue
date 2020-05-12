<style lang="scss">
#user-auth-setting {
  .providers {
    margin-top: 20px;

    li {
      display: inline-block;
      margin-right: 12px;
    }

    i {
      font-size: 24px;
      color: $color-gray-1;
      cursor: pointer;
    }

    .ic-qq.is-bind,
    .ic-qq:hover {
      color: $color-blue;
    }

    .ic-v-chat.is-bind,
    .ic-v-chat:hover {
      color: $color-green;
    }

    .ic-phone.is-bind,
    .ic-phone:hover {
      color: $color-black;
    }

    .ic-bilibili {
      color: $color-icon-3;
      font-size: 26px;

      &.is-bind,
      &:hover {
        color: #fb7299;
      }
    }
  }
}

.bind-bili-dialog {
  p {
    line-height: 30px;
  }

  a {
    color: $color-main;
  }

  span {
    font-weight: bold;
  }

  i {
    font-style: normal;
  }

  input {
    width: 300px;
    margin: 10px 15px;
  }
}
</style>

<template>
  <div id="user-auth-setting">
    <ul v-if="isAuth" class="providers">
      <li @click="bindUserQQ">
        <i :class="{ 'is-bind': user.providers.bind_qq }" class="iconfont ic-qq" />
      </li>
      <li @click="bindUserWechat">
        <i :class="{ 'is-bind': user.providers.bind_wechat }" class="iconfont ic-v-chat" />
      </li>
      <li @click="bindUserPhone">
        <i :class="{ 'is-bind': user.providers.bind_phone }" class="iconfont ic-phone" />
      </li>
      <li @click="bindUserBilibili">
        <i :class="{ 'is-bind': user.providers.bind_bilibili }" class="iconfont ic-bilibili" />
      </li>
    </ul>
    <VDialog v-model="showInfoForm" :loading="loadingBindPhone" width="400px" title="填写信息" @submit="submitBindPhone">
      <ElInput v-model.trim="authCode" type="number" placeholder="短信验证码" auto-complete="off" />
      <br>
      <br>
      <ElInput v-model.trim="password" type="text" placeholder="密码（6-16个字符组成，区分大小写）" auto-complete="off" />
    </VDialog>
    <VDialog v-model="showBiliForm" :loading="loadingBindBilibili" title="绑定bilibili账号" @submit="submitBindBilibili">
      <div class="bind-bili-dialog">
        <p><i>1. 访问 </i><a href="https://space.bilibili.com/279662469/" target="_blank">calibur官方账号</a></p>
        <p>2. 关注该账号后，点击「发消息」按钮</p>
        <p><i>3. 在新打开的聊天窗页面，发送：</i><span>我要认证calibur</span></p>
        <p>4. 把你在 bilibili 的用户 uid 填入下面的输入框中（在个人空间页面的右下角可以看到）</p>
        <p>
          <ElInput v-model.trim="biliUid" type="text" placeholder="你自己的B站账号uid" auto-complete="off" />
        </p>
        <p>5. 点击「确定」按钮，等待验证完成</p>
      </div>
    </VDialog>
  </div>
</template>

<script>
import { sendMessage, bindPhone } from '~/api/userApi'
import parseToken from '~/assets/js/parseToken'
import VDialog from '~/components/common/Dialog'

export default {
  name: 'UserAuthSetting',
  components: {
    VDialog
  },
  data() {
    return {
      phone: '',
      password: '',
      authCode: '',
      timeout: 0,
      showInfoForm: false,
      showBiliForm: false,
      loadingBindPhone: false,
      biliUid: '',
      loadingBindBilibili: false
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    bindUserQQ() {
      if (this.user.providers.bind_qq) {
        return
      }
      window.location.href = `https://api.calibur.tv/callback/oauth2/qq?from=bind&token=${parseToken()}&redirect=${encodeURIComponent(window.location.href)}`
    },
    bindUserWechat() {
      if (this.user.providers.bind_wechat) {
        return
      }
      window.location.href = `https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=${parseToken()}&redirect=${encodeURIComponent(window.location.href)}`
    },
    bindUserPhone() {
      if (this.user.providers.bind_phone) {
        return
      }
      if (this.timeout) {
        this.showInfoForm = true
        return
      }
      this.$prompt('请输入要绑定的手机号（11位）', '绑定手机', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^(0|86|17951)?(1)[0-9]{10}$/,
        inputErrorMessage: '请输入正确的手机号码'
      })
        .then(async({ value }) => {
          this.phone = value
          try {
            await sendMessage(this, {
              type: 'bind_phone',
              phone_number: value
            })
            this.showInfoForm = true
          } catch (err) {
            this.$toast.error(err.message)
          } finally {
            this.timeout = 60
            const timer = setInterval(() => {
              if (!--this.timeout) {
                clearInterval(timer)
              }
            }, 1000)
          }
        })
        .catch(() => {})
    },
    bindUserBilibili() {
      if (this.user.providers.bind_bilibili) {
        return
      }
      this.showBiliForm = true
    },
    submitBindBilibili() {
      if (!this.biliUid || this.loadingBindBilibili) {
        this.$toast.info('请先填写uid')
        return
      }
      this.loadingBindBilibili = true
      this.$toast.success('验证中，请稍候...')
      this.$axios.$post('v1/door/oauth_channel', {
        channel: 'bilibili',
        id: this.biliUid
      })
        .then((result) => {
          if (!result) {
            this.$toast.info('认证失败，请填写正确的信息')
            this.loadingBindBilibili = false
            return
          }
          this.$toast.success('认证成功！')
            .then(() => {
              window.location.reload()
            })
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loadingBindBilibili = false
        })
    },
    async submitBindPhone() {
      if (this.user.providers.bind_phone) {
        return
      }
      if (this.authCode.length !== 6) {
        return this.$toast.warn('请输入正确的短信验证码')
      }
      if (this.password.length < 6) {
        return this.$toast.warn('密码不能小于6位')
      }
      if (this.password.length > 16) {
        return this.$toast.warn('密码不能大于16位')
      }
      if (this.loadingBindPhone) {
        return
      }
      this.loadingBindPhone = true
      try {
        await bindPhone(this, {
          slug: this.user.slug,
          phone: this.phone,
          password: this.password,
          authCode: this.authCode
        })
        this.$toast.success('手机号绑定成功').then(() => {
          this.showInfoForm = false
          window.location.reload()
        })
      } catch (err) {
        this.$toast.error(err.message)
      } finally {
        this.loadingBindPhone = false
      }
    }
  }
}
</script>

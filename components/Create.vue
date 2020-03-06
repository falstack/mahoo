<style lang="scss">
.create {
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 5px;
  }
}
</style>

<template>
  <div class="create">
    <VButton plain @click="handleSignIn">
      {{ isAuth ? '退出' : '登录' }}
    </VButton>
    <NLink target="_blank" to="/write">
      <VButton>投稿</VButton>
    </NLink>
  </div>
</template>

<script>
import { VButton } from '@calibur/sakura'
import { logout } from '~/api/userApi'

export default {
  name: 'Create',
  components: {
    VButton
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    }
  },
  methods: {
    handleSignIn() {
      if (this.isAuth) {
        logout(this)
        this.$cookie.remove('JWT-TOKEN')
        this.$channel.socketDisconnect()
        window.location = '/'
        return
      }
      this.$channel.$emit('sign-in')
    }
  }
}
</script>

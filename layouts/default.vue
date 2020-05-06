<template>
  <div id="layout-web">
    <nuxt />
    <SignDialog />
  </div>
</template>

<script>
import SignDialog from '~/components/SignDialog'
import useSignMixin from '~/mixins/useSign'
import socketMixin from '~/mixins/socket'

export default {
  // eslint-disable-next-line
  name: 'default',
  components: {
    SignDialog
  },
  mixins: [useSignMixin, socketMixin]
}
</script>

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
  name: 'Layout',
  components: {
    SignDialog
  },
  mixins: [useSignMixin, socketMixin]
}
</script>

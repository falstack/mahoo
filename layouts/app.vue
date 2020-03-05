<template>
  <nuxt />
</template>

<script>
import useSignMixin from '~/mixins/useSign'

export default {
  name: 'AppLayout',
  mixins: [useSignMixin],
  head() {
    return {
      titleTemplate: val => val
    }
  }
}
</script>

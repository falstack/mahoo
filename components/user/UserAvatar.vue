<style lang="scss">
.user-avatar {
  display: block;

  .v-img {
    box-shadow: 0 0 0 1px #edf2f9;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>

<template>
  <NLink :style="{ width: `${size}px`, height: `${size}px` }" :to="$alias.user(user.slug)" target="_blank" class="user-avatar">
    <VImg radius="50%" :src="avatar || user.avatar" :width="size" :height="size" :alt="user.nickname" />
  </NLink>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    user: {
      type: Object,
      required: true
    },
    avatar: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

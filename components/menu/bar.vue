<template>
  <div class="menu-bar__wrap">
    <div v-show="show" class="menu-bar__mask" @click="closeMenu" />
    <transition-group class="menu-bar" name="menu" tag="div" :style="style">
      <div
        v-for="item in items"
        v-show="show"
        :key="item"
        class="menu-bar__item"
        @click.stop
        v-text="item"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
    show: {
      required: true,
      type: Boolean
    },
    x: {
      required: true,
      type: Number
    },
    y: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      items: ['还', '在', '研', '发', '中']
    }
  },
  computed: {
    style() {
      return {
        transform: `translate3d(${this.x}px, ${this.y}px, 0)`
      }
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.menu-bar {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  &__wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    user-select: none;
    pointer-events: none;
    background-color: transparent;
  }

  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  &__item {
    position: relative;
    top: 0;
    transition-property: opacity, top;
    transition-duration: 0.4s;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ffff00;
    margin-bottom: 10px;
    pointer-events: auto;
  }

  .menu-enter,
  .menu-leave-to {
    opacity: 0;
    top: -40px;
    pointer-events: none;
  }
}
</style>

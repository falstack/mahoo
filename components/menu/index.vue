<template>
  <MenuBar :show="openMenu" :x="beginX" :y="beginY" @close="handleClose" />
</template>

<script>
import { isTouchDevice } from '../../assets/js/utils'
import MenuBar from './bar'

export default {
  name: 'FloatMenu',
  components: {
    MenuBar
  },
  data() {
    return {
      leftDown: false,
      rightDown: false,
      noTouch: true,
      beginX: -1,
      beginY: -1,
      openMenu: false
    }
  },
  beforeMount() {
    this.blockRightClick()
    isTouchDevice() ? this.bindTouch() : this.bindPC()
  },
  methods: {
    blockRightClick() {
      document.addEventListener('contextmenu', event => event.preventDefault())
    },
    bindTouch() {
      document.addEventListener('touchstart', (event) => {
        if (this.openMenu) {
          return
        }
        if (event.touches.length > 1) {
          this.leftDown = true
          this.rightDown = true
        }
      })
      document.addEventListener('touchend', () => {
        if (this.openMenu) {
          return
        }
        this.leftDown = false
        this.rightDown = false
        this.noTouch = true
      })
      document.addEventListener('touchmove', (event) => {
        if (!this.rightDown || !this.leftDown || this.openMenu) {
          return
        }
        if (this.noTouch) {
          this.noTouch = false
          this.beginX = event.touches[0].clientX
          this.beginY = event.touches[0].clientY
        } else {
          const deltaX = this.beginX - event.touches[0].clientX
          const deltaY = this.beginY - event.touches[0].clientY
          if (deltaY < -100 && Math.abs(deltaX) < Math.abs(deltaY)) {
            this.openMenu = true
          }
        }
      })
    },
    bindPC() {
      document.addEventListener('mousedown', (event) => {
        if (this.openMenu) {
          return
        }
        if (event.button === 0 && !this.rightDown) {
          this.leftDown = true
        }
        if (event.button === 2 && this.leftDown) {
          this.rightDown = true
        }
      })
      document.addEventListener('mouseup', (event) => {
        if (this.openMenu) {
          return
        }
        if (event.button === 0) {
          this.leftDown = false
        }
        if (event.button === 2) {
          this.rightDown = false
        }
        this.noTouch = true
      })
      document.addEventListener('mousemove', (event) => {
        if (!this.rightDown || !this.leftDown || this.openMenu) {
          return
        }
        if (this.noTouch) {
          this.noTouch = false
          this.beginX = event.clientX
          this.beginY = event.clientY
        } else {
          const deltaX = this.beginX - event.clientX
          const deltaY = this.beginY - event.clientY
          if (deltaY < -100 && Math.abs(deltaX) < Math.abs(deltaY)) {
            this.openMenu = true
          }
        }
      })
    },
    handleClose() {
      this.openMenu = false
      this.leftDown = false
      this.rightDown = false
      this.noTouch = true
    }
  }
}
</script>
